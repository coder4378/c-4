var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8e8d3a8d-bc3e-4ea3-a20e-046f1c68ac48"],"propsByKey":{"8e8d3a8d-bc3e-4ea3-a20e-046f1c68ac48":{"name":"BALL","sourceUrl":"assets/v3/animations/yVuyAOYzSpgv006SY1ius5buN7s5rVuT17QPjtlKD9Y/8e8d3a8d-bc3e-4ea3-a20e-046f1c68ac48.png","frameSize":{"x":76,"y":74},"frameCount":1,"looping":true,"frameDelay":4,"version":"HBe.52s6Fx.8akRX1_vkLTUvVoCdYZt9","loadedFromSource":true,"saved":true,"sourceSize":{"x":76,"y":74},"rootRelativePath":"assets/v3/animations/yVuyAOYzSpgv006SY1ius5buN7s5rVuT17QPjtlKD9Y/8e8d3a8d-bc3e-4ea3-a20e-046f1c68ac48.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bar = createSprite(390, 200, 10, 390);
var bar2 = createSprite(200, 390, 390, 10);
var bar3 = createSprite(200, 10, 390, 10);
var bar4 = createSprite(10, 200, 10, 390);
var bar5 = createSprite(340, 70, 30, 110);
var bar6 = createSprite(56, 71, 30, 60);
var bar7 = createSprite(70, 110, 110, 30);
var bar8 = createSprite(56, 170, 30, 30);
var bar9 = createSprite(120, 38, 30, 45);
var bar10 = createSprite(190, 90, 30, 150);
var bar11 = createSprite(280, 40, 30, 50);
var bar12 = createSprite(264, 80, 60, 30);
var bar13 = createSprite(190, 180, 120, 30);
var bar14 = createSprite(38, 300, 50, 30);
var bar15 = createSprite(130, 195, 30, 60);
var bar16 = createSprite(115, 230, 60, 30);
var bar17 = createSprite(355, 170, 60, 30);
var bar18 = createSprite(340, 220, 30, 70);
var bar19 = createSprite(100, 363, 30, 45);
var bar20 = createSprite(130, 355, 70, 30);
var bar21 = createSprite(180, 330, 30, 80);
var bar22 = createSprite(150, 305, 60, 30);
var bar23 = createSprite(250, 240, 60, 30);
var bar24 = createSprite(340, 350, 30, 70);
var bar25 = createSprite(255, 350, 70, 70);
var bar26 = createSprite(290, 170, 20, 20);
var bar27 = createSprite(235, 290, 30, 70);
var bar28 = createSprite(35, 370, 40, 30);
var bar29 = createSprite(30, 250, 30, 30);
var start = createSprite(28, 28, 28, 28);
var end = createSprite(370, 372, 31, 28);
var ball = createSprite(27, 27, 20, 20);

var gameState = "serve";

bar.shapeColor = 'black';
bar2.shapeColor = 'black';
bar3.shapeColor = 'black';
bar4.shapeColor = 'black';
bar5.shapeColor = 'black';
bar6.shapeColor = 'black';
bar7.shapeColor = 'black';
bar8.shapeColor = 'black';
bar9.shapeColor = 'black';
bar10.shapeColor = 'black';
bar11.shapeColor = 'black';
bar12.shapeColor = 'black';
bar13.shapeColor = 'black';
bar14.shapeColor = 'black';
bar15.shapeColor = 'black';
bar16.shapeColor = 'black';
bar17.shapeColor = 'black';
bar18.shapeColor = 'black';
bar19.shapeColor = 'black';
bar20.shapeColor = 'black';
bar21.shapeColor = 'black';
bar22.shapeColor = 'black';
bar23.shapeColor = 'black';
bar24.shapeColor = 'black';
bar25.shapeColor = 'black';
bar26.shapeColor = 'black';
bar27.shapeColor = 'black';
bar28.shapeColor = 'black';
bar29.shapeColor='black';
ball.shapeColor='blue';
start.shapeColor = 'yellow';
end.shapeColor = 'yellow';
function draw() {
  background("red");
  if (gameState==="serve") {
    fill("yellow");
    textSize(15);
    text("Press right key to start...", 60, 270);
  }
  if (keyDown("right")  &&  gameState==="serve"){
        
        gameState= "play";
  
    
  }
  if (keyDown("up")) {
    ball.velocityX = 0;
    ball.velocityY = -2;
  }
  if (keyDown("down")) {
    ball.velocityX = 0;
    ball.velocityY = 2;
  }
  if (keyDown("right")) {
    ball.velocityX = 2;
    ball.velocityY = 0;
  }
  if (keyDown("left")) {
    ball.velocityX = -2;
    ball.velocityY = 0;
  }
  if (ball.collide(bar)||ball.collide(bar2)||ball.collide(bar3)||ball.collide(bar4)||ball.collide(bar5)||ball.collide(bar6)||ball.collide(bar7)||ball.collide(bar8)||ball.collide(bar9)||ball.collide(bar10)||ball.collide(bar11)||ball.collide(bar12)||ball.collide(bar13)||ball.collide(bar14)||ball.collide(bar15)||ball.collide(bar16)||ball.collide(bar17)||ball.collide(bar18)||ball.collide(bar19)||ball.collide(bar20)||ball.collide(bar21)||ball.collide(bar22)||ball.collide(bar23)||ball.collide(bar24)||ball.collide(bar25)||ball.collide(bar26)||ball.collide(bar27)||ball.collide(bar28)||ball.collide(bar29)) {
    fill("yellow");
    textSize(24);
    text("YOU LOSS", 80, 274);
    gameState="serve";
    reset();
  }
  if (ball.collide(end)) {
    textFont("Algerian");
    fill("green");
    textSize(24);
    text("YOU WON", 80, 274);
    gameState = "over";
  }
  drawSprites();
}
function reset() {
  ball.x = 27;
  ball.y = 27;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
