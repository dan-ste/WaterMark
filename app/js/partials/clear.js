var $ = require('jquery');
require('./positioning');
require('./opacity-slider')();
require('./change-mode');

function clear () {
	$('.clearbutton').on('click', _clearButton);
	
	function _clearButton () {
		console.log('возвращаю прозрачность');
		$(".settings-inputs-block").css('opacity', '0.5');
    $(".clearbutton").css('opacity', '0.5');
		$(".settings-position-extra").css('opacity', '0.5');
    $(".settings-position-block__left").css('opacity', '0.5');
    $(".settings-position-block__right").css('opacity', '0.5');
    $(".settings-opacity__wrap").css('opacity', '0.5');
    console.log('возвращаю положение');
    $('#position-control-X').spinner('value', 0);
    $('#position-control-Y').spinner('value', 0);
    $('.viewport-inner__water-mark').css({
    	top: '0',
    	left: '0',
    	opacity: '1'
    });
    $("#sliderOpacity").slider({value: 0});
    changeModeModul.modOne();
	}
}
	
module.exports = clear;