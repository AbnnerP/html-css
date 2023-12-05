let btn = document.querySelector('#btn')
let resp = document.querySelector('#res')
function show(){
    let ajax = new XMLHttpRequest()
    ajax.open('GET', 'db.json')
    ajax.onreadystatechange=function(){
        if(ajax.status=== 200 && ajax.readyState ===4){
            let res = JSON.parse(ajax.responseText)
            let car = res.car

            for(let c = 0; c<car.length;c++){               
                resp.innerHTML= `A cor do carro é   ${car[c].color}`
        
            }
        }
    }
    ajax.send()
   
}
btn.addEventListener('click',show, false)
