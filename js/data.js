function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}
var keyData = {
  a: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/bubbles.mp3"]
    })
  },
  s: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/clay.mp3"]
    })
  },
  q: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/confetti.mp3"]
    })
  },
  w: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/corona.mp3"]
    })
  },
  z: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/dotted-spiral.mp3"]
    })
  },
  x: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/flash-1.mp3"]
    })
  },
  e: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/flash-2.mp3"]
    })
  },
  d: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/flash-3.mp3"]
    })
  },
  c: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/glimmer.mp3"]
    })
  },
  r: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/moon.mp3"]
    })
  },
  f: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/pinwheel.mp3"]
    })
  },
  v: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/piston-1.mp3"]
    })
  },
  t: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/piston-2.mp3"]
    })
  },
  g: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/piston-3.mp3"]
    })
  },
  b: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/prism-1.mp3"]
    })
  },
  y: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/prism-2.mp3"]
    })
  },
  h: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/prism-3.mp3"]
    })
  },
  n: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/splits.mp3"]
    })
  },
  u: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/squiggle.mp3"]
    })
  },
  j: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/strike.mp3"]
    })
  },
  m: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/suspension.mp3"]
    })
  },
  i: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/timer.mp3"]
    })
  },
  k: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/ufo.mp3"]
    })
  },
  o: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/veil.mp3"]
    })
  },
  l: {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/wipe.mp3"]
    })
  },
  ",": {
    color: generateRandomColor(),
    sound: new Howl({
      src: ["repos/assets/A/zig-zag.mp3"]
    })
  },
};
