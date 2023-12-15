const SLICE_COUNT = 18;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces);
  layer1.mode( RING );
  layer1.set_boundary( 500, 600 );

  /*var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );*/
}

function faces(x, y, animation, pScope){
  translate(0,-850);
  //scale(animation.wave(0.5)*2);//
 scale(2)
  ellipse(x-35,y-13,77.6,70.8); // cranium
  ellipse(x-3,y+30,38,24); // gums


  let goblinNoseX = [x-24, x+77, x+80, x+74, x+57, x+28, x+11, x+7, x+8]; //change name to goblinNoseX later 
  let goblinNoseY = [y-47, y-32, y-27, y-24, y-22, y-2, y+5, y+9, y+15]; //change name to goblinNoseY later

  let humanNoseX = [x+5, x+7, x+9, x+12, x+13, x+11, x+8, x+4, x];
  let humanNoseY = [y-7, y, y+5, y+10, y+12, y+14, y+16, y+19, y+15]
  
  let morphNoseY = []
  for(let i = 0; i <=humanNoseY.length; i++ ){
  morphNoseY[i] = map(animation.wave(1),  0 , 1, humanNoseY[i], goblinNoseY[i])
  }
  let morphNoseX = []
  for(let i = 0; i <=humanNoseX.length; i++ ){
  morphNoseX[i] = map(animation.wave(1),  0 , 1, humanNoseX[i], goblinNoseX[i])
  }


  beginShape(); // nose
  curveVertex( morphNoseX[0],morphNoseY[0])
  for(let i = 0; i <=morphNoseY.length; i++ ){
    curveVertex( morphNoseX[i],morphNoseY[i])
  }
  curveVertex( morphNoseX[9],morphNoseY[9])
  endShape();

  let goblinULipX = [x-3, x+8, x+7, x+8, x-3, x-12, x-17]; 
  let goblinULipY = [y+23, y+15, y+18, y+20, y+25, y+29, y+26]; 

  let humanULipX = [x+6, x+6, x+7, x+8, x+9, x-1, x-6];
  let humanULipY = [y+18, y+20, y+22, y+26, y+28, y+31, y+32]
  
  let morphULipY = []
  for(let i = 0; i <=humanULipY.length; i++ ){
  morphULipY[i] = map(animation.wave(1),  0 , 1, humanULipY[i], goblinULipY[i])
  }
  let morphULipX = []
  for(let i = 0; i <=humanULipX.length; i++ ){
  morphULipX[i] = map(animation.wave(1),  0 , 1, humanULipX[i], goblinULipX[i])
  }


  beginShape();// upper lip
  curveVertex( morphULipX[0],morphULipY[0])
  for(let i = 0; i <=morphULipY.length; i++ ){
    curveVertex( morphULipX[i],morphULipY[i])
  }
  curveVertex( morphULipX[6],morphULipY[6])
  endShape();

  beginShape();// lower lip
  curveVertex(x-17,y+26);
  curveVertex(x-17,y+26);
  curveVertex(x-10,y+30);
  curveVertex(x+7,y+38);
  curveVertex(x+7,y+41);
  curveVertex(x-8,y+36);
  curveVertex(x-8,y+36);
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
