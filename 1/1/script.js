
(function () {

	function first() {
			var answer;
			 	type = typeof(arguments[0]);

		for (var i =0 ; i<arguments.length; i++) {
		
			if (typeof(arguments[i]) !== type )
			{
				throw('Разные типы');
							}

			}
			
		switch (type) {
		case "number" :answer=0;
		for (i = 0; i<arguments.length; i++)
		{
		 answer += arguments[i];
		}
		break;

		case "string" :answer="";
		for (i = 0; i<arguments.length; i++)
		{
		 answer += arguments[i];
		}break;		
		case "Object" :answer=[];
		for (i = 0; i<arguments.length; i++)
		{
		 answer = answer.concat(arguments[i]);
		}break;
	}
	
	return answer;
	}	
		console.log(first (6,4,5))
	})();

