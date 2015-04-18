$(document).ready(
	function(){
		$("#slider").skitter({
			animation:'random',	
			numbers: false,
			velocity:1,
			progressbar: false,
			progressbar_css:{
				backgroundColor:'red',
				width:920,
			}
		});
	}
);