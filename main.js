const display = document.querySelector('.rectangle')
const container = document.querySelector('.container')

let input=""
let output=""

//Need to add some kind of condition that makes it only run if first click is a number

container.addEventListener('click', function (event) {
    if (event.target.classList.contains('keep-going')) {
    console.log(event)
    console.log(event.target)
    input=input+event.target.innerText
    // display.innerHTML = event.target.innerText
    if (input.length>20) {
        display.innerHTML="Error"
    }
    else if (input.length>7) {
        display.classList.add('highlight3')
        display.classList.remove('highlight1')
        display.classList.remove('highlight2')
        display.innerHTML = input
    }

    else if (input.length>5) {
        display.classList.add('highlight2')
        display.classList.remove('highlight1')
        display.classList.remove('highlight3')
        display.innerHTML = input
    }
    else if (input.length>3) {
        display.classList.add('highlight1')
        display.classList.remove('highlight2')
        display.classList.remove('highlight3')
        display.innerHTML = input
    }
    else {
        display.innerHTML = input
}}
else if (event.target.classList.contains('equals')) {
    output=eval(input)
    input=""
    if (output.length>20) {
        display.innerHTML = "Error"
    }
    else {
    display.innerHTML = parseFloat(output.toFixed(5))
}
    output=""
    // input=""
    //Look up how to combine text & var here
}
else if (event.target.classList.contains('boxc')) {
    input=""
    output=""
    display.innerHTML =""
    display.classList.remove('highlight')

}

})



// document.addEventListener('click',event => {
//     console.log(event.target)
//     event.target.classList.add('highlight')
// })

    // event.target.classList.add('highlight')

