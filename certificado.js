function gerarCertificado(){
    let nomeCompleto = document.getElementById('nomeC').value.toUpperCase();
    let nomeVideo = document.getElementById('nomeV').value.toUpperCase();
    let nomeCanal = document.getElementById('nomeCanal').value.toUpperCase();
    let duracaoCurso = document.getElementById('duration').value;
    let linkVideo = document.getElementById('lvideo').value;
    let dataH = calculoAno();
  

    NomeComplete.innerHTML = `${nomeCompleto}`
    descCurso.innerHTML = `<div  class="ctc descrVideo">
    <p>participei da vídeo aula gravada Online: <strong>${nomeVideo}</strong>, com duração de <strong>${duracaoCurso}.</strong>, assistindo e participando, realizando no dia <strong>${dataH}.</strong> Produzida e publicada no canal do Youtube: <a href="${linkVideo}" target="_blank"><strong>${nomeCanal}.</strong></a> <br>
    <p class="assistirvideo">${linkVideo}</p></p>
</div>`
    dateH.innerHTML = `<strong>BRASIL, ${dataH}.</strong>`
    acessarVideos.innerHTML = `<a href="${linkVideo}" target="_blank">
    <div class="ctc patrocionio">
        <p>Distribuição Gratuita via</p>
        <img style="width: 150px;" src="/src/logo-youtube.png" alt="">
        <p class="assistirvideo"><strong>CLIQUE AQUI</strong> PARA ASSISTIR</p>
    </div>
</a>`
}

function calculoAno(){
    let data = new Date();
    let dia = data.getUTCDate();
    let mesS = data.getMonth();
    let ano = data.getFullYear();
    if (mesS == "0") {
        var mes = "JANEIRO"
    } else if (mesS == "1") {
        var mes = "FEVEREIRO"
    }else if (mesS == "2") {
        var mes = "MARÇO"
    }else if (mesS == "3") {
        var mes = "ABRIL"
    }else if (mesS == "4") {
        var mes = "MAIO"
    }else if (mesS == "5") {
        var mes = "JUNHO"
    }else if (mesS == "6") {
        var mes = "JULHO"
    }else if (mesS == "7") {
        var mes = "AGOSTO"
    }else if (mesS == "8") {
        var mes = "SETEMBRO"
    }else if (mesS == "9") {
        var mes = "OUTUBRO"
    }else if (mesS == "10") {
        var mes = "NOVEMBRO"
    }else if (mesS == "11") {
        var mes = "DEZEMBRO"
    }

    let datahoje = `${dia} DE ${mes} DE ${ano}`
    return datahoje;
}