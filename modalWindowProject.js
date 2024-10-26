
//Working with classes in css, we can activate and deactivate them with Js by using classList
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.closeModal');
const showModal = document.querySelectorAll('.showModal');
  
/* const showModals = Array.from(document.querySelectorAll('.showModal'))

let showModalFunction = function(){
  modal.classList.remove('hidden');
}

showModals.map(showModal=>{
  showModal.addEventListener('click', showModalFunction)
}) */ 
 
let showModalFunction = function(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for(i = 0; i < showModal.length; i++)showModal[i].addEventListener('click', showModalFunction); 

let closeModelFunction = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', closeModelFunction);

overlay.addEventListener('click', closeModelFunction);

//Handling with keyboard pads. There are three ways of doing this, keyup, keydown and keypress.

document.addEventListener('keydown', function(e){
 if(e.key === 'Escape' && !modal.classList.contains('hidden')){
  closeModelFunction();
 }
});
  

//%SystemRoot%\system32;%SystemRoot%;%SystemRoot%\System32\Wbem;%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\;C:\Program Files (x86)\ATI Technologies\ATI.ACE\Core-Static;C:\Program Files\Git\cmd;C:\Program Files (x86)\nodejs\

