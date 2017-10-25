function playSound(keyCode) {
  var audio = document.getElementById(keyCode)
  audio.currentTime = 0;
  audio.play();
  audio.parentElement.classList.add('played')
}

var keySounds = window.addEventListener('keypress', function(e) {
  if (e.keyCode === 97) {
    playSound(97);
  };
  if (e.keyCode === 115) {
    playSound(115)
  };
  if (e.keyCode === 100) {
    playSound(100)
  };
  if (e.keyCode === 102) {
    playSound(102)
  };
  if (e.keyCode === 103) {
    playSound(103)
  };
  if (e.keyCode === 104) {
    playSound(104)
  };
  if (e.keyCode === 106) {
    playSound(106)
  };
  if (e.keyCode === 107) {
    playSound(107)
  };
  if (e.keyCode === 108) {
    playSound(108)
  };
});

function removeTransition(e){
  if (e.propertyName === 'transform') {
    e.path[0].classList.remove('played')
  }
}

var allPads = document.getElementsByClassName('pad');

//Play sound by mouseclick
for (i=0; i<allPads.length; i++) {
  allPads[i].addEventListener('transitionend', removeTransition);
  allPads[i].addEventListener('click', function(event){
    this.getElementsByTagName('audio')[0].currentTime = 0;
    this.getElementsByTagName('audio')[0].play();
    this.getElementsByTagName('audio')[0].parentElement.classList.add('played')
  })
}
