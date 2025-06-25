function Change_color() {
    let val = document.getElementById("change");
    let v = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    console.log(val);
    val.style.backgroundColor = `rgb(${v},${y},${z})`;
    val.style.color = `rgb(${255 - v},${255 - y},${255 - z})`;
    let BackgroundColors = document.getElementById("BackgroundColors");
    BackgroundColors.innerHTML = `rgb(${v},${y},${z})`;
    let ForegroundColors = document.getElementById("ForegroundColors");
    ForegroundColors.innerHTML = `rgb(${255 - v},${255 - y},${255 - z})`;
}