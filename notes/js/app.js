//UI
const addbtn = document.querySelector(".addbtn");
const container = document.querySelector('.container');


// console.log(edit);


//Event Listener
addbtn.addEventListener('click', () => notesfunction());

function  notesfunction(){

    const notes = document.createElement('div');
    notes.classList.add('notes');

    notes.innerHTML = ` <div class="tools">
                  <div class="delete"><i class="fas fa-times"></i></div>
                  <div class="edit"><i class="far fa-edit"></i></div>
              </div>
               <div class="date"><h4></h4></div>
              <div class="title"><label for="title">Title :</label> <input type="text" id="title"> </div>
              <textarea></textarea>
          </div>`;




    //UI
    const edit = notes.querySelector('.edit');
    const txtarea = notes.querySelector('textarea');
    const title = notes.querySelector('.title input');
    const del = notes.querySelector('.delete');
    const notedate = notes.querySelector('.date h4');

    const searchbar = document.querySelector('.search-bar input');
    searchbar.addEventListener('keyup', (e) => {
        const targetvalue = e.target.value;
        if(targetvalue.toLowerCase().includes(title.value.toLowerCase())){
            notes.classList.remove('hidden');
        }else if(targetvalue === ''){
            notes.classList.remove('hidden');
        }else{
            notes.classList.add('hidden');
        }
    });

    title.disabled = true;
    txtarea.disabled = true;
    edit.addEventListener('click', (text) => {
        notes.style.pointerEvents = "none";
        const main = document.createElement('div');
        main.classList.add('main');

        main.innerHTML = `<div class="main-tools">
            <div class="bold"><i class="fas fa-bold"></i></div>
            <div class="italic"><i class="fas fa-italic"></i></div>
            <div class="check"><i class="fas fa-check"></i></div>
        </div>
        <div class="header">
            <label for="sub-title">Title:</label>
            <input type="text" />
        </div>
         <div class="date"><h4></h4></div>
        <textarea></textarea>
`;

        container.appendChild(main);



        const check = main.querySelector('.check');
        const textarea = main.querySelector('textarea');
        const bold = main.querySelector('.bold');
        const italic = main.querySelector('.italic');
        const subtitle = main.querySelector('.main .header input');
        const date = main.querySelector('.date h4');


        textarea.value = txtarea.value;

        function currentdate(){
            const newdate = new Date();
            const newday = newdate.getDay();
            const newmonth = newdate.getMonth();
            const newyear = newdate.getFullYear();

            return  currentday = `${newday} \/ ${newmonth} \/ ${newyear}`;
        }

        date.innerHTML = currentdate();
        check.addEventListener('click', () => {

            notes.style.pointerEvents = "auto";
            txtarea.value = textarea.value;
            main.style.display = "none";

            txtarea.disabled = true;

            notedate.innerHTML = `${currentdate()}`;

        });

        bold.addEventListener('click', () => {
           textarea.classList.toggle("bold");
            txtarea.classList.toggle('bold');
        });

        italic.addEventListener('click', () => {
            textarea.classList.toggle('italic');
            txtarea.classList.toggle('italic');
        });

        subtitle.addEventListener('keyup', (e) => {
            title.value = e.target.value;
        });

        subtitle.value = title.value;

    });

    del.addEventListener('click', () => {
        notes.remove();
    });

    container.appendChild(notes);

}




