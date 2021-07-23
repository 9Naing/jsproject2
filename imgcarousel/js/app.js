//UI
const imgcarousel = document.getElementById('imgcarousel');
const imgs = document.querySelectorAll('#imgcarousel img');
// console.log(imgs);
// console.log(imgcarousel);

//Buttons
const leftbtn = document.getElementById('left'),
          rightbtn = document.getElementById('right');

          console.log(leftbtn, rightbtn);

let idx = 0;
rightbtn.addEventListener('click', () => {
     idx++;
     changeimage();
     clearinterval();
});

leftbtn.addEventListener('click', () => {
     idx--;
     changeimage();
     clearinterval();
});

function changeimage(){
     if(idx > imgs.length - 1){
          idx = 0;
     }else if( idx < 0){
          idx = imgs.length - 1;
     }

     imgcarousel.style.transform = `translate(${-idx * 500}px)`;
}

let interval = setInterval(imgrun, 2000);

function imgrun(){
     idx++;
     changeimage();
}

function clearinterval(){
     clearinterval(interval);
     interval = setInterval(imgrun, 2000);
}