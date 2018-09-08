/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function($) {
		'use strict';

		/**
		 * @name 스프라이트 계산
		 * @since 2018-09-05
		 * @param {number} size
		 * @param {number} from
		 * @param {number} to
		 * @param {number} position
		 * @return {object}
		 */
		window.calcSprite = function(size, from, to, position) {
			var result = {
				size : 0,
				position : 0
			};
			
			//숫자형 변환
			from = parseFloat(from, 10);
			to = parseFloat(to, 10);
			
			//0초과일때
			if(from > 0 && to > 0) {
				var ratio = from / to;
				
				size = parseFloat(size, 10);
				
				//0초과일때
				if(size > 0) {
					result.size = size / ratio;
				}

				position = parseFloat(position, 10);
				
				//NaN이 아니면서 Infinity가 아닐때
				if(position && position.toString().indexOf('Infinity') === -1) {
					result.position = position / ratio;
				}
			}

			return result;
		};
	})();
}catch(error) {
	console.error(error);
}