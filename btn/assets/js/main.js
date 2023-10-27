// const btn = document.getElementById('btn')
// const metn = document.getElementById('metn')


// function mytext() {
//     if (metn.innerText == "") {
//         metn.innerText="Sevinc"
//     }else{
//         metn.innerText = ""
//     }

// }
// btn.addEventListener('click', mytext)
const ab = document.getElementById("text")
const btn = document.getElementById("btn")
const metn = document.getElementById("metn")

function mytext() {
    if (text.value>5) {
metn.innerText=text.value
        
    }
    else{
        metn.innerText="5den kicikdir"
    }
}

btn.addEventListener('click',mytext)