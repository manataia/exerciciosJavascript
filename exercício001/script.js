var numM = [];// Números adicionados
var num = document.getElementById('num');
var tab = document.getElementById('tab');
var res = document.getElementById('res');

function add(){
    
    if(num.value.length == 0){
        res.innerHTML = 'Por favor, digite um número!';
    }else{
        let n = num.value;
        let item = document.createElement('option');

        numM.push(n);
        item.text = `${n} foi adicionado.`;
        tab.appendChild(item);
    
        res.innerHTML = '';

        console.log(`${n} foi adicionado.`);
        console.log(numM);
    }
    num.value = '';
    num.focus();
}

function calc(){
    if(numM.length != 0){
        let sum = 0;
        let media;

        for(var i = 0; i < numM.length; i++){
            sum = sum + Number(numM[i]);
            media = sum / numM.length;
        }
        res.innerHTML = `A média é de ${media}`;
    }else{
        res.innerHTML = 'Por favor, digite um número!';
    }
}