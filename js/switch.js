function light(sw) {
    var pic;
    if (sw == 0) {
      pic = "images/light-bulb-off.png"
      document.getElementById("body").style.backgroundColor = "#111111"; 
      document.getElementById("container").style.color = "#3d3d3d"; 
      document.getElementById('myImage').style.filter = "none";
    } else {
      pic = "images/light-bulb-on.png"
      document.getElementById("body").style.backgroundColor = "#fff"; 
      document.getElementById("container").style.color = "black";
      document.getElementById('myImage').style.filter = "drop-shadow(0px -10px 30px #ffff00)";
    }
    document.getElementById('myImage').src = pic;
}