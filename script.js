function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("#txtano")
    var res = document.querySelector('#res')

    if (!fano.value || fano.value > ano){
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var genero = ' '
        if(fsex[0].checked){
            genero = 'Homem'
            var faixaE = faixa(idade) 
            img.setAttribute('src', `./img/${faixaE}-m.png`)
        }else{
            genero = 'Mulher'
            var faixaE = faixa(idade) 
            img.setAttribute('src', `./img/${faixaE}-f.png`)
        }

        function faixa(idade){
            if(idade >= 0 && idade < 12){
                //criança
                return 'bebe'
            }else if(idade < 24){
                //jovem
                return 'jovem'
            }else if(idade < 50){
                //adulto
                return 'adulto'
            }else if(idade => 102){
                return 'morto'
            }else{
                //idoso
                return 'idoso'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade calculada: ${idade} gênero: ${genero}` 
        res.appendChild(img)
    }
}
