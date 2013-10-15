///////////////////////////////////////////////////////////////////
//TODOS                                                          //
///////////////////////////////////////////////////////////////////
//1. "Smart" buffer next and prev images to an off screen canvas.//
///////////////////////////////////////////////////////////////////
//2. Iterate over multiple images per region                     //
///////////////////////////////////////////////////////////////////
//3. handle images as dzi if they have the data format           //
///////////////////////////////////////////////////////////////////
//4. Integrate into a backend that prepares and serves the data  //
///////////////////////////////////////////////////////////////////

$(document).ready(function() {
	////////////////////
    //Initial Settings//
    ////////////////////
    var regions = {};
    var z = 1;
    var x = (canvas.width/2)-(canvas.height/2);
    var y = 0;
    
    
    //////////////////////
    //ajax & init draw()//
    //////////////////////
    
    //we are currently getting the data with ajax but we should chekc into websockets for
    //a potential performance boost.
    var ajax = $.ajax({
        url: "json/data.json",
        dataType: "json"
    });

    ajax.done(function(data) {
        regions = data.regions;
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        
        canvas.width = $(window).width()/2;
        canvas.height = $(window).height()/2;
        
        numberOfRegions = regions.length;
        numCols = Math.ceil(Math.sqrt(numberOfRegions));
        numRows = numCols;
        if(numberOfRegions % numCols != 0) {
            numRows--;
        }
        drawStuff(x, y, z);
    });

    

    //////////////////////
    //main draw function//
    //////////////////////
    function drawStuff(x, y, z) {
    	canvas.width = canvas.width;
        var	w = (canvas.height/(numCols))*z;
    	var	h = w;
    	
    	var counter = 0;
    	var offScreen = [];
        var onScreen = [];
         
        $(regions).each(function() {
    		
    		if((counter % numCols === 0)&&(counter != 0)) {
    			counter = 0;
    			x = (x-w*numCols);
    			y += h;
    		}
			counter++;
			
            var zoomLevel = (z>10 ? 10 : Math.floor(z))||(z<1 ? 1 : Math.floor(z));
            var cell = this[zoomLevel-1];

            var r = cell.color.r;
            var g = cell.color.g;
            var b = cell.color.b;
            
            //here we need to iterate over several images instead of just one
            //we also need to check each image to see if they are a stand alone image or a dzi,
            //and handle them accordingly

            //it will also be important to be pulling these images from buffer of screen canvas 
            //instead of writing them straight to the screen we should buffer one zoom level up and one zoom level down as well as all offscreen images.
            //we might look into webworkers for soem of this to speed up the process

            
            var imgs = cell.img;
            

            var text = cell.data;

            
            if(isOnScreen(x,y)) {
                
                ctx.fillStyle = "rgba("+r+", "+g+", "+b+", 1)";
                ctx.fillRect (x, y, w, h);
                
                for(i=0;i<imgs.length;i++) {
                    //calculate how many images can fit in the region and then shift the x and y as they are written to the canvas.
                    var img =  new Image();
                    img.src =  imgs[i];
                    ctx.drawImage(img, x+((w/2)-((w/2)/2)), y+((w/2)-((w/2)/2)), w/2, h/2);
                }
                                
                onScreen.push(text)
            } else {
                offScreen.push(text)
            } 		

            x += w;	
			r += 3;
			g += 4;
			b += 5;
    	
    	});
        // console.log("Off screen "+offScreen);
        // console.log("On screen "+onScreen); 	
    }

    ///////////////////
    //event listeners//
    ///////////////////

    $(window).on('resize', reDrawCanvas);

    $("canvas").on('mousewheel', function(event) {
        zoom(event.originalEvent.clientX, event.originalEvent.clientY, event.originalEvent.wheelDelta);
    });

    $("canvas").on("dblclick", function(event) {
        var counter = 0;
        var clickZoom = setInterval(function() {
            
            if(counter < 4) {
                delta = counter * 1;
            } else if (counter > 30) {
                delta = counter * 2;
            }  else {
                delta = counter * 4;
            }

            zoom(event.clientX, event.clientY, delta);
            
            counter++;
            if(counter === 40) {
                clearInterval(clickZoom);
            }

        }, 10); 
    });

    $("canvas").on('mousedown', function(event) {

        lastX = event.clientX;
        lastY = event.clientY; 

        $(window).on('mousemove', function(e) {
            var newX = e.clientX;
            var newY = e.clientY;            

            if(lastX > newX) {
                x -= Math.abs(lastX - newX);

                if((x<=0)&&(x+(((canvas.height/(numCols))*z)*numCols)<=canvas.width)) {
                    x += Math.abs(lastX - newX);
                }

            } else {
                x += Math.abs(lastX - newX);

                if((x+(((canvas.height/(numCols))*z)*(numCols))>=canvas.width)&&(x>=0)) {
                    x -= Math.abs(lastX - newX);
                }
            }

            if(newY > lastY) {
                y += Math.abs(lastY - newY);

                if((y+(((canvas.height/(numCols))*z)*(numRows))>=canvas.height)&&(y>=0)) {
                    y -= Math.abs(lastY - newY);
                }

            } else {
                y -= Math.abs(lastY - newY);

                if((y<=0)&&((y+(((canvas.height/(numCols))*z)*(numRows)))<=(canvas.height))) {
                    y += Math.abs(lastY - newY);
                } 
            }
            lastX = newX;
            lastY = newY; 
            drawStuff(x, y, z);
            
        });
    });

    $(window).on('mouseup', function() {
        $(window).off('mousemove');
    });

    /////////////
    //Functions//
    /////////////

    function reDrawCanvas() {
        canvas.width = $(window).width()/2;
        canvas.height = $(window).height()/2;
        drawStuff(x, y, z); 
    }


    function isOnScreen(x,y) {
        if((x<canvas.width)&&(x+((canvas.height/(numCols))*z)>0)&&(y<canvas.height)&&(y+((canvas.height/(numCols))*z)>0)) {
            return true;
        } else {
            return false;
        }
    }

    function zoom(clientX, clientY, delta) {
        //get the cursors absolute screen position over the canvas
        //NOTE this will not work as it is written unless the canvas is in the top left corner of the screen
        var mouseXOnScreen = clientX;
        var mouseYOnScreen = clientY;

        //this calculates the position of the mouse over the drawn object on the screen
        var mouseXOnImg = mouseXOnScreen-x;
        var mouseYOnImg = mouseYOnScreen-y;

        //this calculated the cursors offset over the image as a % of the total images size
        var oldMouseXPosPercentOfImg = mouseXOnImg/(canvas.height*z);
        var oldMouseYPosPercentOfImg = mouseYOnImg/(canvas.height*z);

        /*
            z is a result of delta squared so that it willl zoom faster the harder you scroll the wheel,
            one of the deltas is held at an absolut value so that the product will be positive or negative
            depending on the direction of the wheel's spin, finally z is reduced by a factor of z/n so that
            zooming will occure more and more quickly as the zoom increases.
        */
        z += Math.abs(delta)*delta*(z/150000);
        //this places a maximum zoom out level
        z<.5 ? z=.5: z=z;

        //this recalculates the cursors position as a % of the total images size at the new level of zoom
        var newMouseXPosPercentOfImg = mouseXOnImg/(canvas.height*z);
        var newMouseYPosPercentOfImg = mouseYOnImg/(canvas.height*z);

        //this calculates the difference in the % of the total images size both before and after the zoom
        var percentXShift = newMouseXPosPercentOfImg - oldMouseXPosPercentOfImg;
        var percentYShift = newMouseYPosPercentOfImg - oldMouseYPosPercentOfImg;

        // this converts the % into the the relative pixel distance at this level of zoom
        var pixelsNowEqualToPercentXShift = (canvas.height*z)*percentXShift;
        var pixelsNowEqualToPercentYShift = (canvas.height*z)*percentYShift;

        //this shifts x and y by the number of pixels represented by the shift in the cursors position relative tot eh image.
        x += pixelsNowEqualToPercentXShift;
        y += pixelsNowEqualToPercentYShift;

        drawStuff(x, y, z); 
    }

});