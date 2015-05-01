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
			$(tabActual).fadeIn(1500);
			return false;
		});
		
		$("a.mostrar2").click(function() {
			$("#newPlataforma2 #ver2").show();
				
			$("#mostrar2").text("Ocultar Contenido");
			
			Ocultar();
			return false;
		});
		
		function Mostrar(){
			$("a.mostrar2").click(function() {
			$("#newPlataforma2 #ver2").show();
				
			$("#mostrar2").text("Ocultar Contenido");
			
			Ocultar();
			return false;
			});
		}
		
		function Ocultar(){
			$("a.mostrar2").click(function(){
				$("#newPlataforma2 #ver2").hide();	
					
				$("#mostrar2").text("Mostrar Contenido");
				Mostrar();
				return false;
			});
		}
	}
);