// SOLUZIONE 1 (NON BELLISSIMA)
// -----------------------------------------------------------------------------
// MENU CHE APPARE E SCOMPARE CON DELLE FADEIN/FADEOUT
// -----------------------------------------------------------------------------
// // gestisco l'evento click sull'icona hamburger
// $('.header-right>a').click(function() {
//     // quando l'hamburger viene cliccato, mostro, con effetto fadeIn, l'hamburger menu
//     $('.hamburger-menu').fadeIn(2000);
// });
//
// // gestisco l'evento click sull'icona "X"
// $('.hamburger-menu>a').click(function() {
//     // quando la "X" viene cliccata, nascondo, con effetto fadeOut, l'hamburger menu
//     $('.hamburger-menu').fadeOut(1000);
// });



// SOLUZIONE 2 (PIU' CORRETTA)
// -----------------------------------------------------------------------------
// MENU CHE APPARE E SCOMPARE PER L'AGGIUNTA/RIMOZIONE DELLA CLASSE .ACTIVE
// -----------------------------------------------------------------------------
// // gestisco l'evento click sull'icona hamburger
// $('.header-right>a').click(function() {
//     // quando l'hamburger viene cliccato, mostro l'hamburger menu
//     $('.hamburger-menu').addClass('active');
// });
//
// // gestisco l'evento click sull'icona "X"
// $('.hamburger-menu>a').click(function() {
//     // quando la "X" viene cliccata, nascondo l'hamburger menu
//     $('.hamburger-menu').removeClass('active');
// });



//
// SOLUZIONE 3 (VERSIONE SUGGERITA DA LUCA)
// -----------------------------------------------------------------------------
// MENU CHE APPARE E SCOMPARE DAL LATO SINISTRO
// -----------------------------------------------------------------------------
//gestisco l'evento click sull'icona hamburger
$('.header-right>a').click(function() {
    // quando l'hamburger viene cliccato mostro il menu aggiungendo la classe enter che contiene un'animazione
    $('.hamburger-menu').addClass('active inside');
    $('.hamburger-menu').removeClass('outside');
});

// gestisco l'evento click sull'icona "X"
$('.hamburger-menu>a').click(function() {
    // quando la "X" viene cliccata nascondo il menu aggiungendo la classe enter che contiene un'animazione
    $('.hamburger-menu').addClass('outside');
    $('.hamburger-menu').removeClass('inside');
});