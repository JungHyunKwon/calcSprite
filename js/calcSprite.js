/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @since 2018-09-05
		 * @param {number} size
		 * @param {number} from
		 * @param {number} to
		 * @param {number} position
		 * @return {object}
		 */
		window.calcSprite = function(size, from, to, position) {
			var result = {
				pixel : {
					size : 0,
					position : 0
				},
				percent : {
					size : 0,
					position : 0
				}
			};
			
			//숫자형 변환
			from = parseFloat(from, 10);
			to = parseFloat(to, 10);
			
			//0초과일 때
			if(from > 0 && to > 0) {
				var ratio = from / to;
				
				size = parseFloat(size, 10);

				//0초과일 때
				if(size > 0) {
					result.pixel.size = size / ratio;
					result.percent.size = result.pixel.size / to * 100;
				}

				position = parseFloat(position, 10);

				//NaN이 아니면서 Infinity가 아닐 때
				if(position && position.toString().indexOf('Infinity') === -1) {
					result.pixel.position = position / ratio;
					result.percent.position = Math.abs(result.pixel.position / (result.pixel.size - to) * 100);
				}
			}

			return result;
		};
	})();
}catch(e) {
	console.error(e);
}