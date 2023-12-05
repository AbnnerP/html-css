let form = document.querySelector('#form')
let res = document.querySelector('#res')


function teste(event){
    event.preventDefault()
    let ajax1 = new XMLHttpRequest()
    let params='name =' +document.querySelector('#name').value
    ajax1.open('POST','teste.php')
    ajax1.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    ajax1.onreadystatechange=function(){
        if(ajax1.status === 200 && ajax1.readyState === 4){
            let json = JSON.parse(ajax1.responseText)
            console.log(json.name+'-'+json.age+'-'+json.city)
        }
}
ajax1.send(params)

}

form.addEventListener('submit', teste, false)