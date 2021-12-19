function gerarCertificado(){
    // let nomeCompleto = "GLEITON APARECIDO SOARES DE SOUZA";
    let nomeCompleto = document.getElementById('nomeC').value.toUpperCase();
    let assinaCompleto = document.getElementById('nomeC').value.toLowerCase();
    
    let nomeVideo = document.getElementById('nomeV').value.toUpperCase();
    let nomeCanal = document.getElementById('nomeCanal').value.toUpperCase();
    //let duracaoCurso = document.getElementById('duration').value;
    let linkVideo = document.getElementById('lvideo').value;
    let hora = document.getElementById('hora').value;
    let minutos = document.getElementById('minutos').value;
    let segundos = document.getElementById('segundos').value;
    let dataH = calculoAno();
    // if (nomeCompleto.lenght <= 0){
    //     var nomeCompleto = "GLEITON APARECIDO SOARES DE SOUZA";
    // }
    if (hora > 0) {
        var duracaoV = `${hora} hora(s), ${minutos} minutos e ${segundos} segundos`
    } else {
        var duracaoV = `${minutos} minutos e ${segundos} segundos`;
    };
    

  
    certificadoMostrar.innerHTML = `<div class="fundo-image imprimirC">
    <div class="ctc titleeSubtitle">
        <h1>CERTIFICADO</h1>
        <h2>VIDEO AULA ONLINE</h2>
    </div>
    <div class="ctc certificamos">
        <p class="descrVideo">Certifico que, eu:</p>
        <h1 id="NomeComplete">${nomeCompleto}</h1>
    </div>
    <div id="descCurso">
     <div  class="ctc descrVideo">
         <p>participei da vídeo aula gravada Online: <strong>${nomeVideo}</strong>, com duração de ${duracaoV}, assistindo e participando, realizando no dia <strong>${dataH}.</strong> Produzida e publicada no canal do Youtube: <strong>${nomeCanal}.</strong> <br>
         <p class="assistirvideo">${linkVideo}</p></p>
     </div>
    </div>
    <div class="pePaAss">
        <div id="acessarVideos">
            <a href="">
                <div class="ctc patrocionio">
                    <p>Distribuição Gratuita via</p>
                    <img style="width: 150px;" src="/src/logo-youtube.png" alt="">
                    <p class="assistirvideo"><strong>CLIQUE AQUI</strong> PARA ASSISTIR</p>
                </div>
            </a>
        </div>
        <div class="assinaturaG">
            <div class="minhaAssinatura">  
                <!-- <img class="imgassinatura" src="/src/assinatura-teen.png" alt=""> -->
                <p class="assina">${assinaCompleto}</p>
            </div>
                 <div class="assinar">
                     <div>_____________________________</div>
                     <p>${nomeCompleto}</p>
                 </div>
        </div>
    </div>
    <div class="ctc">
        <h3 id="dateH">BRASIL, ${dataH}</h3>
    </div>
 </div>`;
 titleCert.innerHTML = `<title>CERTIFICADO ${nomeCompleto} - ${nomeVideo} REALIZADO DIA ${dataH}</title>`
 alert('CERTIFICADO GERADO COM SUCESSO! CLIQUE EM IMPRIMIR');
 const apareceBotao = document.getElementById('btnImprimir');
 apareceBotao.classList.replace('BimprimirC', 'botaoGerar');
 
 
//     NomeComplete.innerHTML = `${nomeCompleto}`
//     descCurso.innerHTML = `<div  class="ctc descrVideo">
//     <p>participei da vídeo aula gravada Online: <strong>${nomeVideo}</strong>, com duração de <strong>${duracaoCurso}.</strong>, assistindo e participando, realizando no dia <strong>${dataH}.</strong> Produzida e publicada no canal do Youtube: <a href="${linkVideo}" target="_blank"><strong>${nomeCanal}.</strong></a> <br>
//     <p class="assistirvideo">${linkVideo}</p></p>
// </div>`
//     dateH.innerHTML = `<strong>BRASIL, ${dataH}.</strong>`
//     acessarVideos.innerHTML = `<a href="${linkVideo}" target="_blank">
//     <div class="ctc patrocionio">
//         <p>Distribuição Gratuita via</p>
//         <img style="width: 150px;" src="/src/logo-youtube.png" alt="">
//         <p class="assistirvideo"><strong>CLIQUE AQUI</strong> PARA ASSISTIR</p>
//     </div>
// </a>`
// titleCert.innerHTML = `<title>${nomeVideo}</title>`
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

    let datahoje = `${dia-1} DE ${mes} DE ${ano}`
    return datahoje;
}
function imprimir(){
    
    window.print();
}