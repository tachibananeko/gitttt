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


// 確認資訊狀態
let listStatus = 0;

function cKlistStatus() {
    let winW = $(window).width();
    $('#padList01 ,#padList02').removeClass('--on');
    if (winW > 1180) {
        switch (listStatus) {
            case 0:
            case 1:
                $('#detailBoxTitle>span').removeClass('--on')
                $('#detailBoxTitle>span:eq(0)').addClass('--on')
                caseA();
                break;
            case 2:
                $('#detailBoxTitle>span').removeClass('--on')
                $('#detailBoxTitle>span:eq(1)').addClass('--on')
                caseB();
                break;
        }
    } else {
        $('#padChange li').removeClass('--on');
        switch (listStatus) {
            case 0:
                $('#padList01,#padChange li:eq(0)').addClass('--on');
                break;
            case 1:
                $('#padChange li:eq(1)').addClass('--on');
                caseA();
                break;
            case 2:
                $('#padChange li:eq(2)').addClass('--on');
                caseB();
                break;
        }
    }

    function caseA() {
        $('#padList02').addClass('--on');
        $('#padList022').css('display', 'none');
        $('#padList021').css('display', 'block');
    }

    function caseB() {
        $('#padList02').addClass('--on');
        $('#padList02').addClass('--on');
        $('#padList021').css('display', 'none');
        $('#padList022').css('display', 'block');
    }

}

$(window).resize(function() {
    start()
})

function start() {
    let winW = $(window).width()
    if (winW < 996) {
        $('#padList01,#padList02').css('display', 'none')
        $('#frame').removeClass('--tableOpen')
        $('#frame').removeClass('--bigTv');

    } else {
        $('#padList01,#padList02').css('display', '')
        $('#padList01').addClass('--on')
    }

    if (winW >= 996) {
        $('#tableTitle').mouseenter(function() {
            $('#frame').addClass('--tableOpen');
        })
        $('#tableBody').mouseleave(function() {
            $('#frame').removeClass('--tableOpen')
        })
    }
    cKlistStatus()
}

start()


$('#tablephBtn').click(function() {
    $('#frame').toggleClass('--tableOpen');
})

// 卡號資訊切換
$('#cardTitle li').click(function() {
    $('#cardTitle li').removeClass('--on')
    $(this).addClass('--on')

    let data = this.getAttribute("data-txt");
    switch (data) {
        case 'All':
            $('#frame').addClass('--cardOpen');
            break;
        default:
            $('#frame').removeClass('--cardOpen');
    }
})

// 詳細資訊切換
// 小畫面 996以下
$('#phChange li').click(function() {
    var index = $('#phChange li').index(this)
    switch (index) {
        case 0:
            $('#padList01').addClass('--on')
            $('#padList01').css('display', 'flex')
            listStatus = 0;
            break;
        case 1:
            $('#padList02').addClass('--on')
            $('#padList02').css('display', 'flex')
            listStatus = 1;
            break;
    }
    cKlistStatus()
})


// 小畫面 1180以下
$('#padChange li').click(function() {
    $('#padChange li').removeClass('--on');
    $(this).addClass('--on');
    let index = $('#padChange li').index(this)
    switch (index) {
        case 0:
            listStatus = 0;
            break;
        case 1:
            listStatus = 1;
            break;
        case 2:
            listStatus = 2;
            break;
    }
    cKlistStatus()
})

// 大畫面 大於1180
$('#detailBoxTitle>span').click(function() {
    $('#detailBoxTitle>span').removeClass('--on')
    $(this).addClass('--on')
    let data = this.getAttribute("data-txt");
    switch (data) {
        case '最新投注':
            listStatus = 1;
            break;
        case '下注統計':
            listStatus = 2;
            break;
    }
    cKlistStatus()
})


$('#closeBtn01').click(function() {
    $('#padList01').css('display', 'none')
})

$('#closeBtn02').click(function() {
    $('#padList02').css('display', 'none')
})