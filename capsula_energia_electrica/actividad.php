<?php
	$CI = require('../../ci_instance.php');
	require('../../config.php');

	$cedula = $CI->db->escape($_GET['cedula']);
	$nombre_capsula = $CI->db->escape($_GET['nombre_capsula']);

	$sql = "SELECT *
			FROM capsulas_qr 
			WHERE cedula = $cedula
			AND nombre_capsula = $nombre_capsula 
			AND preguntas_correctas IS NOT NULL";

	$realizado = @$CI->db->query($sql)->result_array();

	if(!empty($realizado)){
		header("Location: realizado.php");
		exit();
	}
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- library bootstrap v.5.0.2 -->
	<link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap-grid.css">
	<link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap-reboot.css">
	<link rel="stylesheet" type="text/css" href="assets/css/cards.css">
	<link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap-utilities.css">
	<link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap-icons.css">
	<script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
	<script src="assets/bootstrap/js/bootstrap.esm.js"></script>
	<script src="assets/bootstrap/js/bootstrap.js"></script>
	<script src="assets/js/jquery-3.3.1.js"></script>
	<script src="assets/js/touch-dnd.js"></script>
	<!-- library cascading style sheets -->
	<link rel="stylesheet" type="text/css" href="assets/css/all.css">
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
	<link rel="stylesheet" type="text/css" href="assets/css/styleSlider.css">
	<link rel="stylesheet" type="text/css" href="assets/css/switch.css">

	<!--Library Template-->
	<!-- <link rel="stylesheet" type="text/css" href="assets/css/template/style-template.css">
	<link rel="stylesheet" type="text/css" href="assets/css/template/custom.css"> -->
	<link rel="stylesheet" type="text/css" href="assets/css/template/font-icons.css">

	<link rel="stylesheet" href="assets/js/jplayer/lib/circle-player/skin/circle.player.css">
	<link rel="stylesheet" href="assets/js/magnify/css/magnify.css" />
	
	<!-- TOUR -->
	<link rel="stylesheet" href="assets/js/introjs/introjs.css">
	<!--Libreria iconos-->
	<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous"> -->
	<!-- Font Icons -->
	<!-- <link rel="stylesheet" href="css/font-icons.css"> -->
	

	<!-- <script type="text/javascript" src="assets/js/jplayer/lib/jquery.min.js"></script> -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script type="text/javascript" src="assets/js/jplayer/dist/jplayer/jquery.jplayer.min.js"></script>
	<script type="text/javascript" src="assets/js/jplayer/lib/circle-player/js/jquery.transform2d.js"></script>
	<script type="text/javascript" src="assets/js/jplayer/lib/circle-player/js/jquery.grab.js"></script>
	<script type="text/javascript" src="assets/js/jplayer/lib/circle-player/js/mod.csstransforms.min.js"></script>
	<script type="text/javascript" src="assets/js/jplayer/lib/circle-player/js/circle.player.js"></script>
	<!-- TOUR -->
	<script type="text/javascript" src="assets/js/introjs/intro.js"></script>
	  <!-- Para Tooltip -->
	  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</head>

<body>
	<input type="text" id="nombre_capsula" value="<?=$nombre_capsula = isset($_GET['nombre_capsula']) ? $_GET['nombre_capsula'] : '';?>" hidden>
	<input type="text" id="cedula" value="<?=isset($_GET['cedula']) ? $_GET['cedula'] : '';?>" hidden>
	<!-- header -->
	<div class="contentHeader">
		<div>
			<img class="logoTop logoRes" src="assets/img/logoG.png" onclick="progCircle(1);">

			<!-- Switch English hints -->
			<div class="container2">
				<label class="toggle-switch">
					<input type="checkbox" id="toggleSwitch">
					<span class="slider" id='englishHints'></span>
				</label>
				<span class="toggle-label english-hints">English Hints</span>
			</div>

			<!-- button home -->
			<div>
				<button id="home" onclick="progCircle(1);">
					<i class="fas fa-home"></i>
				</button>
			</div>
			<!-- progress counter -->
			<div class="txPg" id="slide_progress">
				<span id="textProg">1</span> / <span id="nSlider"></span>
				
			</div>
		</div>
	
		 <!--BARRA DE PROGRESO PC -->
		 <div class="contCircleBar contCircleBar-nav-bar">
        </div>

        <!--BARRA DE PROGRESO MOVIL -->
        <div class="progBar">
            <div style="width: 10% !important;"></div>
        </div>
	</div>

	<!-- content slider -->
	<div class="ctMd">
		<!-- content -->
		<div class="contentModule">
			<!--Star slider01 Reflexionemos-->
			<div class="container current">
				<div class="row">
					<div>
						<p class="indPag">
							<a href="#">Cápsula de Refuerzo QR</a>
						</p>
						<span class="indPagMb"></span>
					</div>	
					<div class="col-lg-12 col-md-12">
						<h1 class="tituloh1-center">Energía Eléctrica </h1>
						<hr>
						<p class="parrafo-center">Observa atentamente este video que te permitirá conocer este tipo de ENERGÍA PELIGROSA en nuestra operación, y las recomendaciones para prevenir sus riesgos:</p>		
					</div>	
					
					<div class="col-lg-6 col-md-12">
						
						<div class="media-espanol contenedor-center">
							<video controls poster="assets/img/poster.jpg" class="mx-auto videocontainer">
								<source src="assets/video/Energia_Electrica.mp4" type="video/mp4">
							</video>
						</div>
						<div class="media-ingles contenedor-center">
							<video controls poster="assets/img/poster_ingles.jpg" class="mx-auto videocontainer">
								<source src="assets/video/Energia_Electrica_ingles.mp4" type="video/mp4">
							</video>
						</div>
						<i class="inst mb-2 mobile-mostrar">Continuemos, haz clic en las flechas para avanzar</i>		
					</div>
						
					<div class="col-lg-6 col-md-12 pc-mostrar">
						<img src="assets/img/Carl-levantando-trompita.png" alt="" class="imagen-80">
					</div>

				</div>
			</div>
		<!--End slider01 Reflexionemos-->

		<!--slider 02 actividad-->
		<div class="container">
			<div class="row">
				<div>
					<p class="indPag">
						<a href="#">Actividad</a>
					</p>
					<span class="indPagMb"></span>
				</div>
			<div class="col-lg-6 col-md-12">
				<h1 class="tituloh1-center">Actividad de refuerzo</h1>
				<p class="parrafo-center" >Ahora apliquemos lo visto en el video anterior, realizando esta actividad de refuerzo</p>
				<img src="assets/img/pastilla.png" alt="" class="imagen-40 pc-mostrar">
			</div>
			<div class="col-lg-6 col-md-12">
				<i class="inst mb-2">Selecciona la opción correcta en la lista desplegable de acuerdo con el siguiente texto:</i>
				<div class="activity">
					<p>
					  Debe evitarse la utilización de equipos 
					  <span class="custom-select-wrapper">
						<select id="drop1" class="custom-select word-select">
						  <option value="" disabled selected>Seleccione...</option> <!--electricos-->
						</select> 
					  </span>
					  en caso de lluvia o humedad cuando los 
					  <span class="custom-select-wrapper">
						<select id="drop2" class="custom-select word-select">
						  <option value="" disabled selected>Seleccione...</option> <!--cables-->
						</select>
					  </span>
					  u otro material eléctrico atraviesen  
					  <span class="custom-select-wrapper">
						<select id="drop3" class="custom-select word-select">
						  <option value="" disabled selected>Seleccione...</option><!--charcos-->
						</select>
					  </span>, 
					  los pies pisen agua o alguna parte del cuerpo esté mojada.
					  <br>En ambientes 
					  <span class="custom-select-wrapper">
						<select id="drop4" class="custom-select word-select">
						  <option value="" disabled selected>Seleccione...</option><!--húmedos-->
						</select>
					  </span>
					  hay que asegurarse de que todos los elementos de la instalación responden a las condiciones de utilización.
					  Debe evitarse realizar reparaciones 
					  <span class="custom-select-wrapper">
						<select id="drop5" class="custom-select word-select">
						  <option value="" disabled selected>Seleccione...</option><!--provisionales-->
						</select>
					  </span>. 
					  <br>Los cables 
					  <span class="custom-select-wrapper">
						<select id="drop6" class="custom-select word-select">
						  <option value="" disabled selected>Seleccione...</option><!--dañados-->
						</select>
					  </span>
					  hay que reemplazarlos por otros nuevos. 
					  Toda máquina portátil eléctrica deberá disponer de un sistema de 
					  <span class="custom-select-wrapper">
						<select id="drop7" class="custom-select word-select">
						  <option value="" disabled selected>Seleccione...</option><!--protección-->
						</select>
					  </span>. El más usual es el doble aislamiento.
					</p>
				</div>
				<br>
				<div style="text-align:center;">
					<p hidden id="p_respuestas"><strong><span id="respuestas_correctas"></span> respuestas correctas de 7</strong></p>
				</div>
				<br>
				<div class="pc-slideflex2">
					<button class="btn btn-validar" onclick="validateSelects();" ><i class="fas fa-check"></i> Validar</button>
					<button class="btn btn-reiniciar" onclick="resetSelects();"> <i class="fas fa-sync"></i> Reiniciar</button>
				</div>
				<br>
				<i class="instfinalizar  mb-2">Haz clic en Finalizar para guardar tu resultado</i>
			  <button class="btn btn-finalizar" disabled style="color: #fff; background: #009A3D; padding: 10px 30px; border-radius: 30px 0px 30px 30px; border: none; font-size: 1.2rem; box-shadow: rgb(0 160 175 / 30%) 0px 8px 24px;">Finalizar</button>
			</div>
			</div>
		</div>


	<!-- sliderfinal NO REMOVER -->   
	<div class="container">
		<h1></h1>
	</div>
		</div>
	
	</div>

	<!-- button next & prev -->
	<button id="prev" class="bntNextPrev">
		<i class="fas fa-angle-left"></i>
	</button>
	<!-- button next & prev -->
	<button id="next" class="bntNextPrev">
		<i class="fas fa-angle-right"></i>
	</button>

	 <div class="contentFooter">
		<!--<div class="contCircleBar">
		</div>-->
		<img src="assets/img/ftImg01.png">
	</div> 

	<!-- library javascript -->
	<script src="assets/js/getProgressActivity.js"></script>
	<script src="assets/js/trackingmanager_activities.js"></script>
	<script src="assets/js/trackingmanagern3.js"></script>
	<script src="assets/js/sessvars.js"> </script>
	<script src="assets/js/touch-dnd.js"></script>
	<script src="assets/js/script.js"></script>
	<script src="assets/js/interactividad.js"></script>
	
	<script>

		createCirclesMovil();

		$(".btn-finalizar").on("click", function(){
			let nombre_capsula = $('#nombre_capsula').val();
			let cedula = $('#cedula').val();  
			let numero_preguntas = 7;  
			let preguntas_correctas_2 = $('#respuestas_correctas').text();  

			$.ajax({
				type: "POST",
				url: "../../functions_helpers.php?capsula_qr=energia_termica&update_capsula=1",
				dataType: "json",
				data:{
					nombre_capsula:nombre_capsula,
					cedula:cedula,
					numero_preguntas:numero_preguntas,
					preguntas_correctas:preguntas_correctas_2,
				},
				success: function(res){
					if (res.message == '1') {
						window.location.href = "fin.php";
					}else{
						window.reload();

					}
				}
			});    
      	});

	</script>
</body>

</html>