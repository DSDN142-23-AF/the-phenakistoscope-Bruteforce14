const SLICE_COUNT = 16;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_PRINT(A3));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("Goblin Gums" , "PNG");
}

function setup_layers(pScope){

  new PLayer(null, 0);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces);
  layer1.mode( RING );
  layer1.set_boundary( 500, 600 );

  /*var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );*/
}

function faces(x, y, animation, pScope){

  let anim = animation.wave(1);
  let pink= color(255,62,181);
  let yellow = color(255,233,0);
  let white = color(255);
  let black = color(0);

  let colour1 = white
  translate(0,-850);
  //scale(animation.wave(0.5)*2);//
 scale(2)
 strokeWeight(3)
 fill(colour1)

 let goblinNeckX = [x-55, x-64, x-85, x-87, x-83, x-71, x-59, x-55, x-53, x-38,x-33,x-27,x-27]; //Neck
 let goblinNeckY = [y-1, y+6, y+28, y+32, y+38, y+47, y+61, y+63, y+59, y+47,y+36,y+33,y+41]; 

 let humanNeckX = [x-60, x-62, x-75, x-76, x-70, x-55, x-39, x-35, x-34, x-24,x-20,x-29,x-19];
 let humanNeckY = [y+1, y+28, y+56, y+60, y+64, y+69, y+78, y+78, y+74, y+58,y+45,y+11,y+11]; 
 
 let morphNeckY = []
 for(let i = 0; i <=humanNeckY.length; i++ ){
 morphNeckY[i] = map(anim,  0 , 1, humanNeckY[i], goblinNeckY[i])
 }
 let morphNeckX = []
 for(let i = 0; i <=humanNeckX.length; i++ ){
 morphNeckX[i] = map(anim,  0 , 1, humanNeckX[i], goblinNeckX[i])
 }


 beginShape(); // neck
 for(let i = 0; i <=morphNeckY.length; i++ ){
   curveVertex( morphNeckX[i],morphNeckY[i])
 }
 
 endShape(CLOSE);

 let goblinShoulderX = [x-125, x-128, x-107, x-93, x-55, x-32, x-20, x-24]; //Shoulder
 let goblinShoulderY = [y+111, y+108, y+48, y+33, y+48, y+75, y+108, y+109]; 

 let humanShoulderX = [x-110, x-112, x-91, x-77, x-40, x-26, x-4, x-8];
 let humanShoulderY = [y+136, y+136, y+73, y+58, y+73, y+100, y+133, y+134];  
 
 let morphShoulderY = []
 for(let i = 0; i <=humanShoulderY.length; i++ ){
 morphShoulderY[i] = map(anim,  0 , 1, humanShoulderY[i], goblinShoulderY[i])
 }
 let morphShoulderX = []
 for(let i = 0; i <=humanShoulderX.length; i++ ){
 morphShoulderX[i] = map(anim,  0 , 1, humanShoulderX[i], goblinShoulderX[i])
 }


 beginShape(); // Shoulder
 for(let i = 0; i <=morphShoulderY.length; i++ ){
   curveVertex( morphShoulderX[i],morphShoulderY[i])
 }
 
 endShape(CLOSE);

  ellipse(x-35,y-13,77.6,70.8); // cranium

  let gumX = map(anim, 0, 1,y-14,y-3)
  ellipse(gumX,y+30,38,24); // gums
  



  fill(colour1)
  stroke(colour1)
  
  let goblinCheekX = [x+8.5, x-14.5];  //Cheek
  let goblinCheekY = [y+17.5, y+28.5]

  let humanCheekX = [x+4.5, x-6.5];
  let humanCheekY = [y+20.5, y+31.5];
  
  let morphCheekY = [];
  for(let i = 0; i <=humanCheekY.length; i++ ){
  morphCheekY[i] = map(anim,  0 , 1, humanCheekY[i], goblinCheekY[i])
  };
  let morphCheekX = [];
  for(let i = 0; i <=humanCheekX.length; i++ ){
  morphCheekX[i] = map(anim,  0 , 1, humanCheekX[i], goblinCheekX[i])
  };

 
  beginShape();// lCheek
  vertex(x-34.5,y+26.5);
  vertex(x+2.5,y+3.5);
  for(let i = 0; i <=morphCheekY.length; i++ ){
    vertex( morphCheekX[i],morphCheekY[i])
  }
  vertex(x+4.5,y+40.5);
  endShape(CLOSE);
stroke(0)

  let goblinNoseX = [x-24, x+77, x+80, x+74, x+57, x+28, x+11, x+7, x+8, x+8]; //change name to goblinNoseX later 
  let goblinNoseY = [y-47, y-32, y-27, y-24, y-22, y-2, y+5, y+9, y+15, y+15]; //change name to goblinNoseY later

  let humanNoseX = [x+5, x+7, x+9, x+12, x+13, x+11, x+8, x+4, x, x];
  let humanNoseY = [y-7, y, y+5, y+10, y+12, y+14, y+16, y+19, y+15, y+15]
  
  let morphNoseY = []
  for(let i = 0; i <=humanNoseY.length; i++ ){
  morphNoseY[i] = map(anim,  0 , 1, humanNoseY[i], goblinNoseY[i])
  }
  let morphNoseX = []
  for(let i = 0; i <=humanNoseX.length; i++ ){
  morphNoseX[i] = map(anim,  0 , 1, humanNoseX[i], goblinNoseX[i])
  }


  beginShape(); // nose
  curveVertex( morphNoseX[0],morphNoseY[0])
  for(let i = 0; i <=morphNoseY.length; i++ ){
    curveVertex( morphNoseX[i],morphNoseY[i])
  }
  
  endShape();

  let goblinULipX = [x-3, x+8, x+7, x+8, x-3, x-12, x-17, x-17]; //Upper Lip
  let goblinULipY = [y+23, y+15, y+18, y+20, y+25, y+29, y+26, y+26]; 

  let humanULipX = [x+6, x+6, x+7, x+8, x+9, x-1, x-6, x-6];
  let humanULipY = [y+18, y+20, y+22, y+26, y+28, y+31, y+32, y+32]
  
  let morphULipY = []
  for(let i = 0; i <=humanULipY.length; i++ ){
  morphULipY[i] = map(anim,  0 , 1, humanULipY[i], goblinULipY[i])
  }
  let morphULipX = []
  for(let i = 0; i <=humanULipX.length; i++ ){
  morphULipX[i] = map(anim,  0 , 1, humanULipX[i], goblinULipX[i])
  }


  beginShape();// upper lip
  curveVertex( morphULipX[0],morphULipY[0])
  for(let i = 0; i <=morphULipY.length; i++ ){
    curveVertex( morphULipX[i],morphULipY[i])
  }
  curveVertex( morphULipX[6],morphULipY[6])
  endShape();

  beginShape(); //chin
  curveVertex(x+6,y+41);
  curveVertex(x+6,y+41);
  curveVertex(x+8,y+44);
  curveVertex(x+2,y+48);
  curveVertex(x-11,y+46);
  curveVertex(x-26,y+42);
  curveVertex(x-33,y+35);
  curveVertex(x-35,y+22);
  curveVertex(x-35,y+22);
  endShape();

  let goblinLLipX = [x-17, x-10, x+7, x+7, x-8, x-8];  //Lower Lips
  let goblinLLipY = [y+26, y+30, y+38, y+41, y+36, y+36]; 

  let humanLLipX = [x-6, x, x+7, x+7, x+6, x+6];
  let humanLLipY = [y+32, y+32, y+32, y+34, y+41, y+41]
  
  let morphLLipY = []
  for(let i = 0; i <=humanLLipY.length; i++ ){
  morphLLipY[i] = map(anim,  0 , 1, humanLLipY[i], goblinLLipY[i])
  }
  let morphLLipX = []
  for(let i = 0; i <=humanLLipX.length; i++ ){
  morphLLipX[i] = map(anim,  0 , 1, humanLLipX[i], goblinLLipX[i])
  }


  beginShape();// lower lip
  curveVertex( morphLLipX[0],morphLLipY[0])
  for(let i = 0; i <=morphLLipY.length; i++ ){
    curveVertex( morphLLipX[i],morphLLipY[i])
  }
 
  endShape();

  ellipse(x-9,y-1,15,9);



  let goblinBrowX = [x-20, x-20, x+5, x+8, x+2, x+2];  //Brow
  let goblinBrowY = [y-2, y-2, y-6, y-10, y-15, y-15]; 

  let humanBrowX = [x-19, x-19, x+7, x+6, x-2,x-2];
  let humanBrowY = [y-2, y-2, y-3, y-7, y-12, y-12]
  
  let morphBrowY = []
  for(let i = 0; i <=humanBrowY.length; i++ ){
  morphBrowY[i] = map(anim,  0 , 1, humanBrowY[i], goblinBrowY[i])
  }
  let morphBrowX = []
  for(let i = 0; i <=humanBrowX.length; i++ ){
  morphBrowX[i] = map(anim,  0 , 1, humanBrowX[i], goblinBrowX[i])
  }


  beginShape();// Brow
  curveVertex( morphBrowX[0],morphBrowY[0])
  for(let i = 0; i <=morphBrowY.length; i++ ){
    curveVertex( morphBrowX[i],morphBrowY[i])
  }
  endShape();

  let goblinEarX = [x-37,x-37,x-55,x-65,x-79,x-81,x-76,x-58,x-40,x-36,x-36];
  let goblinEarY = [y-6,y-6,y-11,y-17,y-18,y-17,y-10,y-1,y+5,y+13,y+13];

  let humanEarX = [x-36,x-36,x-42,x-48,x-48,x-45,x-43,x-42,x-39,x-35,x-35];
  let humanEarY = [y-2,y-2,y-4,y,y+7,y+10,y+11,y+14,y+16,y+13,y+13];

  let morphEarY = []
  for(let i = 0; i <=humanEarY.length; i++ ){
  morphEarY[i] = map(anim,  0 , 1, humanEarY[i], goblinEarY[i])
  }
  let morphEarX = []
  for(let i = 0; i <=humanEarX.length; i++ ){
  morphEarX[i] = map(anim,  0 , 1, humanEarX[i], goblinEarX[i])
  }
  
  beginShape();// Ear
  curveVertex( morphEarX[0],morphEarY[0])
  for(let i = 0; i <=morphEarY.length; i++ ){
    curveVertex( morphEarX[i],morphEarY[i])
  }
  endShape();
}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}
