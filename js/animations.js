function typeWrite(element, text, speed) {
  var i = 0;
  element.innerHTML = "";
  var interval = setInterval(function () {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}
