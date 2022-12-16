var first = 0;
var before = 0;
var type = '';

function enterNumber(event) {
    const target = event.target;
    const value = target.innerText;
    console.log('value ==> ', value, first);
    if (first === -1) {
        first = value;
    }
    const input = document.getElementById('cal-input');
    input.value = input.value + value;
}

function add(event) {
    const input = document.getElementById('cal-input');
    const value = input.value;

    if (!value.includes('+')) {
        first = Number(input.value);
        input.value = input.value + '+';
        before = first;
        type = 'add';
        first = -1;
    } else {
        return;
    }
}
function sub(event) {
    const input = document.getElementById('cal-input');
    const value = input.value;

    if (!value.includes('-')) {
        first = Number(input.value);
        input.value = input.value + '-';
        before = first;
        type = 'sub';
        first = -1;
    }
    else {
        return;
    }
}
function mul(evet) {
    const input = document.getElementById('cal-input');
    const value = input.value;

    if (!value.includes('*')) {
        first = Number(input.value);
        input.value = input.value + '*';
        before = first;
        type = 'mul';
        first = -1;
    }
    else {
        return
    }
}
function divide(event) {
    const input = document.getElementById('cal-input');
    const value = input.value;


    if (!value.includes('/')) {
        first = Number(input.value);
        input.value = input.value + '/';
        before = first;
        type = 'divide';
        first = -1;
    }
    else {
        return;
    }

}

function clearInput() {
    const input = document.getElementById('cal-input');
    input.value = '';
}

function percent(event) {
    const input = document.getElementById('cal-input');
    first = Number(input.value);
    before = first;
    type = 'percent';
    const per = Number(input.value) / 100;
    input.value = per;
}

function backSpace() {
    const input = document.getElementById('cal-input');
    input.value = input.value.slice(0, -1);
}

function dot() {
    const input = document.getElementById('cal-input');
    const value = input.value;
    if (!value.includes('.')) {
        input.value = input.value + '.'
    }

}

function equal(event) {
    const input = document.getElementById('cal-input');
    console.log('equal ==> ', type, before, first);
    switch (type) {
        case 'add':
            input.value = before + Number(first);
            break;
        case 'sub':
            input.value = before - Number(first);
            break;
        case 'mul':
            input.value = before * Number(first);
            break;
        case 'divide':
            console.log('divide ==> ', before, first);
            input.value = Number(before) / Number(first);
            break;
        case 'percent':
            input.value = Number(before) / Number(first) * 100;
            break;
        default:
            break;
    }
}