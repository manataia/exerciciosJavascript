function calcM(){
    var number = document.getElementById("num").value;
    var res = document.getElementById("res");
    
    if(number.length == 0){
        res.innerHTML = 'Digite os números';
    }else{
        number = number.split(',');
        var maior = Number(number[0]);
        for(i in number){
            if(Number(number[i]) > maior){
                maior = Number(number[i]);
            }
        }
        res.innerHTML = `<p>O maior número digitado foi ${maior}</p>`;
    }
}