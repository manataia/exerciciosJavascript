function calc(){
    var res = document.getElementById('tab');
    var number = document.getElementById('num').value;
    if(number.length !== 0){
        var item = [];
        
        number = number.split(',');
        res.innerHTML = '';
        
        for(i = 0; i < number.length; i++){
            item.push(document.createElement('option'));
            var quadrado = parseInt(number[i]) * parseInt(number[i]);
            item[i].text = `O quadrado de ${number[i]} é ${quadrado}`;
            res.appendChild(item[i]);
            console.log(number[i]);
        }

    }else{
        alert('Digite os Números');
    }
}