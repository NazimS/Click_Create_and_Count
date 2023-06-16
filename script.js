'use strict';

let mainContent = document.querySelector('.mainContent');

let a = 0;
let x = 0;
let y = 1;
let k = 1;
let btn = document.createElement('button');
btn.textContent = `Click count ${0}`;
mainContent.appendChild(btn);

let counter = 0;

function incr() {
    let z = `${y++}`;
    return z;
};

let bgColor = function() {
    let r = Math.round(Math.random()* 255);
    let g = Math.round(Math.random()* 255);
    let b = Math.round(Math.random()* 255);
    return `rgb(${r}, ${g}, ${b})`; 
}

btn.addEventListener('click', () => {
    counter++;
    let newButton = function() {
    
        let btn1 = document.createElement('button');
        mainContent.appendChild(btn1);
        btn1.textContent = `Click count ${0}`;
        btn1.style.backgroundColor = bgColor(); 

        btn1.addEventListener('click', () => {
            newButton();
            btn1.style.backgroundColor = bgColor(); 
            // btn1.textContent = `Click count ${x = x === 0 ? k++ : 0}`;
            // console.log(btn1.dataset.counter);
            btn1.textContent = `Click count ${
                x = x === 0 ? (++btn1.dataset.counter) : 0
            }`;
            console.log('btn1 clicked !!');
            // console.log(btn1.dataset.counter);
            
        });
        btn1.dataset.counter = 0;
    
    };

    newButton();
    btn.style.backgroundColor = bgColor(); 
    btn.textContent = `Click count ${
        a = a === 0 ? incr() : 0
        // k = k === 0 ? (++btn.dataset.counter) : 0
    }`;
    btn.dataset.counter = 0;

    console.log('btn clicked !!');

});

