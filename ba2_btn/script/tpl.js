let status = true;

//四種狀態
$('#frame li').click(function() {
    let data = this.getAttribute("data-txt");
    switch (data) {
        case '電投有卡':
            remove()
            $('#frame').addClass('frame --telType');
            break;
        case '電投無卡':
            remove()
            $('#frame').addClass('frame --telType --noCard');
            break;
        case '網投有卡':
            remove()
            $('#frame').addClass('frame');
            break;
        case '網投無卡':
            remove()
            $('#frame').addClass('frame --noOrder');
            break;
    }
})

function remove() {
    if (status) {
        $('#frame').removeClass()
    } else {
        $('#frame').removeClass()
        $('#frame').addClass('--bigTv')
    }
}

// 視訊放大
$('#videobig_btn').click(function() {
    status = !status;
    $('#frame').toggleClass('--bigTv')
})

//小於1024拿掉class ==> --bigTv
$(window).resize(function() {
    let winW = $(window).width()
    if (winW < 1024) {
        $('#frame').removeClass('--bigTv')
    }
})


$('#cardTitle li').click(function() {
    let data = this.getAttribute("data-txt");
    switch (data) {
        case 'All':
            $('#frame').addClass('--cardOpen');
            break;
        default:
            $('#frame').removeClass('--cardOpen');
    }
})