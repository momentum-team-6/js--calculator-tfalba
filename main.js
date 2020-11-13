const display = document.querySelector('.rectangle')
const container = document.querySelector('.container')

let input=""
let output=""

//Need to add some kind of condition that makes it only run if first click is a number

container.addEventListener('click', function (event) {

    //first if is choosing to keep going and accumulating input as long as keep-going tag is present

    if (event.target.classList.contains('keep-going')) {
        input=input+event.target.innerText

        //Can ignore the entire next sequence and simply put the following
        //display.innerHTML = input
        //which is the final thing it does in else

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

    //this else if handles the case when the user inputs equals

    else if (event.target.classList.contains('equals')) {

        //when equals happens then output using eval and resent input 

        output=eval(input)
        input=""

        //the following just handles the case when the length of the output string is too long
        //would actually be better to use a function that will parseFloat(output) so that it can
        //display with e to the whatever power

        //main thing here is to send the output to the display-- it's really just
        //about the else statement -- don't even need the parseFloat etc.
        //could just do display.innerHTML = output for first run

        //Need to add conditions on highlight1-highlight3 for output as well as input

        if (output.length>20) {
            display.innerHTML = "Error"
        }
        else {
            display.innerHTML = parseFloat(output.toFixed(5))
        }

        // reset output
        output=""

        //Look up how to combine text & var here
    }

    //this else if handles the case when the user hits clear -- probably should have another
    //else to handle other situations or just make this else without condition

    else if (event.target.classList.contains('boxc')) {

        //when clear box is clicked this resets both input and output and removes special formatting
        //also resets display of results to blank

        input=""
        output=""
        display.innerHTML =""
        display.classList.remove('highlight1')
        display.classList.remove('highlight2')
        display.classList.remove('highlight3')
    }
})


// REWRITING AS SHORTER VERSION WITHOUT FORMATTING CASES
// container.addEventListener('click', function (event) {

//     //first if is choosing to keep going and accumulating input as long as keep-going tag is present

//     if (event.target.classList.contains('keep-going')) {
//         input=input+event.target.innerText
//         display.innerHTML = input
//     }

//     //this else if handles the case when the user inputs equals

//     else if (event.target.classList.contains('equals')) {

//         //when equals happens then output using eval and resent input 

//         output=eval(input)
//         input=""
//         display.innerHTML = parseFloat(output.toFixed(5))
        
//         // reset output
//         output=""

//         //Look up how to combine text & var here
//     }

//     //this else if handles the case when the user hits clear -- probably should have another
//     //else to handle other situations or just make this else without condition
    
//     else if (event.target.classList.contains('boxc')) {

//         //when clear box is clicked this resets both input and output displays nothing in the result box
//         input=""
//         output=""
//         display.innerHTML =""
//     }
// })
