
$(document).ready(function() {
    
	var grid = {
    a1: {
        data: "a1",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    a2: {
        data: "a2",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    a3: {
        data: "a3",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    a4: {
        data: "a4",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    a5: {
        data: "a5",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    b1: {
        data: "b1",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    b2: {
        data: "b2",
        color:  {
            r: 249,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    b3: {
        data: "b3",
        color:  {
            r: 249,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    b4: {
        data: "b4",
        color:  {
            r: 249,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    b5: {
        data: "b5",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    c1: {
        data: "c1",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    c2: {
        data: "c2",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    c3: {
        data: "c3",
        color:  {
            r: 249,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    c4: {
        data: "c4",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    c5: {
        data: "c5",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    d1: {
        data: "d1",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    d2: {
        data: "d2",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    d3: {
        data: "d3",
        color:  {
            r: 249,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    d4: {
        data: "d4",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    d5: {
        data: "d5",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    e1: {
        data: "e1",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    e2: {
        data: "e2",
        color:  {
            r: 249,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    e3: {
        data: "e3",
        color:  {
            r: 249,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    e4: {
        data: "e4",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    },
    e5: {
        data: "e5",
        color: {
            r: 0,
            g: 0,
            b: 0
        },
        img: {
            sml: "img/goatTiny.jpg",
            med: "img/goat.jpg",
            lrg: "img/goatLarge.jpg"
        }
    }
}

	

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    numCols = 5;
    z = 1;
    x = (canvas.width/2)-(canvas.height/2);
    y = 0;
    

    //event listeners
    $(window).on('resize', reDrawCanvas);

    $("canvas").on('mousewheel', function(event) {
        var delta = event.originalEvent.wheelDelta;
        var oldZ = z;

        //if(delta > 0) {
            if(delta<0)
                z += delta*-delta*.000005;
            else
                z += delta*delta*.000005;

        
             if(z<.1)
                 z=.1
        

        drawStuff(x, y, z);
    });

    $("canvas").on('mousedown', function(event) {

        var lastX = event.clientX;
        var lastY = event.clientY; 

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

                if((y+(((canvas.height/(numCols))*z)*(numCols))>=canvas.height)&&(y>=0)) {
                    y -= Math.abs(lastY - newY);
                }

            } else {
                y -= Math.abs(lastY - newY);

                if((y<=0)&&((y+(((canvas.height/(numCols))*z)*(numCols)))<=(canvas.height))) {
                    y += Math.abs(lastY - newY);
                } 
            }
            lastX = newX;
            lastY = newY; 
            drawStuff(x, y, z);
            
        });
    })

    $(window).on('mouseup', function() {
        $(window).off('mousemove');
    });


    //main draw function
    function drawStuff(x, y, z) {

    	canvas.width = canvas.width;
    	if(z===0) {
            z=.1
        }
        var	w = (canvas.height/(numCols))*z;
    	var	h = w;
    	
    	var cells = Object.keys(grid);
    	var counter = 0;
    	var offScreen = [];
    	$(cells).each(function() {
    		
    		if((counter % numCols === 0)&&(counter != 0)) {
    			counter = 0;
    			x = (x-w*numCols);
    			y += h;
    		}

			counter++;
			console.log(z);
			var cell = grid[this];
            var r = cell.color.r;
            var g = cell.color.g;
            var b = cell.color.b;
            var img =  new Image();
            if(z < 1) {
                img.src = cell.img.sml;
            }
            
            if((z>=1)&&(z<5)) {
                img.src = cell.img.med;
            }

            if(z >= 5) {
                img.src = cell.img.lrg;
            }

            var text = cell.data;

            //(x<canvas.width)&&(x+((canvas.height/(numCols))*z)>0)
            if((x<canvas.width)&&(x+((canvas.height/(numCols))*z)>0)&&(y<canvas.height)&&(y+((canvas.height/(numCols))*z)>0)) {
                ctx.fillStyle = "rgba("+r+", "+g+", "+b+", 1)";
                ctx.fillRect (x, y, w, h);
                ctx.drawImage(img, x, y, w, h);
            } else {
                offScreen.push(text)
            } 		
                

            x += w;	
			r += 3;
			g += 4;
			b += 5;
    	
    	});
        console.log(offScreen); 	
    }

    function reDrawCanvas() {
        canvas.width = $(window).width();
        canvas.height = $(window).height();
        drawStuff(x, y, z); 
    }

    drawStuff(x, y, z); 

});


//onld functions
    
    