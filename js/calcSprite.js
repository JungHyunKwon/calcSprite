/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name 숫자 확인
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		function _isNumeric(value) {
			return typeof value === 'number' && !isNaN(value) && isFinite(value);
		}

		/**
		 * @name 소수점 절사
		 * @param {number} value
		 * @param {number} decimal
		 * @return {number}
		 * @since 2018-07-13
		 */
		function _toFixed(value, decimal) {
			var result = NaN;
			
			//값이 숫자일 때
			if(_isNumeric(value)) {
				result = value;
				
				//소수가 숫자일 때
				if(_isNumeric(decimal)) {
					var splitValue = value.toString().split('.'),
						splitValue1 = splitValue[1];
					
					//소숫점이 있을 때
					if(splitValue1) {
						splitValue[1] = splitValue1.substring(0, decimal);
						result = parseFloat(splitValue.join('.'), 10);
					}
				}
			}

			return result;
		}

		/**
		 * @name calcSprite
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

			//좌표가 숫자이면서 나미저 변수들이 숫자이면서 0 초과일 때
			if(_isNumeric(size) && size > 0 && _isNumeric(from) && from > 0 && _isNumeric(to) && to > 0 && _isNumeric(position)) {
				var ratio = from / to,
					pixel = result.pixel,
					pixelSize = size / ratio,
					pixelPosition = position / ratio,
					percent = result.percent;

				pixel.size = Math.round(pixelSize);
				percent.size = _toFixed(pixelSize / to * 100, 2);
				pixel.position = Math.round(pixelPosition);
				percent.position = _toFixed(Math.abs(pixelPosition / (pixelSize - to) * 100), 2);
			}

			return result;
		};
	})();
}catch(e) {
	console.error(e);
}