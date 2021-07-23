const pannels = document.querySelectorAll('.pannel');
// console.log(pannels);
pannels.forEach((panel)=>{
    // console.log(panel);

    panel.addEventListener('click', ()=>{
       // console.log('hay');
       //  panel.classList.remove('active');
        removeactiveprevclass();
        panel.classList.add('active');
    });

    function removeactiveprevclass(){
        pannels.forEach((panel)=>{
            panel.classList.remove('active');
        });
    }
});