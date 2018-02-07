// Move GIF with mouse
	var lFollowX = 0;
    var lFollowY = 0;
    var x = 0;
    var y = 0;
    var friction = 1 / 5;

	function moveBackground() {

		x += (lFollowX - x) * friction;
		y += (lFollowY - y) * friction;

		$('.positionx').text(x);
		$('.positiony').text(y);

		translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.2)';

		$('.stage').css({
			'-webit-transform': translate,
			'-moz-transform': translate,
			'transform': translate
		});

		window.requestAnimationFrame(moveBackground);

	}

	$(window).on('mousemove click', function(e) {

		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
		var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
		lFollowX = (200 * lMouseX) / 100;
		lFollowY = (80 * lMouseY) / 100;

	});

	moveBackground();

	// Random number generator
	setInterval(function(){
		ChangeNumber1(); 
		ChangeNumber2(); 
		ChangeNumber3(); 
	}, 50);
	function ChangeNumber1() {
		var newNumber = Math.floor(Math.random(9) * 1000000);
		$('#randomnumber1').text(newNumber);
	}
	function ChangeNumber2() {
		var newNumber = Math.floor(Math.random(9) * 100000000);
		$('#randomnumber2').text(newNumber);
	}
	function ChangeNumber3() {
		var newNumber = Math.floor(Math.random(9) * 10000000000);
		$('#randomnumber3').text(newNumber);
	}

	setInterval(function(){
		ChangeNumber4(); 
	}, 1500);
	function ChangeNumber4() {
		var newNumber = Math.floor(Math.random(9) * 100000);
		$('#randomscan').text(newNumber);
	}

	// Load in dimensions
	setTimeout(function(){ $('.dimension1').addClass('show') }, 1000);
	setTimeout(function(){ $('.dimension2').addClass('show') }, 2000);
	setTimeout(function(){ $('.dimension3').addClass('show') }, 3000);
	setTimeout(function(){ $('.dimension4').addClass('show') }, 4000);
	setTimeout(function(){ $('.dimension5').addClass('show') }, 5000);

var $ticker = $('[data-ticker="list"]'),
    tickerItem = '[data-ticker="item"]'
    itemCount = $(tickerItem).length,
    viewportWidth = 0;

function setupViewport(){
    $ticker.find(tickerItem).clone().prependTo('[data-ticker="list"]');
    
    for (i = 0; i < itemCount; i ++){
        var itemWidth = $(tickerItem).eq(i).outerWidth();
        viewportWidth = viewportWidth + itemWidth;
    }
    
    $ticker.css('width', viewportWidth);
}

function animateTicker(){
    $ticker.animate({
        marginLeft: -viewportWidth
      }, 30000, "linear", function() {
        $ticker.css('margin-left', '0');
        animateTicker();
      });
}

function initializeTicker(){
    setupViewport();
    animateTicker();
    
    $ticker.on('mouseenter', function(){
        $(this).stop(true);
    }).on('mouseout', function(){
        animateTicker();
    });
}

initializeTicker();

$("input[type=text], textarea").on({ 'touchstart' : function() {
    zoomDisable();
}});
$("input[type=text], textarea").on({ 'touchend' : function() {
    setTimeout(zoomEnable, 500);
}});

function zoomDisable(){
  $('head meta[name=viewport]').remove();
  $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />');
}
function zoomEnable(){
  $('head meta[name=viewport]').remove();
  $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1" />');
}