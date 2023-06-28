(function () {

    // Taking all the variables
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // Numbers
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            //Taking the values stored in data-num
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    // Equal Button
    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            // check screen is empty or not
            screen.value = "Please Enter";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    //Clear Button
    clear.addEventListener('click', function (e) {
        screen.value = "";
    })



})();