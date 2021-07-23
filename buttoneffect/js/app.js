const buttons = document.querySelectorAll('.btnripple');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
          const cx = e.clientX; //from  event(e)
          const cy = e.clientY;
          // console.log(cx, cy);

          const btntop = e.target.offsetTop;
          const btnleft = e.target.offsetLeft;
          // console.log(btntop, btnleft);

          const xinside = cx - btnleft;
          const yinside = cy - btntop;

          //create circle
          const circle = document.createElement('span');
          circle.className = "circle";

          circle.style.top = yinside + "px";
          circle.style.left = xinside + "px";

          e.target.appendChild(circle);

          setTimeout(()=>{
               circle.remove();
          }, 400);
    });
});