//IIFE
(function(){

    let eqbtn = document.querySelector('.btn-equal');
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    
    //equal-button function
    eqbtn.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = 'Enter a value';
        }
         else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    //C button function
    clear.addEventListener('click', function(e){
        screen.value = '';
    })

}
)();