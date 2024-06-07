var menuVisibile = false;

function functionMenu() {
    var ris = document.getElementById("menu");

    if (!menuVisibile) {
        var out =
            '<div class="absolute grid grid-cols-1 bg-gray-600 bg-opacity-60 backdrop-blur-xl rounded-xl p-5 w-[150px] outline outline-offset-2 outline-1 outline-indigo-800 text-gray-800">' +
            '<a onclick="scrollToSection(\'home\');" class="relative inline cursor-pointer text-xl text-slate-200 font-medium before:bg-indigo-500 before:absolute before:-bottom-1 before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-indigo-500 mt-5"> Home </a>' +
            '<a onclick="scrollToSection(\'premessa\');" class="relative inline cursor-pointer text-xl text-slate-200 font-medium before:bg-indigo-500 before:absolute before:-bottom-1 before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-indigo-500 mt-5"> Premessa </a>' +
            '<a onclick="scrollToSection(\'preparazione\');" class="relative inline cursor-pointer text-xl text-slate-200 font-medium before:bg-indigo-500 before:absolute before:-bottom-1 before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-indigo-500 mt-5"> Preparazione </a>' +
            '<a onclick="scrollToSection(\'escursione\');" class="relative inline cursor-pointer text-xl text-slate-200 font-medium before:bg-indigo-500 before:absolute before:-bottom-1 before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-indigo-500 mt-5"> Escursione </a>' +
            '<a onclick="scrollToSection(\'conclusione\');" class="relative inline cursor-pointer text-xl text-slate-200 font-medium before:bg-indigo-500 before:absolute before:-bottom-1 before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-indigo-500 mt-5"> Conclusione </a>' +
            '<a onclick="scrollToSection(\'galleria\');" class="relative inline cursor-pointer text-xl text-slate-200 font-medium before:bg-indigo-500 before:absolute before:-bottom-1 before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-indigo-500 mt-5"> Galleria </a>' +
            '<a onclick="scrollToSection(\'crediti\');" class="relative inline cursor-pointer text-xl text-slate-200 font-medium before:bg-indigo-500 before:absolute before:-bottom-1 before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-indigo-500 mt-5"> Crediti </a>' +
            "</div>";

        ris.innerHTML = out;
        menuVisibile = true;
    } else {
        ris.innerHTML = "";
        menuVisibile = false;
    }
}

function presentation() {
    var reference = document.getElementById("reference");
    var avatar = document.getElementById("avatar");
    var bounce = document.getElementById("bounce");
    var clickOnMe = document.getElementById("clickOnMe");

    // Rimuovi l'elemento "Cliccami"
    clickOnMe.remove();

    // Rimuovi l'animazione di rimbalzo
    bounce.classList.remove("animate-bounce");

    // Applica la classe per l'animazione di spostamento dell'avatar
    avatar.classList.add("move-left-animation");

    setTimeout(function () {
        avatar.classList.remove("cursor-pointer");
        reference.classList.remove("hidden");

        // posizione originale
        avatar.classList.add("move-back-animation");
    }, 500); // Ritardo di 500 ms
}

function leggiAncora() {
    var ris = document.getElementById("premessaTxt");
    var out =
        "Durante il periodo di lockdown ho capito che stavo sprecando preziose opportunità per crescere come persona. " +
        "In seguito ad esso, ho quindi deciso di prendere in mano la mia vita e di fare delle scelte che mi avrebbero permesso di <b>migliorare</b>. <br>" +
        "<br>Una delle decisioni più significative è stata quella di unirmi agli <b>scout</b>. " +
        "<br><br>Avevo sentito parlare di questa esperienza da alcuni amici, ma non ero mai stato particolarmente interessato prima. " +
        "<br>Tuttavia, ho realizzato che sarebbe stato un ottimo modo per <b>incontrare persone</b> nuove ed esplorare <b>interessi diversi</b> dai miei. <br>" +
        "<br>Attualmente sto vivendo il mio <b>terzo anno</b> da scout. " +
        "Sono entrato nel gruppo più tardi rispetto all'età media di partecipazione, ma ho comunque trovato un <b>ambiente accogliente</b> che frequento ancora oggi. " +
        "Il prossimo anno sarà il mio <b>ultimo</b>, e anche se sono stati pochi anni, mi hanno permesso di scoprire molte cose su di me: lati e passioni che prima non conoscevo. <br><br>" +
        "Verso luglio 2023, alcuni dei miei amici scout mi hanno proposto un'avventura: un'<b>escursione in montagna</b> completamente <b>autonoma</b>. " +
        "<br>Ho accettato l'opportunità senza esitazione, poiché non avevo mai affrontato una sfida del genere prima. " +
        '<br><br><a onclick="leggiMeno()" class="select-text cursor-pointer text-indigo-500 hover:text-indigo-800"> leggi meno. </a>';

    ris.innerHTML = out;
}

function leggiMeno() {
    var ris = document.getElementById("premessaTxt");
    var out =
        " Durante il periodo di lockdown ho capito che stavo sprecando preziose opportunità per crescere come persona. " +
        " In seguito ad esso, ho quindi deciso di prendere in mano la mia vita e di fare delle scelte che mi avrebbero permesso di <b>migliorare</b>. <br>" +
        "<br> Una delle decisioni più significative è stata quella di unirmi agli <b>scout</b>. " +
        '<br><br>  <a onclick="leggiAncora()" class="select-text cursor-pointer text-indigo-500 hover:text-indigo-800"> continua a leggere... </a>';

    ris.innerHTML = out;
}

function scrollleft() {
    var container = document.getElementById("scrollableContainer");
    container.scrollBy({
        left: -300,
        behavior: "smooth",
    });
}

function scrollRight() {
    var container = document.getElementById("scrollableContainer");
    container.scrollBy({
        left: 300,
        behavior: "smooth",
    });
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}
