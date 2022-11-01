const operation = () => {
    const inputs = document.querySelectorAll('.inputNunber')
    const result = document.querySelector('.result')

    inputs.forEach((input) => {
        const nunberInputs = parseInt(input.value)
        const span = document.querySelector('.sinal')

        let select = document.querySelector('.select')
        const indice = select.options.selectedIndex      
       
            if (select.options[indice].innerHTML === "Soma" ) {
                result.innerText = nunberInputs + nunberInputs
                span.innerText = "+"
            } else if (select.options[indice].innerHTML === "Subtração") {
                result.innerText = nunberInputs - nunberInputs
                span.innerText = "-"
            }else if (select.options[indice].innerHTML === "Multiplicação") {
                result.innerText = nunberInputs * nunberInputs
                span.innerText = "x"
            }else if (select.options[indice].innerHTML === "Divisão") {
                result.innerText = nunberInputs / nunberInputs
                span.innerText = "/ "
            }       

    })

}

const calcular = () => {
    const calculo = document.querySelector('.calculo')

    calculo.addEventListener('click', (event) => {
        event.preventDefault()
        operation()
    })

}

calcular()


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




// ******************change options********************


// const change = () => {   

//         const span = document.querySelector('.sinal')

//         let select = document.querySelector('.select')
//         const indice = select.options.selectedIndex      
       
//             if (select.options[indice].innerHTML === "Soma"  ) {                
//                 span.innerText = "+"
//             } else if (select.options[indice].innerHTML === "Subtração") {
//                 span.innerText = "-"
//             }else if (select.options[indice].innerHTML === "Multiplicação") {
//                 span.innerText = "*"
//             }else if (select.options[indice].innerHTML === "Divisão") {
//                 span.innerText = "/"
//             }       

    

// }

// const selecionar = () => {
//     const calculo = document.querySelector('.calculo')

//     calculo.addEventListener('click', (event) => {
//         event.preventDefault()
//         operation()
//     })

// }
// console.log(calcular());

