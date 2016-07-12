
(function () {

	function first() {
			var answer;


		for (var i =0 ; i<arguments.length-1; i++) {
			var type = typeof(arguments[i]);
					
			if (typeof(arguments[i]) !== typeof(arguments[i+1]))
			{
				console.log("Не одинаковые типы")
				break;
			}
			else 
			
		switch (type) {
		case "number" :Number(answer); answer += arguments[i];
		case "string" :String(answer); answer+=arguments[i];		
		case "Object" :Object(answer); answer = answer.concat(arguments[i]);
	}
	}
	return answer;
	}	
		console.log(first (6,4,5,6,4,5,6,4,5))
	})();