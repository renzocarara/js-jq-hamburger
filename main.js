// // seleziono le ancore figlie dirette di header-right
// // ovvero l'icona hamburger
// $('.header-right>a').click(function() {
//     // quando l'hamburger viene cliccato
//     // mostro, con effetto fadeIn, il menu verticale a tutto schermo
//     $('.hamburger-menu').fadeIn(2000);
// });
//
// // seleziono le ancore figlie dirette di hamburger-menu
// // ovvero l'icona "X"
// $('.hamburger-menu>a').click(function() {
//     // quando la "X" viene cliccata
//     // nascondo, con effetto fadeOut, il menu verticale a tutto schermo
//     $('.hamburger-menu').fadeOut(1000);
// });


// seleziono le ancore figlie dirette di header-right
// ovvero l'icona hamburger
$('.header-right>a').click(function() {
    // quando l'hamburger viene cliccato
    // mostro il menu verticale a tutto schermo
    // aggiungendo la classe active all'elemento menu verticale
    $('.hamburger-menu').addClass('active');
});

// seleziono le ancore figlie dirette di hamburger-menu
// ovvero l'icona "X"
$('.hamburger-menu>a').click(function() {
    // quando la "X" viene cliccata
    // nascondo il menu verticale a tutto schermo
    $('.hamburger-menu').fadeOut(1000);
});