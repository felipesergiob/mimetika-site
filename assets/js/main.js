/*
Template Name: Appvilla - Creative Landing Page HTML Template.
Author: GrayGrids
*/

(function () {
    //===== Prealoder

    // window.onload = function () {
    //     window.setTimeout(fadeout, 500);
    // }

    // function fadeout() {
    //     document.querySelector('.preloader').style.opacity = '0';
    //     document.querySelector('.preloader').style.display = 'none';
    // }


    // /*=====================================
    // Sticky
    // ======================================= */
    // window.onscroll = function () {
    //     var header_navbar = document.querySelector(".navbar-area");
    //     var sticky = header_navbar.offsetTop;

    //     var logo = document.querySelector('.navbar-brand img')
    //     if (window.pageYOffset > sticky) {
    //       header_navbar.classList.add("sticky");
    //       logo.src = 'assets/images/logo/white-logo.png';
    //     } else {
    //       header_navbar.classList.remove("sticky");
    //       logo.src = 'assets/images/logo/logo.png';
    //     }

    //     // show or hide the back-top-top button
    //     var backToTo = document.querySelector(".scroll-top");
    //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //         backToTo.style.display = "flex";
    //     } else {
    //         backToTo.style.display = "none";
    //     }
    // };


    
    // // section menu active
	// function onScroll(event) {
	// 	var sections = document.querySelectorAll('.page-scroll');
	// 	var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

	// 	for (var i = 0; i < sections.length; i++) {
	// 		var currLink = sections[i];
	// 		var val = currLink.getAttribute('href');
	// 		var refElement = document.querySelector(val);
	// 		var scrollTopMinus = scrollPos + 73;
	// 		if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
	// 			document.querySelector('.page-scroll').classList.remove('active');
	// 			currLink.classList.add('active');
	// 		} else {
	// 			currLink.classList.remove('active');
	// 		}
	// 	}
	// };

    // window.document.addEventListener('scroll', onScroll);
    
    // // for menu scroll 
    // var pageLink = document.querySelectorAll('.page-scroll');

    // pageLink.forEach(elem => {
    //     elem.addEventListener('click', e => {
    //         e.preventDefault();
    //         document.querySelector(elem.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth',
    //             offsetTop: 1 - 60,
    //         });
    //     });
    // });

    // // WOW active
    // new WOW().init();

    // let filterButtons = document.querySelectorAll('.portfolio-btn-wrapper button');
    // filterButtons.forEach(e =>
    //     e.addEventListener('click', () => {

    //         let filterValue = event.target.getAttribute('data-filter');
    //         iso.arrange({
    //             filter: filterValue
    //         });
    //     })
    // );

    // var elements = document.getElementsByClassName("portfolio-btn");
    // for (var i = 0; i < elements.length; i++) {
    //     elements[i].onclick = function () {
    //         var el = elements[0];
    //         while (el) {
    //             if (el.tagName === "BUTTON") {
    //                 el.classList.remove("active");
    //             }
    //             el = el.nextSibling;
    //         }
    //         this.classList.add("active");
    //     };
    // };

    // //===== mobile-menu-btn
    // let navbarToggler = document.querySelector(".mobile-menu-btn");
    // navbarToggler.addEventListener('click', function () {
    //     navbarToggler.classList.toggle("active");
    // });

    // let cardIndex = 0;

    //card logic buttons    
    // Array com os grupos de cards
let cardsGroups = [
    `
    <div class="card">
        <img src="assets/images/android.png" alt="Android Icon">
        <h2>Android</h2>
        <p>Nosso player é projetado para Android e usa o melhor de cada tecnologia</p>
    </div>
    <div class="card">
        <img src="assets/images/html.png" alt="HTML Icon">
        <h2>HTML 5</h2>
        <p>Todos os modelos são construídos utilizando HTML5 e CSS3.</p>
    </div>
    <div class="card">
        <img src="assets/images/conteudo.png" alt="Conteúdo Icon">
        <h2>Conteudo pronto</h2>
        <p>Disponibilizamos também vários conteúdos prontos, além de pontos de extensão.</p>
    </div>
    <div class="card">
        <img src="assets/images/circulo.png" alt="Sincronização Icon">
        <h2>Auto sincronização</h2>
        <p>O conteúdo dos terminais é sincronizado automaticamente com o servidor.</p>
    </div>
    <div class="card">
        <img src="assets/images/lapis.png" alt="Personalização Icon">
        <h2>Personalisável</h2>
        <p>Criamos os templates para você.</p>
    </div>
    <div class="card">
        <img src="assets/images/agenda.png" alt="Agenda Icon">
        <h2>Agendamento</h2>
        <p>Escolha o período, dias da semana e horários em que a mídia deve ser exibida.</p>
    </div>
    `,
    `
    <div class="card">
        <img src="path/to/your/image1.png" alt="Placeholder Icon">
        <h2>Titulo 1</h2>
        <p>Descrição do card 1...</p>
    </div>
    <div class="card">
        <img src="path/to/your/image2.png" alt="Placeholder Icon">
        <h2>Titulo 2</h2>
        <p>Descrição do card 2...</p>
    </div>
    <div class="card">
        <img src="path/to/your/image3.png" alt="Placeholder Icon">
        <h2>Titulo 3</h2>
        <p>Descrição do card 3...</p>
    </div>
    <div class="card">
        <img src="path/to/your/image4.png" alt="Placeholder Icon">
        <h2>Titulo 4</h2>
        <p>Descrição do card 4...</p>
    </div>
    <div class="card">
        <img src="path/to/your/image5.png" alt="Placeholder Icon">
        <h2>Titulo 5</h2>
        <p>Descrição do card 5...</p>
    </div>
    <div class="card">
        <img src="path/to/your/image6.png" alt="Placeholder Icon">
        <h2>Titulo 6</h2>
        <p>Descrição do card 6...</p>
    </div>
    `
];

let currentGroupIndex = 0;

let rightBtn = document.querySelector(".right-btn");
let leftBtn = document.querySelector(".left-btn");
let cardsContainer = document.querySelector(".cards-container");

// Função para exibir um grupo de cards
function showCardGroup(index) {
    cardsContainer.innerHTML = cardsGroups[index];
}

// Função para atualizar o estado dos botões
function updateButtonsState() {
    leftBtn.disabled = (currentGroupIndex === 0);
    rightBtn.disabled = (currentGroupIndex === cardsGroups.length - 1);
}

rightBtn.addEventListener("click", () => {
    if (window.innerWidth <= 1154) { // Se estiver em formato mobile
        currentGroupIndex++;
        showCardGroup(currentGroupIndex);
        updateButtonsState();
    } else {
        // Lógica para desktop
        if (currentGroupIndex < cardsGroups.length - 1) {
            currentGroupIndex++;
            showCardGroup(currentGroupIndex);
            updateButtonsState();
        }
    }
});

leftBtn.addEventListener("click", () => {
    if (window.innerWidth <= 1154) { // Se estiver em formato mobile
        if (currentGroupIndex === 0) {
            currentGroupIndex = cardsGroups.length - 1;
        } else {
            currentGroupIndex--;
        }
        showCardGroup(currentGroupIndex);
        updateButtonsState();
    } else {
        // Lógica para desktop
        if (currentGroupIndex > 0) {
            currentGroupIndex--;
            showCardGroup(currentGroupIndex);
            updateButtonsState();
        }
    }
});

// Atualizar o estado inicial dos botões ao carregar a página
updateButtonsState();



})();