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
		
		$("ul.tabs li").click(function() {
			$("ul.tabs li").removeClass("active");
			$(this).addClass("active");
			$(".contenido-tab").hide();
			var tabActual = $(this).find("a").attr("href");
			$(tabActual).fadeIn();
		});
	}
);