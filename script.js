const preload = function () {
  document.getElementsByTagName('body')[0].classList.remove('preload');
}

window.onload = preload;