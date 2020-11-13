const display = document.querySelector('.rectangle')
const container = document.querySelector('.container')

let input=""
let output=""
container.addEventListener('click', function (event) {
    if (event.target.classList.contains('keep-going')) {
    console.log(event)
    console.log(event.target)
    input=input+event.target.innerText
    // display.innerHTML = event.target.innerText
    if (input.length>3) {
        display.classList.add('highlight')
        display.classList.remove('highlight2')
        display.innerHTML = input
    }
    else if (input.length>2) {
        display.classList.add('highlight2')
        display.classList.remove('highlight')
        display.innerHTML = input
    }
    else {
        display.innerHTML = input
}}
else if (event.target.classList.contains('equals')) {
    output=eval(input)
    display.innerHTML = output+" "
}
else if (event.target.classList.contains('boxc')) {
    input=""
    display.innerHTML =""
    display.classList.remove('highlight')

}

})



// document.addEventListener('click',event => {
//     console.log(event.target)
//     event.target.classList.add('highlight')
// })

    // event.target.classList.add('highlight')

