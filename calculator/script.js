window.onload = () => {
    let mathElements = document.getElementsByClassName("mathButton");
    for ( let elem of mathElements) {
        elem.addEventListener('click', ()=> {
            let currentValue = calculator.display.value;
            if ( !currentValue) 
                alert("Empty")
            else if ( elem.value != '=' && lastLetterIsDigit(currentValue)) {
                calculator.display.value+=elem.value;
            } else  {
                calculator.display.value = eval(currentValue.replace("x","*"));
            } 
        });
    }
}

function lastLetterIsDigit( str ) {
    let ch = str.charAt(str.length-1);
    return ch>='0' && ch<='9';
}