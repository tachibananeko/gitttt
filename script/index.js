var move = 0
		var list = $('.banner_group>div').length
		$(document).ready(function(){$(`.banner_group>div:eq(0)`).addClass('active')})	
		setInterval(function(){
			move == list - 1? move = 1 : move++

			if(move>0 && move < list - 1){
				goTransform(move, 0.5);
				setTimeout(function(){changeClass(move+1)},500);
			}
			else if(move == list - 1){
				goTransform(move, 0.5);
				setTimeout(function(){goTransform(0, 0);},500);
				setTimeout(function(){changeClass(1)},510)
			}	


		},4*1000)

		// 輪播位移 (page , time) ==> (位移幾頁 , 時間)
		// 只需填入位移多少頁，內部會位移 (頁數 * 100)%
		function goTransform(page,time){
			$('.banner_group').css('transform',`translateX(-${page * 100}%)`).css('transition',`${time}s`);
		}

		// 控制哪一個div需加上class ==> active
		function changeClass(name){
			$(`.banner_group>div:eq(${move-1})`).removeClass('active')
			$(`.banner_group>div:eq(${name-1})`).addClass('active')
		}







		var scroll = $(window).scroll(function () {
			for (var i = 1; i < 4; i++) {
				if (scroll.scrollTop() > $(`#hm_${i}`).offset().top + $(`#hm_${i}`).height() / 3 * 2) {
					$(`#hm_${i + 1}`).addClass('active')
				}
			}
		})