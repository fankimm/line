var space
var col
var rad
var xMar
var yMar
var xxx
var yyy

function setup() {
  col = 50
  rad = 1
  if(windowWidth>windowHeight){
    space = windowHeight / (col*2)
    xMar = (windowWidth - col*space) / 4
    yMar = 0
  } else {
    space = windowWidth/ (col*2)
    xMar = 0
    yMar = (windowHeight - col*space) / 4
  }



  createCanvas(windowWidth,windowHeight)
  background(255)
  fill(0)
  strokeWeight(0.01)
  for(i=0;i<col*2;i++){
    for(j=0;j<col*2;j++){
      circle(xMar+i*space,yMar+j*space,rad)

    }
  }

  for(a=0;a<col;a++){

    line(xMar+a*space,yMar+0,xMar+space*col,yMar+(a+1)*space)
    line(xMar+space*col, yMar+a*space, xMar+(col-1-a)*space,yMar+space*col)
    line(xMar+(col-a)*space,yMar+space*col,xMar+0,yMar+(col-a-1)*space)
    line(xMar+0,yMar+(col-a)*space,xMar+a*space,yMar+0)

  }
  for(a=0;a<col;a++){

    line(space*col+xMar+a*space,yMar+0,space*col+xMar+space*col,yMar+(a+1)*space)
    line(space*col+xMar+space*col, yMar+a*space,space*col+ xMar+(col-1-a)*space,yMar+space*col)
    line(space*col+xMar+(col-a)*space,yMar+space*col,space*col+xMar+0,yMar+(col-a-1)*space)
    line(space*col+xMar+0,yMar+(col-a)*space,space*col+xMar+a*space,yMar+0)

  }
  for(a=0;a<col;a++){

    line(xMar+a*space,col*space+yMar+0,xMar+space*col,yMar+(a+1)*space+col*space)
    line(xMar+space*col, col*space+yMar+a*space, xMar+(col-1-a)*space,yMar+space*col+col*space)
    line(xMar+(col-a)*space,col*space+yMar+space*col,xMar+0,yMar+(col-a-1)*space+col*space)
    line(xMar+0,col*space+yMar+(col-a)*space,xMar+a*space,yMar+0+col*space)

  }
  for(a=0;a<col;a++){

    line(col*space+xMar+a*space,col*space+yMar+0,col*space+xMar+space*col,yMar+(a+1)*space+col*space)
    line(col*space+xMar+space*col, col*space+yMar+a*space, col*space+xMar+(col-1-a)*space,yMar+space*col+col*space)
    line(col*space+xMar+(col-a)*space,col*space+yMar+space*col,col*space+xMar+0,yMar+(col-a-1)*space+col*space)
    line(col*space+xMar+0,col*space+yMar+(col-a)*space,col*space+xMar+a*space,yMar+0+col*space)

  }
  // ((col-1)^2+space^2)*x^2
  // x=frameCount/sqrt((col-1)^2)+space^2)
  // y=frameCount/sqrt((col-1)^2)+space^2)/(col-1)
// yyy = floor(((col-1)*space)^2+space^2)
// yyy = float(dist(ar+0*space,mar+0,mar+(col-1)*space,mar+space))
}

// function draw() {
//   xxx = float(dist(mar+0*space,mar+0,mar+frameCount*15/sqrt((col-1)^2+space^2),mar+frameCount*15/sqrt((col-1)^2+space^2)/(col-1)))
//   if(xxx <=yyy){
//   console.log("frameCount : " + frameCount)
//   console.log("xxx : " + xxx)
//   console.log("yyy : " + yyy)
//   // for(a=0;a<col;a++){
//   //     line(mar+0*space,mar+0,mar+frameCount*15/sqrt((col-1)^2+space^2),mar+frameCount*15/sqrt((col-1)^2+space^2)/(col-1))
//   //   }
//       line(mar+0*space,mar+0,mar+frameCount*15/sqrt((col-1)^2+space^2),mar+frameCount*15/sqrt((col-1)^2+space^2)/(col-1))
//       line(mar+0*space,mar+0,mar-frameCount*15/sqrt((col-1)^2+space^2),mar-frameCount*15/sqrt((col-1)^2+space^2)/(col-1))
//   }
//
//   // line(0,0,120,30)
//   // line(30,0,120,60)
//   // line(60,0,120,90)
//   // line(90,0,120,120)
//   //
//   // line(120,0,90,120)
//   // line(120,30,60,120)
//   // line(120,60,30,120)
//   // line(120,90,0,120)
//   //
//   // line(120,120,0,90)
//   // line(90,120,0,60)
//   // line(60,120,0,30)
//   // line(30,120,0,0)
//   //
//   // line(0,120,30,0)
//   // line(0,90,60,0)
//   // line(0,60,90,0)
//   // line(0,30,120,0)
//
//
//
//   // line()
//   // if(frameCount<1000){
//   // line(10,10,10+sqrt(frameCount*frameCount/25)*5,10+sqrt(frameCount*frameCount/25))
//   // line(20,10,10+sqrt(frameCount*frameCount/20)*4,10+sqrt(frameCount*frameCount/20)*2)
//   // }
// }
