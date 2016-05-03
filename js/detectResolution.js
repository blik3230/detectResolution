(function($) {	
	var defaultOptions = {
		breakpoints: {

			xsmall: {				
					finish: 767
				},

			small: {
					start: 768,
					finish: 991
				},

			medium: {
					start: 992,
					finish: 1279
				},

			large: {
					start: 1280,
					finish: 1365
				},

			xlarge: {
					start: 1366
				}
		},
		eventChangeResolution: true
	}

	$.initDetectResolution = function(options) {
		var curResolution,
			$window = $(window);

		options = $.extend(defaultOptions, options);

		var getResolution = function(width) {
			var bp = curResolution ? options.breakpoints[curResolution]: null;

			if( bp && ((bp.start && width >= bp.start) || !bp.start)  && ((bp.finish && width <= bp.finish) || !bp.finish) ) return curResolution;

			for (i in options.breakpoints) {
				bp = options.breakpoints[i];

				if ( ((bp.start && width >= bp.start) || !bp.start)  && ((bp.finish && width <= bp.finish) || !bp.finish) ) return i;
			}
		}

		var detectResolution = function() {
			var resolution = getResolution($window.width());

			if(resolution === curResolution) return;

			$window.trigger('off' + curResolution);
			$window.trigger('on' + resolution);

			if(options.eventChangeResolution) {
				$window.trigger('changeresolution', [resolution]);
			}

			curResolution = resolution;
		}

		$window.load(detectResolution);
		$window.resize(detectResolution);

		console.assert(getResolution(772) == 'small', 'getResolution(772)');
		console.assert(getResolution(630) == 'xsmall', 'getResolution(630)');
		console.assert(getResolution(1074) == 'medium', 'getResolution(1074)');
		console.assert(getResolution(430) == 'xsmall', 'getResolution(430)');
		console.assert(getResolution(780) == 'small', 'getResolution(780)');
		console.assert(getResolution(700) == 'xsmall', 'getResolution(700)');
		console.assert(getResolution(999) == 'medium', 'getResolution(999)');
		console.assert(getResolution(1359) == 'large', 'getResolution(1359)');
		console.assert(getResolution(1829) == 'xlarge', 'getResolution(1829)');
	}
	
})(jQuery);

	$.initDetectResolution({
		eventChangeResolution: true
	});

	$(window).on('onxlarge', function(){
		console.log('onX-Large');
	});

	$(window).on('onlarge', function(){
		console.log('onLarge');
	});

	$(window).on('onmedium', function(){
		console.log('onMedium');
	});

	$(window).on('onsmall', function(){
		console.log('onSmall');
	});

	$(window).on('onxsmall', function(){
		console.log('onX-Small');
	});



	$(window).on('offxlarge', function(){
		console.log('endX-Large');
	});

	$(window).on('offlarge', function(){
		console.log('endLarge');
	});

	$(window).on('offmedium', function(){
		console.log('endMedium');
	});

	$(window).on('offsmall', function(){
		console.log('endSmall');
	});

	$(window).on('offxsmall', function(){
		console.log('endXSmall');
	});

	$(window).on('changeresolution', function(e, resolution){
		console.log('changeresolution   =' , resolution);
	});

