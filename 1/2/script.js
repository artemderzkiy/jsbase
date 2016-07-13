
(function () {

	function second(num) {
		if (typeof(num) != 'number')
			throw('Введите число');

		num = num.toFixed(2);
		num = num.replace('.', ',');
		for (i = num.indexOf(','), threecount = 0; i >= 0; i--, threecount++) {
			if (threecount == 3) {
				num = [num.slice(0, i), ' ', num.slice(i)].join('');
				threecount = 0;
			}
		}
		return num;
	}

		console.log(second(45435435435435.5543543))
	})();