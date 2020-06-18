let num1 = '';
let num2 = '';
let operator = '';
let total = '';
let clear = '';
let showtext = $('#inputNumber')

$(document).ready(function () {
    $('button').on('click', function (e) {
        let btn = e.target.innerHTML;
        if (btn >= '0' && btn <= '9') {
            handleNumber(btn);
        } else {
            handleOperator(btn);
        }
    });
    $('#cler').on('click', function (e) {
        let showtext = $('#inputNumber')
        showtext[0].innerHTML = '';
        location.reload();

    });

});

function handleNumber(num) {
    if (num1 === '') {
        num1 = num;
    } else {
        num2 = num;
    }
    Display(num);
}

function handleOperator(oper) {
    if (operator === '') {
        operator = oper;
    } else {
        Total();
        operator = oper;

    }
}

function Total() {
    switch (operator) {
        case '+':
            total = +num1 + +num2;
            Display(total);
            break;
        case '-':
            total = +num1 - +num2;
            Display(total);
            break;
        case '÷':
            total = +num1 / +num2;
            Display(total);
            break;
        case 'X':
            total = +num1 * +num2;
            Display(total);
            break;
        default:
            updateVariables();
    }

}

function Display(btn) {
    showtext[0].innerHTML = btn;

}


function updateVariables() {
    num1 = total;
    num2 = '';

}


