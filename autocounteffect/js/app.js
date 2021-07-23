const counters = document.querySelectorAll('.counter');
// console.log(counters);

counters.forEach(counter=>{
     counter.innerText = '0';
     const updatecounter = ()=>{
          //const target = Number(counter.getAttribute('data-target'));
          const target = +counter.getAttribute('data-target');
          //console.log(type of target, target);                                                                                     
          const ctr = Number(counter.innerHTML);
          // console.log(typeof ctr, ctr);

         incremet = target / 100 ;

         if(ctr < target){
              counter.innerText = `${Math.ceil(ctr + incremet)}`;
         }
         setTimeout(updatecounter,50);
     }
     updatecounter();
});