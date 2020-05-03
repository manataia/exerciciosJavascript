var res = document.getElementById('res');

function invert(){
    res.innerHTML ='';
    var name = document.getElementById('nome').value;
    name = name.split(',');
    name.reverse();
    for(i = 0; i < name.length; i++){
        res.innerHTML += `${name[i]} `;
    }
}