
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!--library cascading style sheets-->
  <link rel="stylesheet" type="text/css" href="assets/css/all.css" />
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">
  <link rel="stylesheet" type="text/css" href="assets/css/styleSlider.css">
  <!--library javascript-->
  <script src="assets/js/jquery-3.3.1.js"></script>

</head>
<style>
  
  * {
        margin: 0;
        padding: 0;
      }
      body {
        position: relative;
        width: 100%;
        height: 100vh;
      }
      video {
        position: fixed;
        width: 100%;
        height: 100%;
        background: #333;
        object-fit: cover;
      }
      img {
        position: relative;
        max-width: 400px;
        width: 100%;
        margin-bottom: 20px;
      }
      b {
        position: relative;
        font-size: 2.55rem;
        width: auto;
        height: auto;
        z-index: 2;
        font-family: arial;
        color: #badde1;
      }
      .titulo{
        position: relative;
        font-size: 23px;
        width: auto;
        height: auto;
        z-index: 2;
        font-family: arial;
        color: #badde1;
        text-align: center;
      }
      .parrafo{
        color: #fff;
        font-size: 16px;
        font-family: arial;
        margin-bottom: 0.5em;
        text-align: center;
      }
      button {
        color: #ffffff;
        background: #ffbd06;
        padding: 10px 30px;
        border-radius: 30px 0px 30px 30px;
        border: none;
        font-size: 22px;
        box-shadow: rgb(0 160 175 / 30%) 0px 8px 24px;
        max-width: 200px;
        z-index: 3;
        left: 0;
        right: 0;
        margin: 0 auto;
      }

        button:hover {
        cursor: pointer;
        filter: grayscale(50%);
      }
      .logo-home{
        width: 50%;
        margin: 0 auto;
      }
      .slider12 > div:nth-child(4) > i:hover {
        filter: grayscale(50%);
        transform: scale(1.01);
      }
      @-webkit-keyframes bell {
        0% {
          box-shadow: 0 0 0 0 rgba(0 160 175 / 0.8);
        }
        100% {
          box-shadow: 0 0 0 50px rgba(0 160 175 / 0);
        }
      }
      .fd {
        position: absolute;
        width: 100%;
        height: 100vh;
        background-image: url(assets/img/fondo00.jpg);
        background-size: cover;
        background-position: center;
        z-index: 1;
        opacity: .85;
      }
      .contInd {
        position: absolute;
        width: 90%;
        z-index: 2;
      
        top: 15%;
        left: 10%;
      }
      .contenido-cental{
        left: 5%;
        right: 5%;
      }
      .bgazul{
        background-color: #005ABB;;
      }
      .imgpastilla{
          padding-top: 5%;
          padding-bottom: 5%;
          width: 60%;
          margin: 0 auto;
      }
      .labelform{
          color: #fff;
          font-size: 18px;
      }
      .inputform{
          display: block;
          margin-bottom: 1em;
          width: 90%;
          padding: 0.5em;
          font-size: 16px;
      }
      .columns {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
      .column {
        width: 45%;
      }
  
      .pc-mostrar {
          display: block;
      }
  
      .mobile-mostrar {
          display: none;
      }

      .form-label input{
        border-radius: 8px;
        padding: 0.8rem;
      }
  
      @media only screen and (max-width: 768px) {
          .pc-mostrar {
              display: none;
          }
  
          .mobile-mostrar {
              display: block;
          }

          .imgpastilla{
          padding-top: 5%;
          padding-bottom: 5%;
          width: 80%;
          margin: 0 auto;
          }

          button {
            position: absolute;
          color: #ffffff;
          background: #ffbd06;
          padding: 10px 30px;
          border-radius: 30px 0px 30px 30px;
          border: none;
          font-size: 22px;
          box-shadow: rgb(0 160 175 / 30%) 0px 8px 24px;
          max-width: 200px;
          z-index: 3;
          left: 0;
          right: 0;
          margin: 0 auto;
        }
      }
  
      .icon-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        background-color: white;
        border-radius: 50%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        font-size: 2rem;
        color: #005ABB;
      }
  
      .displayflex{
          display: flex;
      }
  
      @media (max-width: 1024px) {
        .contInd {
          left: 0;
          right: 0;
          margin: 0 auto;
          position: absolute;
          width: 90%;
          z-index: 2;
          max-width: 600px;
          top: 5%;
        }
        .columns {
          flex-direction: column;
          align-items: center;
        }
        .column {
          width: 100%;
          margin-bottom: 5%;
        }
      }
      @media (max-width: 734px) {
        .titulo h1{
          position: relative;
          font-size: 30px;
          width: auto;
          height: auto;
          z-index: 2;
          font-family: arial;
          color: #badde1;
          text-align: center;
        }
        .parrafo{
          color: #fff;
          font-size: 18px;
          font-family: arial;
          text-align: center;
          margin-bottom: 1em;
        }
        .logo-home{
          width: 60%;
          margin: 0 auto;
          text-align: center;
          justify-content: center;
        }
      }
</style>
<body class="bgazul">
  <div>
    <div class="contInd">
      <div class="columns">
        <div class="column">
          <img src="assets/img/logoW.png" class="logo-home">
          <h1 class="titulo mostrar-web" style="color: #badde1">Cápsula de refuerzo de Energía Eléctrica </h1>
          <img src="assets/img/pastilla_electrica.png" alt="" class="imgpastilla">

          <h1 class="titulo mostrar-mobile" style="color: #badde1; line-height: 1.3em;">Cápsula de refuerzo de <br>Energía Eléctrica </h1>
          <hr style="width: 80%; margin: 0 auto; margin-top: 2%;" class="mobile-mostrar">
          <br>
          <div class="mobile-mostrar">
            <p class="parrafo">Hola, continuemos con nuestro aprendizaje sobre las Energías Peligrosas en nuestra operación</p>
            <p class="parrafo">Ingresa tus datos para empezar</p>
          </div>
        </div>
        <div class="column">
          <div class="pc-mostrar">
            <p class="parrafo">Hola, continuemos con nuestro aprendizaje sobre las Energías Peligrosas en nuestra operación</p>
            <p class="parrafo">Ingresa tus datos para empezar</p>
          </div>

          <div class="form-label">
            <label for="nombre" class="labelform">Nombre Completo:</label>
            <input type="text" id="nombre" name="nombre" required class="inputform">
            
            <label for="cedula" class="labelform">Cédula:</label>
            <input type="number" id="cedula" name="cedula" required class="inputform">
            
            <button class="button btn-enviar">Ingresar</button>
            <br>
            <br>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script>
    $( document ).ready(function() {
      $(".btn-enviar").on("click", function(){
        // window.location.href = "actividad.html";
        let nombre = $('#nombre').val();
        let cedula = $('#cedula').val();  

        if(nombre == '' || cedula == ''){
          alert('¡Debe rellenar todos los datos!');
          return false;
        }

        $.ajax({
          type: "POST",
          url: "../../functions_helpers.php?capsula_qr=energia_electrica",
          dataType: "json",
          data:{
            nombre:nombre,
            cedula:cedula
          },
          success: function(res){
            if (res.message === '1') {

            let params = new URLSearchParams({
              nombre_capsula: res.nombre_capsula,
              cedula: res.cedula
            }).toString();
            
              window.location.href = "actividad.php?" + params;
            }else if(res.message == '2'){
              window.location.href = "realizado.php";
            }else{
              window.reload();
            }
          }
        });    
      });
    });
  </script>
</body>
</html>
