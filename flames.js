function calculateFLAMES() {
    let boy = document.getElementById("boy").value.toLowerCase().replace(/\s+/g, '');
    let girl = document.getElementById("girl").value.toLowerCase().replace(/\s+/g, '');
    
    if(boy === "" || girl === "") {
        alert("Please enter both names!");
        return;
    }

    let boyArr = boy.split('');
    let girlArr = girl.split('');
    
    for(let i = 0; i < boyArr.length; i++) {
        let index = girlArr.indexOf(boyArr[i]);
        if(index !== -1) {
            boyArr[i] = '';
            girlArr[index] = '';
        }
    }
    
    let count = boyArr.join('').length + girlArr.join('').length;
    
    let flames = ['F','L','A','M','E','S'];
    let i = 0;
    while(flames.length > 1) {
        i = (i + count - 1) % flames.length;
        flames.splice(i,1);
    }
    
    let resultMap = {
        'F': 'Friend',
        'L': 'Love',
        'A': 'Affection',
        'M': 'Marriage',
        'E': 'Enemy',
        'S': 'Siblings'
    };
    
    let finalResult = resultMap[flames[0]];
    typeWriter(finalResult);  // 👈 letter by letter call
}

function typeWriter(text) {
    let i = 0;
    let resultDiv = document.getElementById("result");
    resultDiv.innerText = "";  // clear previous output
    
    let interval = setInterval(() => {
        if (i < text.length) {
            resultDiv.innerText += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 200); // typing speed (200ms per letter)
}
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        calculateFLAMES();
    }
});