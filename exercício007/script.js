function divide(){
    var res = document.getElementById('res')
    var date = document.getElementById('data').value;
    res.innerHTML = "";
    if(date.length == 0){
        alert('Digite uma data');
        console.error('Data não especificada');
    }else{
        date = date.split('/');
        if(date.length == 3){
            res.innerHTML = `Dia: ${date[0]}<br>`;
            res.innerHTML += `Mês: ${date[1]}<br>`;
            res.innerHTML += `Ano: ${date[2]}`;
        }else{
            alert('Faltam dados');
            console.error('Faltam dados');
        }
    }
    document.getElementById('sep').blur();
}