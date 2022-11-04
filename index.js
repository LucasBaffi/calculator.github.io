const operation = () => {
    const inputs = document.querySelectorAll('.inputNunber')
    const result = document.querySelector('.result')              

        let select = document.querySelector('.select')
        const indice = select.options.selectedIndex      
       
            if (select.options[indice].innerHTML === "Soma" ) {
                result.innerText = parseInt(inputs[0].value) + parseInt(inputs[1].value)
             
            } else if (select.options[indice].innerHTML === "Subtração") {
                result.innerText = parseInt(inputs[0].value) - parseInt(inputs[1].value)
               
            }else if (select.options[indice].innerHTML === "Multiplicação") {
                result.innerText = result.innerText = parseInt(inputs[0].value) * parseInt(inputs[1].value)
               
            }else if (select.options[indice].innerHTML === "Divisão") {
                result.innerText = result.innerText = parseInt(inputs[0].value) / parseInt(inputs[1].value)
               
            }       

   

}

const calcular = () => {
    const calculo = document.querySelector('.calculo')

    calculo.addEventListener('click', (event) => {
        event.preventDefault()
        operation()
    })

}

calcular()




// ******************change options********************

const selectOption = () => {     
        
        const span = document.querySelector('.sinal')

        let select = document.querySelector('.select')
        const indice = select.options.selectedIndex      
       
            if (select.options[indice].innerHTML === "Soma" ) {                
                span.innerText = "+"
            } else if (select.options[indice].innerHTML === "Subtração") {               
                span.innerText = "-"
            }else if (select.options[indice].innerHTML === "Multiplicação") {                
                span.innerText = "x"
            }else if (select.options[indice].innerHTML === "Divisão") {               
                span.innerText = "/ "
            }         

}

const change = () => {
    let select = document.querySelector('.select')
    const indice = select.options.selectedIndex        
    
        select.addEventListener('change', (event) => {
        event.preventDefault()
        selectOption()
        
})
   
}

change()





