<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--library bootstrap v.5.0.2-->
	<link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap-grid.css">
	<link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap-reboot.css">
	<link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap-utilities.css">
	<script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
	<script src="assets/bootstrap/js/bootstrap.esm.js"></script>
	<script src="assets/bootstrap/js/bootstrap.js"></script>
	<!--library cascading style sheets-->
	<link rel="stylesheet" type="text/css" href="assets/css/all.css">
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
	<link rel="stylesheet" type="text/css" href="assets/css/styleSlider.css">
	<link rel="stylesheet" type="text/css" href="assets/css/switch.css">
</head>
<body class="darkStyle">
	<!--header-->
	<div class="contentHeaderfin">
		<div>
			<img src="assets/img/logoW2.png" style="margin: 0 auto;">
			<div></div>
	
		</div>

	</div>

	<div class="ctMd">
		<!--content-->
		<div class="contentModule">

			<!--slider01-->
			<div class="container dividerBg current">
				<div class="row mx-auto" style="max-width:1000px;">
					<div class="col-lg-6 col-md-12">
						<h1 style="text-align: center; color:#fcc200; ">¡Felicitaciones!</h1>
						<h1 style="color: #fff; text-align: center;">Has completado exitosamente la actividad</h1>
						<p style="color: #fff; text-align: center;">Ahora sigue buscando más códigos QR para continuar aprendiendo de las ENERGIAS PELIGROSAS que hay en tu operación</p>
						<!--<button class="btn mt-3s">Iniciar</button>-->
					</div>
					<div class="col-lg-6 col-md-12">
						<img class="mx-auto" src="assets/img/carl_codigo_qr.png">
					</div>
				</div>
			</div>

		</div>
	</div>

	<!--button next & prev-->
	<!-- <button id="pagIndex" class="bntNextPrev" onclick="btnPrev()" style="left: 10px;">
    <i class="fas fa-angle-left"></i>
  </button> -->

  <!-- library javascript -->
	<script src="assets/js/jquery-3.3.1.js"></script>

	<script>
	// function btnPrev(){
	// 	window.location.href = "modulo.html";
	// 	// window.location.href = "modulo.php?course_code=<?= $course_code; ?>";
	// };

    //function bar menu
		$(".fa-bars").on("click", function(){
			$(".opMenu").toggle();
		});

		//function bar menu
		$(".fa-bars").on("click", function(){
			event.stopPropagation();
			$(".headerOpc").addClass('act');
		});
		$('html, .fa-times').click(function() {
		  $(".headerOpc").removeClass('act');
		});
		$('.headerOpc').click(function() {
			event.stopPropagation();
		});
	</script>

</body>
</html>