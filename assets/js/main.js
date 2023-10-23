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
    let cards = [
        `<div class="card">
            <img src="assets/images/android.png" alt="Android Icon">
            <h2>Android</h2>
            <p>Nosso player é meticulosamente projetado para dispositivos Android, aproveitando ao máximo cada tecnologia disponível.</p>
        </div>`,
        `<div class="card">
            <img src="assets/images/html.png" alt="HTML Icon">
            <h2>HTML 5</h2>
            <p>Modelos construídos utilizando as mais recentes tecnologias HTML5 e CSS3, garantindo qualidade e performance.</p>
        </div>`,
        `<div class="card">
            <img src="assets/images/conteudo.png" alt="Conteúdo Icon">
            <h2>Conteúdo pronto</h2>
            <p>Disponibilizamos uma ampla variedade de conteúdos prontos e pontos de extensão para personalização.</p>
        </div>`,
        `<div class="card">
            <img src="assets/images/circulo.png" alt="Sincronização Icon">
            <h2>Auto sincronização</h2>
            <p>Garantimos que o conteúdo dos terminais seja sincronizado de forma automática e eficiente com o servidor, sem interrupções.</p>
        </div>`,
        `<div class="card">
            <img src="assets/images/lapis.png" alt="Personalização Icon">
            <h2>Personalizável</h2>
            <p>Nossa equipe de design está pronta para criar templates personalizados que atendam exatamente às suas necessidades.</p>
        </div>`,
        `<div class="card">
            <img src="assets/images/agenda.png" alt="Agenda Icon">
            <h2>Agendamento</h2>
            <p>Agendamento flexível, permitindo que você escolha o período, dias da semana e horários específicos para exibição de mídias.</p>
        </div>`,
        `<div class="card">
            <img src="assets/images/check-tv.png" alt="Check tv">
            <h2>Monitoramento Remoto</h2>
            <p>Com nossa plataforma, você pode monitorar em tempo real quais terminais estão online, verificar quais mídias foram baixadas e obter insights valiosos.</p>
        </div>`,
        `<div class="card">
            <img src="assets/images/nuvem.png" alt="Nuvem">
            <h2>Servidor na Nuvem</h2>
            <p>Oferecemos uma solução baseada em nuvem, permitindo que você faça upload de suas mídias e gerencie suas campanhas de qualquer lugar do mundo.</p>
        </div>`,
        `<div class="card">
            <img src="assets/images/wifi-no.png" alt="Wifi">
            <h2>Funciona Offline</h2>
            <p>Nosso sistema é projetado para ser resiliente. Mesmo que a conexão com a internet seja interrompida, o conteúdo continuará sendo exibido sem problemas.</p>
        </div>`,
        `<div class="card">
            <img src="assets/images/escudo.png" alt="Escudo">
            <h2>Segurança Máxima</h2>
            <p>Priorizamos a segurança em nossa plataforma. Toda a comunicação com o servidor é criptografada e totalmente segura, garantindo a confidencialidade dos dados.</p>
        </div>`,
        `<div class="card">
            <img src="assets/images/user.png" alt="User">
            <h2>Níveis de acesso</h2>
            <p>Oferecemos um sistema de gerenciamento de usuários avançado, permitindo que você crie diferentes níveis de acesso e defina permissões específicas.</p>
        </div>`,
        `<div class="card">
            <img src="assets/images/tag.png" alt="Tag">
            <h2>White Label</h2>
            <p>Nossa solução White Label permite que você utilize o sistema em seu próprio domínio, personalizando-o com a identidade visual de sua marca.</p>
        </div>`,

    ];
    
    let startIndex = 0;
    let cardsToShow = window.innerWidth <= 1154 ? 1 : 6;
    
    let rightBtn = document.querySelector(".right-btn");
    let leftBtn = document.querySelector(".left-btn");
    let cardsContainer = document.querySelector(".cards-container");
    let cardCounter = document.querySelector(".card-counter"); // Selecione o contador
    
    function showCards() {
        let cardsHtml = "";
        for (let i = startIndex; i < startIndex + cardsToShow && i < cards.length; i++) {
            cardsHtml += cards[i];
        }
        cardsContainer.innerHTML = cardsHtml;
        updateButtonsState();
        updateCardCounter(); // Atualize o contador toda vez que os cards forem atualizados
    }
    
    function updateButtonsState() {
        leftBtn.disabled = startIndex === 0;
        rightBtn.disabled = startIndex + cardsToShow >= cards.length;
    }
    
    // Função para atualizar o contador de cards no formato mobile
    function updateCardCounter() {
        if (window.innerWidth <= 1154) {
            cardCounter.textContent = `${startIndex + 1}/${cards.length}`;
        }
    }
    
    rightBtn.addEventListener("click", () => {
        if (startIndex + cardsToShow < cards.length) {
            startIndex += cardsToShow;
            showCards();
        }
    });
    
    leftBtn.addEventListener("click", () => {
        if (startIndex > 0) {
            startIndex -= cardsToShow;
            showCards();
        }
    });
    
    // Atualizar os cards ao carregar a página
    showCards();

})();