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
						<h1 class="tituloh1-center">Energía Neumática</h1>
						<hr>
						<p class="parrafo-center">Observa atentamente este video que te permitirá conocer este tipo de ENERGÍA PELIGROSA en nuestra operación, y las recomendaciones para prevenir sus riesgos:</p>		
					</div>	
					
					<div class="col-lg-6 col-md-12">
						
						<div class="media-espanol contenedor-center">
							<video controls poster="assets/img/poster_neumatica.png" class="mx-auto videocontainer">
								<source src="assets/video/Energia_Neumatica.mp4" type="video/mp4">
							</video>
						</div>
						<div class="media-ingles contenedor-center">
							<video controls poster="assets/img/poster_neumatica_ingles.png" class="mx-auto videocontainer">
								<source src="assets/video/Energia_Neumatica_Ingles.mp4" type="video/mp4">
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
		<div class="container preguntas_01">
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
				<i class="inst mb-2">Seleccione las tres (3) recomendaciones que corresponden a la Energía Neumática</i>
				<div class="ctItem text-parrafocasos" id='actividad_h_04' >
					<div>
						<p onclick="Questions4(this, true)">a. Los pistones suspendidos en pleno movimiento pueden almacenar energía de la gravedad.</p> <!--respuesta correcta-->
						<p onclick="Questions4(this, false)">b. Llevar el pelo largo siempre recogido y bien sujeto.</p> 
						<p onclick="Questions4(this, true)">c. Aplique el dispositivo de bloqueo asignado, (candados o bridas) para mantener el equipo en una posición segura.</p> <!--respuesta correcta-->
						<p onclick="Questions4(this, false)">d. Antes de iniciar cualquier trabajo en baja tensión, se considerará que todos los cables conductores llevan corriente eléctrica.</p> 
						<p onclick="Questions4(this, true)">e. Si la máquina o el equipo está en funcionamiento, apáguelo siguiendo los procedimientos normales de apagado del fabricante o del empleador.</p> <!--respuesta correcta-->
					</div>
					<i class="inst" id='respuesta4' style="display:none;"></i>
					<br>
					<p hidden id="p_resultado" style="text-align: center; color:#181818">
						Su resultado porcentual es del: 
						<strong><span id="resultado"></span>%</strong>
					</p>
					<input type="text" id="respuestas_correctas" hidden value="">

					<div style="display: flex;">
						<button class="btn" id='btn-valid4' onclick="valid4(3)"><i class="fa fa-check"></i> Validar</button>
						<button class="btn" id="reiniciar4" onclick="reiniciarActividad($('#actividad_h_04'), [], 2,4)" disabled><i class="fas fa-sync"></i> Reiniciar</button>
					</div>
				</div>
				<br>
				<i class="instfinalizar  mb-2">Haz clic en el botón para guardar tu resultado</i>
			  	<button class="btn btn-finalizar" disabled style="color: #fff; background: #009A3D; padding: 10px 30px; border-radius: 30px 0px 30px 30px; border: none; font-size: 1.2rem; box-shadow: rgb(0 160 175 / 30%) 0px 8px 24px;"><i class="fas fa-check-circle"></i> Guardar Resultado</button>
			
			</div>

			</div>

			<!--Modal-->
			<div class="modal fade" id="surveymd01" tabindex="-1" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">RESULTADO ACTIVIDAD</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<div style="text-align:center;">
								<p><b>Tu puntuación en la actividad fue de:</b></p>
								<p hidden id="p_respuestas_modal" style="color:#181818"><strong><span id="respuestas_correctas_modal"></span> respuesta(s) correctas de 3</strong></p>
								<br>
								<p hidden id="p_resultado_modal" style="color:#181818">
									Su resultado porcentual es del: 
									<strong><span id="resultado_modal"></span>%</strong>
								</p>
								<p class="instfinalizar"><em></em></p>
								<i class="inst mb-2" style="font-size: 16px!important;"><em>Recuerda que este puntaje se guardará</em></i>
							</div>
							<br>
							<div style="text-align:center;">
								<p>¿Te gustaría volver a realizar la actividad?</p>
								<button class="btn btn-reiniciar" onclick="reiniciarActividad($('#actividad_h_04'), [], 2,4)"> <i class="fas fa-sync"></i> Reiniciar</button>
							</div>
							<div style="text-align:center;">
								<br><br>
								<p >De lo contrario, haz clic en el botón</p>
								<button class="btn btn-finalizar" disabled style="color: #fff; background: #009A3D; padding: 10px 30px; border-radius: 30px 0px 30px 30px; border: none; font-size: 1.2rem; box-shadow: rgb(0 160 175 / 30%) 0px 8px 24px;">
									<i class="fas fa-check-circle"></i> Guardar Resultado</button>
							</div>
							<br>
						</div>
					</div>
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
			let numero_preguntas = 3;  
			let preguntas_correctas = $('#respuestas_correctas').val();  
			$.ajax({
				type: "POST",
				url: "../../functions_helpers.php?capsula_qr=energia_neumatica&update_capsula=1",
				dataType: "json",
				data:{
					nombre_capsula:nombre_capsula,
					cedula:cedula,
					numero_preguntas:numero_preguntas,
					preguntas_correctas:preguntas_correctas,
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