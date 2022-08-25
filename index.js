// Your code goes here
document.addEventListener('DOMContentLoaded',()=>{
    console.log('The DOM content has already loaded')
    let p = document.querySelector('#text')
    p.textContent='This is really cool!'
})// Ensures the the javascript only loads after the content has loaded
// You can not manipulate what has not been loaded to the DOM
// it does not wait for imgs and stylesheet to load