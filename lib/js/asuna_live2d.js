


const cubism4Model = "/l2d/asuna/moc.model3.json";
const live2d = PIXI.live2d;


(async function main() {
  const app = new PIXI.Application({
    view: document.getElementById("canvas"),
    autoStart: true,
    autoResize: false,
    width: 500,
    height: 900,
    transparent: true
  });
  live2d.SoundManager.volume = 0.25;
  //live2d.config.sound = true;
  live2d.config.motionSync = true;

  const model = await live2d.Live2DModel.from(cubism4Model);
  app.stage.addChild(model);

  model.scale.set(0.12);
  model.x = -135;
  model.y = 160;
  model.on('hit', hitArea => {
    if (hitArea.includes('HandL') || hitArea.includes('HandR')) {
      model.motion("TapHand");
    }
    if (hitArea.includes('Head')) {
      model.motion("TapHead");
    }
    if (hitArea.includes('Bra')) {
      model.motion("TapBra");
    }
    if (hitArea.includes('Hip')) {
      model.motion("TapHip");
    }
  });
})
  ();
