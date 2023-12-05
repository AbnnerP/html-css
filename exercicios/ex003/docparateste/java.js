let check = document.getElementsByName('gender')
let check02 = document.querySelector('#check02')
let btn = document.querySelector('#btn')
let sel = document.querySelector('#sel')
let btn2 = document.querySelector('#btn2')

function teste(event){
    if(event.target.value == 'Male'){
    window.alert('Male')
}else{
        window.alert('Female')
    }   
}
for(let c=0;c<check.length;c++){
    check[c].addEventListener('click', teste, false)
}


function teste02(){
    if(check02.checked == false){
        alert('Você precisa marcar esta opção')
    }
}
btn.addEventListener('click', teste02, false)


function escolher (event){
    if(event.target.selectedIndex == 0 ){
        alert('escolha uma opção')}}        
    
sel.addEventListener('change', escolher, false)