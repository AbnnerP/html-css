let file = document.querySelector('#files')
let gallery = document.querySelector('#gallery')

function addimage(event){
    let file=event.target.files
    for(let c=0; c<file.length; c++){
        let reader = new FileReader()
        reader.onload = function(event){
        let urlImg = event.target.result
        let newImg = doc.creatElement('img')
        newImg = setAttribute("src",urlImg)
        newImg.style = 'width: 100px; margin: 5px'
        gallery.appendChild(newImg)
    }
    reader.readAsDataURL(file[c])
    }
    
}

file.addEventListener('change', addimage,false)