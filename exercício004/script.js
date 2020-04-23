var age = document.getElementById('idade');
var screen = document.getElementById('tela');
var res = document.getElementById('res');
var people = [];

function adicionar(){
    if(age.value.length == 0){
        alert('Digite uma idade');
    }else{
        let item = document.createElement('option');
        item.text = `Idade ${age.value} foi adicionada.`;
        screen.appendChild(item);
        people.push(age.value);
    }
    age.value = '';
    age.focus();
    res.innerHTML = '';
}

function calc(){
    if(people.length == 0){
        alert('Adicione uma idade');
    }else{
        var maiorDeIdade = [];
        var menorDeIdade = [];
        for(i in people){
            if(people[i] >= 18){
                maiorDeIdade.push(people[i]);
            }else{
                menorDeIdade.push(people[i])
            }
        }
        res.innerHTML = `<p>${maiorDeIdade.length} ${maiorDeIdade.length == 1? ` pessoa é maior`: ` pessoas são maiores`} de idade, com 
        ${maiorDeIdade.length != 0? maiorDeIdade + ` ano(s)`: `nenhuma idade registrada`}.</p>`;
        res.innerHTML += `<p>${menorDeIdade.length} ${menorDeIdade.length == 1? ` pessoa é menor`: ` pessoas são menores`} de idade, com 
        ${menorDeIdade.length != 0? menorDeIdade + ` ano(s)`: `nenhuma idade registrada`}.</p>`;
    }
}