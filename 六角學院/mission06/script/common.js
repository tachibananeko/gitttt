$('#index_back').click(function(){location.href="index.html"})

function showBox(text){
    $('#alert_mask').css('display','')
    $('#alert_mask .alert_box').text(text);
    setTimeout(function(){
        $('#alert_mask').css('display','none')
    },2000)
}

$('#menuBar').click(function(){$('#ph_menu').toggleClass('on')})
$(window).resize(function(){ $('#ph_menu').removeClass('on')})
$('#ph_menu').click(function(){ $('#ph_menu').removeClass('on')})
