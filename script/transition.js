//Transition: Lånad från youtuber https://www.youtube.com/watch?v=ckJ7gdIeebc där jag kodade samtidigt. 
// Användarens githubrepo för lösningen https://github.com/TylerPottsDev/js-page-transitions-basic
// Jag utgick ifrån videon men fick korrigera då jag stötte på 
// error på targetURL (när jag klickar på länken till sidan jag redan befann mig på)
// Löste det genom att lagra href värdet från elementet jag klickat på, vilket försäkrar mig om att länken är korrekt.

window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');
    let targetURL = ''; // Korrigering från urpsrungskod, lagra targetURL.

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 400);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
        anchor.addEventListener('click', e => {
            e.preventDefault();

            // Lagra targetURL från länken jag klickat på
            targetURL = anchor.getAttribute('href');

            transition_el.classList.add('is-active');
            setTimeout(() => {
                window.location.href = targetURL;
            }, 400);
        });
    }
};