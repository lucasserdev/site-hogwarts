const imagem = document.querySelector('.result-img img');
const title = document.querySelector('.result-title h1');
const p = document.querySelector('.result1 p');

function selectSonse() {
    imagem.setAttribute('src', 'assets/images/sonserina.png');
    title.innerHTML = 'Sonserina'
    p.innerHTML = 'A Sonserina, fundada por Salazar Slytherin, é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts. Ao estabelecer a casa, Salazar instruiu o Chapéu Seletor a escolher somente alunos que obtivessem algumas de suas características particulares as quais ele prezava. Entre elas incluem a astúcia, desenvoltura, liderança e ambição.Seu animal emblemático é uma serpente e suas cores são verde e prata.'
    
}

function selectGrifi() {
    imagem.setAttribute('src', 'assets/images/grifinoria.png');
    title.innerText = 'Grifinória'
    p.innerHTML = 'A Grifinória, fundada por Godrico Gryffindor, é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts. Ao estabelecê-la, Godrico instruiu o Chapéu Seletor a classificar estudantes que obtivessem características as quais ele mais valorizava, como a coragem, o cavalheirismo e a determinação. Suas cores são o escarlate e o ouro e seu animal emblemático é um leão...'
}

function selectCorvi() {
    imagem.setAttribute('src', 'assets/images/corvinal.png');
    title.innerText = 'Corvinal'
    p.innerHTML = 'A Corvinal, fundada por Rowena Ravenclaw, é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts. Seus membros, comumente, são caracterizados por sua inteligência, aprendizado e sabedoria. Suas cores são o azul e bronze, o animal emblemático é uma águia e sua fantasma patrono é a Dama Cinzenta.'
}

function selectLufa() {
    imagem.setAttribute('src', 'assets/images/lufa-lufa.png');
    title.innerText = 'lufa-lufa'
    p.innerHTML = 'A Lufa-Lufa, fundada por Helga Hufflepuff, é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts, sendo conhecida como a mais inclusiva entre as outras três; valorizando o trabalho árduo, a dedicação, a paciência, a lealdade e o jogo limpo ao invés de uma aptidão particular de seus membros. Seu animal emblemático é um texugo e suas cores são o amarelo e o preto.'
}


// MENU BURGER

const menuBurger = document.querySelector('.menu-burguer');
const otherMenu = document.querySelector('nav.menu ul')

function showMenu() {
    if (otherMenu.style.display === 'none') {
        otherMenu.style.display = 'block';
    } else {
        otherMenu.style.display = 'none';
    }
}