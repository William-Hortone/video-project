const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const video = document.querySelector('.video_container');
const preloader = document.querySelector('.preloader_container');

playBtn.addEventListener('click', ()=>{
    
    if(!playBtn.classList.contains('switch')){
      playBtn.classList.add('switch');
      pauseBtn.classList.remove('switch');
      video.play();
  }
})

pauseBtn.addEventListener('click', ()=>{
    
    if(!pauseBtn.classList.contains('switch')){
        pauseBtn.classList.add('switch')
        playBtn.classList.remove('switch');
        video.pause();
  }
})

window.addEventListener('load', ()=>{
    preloader.classList.add('hide_preloader')
})