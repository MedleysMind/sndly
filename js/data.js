function generateRandomColor() {
  //creates random number assigned to rgb
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
  //random color will be freshly served
}
//prefix for later concat
const pref = "repos/assets/A/";
//array for keys pressed
let keyData = [];
//array for mp3 files
const sounds = [
  "bubbles","clay","confetti","corona","dotted-spiral", "flash-1","flash-2","flash-3","glimmer","moon",
  "pinwheel","piston-1","piston-2","piston-3","prism-1","prism-2","prism-3","splits","strike","suspension",
  "timer","ufo","veil","wipe","zig-zag"
];
//loops through sounds array
for (let i = 0; i < sounds.length; i++) {
  //pushes contents of function onto keyData array
  keyData.push({
    //call random color
    color: generateRandomColor(),
    //get sound with Howl
    sound: new Howl({
      //concats the prefix and suffix with location and file type
      src: [pref + sounds[i] + ".mp3"]
    })
  });
}