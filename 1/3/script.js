
(function () {

	function third() {
		var answer= false;
		var mas = [];
		var vhoj = arguments[1];
		vhoj.toString();
		vhoj=vhoj.toLowerCase();
		
		var ar = ["ab", "cd", "ef", "ab", "cd"];
		var b = "cd"
		


		for (var i =0 ; i<arguments[0].length; i++)
		{
			mas=mas.concat(arguments[0][i])
			mas[i]=mas[i].toLowerCase();
			
			answer= mas[i].indexOf(vhoj)==-1 ? false : true;
		}

		



		return answer;
	}	
	console.log(third (["ab", "Cd", "ef", "ab", "d"],"D"));
})();