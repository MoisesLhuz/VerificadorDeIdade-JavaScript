function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if(fano.value.lenght == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    }else {
        let = fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/criancamenino.png')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'img/homemjovem.png')
            }else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adultohomem.png')
            }else {
                //idoso
                img.setAttribute('src', 'img/idosohomem.png')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/criancamenina.png')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'img/mulherjovem.png')
            }else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adultamulher.png')
            }else {
                //idoso
                img.setAttribute('src', 'img/idosamulher.png')
            }
        }
        res.style.textAlign = 'center'        
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`        
        res.appendChild(img)
        
    }

    
}