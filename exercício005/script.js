var res = document.getElementById('res');
var sexP = []; // todos os sexos selecionados
var heightP = []; // todas as alturas selecionadas


function adicionar(){
    var height = document.querySelector('#altura');
    var sex = document.querySelector('input[name="sexo"]:checked').value;
    if(height.value.length == 0){
        res.innerHTML = '[ERRO]Selecione a altura.'
    }else{
        heightP.push(parseFloat(height.value));
        sexP.push(sex);
        res.innerHTML = ''; 
    }
    height.value = '';
    height.focus();
}
function calc(){
    if(heightP.length == 0){
        res.innerHTML = '[ERRO]Adicione dados.'
    }else{
        var masc = 0; //Números de pessoas do sexo masculino
        var fem = 0; //Números de pessoas do sexo feminino
        var maiorHeight = Math.max.apply(null, heightP);
        var sexHeight = sexP[heightP.indexOf(maiorHeight)];
        
        for(i in sexP){
            if(sexP[i] === 'm'){
                masc++;
            }else{
                fem++;
            }
        }
        console.log(sexP);
        console.log(heightP);
        res.innerHTML = `${masc == 0? 'Nenhuma pessoa é': masc == 1? masc + ' pessoa é': masc + ' pessoas são'} do sexo masculino.<br>`;
        res.innerHTML += `${fem == 0? 'Nenhuma pessoa é': fem == 1? fem + ' pessoa é': fem + ' pessoas são'} do sexo feminino.<br>`;
        res.innerHTML += `<br> A maior altura é de ${maiorHeight} metros, e é de uma pessoa do sexo ${sexHeight == 'm'? 'masculino.': 'feminino.'}`;
    }
    document.getElementById('btn').blur()
}

