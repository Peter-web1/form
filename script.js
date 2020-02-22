$('.carousel').carousel({
    interval: 2000,
    /*wrap: false, по прошествию слайда -остановка */
})

$('#exampleModal').modal({
    /* keyboard:false,*/
    /*keyboard:false- не даст закрывать окно кнопкой Esc, и само выскакивает окно*/
    backdrop: "static",
    show: false
    /*backdrop: "static"- не даст закрывать окно нажимая вне окна*/
})
/*.modal({ show: false})*/
/* по стандарту стоит при обновлении сайта  show: true в js , поменяйте на show: false*/