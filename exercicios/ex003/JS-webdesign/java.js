/*let objeto = {
    nome: "João",age: 18, 
    func: function mult (x,y){
        return x+y
    }        
}
let res = document.getElementById('resp')
let resp = document.getElementById('resp2')
res.innerHTML= `${objeto.func(2,3)}`



let number1 = [1,2,3,4,5]
let number2 = ["s","t",6]
let arr1 = number1.concat(number2)//concatenar

let arr2 = arr1.every(                      // verifica quais tipos de elementos há.
    function verifyElements(elem,ind,obj){
        return(typeof ind == "number")
    }
)
let arr3 = arr1.filter(                    // faz uma busca nos arrays por tipo específico
    function verifyElements(elem,ind,obj){
        return (typeof elem == "number")
    }
)

resp.innerHTML=`${arr2}`

let myquery= document.querySelectorAll('.btn')
for (let i = 0; i<myquery.length;i++){
    myquery[i].addEventListener('click',function(){
        //alert('Click button : '+  this.innerHTML)
        document.querySelector("body").style.backgroundColor=this.getAttribute('data-color')
    })
}*/

let proj = document.querySelectorAll('.btn3')
    for(let c = 0; c<proj.length; c++){
        proj[c].addEventListener('click', function(){
            document.querySelector("body").style.backgroundColor=proj[c].getAttribute('data-backgroundcolor')
            document.querySelector("body").style.color=this.getAttribute('data-color')})
        }

        
      


    

    



