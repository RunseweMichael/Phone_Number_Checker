form = document.getElementById('form');
input = document.getElementById('number');
result = document.getElementById('result');
check = document.getElementById('check');

check.addEventListener('click', checkNumber);
function checkNumber(event) {
    event.preventDefault();
    const number = input.value.trim();
    if (number === '') {
        result.innerHTML = `<p>Please enter a number.</p>`
        return;
    }

    else if (isNaN(number)) {
        result.innerHTML = `<p>Please enter a valid number.</p>`;
        return;
    }

    else if (number.length < 11 || number.length > 11) {
        result.innerHTML = `<p>Please enter a number with 11 digits.</p>`;
        return;
    }

    else{
    if (/^080[3,6]/.test(number) || /^070[3,6]/.test(number) || /^081[0,3]/.test(number) || /^081[4,6]/.test(number) || /^0903/.test(number)){
        result.innerHTML = `<p>${number} is an MTN number.</p>`;
    } 
    
    else if (/^070[1,8]/.test(number) || /^080[2,8,]/.test(number) || /^081[2]/.test(number) || /^090[1,2,4,7]/.test(number) || /^0912/.test(number)){
        result.innerHTML = `<p>${number} is an AIRTEL number.</p>`;
    }

    else if(/^080[5,7]/.test(number) || /^081[1,5]/.test(number) || /^090[5,6]/.test(number)){
        result.innerHTML = `<p>${number} is a GLO number.</p>`;
    }

    else if(/^080[9]/.test(number) || /^081[7,8]/.test(number) || /^090[9]/.test(number)){
        result.innerHTML = `<p>${number} is a 9MOBILE number.</p>`;
    }
    else {
        result.innerHTML = `<p>This ${number} is not a valid number.</p>`;
    }
    }
}

   

    

