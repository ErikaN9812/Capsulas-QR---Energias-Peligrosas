$(document).ready(function() {


    
    arrastrarElemento();
    validarImagenes();
    arrastrarImagen();
    arrastrarImagen2(); 
    // sistemaVotacion();
    pausarMultimedia();
    mediaIdioma();
    // tour();
    //funcionalidad para hacer zoom en la imagen (SLIDE 12)
    $('.zoom').magnify();

    //Actualizar el progreso del curso cada vez que se avanza en los slides
    // $("#next").on('click', function() {
    //     updateProgress();
    // });
    carrusel();
    reproducirAudio();

    var audioElement = $('.audio-inicio');
    audioElement.on('play', function() {
      
        $('#slip_82_porciento')[0].pause();
        $('#slip_11_porciento')[0].pause();
        $('#slip_7_porciento')[0].pause();

        $('#slip_82_porciento2')[0].pause();
        $('#slip_11_porciento2')[0].pause();
        $('#slip_7_porciento2')[0].pause();

        $('#slip_82_porciento_ingles')[0].pause();
        $('#slip_11_porciento_ingles')[0].pause();
        $('#slip_7_porciento_ingles')[0].pause();

        $('#slip_82_porciento_ingles2')[0].pause();
        $('#slip_11_porciento_ingles2')[0].pause();
        $('#slip_7_porciento_ingles2')[0].pause();
    });
});


$(document).ready(function() {
    function cambiarPDF(pdfSrc) {
        $('#pdf_documento').attr('src', pdfSrc);
    }

    // Evento clic para el botón del primer PDF
    $('#pdf_1').click(function(){
        cambiarPDF('assets/doc/HSEQ-F004-01 _Form_Permiso_Trabajo.pdf');
    });

    // Evento clic para el botón del segundo PDF
    $('#pdf_2').click(function(){
        cambiarPDF('assets/doc/HSEQ-F004-01_Certificado_apoyo_aislamiento.pdf');
    });

    // Evento clic para el botón del tercer PDF
    $('#pdf_3').click(function(){
        cambiarPDF('assets/doc/HSEQ-F003-17_JSA_Form_Formato_AST.pdf');
    });

    // Mostrar el primer PDF por defecto al cargar la página
    cambiarPDF('assets/doc/HSEQ-F004-01 _Form_Permiso_Trabajo.pdf');
});


//constantes para facilitar el guardado del progreso
var userId   = $('#userId').val();
var courseId = $('#unique_course_id').val();
var module_id = $('#module_id').val(); 
var fullName = $('#fullName').val();


 //Para generar el TOOLTIP para riesgos
 $(function() {
    for (var count = 1; count <= 3; count++) {
      $('#boton' + count).each(function() {
          var descripcion;
          switch ($(this).attr('value')) {
              case '1':
                  descripcion = 'No cortar completamente la electricidad.';
                  break;
              case '2':
                  descripcion = 'No bloquear ni identificar con etiquetas los dispositivos de control de energía.';
                  break;
              case '3':
                  descripcion = 'Olvidar verificar que la energía haya sido cortada antes de empezar el trabajo.';
                  break;
          }
          $(this).attr('title', descripcion).tooltip({
              html: true,
              track: true
          });
      });
  }
});

function carrusel() {
    var carrusel = document.getElementById("carrusel");
    var images = [];

    // Generar URLs de imágenes con un bucle
    for (var i = 1; i <= 10; i++) {
      var img = document.createElement("img");
      img.src = `assets/img/slides_home/slide-${i}.webp`;
      carrusel.appendChild(img);
      images.push(img);
        // images.push(`url(assets/img/slide/Slide-${i}.jpg)`);
    }

    var currentImageIndex = 0;

    function changeImage() {
      images[currentImageIndex].classList.remove("active-img");
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add("active-img");
    }
    images[currentImageIndex].classList.add("active-img");
    // Cambiar la imagen cada dos segundos
    setInterval(changeImage, 2100);
  }


function validarImagenes() {
    const imagenesCorrectas = {
        "SALUD": [""],
        "MEDIO AMBIENTE": ["sl05img13.png"],
        "FISICOS": ["sl05img15.png", "sl05img16.png"],
    };

    // Objeto para realizar un seguimiento de las selecciones del usuario
    const seleccionados = {};

    // Agrega eventos de clic a las imágenes
    const imagenes = document.querySelectorAll(".inner-box-act img");
    imagenes.forEach((imagen) => {
        imagen.addEventListener("click", () => {
            const tema = imagen.parentElement.parentElement.querySelector("h4").textContent;
            const nombreArchivo = obtenerNombreArchivo(imagen.src);

            // Si la imagen ya está seleccionada, desmárcala
            if (seleccionados[nombreArchivo]) {
                delete seleccionados[nombreArchivo];
                imagen.style.border = "";
            } else {
                seleccionados[nombreArchivo] = tema;
                imagen.style.border = "5px solid blue";
            }
        });
    });

    // Agrega un evento de clic al botón de validación
    // const validarBtn = document.getElementById("validarBtn");
    
    // validarBtn.addEventListener("click", () => {
    //     let imagenCorrecta = 0;
    //     let imagenesIncorrectas = 0;
    //     for (const nombreArchivo in seleccionados) {
    //         const tema = seleccionados[nombreArchivo];
    //         const nombreArchivoCorrecto = imagenesCorrectas[tema];
    //         const imagen = document.querySelector(`.inner-box-act img[src$="${nombreArchivo}"]`);

    //         if (nombreArchivoCorrecto && nombreArchivoCorrecto.includes(nombreArchivo)) {
    //             imagen.style.border = "6px solid green"; // Borde verde si es correcta
    //             imagenCorrecta++;
    //         } else {
    //             imagen.style.border = "6px solid red"; // Borde rojo si es incorrecta
    //             imagenesIncorrectas++;
    //         }
    //     }

    //     let correct = imagenCorrecta;
    //     let total = 3;
    //     let percentage = (imagenCorrecta / total) * 100;;
    //     //activit_id se usa para controlar cada actividad dentro del módulo y del número de actividades dentro del curso
    //     let activity_id = 1;

    //     trackingManager_activities.getProgress(userId, courseId, module_id, fullName, percentage, activity_id);
    //     getProgressActivity(userId, courseId, module_id, fullName, percentage, activity_id, correct, total);
        

    // });

    // // Agrega un evento de clic al botón de limpiar
    // const resetBtn = document.getElementById("resetBtn");
    // resetBtn.addEventListener("click", () => {
    //     for (const nombreArchivo in seleccionados) {
    //         const imagen = document.querySelector(`.inner-box-act img[src$="${nombreArchivo}"]`);
    //         imagen.style.border = ""; // Elimina el borde
    //         delete seleccionados[nombreArchivo]; // Elimina la selección
    //     }
    // });
}

function tour(){
    var hasSeenTour = getCookie("hasSeenTourEmeraldM6");

    if (!hasSeenTour) {
         var intro = introJs();
           intro.setOptions({
               tooltipClass: 'custom-tooltip', 
               highlightClass: 'custom-highlight', 
               //showProgress: true,
               titleClass: 'custom-tour-title',
               nextLabel: 'Siguiente',
               prevLabel: 'Atrás',
               doneLabel: 'Terminar',
               steps: [
               
                   {
                       title: '<h4 class="custom-tour-title">¡Bienvenidas y Bienvenidos! </h4>',
                       intro: "Este es el tour de este curso que te mostrará los elementos clave que debes navegar para una correcta ejecución de tu formación virtual"
                   },
                   {
                       element: "#englishHints",
                       intro: "Si activas este switch podras escuchar todos los audios del curso en ingles"
                   },
                   {
                       element: "#home",
                       intro: "Con este botón puedes regresar al inicio del curso"
                   },
                   {
                       element: "#slide_progress",
                       intro: "Aquí podrás ver en el slide que te encuentras ubicado"
                   },
                   {
                       element: "#menu_bar",
                       intro: "Con este botón puedes desplegar el menu de opciones"
                   },
                   {
                       element: "#progreso",
                       intro: "En esta sección puedes ver el progreso que llevas en el curso"
                   },
                   {
                       element: "#presentacion",
                       intro: "Con este botón puedes navegar hasta la presentación del curso"
                   },
                   {
                       element: "#contenido",
                       intro: "Con este botón podrás navegar hasta el contenido propio del curso"
                   },
                   {
                       element: "#evaluacion",
                       intro: "Con este botón podrás navegar hasta la ventana de la evaluación si has completado el % mínimo de progreso del curso"
                   },
                   {
                       element: "#tutorial",
                       intro: "Con este botón podrás navegar hasta un video tutorial  del curso"
                   },
                   {
                       element: "#homember",
                       intro: "Con este botón podrás navegar a tu ruta de aprendizaje, con tu lista de cursos"
                   },
                   {
                       element: "#logout",
                       intro: "Con este botón podrás cerrar la sesión"
                   },
                   {
                       element: "#estadisticas",
                       intro: "Aqui podrás ver tus estadisticas generales y especificas",
                       position: "left"
                   }
               ]
           });
       
           // Evita que el menú se cierre al hacer clic en cualquier parte de la pantalla
           $(document).click(function(event) {
               var menuIcon = $(".fas.fa-bars");
               if (!$(".fas.fa-bars").is(event.target) && $(".fas.fa-bars").has(event.target).length === 0) {
                   // Evita que el menú se cierre al hacer clic en cualquier parte de la pantalla
                   if (menuIcon.length > 0) {
                       var clickEvent = new MouseEvent("click", {
                       bubbles: true,
                       cancelable: true,
                       view: window
                       });
                       menuIcon[0].dispatchEvent(clickEvent);
                   }
               }
           });

           intro.onexit(function() {
               // Establecer la cookie para indicar que el usuario ha realizado el tour
               setCookie("hasSeenTourEmeraldM6", "true", 365); // La cookie expira en 365 días
               location.reload();
           });
           intro.start();
    }
}

function updateProgress(){
    let code_course = $('#course_code').val();
    
    $.ajax(
    {
        type: "POST",
        url: "../../functions_helpers.php?progress_courses",
        dataType: "json",
        data:
        {
            code_course: code_course,
            module_id: module_id
        },
        success: function(result)
        {
            let courseProgress = result.course_progress;

            if (courseProgress === null || courseProgress === undefined) {
                $('#course-progress').html('<strong>0.0%</strong>');
            }else{
                $('#course-progress').html('<strong>' + courseProgress + '%</strong>');
            }
        }
    });
}

var correctCount4 = 0;
function mostrarImagen(elemento){
    correctCount4++;
    console.log(correctCount4);
    let interrogacion = elemento;
    let respuesta = elemento.nextElementSibling;

    // Ocultar el signo de interrogación
    interrogacion.style.display = "none";

    // Mostrar la imagen de respuesta
    respuesta.style.display = "inline";
   
    let correct = correctCount4;
    let total = 5;
    let percentage = (correctCount4 / total) * 100;;
    //activit_id se usa para controlar cada actividad dentro del módulo y del número de actividades dentro del curso
    let activity_id = 5;

    trackingManager_activities.getProgress(userId, courseId, module_id, fullName, percentage, activity_id);
    getProgressActivity(userId, courseId, module_id, fullName, percentage, activity_id, correct, total);
   
}

function mediaIdioma(){
    // Obtenemos los switches y los elementos de audio y video en inglés y español
    const toggleSwitch = document.getElementById("toggleSwitch");
    const toggleSwitchMenu = document.getElementById("toggleSwitchMenu");
    const mediaElementsIngles = document.querySelectorAll(".media-ingles");
    const mediaElementsEspanol = document.querySelectorAll(".media-espanol");

    // Ocultamos los elementos de audio y video en inglés al cargar la página
    mediaElementsIngles.forEach(media => {
        media.style.display = "none";
    });

    mediaElementsEspanol.forEach(media => {
        media.classList.add("center-media");
    });

    // Función para pausar medios en reproducción
    function pauseMedia(mediaElements) {
        mediaElements.forEach(media => {
            if (!media.paused) {
                media.pause();
            }
        });
    }
 
    
    // Función para cambiar la visibilidad de medios basado en el estado del switch
    function toggleMediaVisibility(mediaElements, isVisible) {
        mediaElements.forEach(media => {
            media.style.display = isVisible ? "block" : "none";
            media.classList.toggle("center-media", isVisible);
        });
    }

    // Agregamos el evento de cambio al switch principal
    toggleSwitch.addEventListener("change", function() {
        // Pausamos los medios que se estén reproduciendo
        pauseMedia(mediaElementsIngles);
        pauseMedia(mediaElementsEspanol);

        // Cambiamos la visibilidad de los medios según el estado del switch
        if (this.checked) {
            toggleMediaVisibility(mediaElementsIngles, true);
            toggleMediaVisibility(mediaElementsEspanol, false);
        } else {
            toggleMediaVisibility(mediaElementsEspanol, true);
            toggleMediaVisibility(mediaElementsIngles, false);
        }

        // Sincronizamos el switch del menú lateral con el switch principal
        toggleSwitchMenu.checked = this.checked;
    });

    // Agregamos el evento de cambio al switch del menú lateral
    toggleSwitchMenu.addEventListener("change", function() {
        // Pausamos los medios que se estén reproduciendo
        pauseMedia(mediaElementsIngles);
        pauseMedia(mediaElementsEspanol);

        // Cambiamos la visibilidad de los medios según el estado del switch
        if (this.checked) {
            toggleMediaVisibility(mediaElementsIngles, true);
            toggleMediaVisibility(mediaElementsEspanol, false);
        } else {
            toggleMediaVisibility(mediaElementsEspanol, true);
            toggleMediaVisibility(mediaElementsIngles, false);
        }

        // Sincronizamos el switch principal con el switch del menú lateral
        toggleSwitch.checked = this.checked;
    });
}

function sistemaVotacion(){
    const estrellas = document.querySelectorAll('input[name="estrellas"]');
    const resultado = document.querySelector('.resultado');
    const estrellasLabels = document.querySelectorAll('.rating label');
    const course_code = $('#course_code').val();
    const module_id = $('#module_id').val();
    const unique_course_id = $('#unique_course_id').val();


     // Función para obtener la calificación guardada en la base de datos
     function obtenerCalificacionGuardada() {
        $.ajax({
            type: "POST",
            url: "../../functions_helpers.php?sistema_votacion=2", // Cambia la URL a una que maneje la obtención de la calificación guardada
            data: {
                course_code: course_code,
                module_id: module_id,
                unique_course_id: unique_course_id
            },
            success: function (response) {

                if (response ) {
                    let responseData = JSON.parse(response);
                    let numEstrellas = responseData.num_estrellas;
                    resultado.innerHTML = `Has calificado con ${numEstrellas} estrella${numEstrellas === 1 ? '' : 's'}.<br>¡Gracias por tu calificación!`;
                    estrellasLabels.forEach((label, i) => {
                        if (i < numEstrellas) {
                            label.style.backgroundImage = 'url("assets/img/estrella-llena.png")';
                        } else {
                            label.style.backgroundImage = 'url("assets/img/estrella-vacia.png")';
                        }
                    });
                }
            }
        });
    }

    obtenerCalificacionGuardada();

    estrellas.forEach((estrella, index) => {
        estrella.addEventListener('change', () => {
            resultado.innerHTML = `Has calificado con ${estrella.value} estrella${estrella.value === '1' ? '' : 's'}.<br>¡Gracias por tu calificación!`;
            
            // Llena todas las estrellas anteriores a la seleccionada
            estrellasLabels.forEach((label, i) => {
                if (i <= index) {
                    label.style.backgroundImage = 'url("assets/img/estrella-llena.png")'; 
                } else {
                    label.style.backgroundImage = 'url("assets/img/estrella-vacia.png")'; 
                }
            });
            //Guardar el numero de estrellas con que calificación
            $.ajax({
                type: "POST", 
                url: "../../functions_helpers.php?sistema_votacion=1",
                data: {
                    num_estrella: estrella.value,
                    course_code : course_code,
                    module_id : module_id,
                    unique_course_id : unique_course_id
                },
                success: function (response) {
                    console.log(response);
                }
            });
        });
    });
}

function pausarMultimedia(){
    //Funcionalidad que permite pausar los elementos multimedias que se este reproduciendo
    $("#prev, #next").on("click", function() {
        let allMediaElements = $("audio, video");
        // Pausar cada elemento multimedia
        allMediaElements.each(function() {
            if (!this.paused) {
            this.pause();
            }
        });

    });
}

function toggleAudio() {

    let toggleSwitch = document.getElementById("toggleSwitch");
    let audioEsp = document.getElementById("audio_slide_15_1");
    let audioIng = document.getElementById("audio_slide_15_2");

    if (toggleSwitch.checked) {
        if(audioIng.paused){
            audioIng.play();
            audioEsp.pause();
        }else{
            audioIng.pause();
            audioEsp.pause();
        }
        
    }else{
        if(audioEsp.paused){
            audioEsp.play();
            audioIng.pause();
        }else{
            audioEsp.pause();
            audioIng.pause();
        }
        
    }
    
}

 function reproducirAudio() {
    let audioElementos = [
        { esp: document.getElementById("slip_82_porciento"), ing: document.getElementById("slip_82_porciento_ingles") },
        { esp: document.getElementById("slip_11_porciento"), ing: document.getElementById("slip_11_porciento_ingles") },
        { esp: document.getElementById("slip_7_porciento"), ing: document.getElementById("slip_7_porciento_ingles") }
    ];

    $(".botonporcentaje").click(function() {
        pausarTodosLosAudios();

        let indice = $(this).attr('id').slice(-1) - 1; // Obtiene el índice del botón (1, 2 o 3)
        let audioActual = audioElementos[indice];
        console.log(audioActual);
        if (toggleSwitch.checked) {
            audioActual.ing.play();
        } else {
            audioActual.esp.play();
        }
    });

    let audioElementos2 = [
        { esp2: document.getElementById("slip_82_porciento2"), ing2: document.getElementById("slip_82_porciento_ingles2") },
        { esp2: document.getElementById("slip_11_porciento2"), ing2: document.getElementById("slip_11_porciento_ingles2") },
        { esp2: document.getElementById("slip_7_porciento2"), ing2: document.getElementById("slip_7_porciento_ingles2") }
    ];

    $(".botonporcentaje2").click(function() {
        pausarTodosLosAudios();

        let indice2 = $(this).val() - 1; // Obtiene el índice del botón (1, 2 o 3)
        let audioActual2 = audioElementos2[indice2];
        console.log(indice2);
        if (toggleSwitch.checked) {
            audioActual2.ing2.play();
        } else {
            audioActual2.esp2.play();
        }
    });
}

function pausarTodosLosAudios() {
    let allAudios = document.querySelectorAll('audio');
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; 
    });
}

  
// Función para cambiar la imagen al pasar el ratón por encima
function onMouseOver(element, nuevaImagen) {
  // Obtener la imagen actual
  var imagen = element.querySelector(".inf2");

  // Guardar la imagen original en un atributo personalizado
  if (!imagen.dataset.originalImagen) {
    imagen.dataset.originalImagen = imagen.src;
  }

  // Cambiar la imagen al pasar el ratón por encima
  imagen.src = nuevaImagen;
}

// Función para restaurar la imagen original al quitar el ratón
function onMouseOut(element) {
  var imagen = element.querySelector(".inf2");

  // Restaurar la imagen original
  if (imagen.dataset.originalImagen) {
    imagen.src = imagen.dataset.originalImagen;
  }
}

// Función para obtener el nombre de archivo a partir de una ruta
 function obtenerNombreArchivo(ruta) {
    const partesRuta = ruta.split("/");
    return partesRuta[partesRuta.length - 1];
}
var contDrop = 0; 
var countDrogElemento = 0;
   //Para reiniciar las actividades de tipo seleccion multiple, arrastras e imagenes verdaderas o falsas
function reiniciarActividad(actividad='', posicionesIniciales='',tipo=0,idActividad=0) {
    contDrop = 0;
    countDrogElemento = 0;
    if(tipo==1){
      actividad.find("li img").removeClass("correct incorrect");
      actividad.find("li .ico").removeAttr("src");
  
      var elementosOrdenados = posicionesIniciales.map(function(pos) {
          return actividad.find("li[value='" + pos + "']")[0];
      });
  
      actividad.empty().append(elementosOrdenados);
    }

    //Multiple Respuestas
    if(tipo==2){
      actividad = $('#actividad_h_0' + idActividad);
      if(idActividad==1){
        elements = []; 
        results = []; 
        correctCount = 0;
        actividad.find('.act').removeClass('act');
        actividad.find('.true').removeClass('true');
        actividad.find('.false').removeClass('false'); 
        $('#btn-valid').show();
        $('#respuesta').hide();
        $('#respuesta_mal').hide(); 
        $('#reiniciar').hide();
        $('#btn-valid').show();

      }else{
        elements = 'elements' + idActividad;
        this[elements] = [];

        results = 'results' + idActividad;
        this[results] = [];

        correctCount = 'correctCount' + idActividad;
        this[correctCount] = 0;
      
        actividad.find('.act').removeClass('act');
        actividad.find('.true').removeClass('true'); 
        actividad.find('.false').removeClass('false'); 
        $('#btn-valid' + idActividad).show(); 
        $('#respuesta' + idActividad).hide();
        $('#respuesta_mal' + idActividad).hide(); 
        $('#reiniciar'+ idActividad).hide();
        $('#btn-valid'+ idActividad).show();
      }
    }

    //Seleccionar la imagen correcta 
    if(tipo==3){
      $(".itemAct").removeClass("checkAct xmarkAct");
      $(".itemAct .resAct").attr("src", "");
      $(".correctIncorrect").hide();
    }

    //arrastrar imagen al cuadrado
    if(tipo==4){
      // Eliminar clases 'correct'
      actividad.find('.actividadBimg div').removeClass('correct');

      // Restablecer las imágenes draggables a su estado original
      actividad.find('.actividadBimg').each(function() {
          var $listOpcDragOriginal = $(this);
          var originalImages = $listOpcDragOriginal.data('originalImages');
          $listOpcDragOriginal.empty().append(originalImages);
      });
  
      // Restablecer las imágenes droppable a su estado original
      actividad.find('.actividadAimg').each(function() {
          var $listOpcDropOriginal = $(this);
          var originalImages = $listOpcDropOriginal.data('originalImages');
          $listOpcDropOriginal.empty().append(originalImages);
      });
      arrastrarElemento2();
    }
    
    //arrastrar imagen al cuadrado version 2
    if(tipo==5){
        $(".actividad_candidatos").empty();
       
        var newContent = `
        <div class="titulo-actividad-candados">
            <span>BLOQUE DE SISTEMA ELECTRICO</span>
            <span>BLOQUE DE SISTEMA DE VALVULAS</span>
            <span>BLOQUE DE ESCALERAS Y EQUIPOS</span>
            <span>BLOQUE DE INSTRUMENTOS</span>
            <span>EQUIPOS CONTRATISTAS</span>
        </div>
        <div class="grid-container-pairs" id="actividad_candado">
            <span class="grid-item-pairs act3_drop" id="act3_drop1">
                <img src="assets/img/candado-pregunta-1.jpg">
                <hr><br>
            </span>
            <span class="grid-item-pairs act3_drop" id="act3_drop2">
                <img src="assets/img/candado-pregunta-2.jpg">
                <hr><br>
            </span>
            <span class="grid-item-pairs act3_drop" id="act3_drop3">
                <img src="assets/img/candado-pregunta-3.jpg">
                <hr><br>
            </span>
            <span class="grid-item-pairs act3_drop" id="act3_drop4">
                <img src="assets/img/candado-pregunta-4.jpg">
                <hr><br>
            </span>
            <span class="grid-item-pairs act3_drop" id="act3_drop5">
                <img src="assets/img/candado-pregunta-5.jpg">
                <hr><br>
            </span>
            <span class="grid-item-pairs act3_drag" id="act3_drag3" draggable="true">
                <img src="assets/img/candado-repuesta-3.jpg">
            </span>
            <span class="grid-item-pairs act3_drag" id="act3_drag4" draggable="true">
                <img src="assets/img/candado-repuesta-4.jpg">
            </span>
            <span class="grid-item-pairs act3_drag" id="act3_drag5" draggable="true">
                <img src="assets/img/candado-repuesta-5.jpg">
            </span>
            <span class="grid-item-pairs act3_drag" id="act3_drag2" draggable="true">
                <img src="assets/img/candado-repuesta-2.jpg">
            </span>
            <span class="grid-item-pairs act3_drag" id="act3_drag1" draggable="true">
                <img src="assets/img/candado-repuesta-1.jpg">
            </span>
        </div>
    `;

    // Agregar el contenido nuevamente al div actividad_candidatos
    $(".actividad_candidatos").append(newContent);

    }

    //Arrastrar elementos a un texto
    if(tipo==6){
        const originalImages = {
            "img-1": "assets/img/seis-energias/sld_energia_1.jpg",
            "img-2": "assets/img/seis-energias/sld_energia_2.jpg",
            "img-3": "assets/img/seis-energias/sld_energia_3.jpg",
            "img-4": "assets/img/seis-energias/sld_energia_4.jpg",
            "img-5": "assets/img/seis-energias/sld_energia_5.jpg",
            "img-6": "assets/img/seis-energias/sld_energia_6.jpg"
        };

        $.each(originalImages, function(id, src) {
            $('#' + id).attr('src', src);
        });
  
        $(".cardEnergias").css('box-shadow', '2px 2px 2px 2px rgba(0, 0, 0, 0.2)');

        $("[id^='drop']").each(function(){
            $(this).find("span").remove();
        });

        // Definir el orden deseado de los IDs
        var ordenIds = [5, 2, 6, 1, 3, 4];

        // Definir los nombres correspondientes a cada ID
        var palabras = {
            1: "Química",
            2: "Eléctrica",
            3: "Hidráulica",
            4: "Neumática",
            5: "Térmica",
            6: "Mecánica"
        };

        // Obtener el contenedor y limpiar su contenido existente
        var contenedor = $('.listOpcDrag').empty();

        // Recorrer el array de IDs en el orden deseado y crear los elementos <span> correspondientes
        $.each(ordenIds, function(index, id) {
            var palabra = palabras[id];
            var span = $('<span>').attr('id', 'drag' + id).addClass('item-arrastrar').text(palabra);
            contenedor.append(span);
        });

        $(".item-arrastrar").draggable({
            revert: 'invalid',
            snap: '.listOpcDrop span',
            snapMode: 'corner',
            snapTolerance: '22'
        });
    
        $('.listOpcDrag span').draggable({
            revert: 'invalid',
            cursor: 'move'
        });
        $(".border-red").removeClass("border-red");
        $(".border-green").removeClass("border-green");

        $('#btn-validar-elementos').attr('disabled', true);
        $('#btn-reiniciar-elementos').attr('disabled', true);
        countEnergias = 0
    }
 }

function arrastrarImagen2(){
    interact('.act3_drag').draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent'
            })
        ],
        autoScroll: true,
        listeners: {
            start(event) {
                event.target.classList.add('dragging');
            },
            move(event) {
                var target = event.target;
                var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                // Mover el elemento arrastrado a su nueva posición
                target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            },
            end(event) {
                event.target.classList.remove('dragging');
            }
        }
    });

    interact('.act3_drop').dropzone({
        // Aceptar elementos soltados solo si están en la misma contenedor
        accept: '.act3_drag',
        // Lógica cuando se suelta un elemento
        ondropactivate(event) {
            event.target.classList.add('drop-active');
        },
        ondragenter(event) {
            event.relatedTarget.classList.add('can-drop');
        },
        ondragleave(event) {
            event.relatedTarget.classList.remove('can-drop');
        },
        ondrop(event) {
            var draggedElement = event.relatedTarget;
            var dropzone = event.target;
            // Reemplazar la imagen del dropzone con la imagen del elemento arrastrado
            dropzone.innerHTML = draggedElement.innerHTML;
            draggedElement.remove(); // Eliminar el elemento arrastrado
        },
        ondropdeactivate(event) {
            event.target.classList.remove('drop-active');
            event.relatedTarget.classList.remove('can-drop');
        }
    });

}


function validarArrastreCandados(){
    var dropElements = document.querySelectorAll('.act3_drop img'); // Seleccionar las imágenes dentro de los elementos act3_drop
    var correctas = 0;
    
    dropElements.forEach(function(dropImage) {
        var dragId = dropImage.src.match(/candado-repuesta-(\d+).jpg/)[1]; // Obtener el número de la imagen del dropzone
        var dropzoneId = dropImage.parentNode.id.charAt(dropImage.parentNode.id.length - 1); // Obtener el número al final del ID del dropzone
        
        if (dragId === dropzoneId) {
            correctas++;
            dropImage.src = 'assets/img/candado-repuesta-' + dragId + '-ok.jpg'; // Cambiar la imagen del dropzone a la versión correcta
            dropImage.parentNode.classList.add('correcta');
        } else {
            dropImage.src = 'assets/img/candado-repuesta-' + dragId + '-x.jpg'; // Cambiar la imagen del dropzone a la versión incorrecta
            dropImage.parentNode.classList.add('incorrecta');
        }
    });
   
}

function arrastrarImagen(){
    // Logica para la actividad (SLIDE 6)
    $("#act2_drag1, #act2_drag2, #act2_drag3, #act2_drag4").css('z-index', '9999');

     // item 1
    $("#act2_drag1").draggable({
        revert: 'invalid'
    });
    $("#act2_drop1").droppable({
        accept: '#act2_drag1',
        drop: function(event, ui) {
            $(this).addClass("corret");
        }
    });

    $("#act2_drag2").draggable({
        revert: 'invalid'
    });
    $("#act2_drop2").droppable({
        accept: '#act2_drag2',
        drop: function(event, ui) {
            $(this).addClass("corret");
        }
    });

    $("#act2_drag3").draggable({
        revert: 'invalid'
    });
    $("#act2_drop3").droppable({
        accept: '#act2_drag3',
        drop: function(event, ui) {
            $(this).addClass("corret");
        }
    });

    $("#act2_drag4").draggable({
        revert: 'invalid'
    });
    $("#act2_drop4").droppable({
        accept: '#act2_drag4',
        drop: function(event, ui) {
            $(this).addClass("corret");
        }
    });

}
let countEnergias = 0;
function arrastrarElemento(){
    $(".item-arrastrar").draggable({
        snap: '.item-arrastrar',
        snapMode: 'inner',
        snapTolerance: '22'
    });

    $(".item-arrastrar").droppable({
        accept: '.item-arrastrar'
    }).on('droppable:drop', function (e) {
       
        if (!$(this).hasClass("soltado")) {
            $(this).addClass("soltado");
            $(this).draggable("disable"); 
            
        }
        countEnergias++;
        if(countEnergias==6){
            $('#btn-validar-elementos').attr('disabled', false);
            $('#btn-reiniciar-elementos').attr('disabled', false);
        }
    });
    
}


function validarArrastreElementos(){
    var elementoDroppable = [];
    var elementoDraggable = [];

    $("[id^='drop']").each(function() {
        var idDrop = $(this).attr("id").replace("drop", ""); 
        elementoDroppable.push(idDrop);
    });

    $("[id^='drag']").each(function() {
        var idDrag = $(this).attr("id").replace("drag", ""); 
        elementoDraggable.push(idDrag);
    });

    // Comparamos si los draggables tienen el mismo número que los droppables en el mismo orden
    for (var i = 0; i < elementoDroppable.length; i++) {
        if (elementoDroppable[i] === elementoDraggable[i]) {
            var img_ok = "#img-" + elementoDroppable[i];
            var p_hide = "#p-" + elementoDroppable[i];
            var drop = "#drop"+elementoDroppable[i];
            $(img_ok).attr('src','assets/img/seis-energias/sld_energia_'+elementoDroppable[i]+'_ok.jpg');
            $(p_hide).show();

            $(drop).addClass("border-green");
        }else{
            var img_mal = "#img-" + elementoDroppable[i];
            var p_hide_mal = "#p-" + elementoDroppable[i];
            var drop_mal = "#drop"+elementoDroppable[i];
            $(img_mal).attr('src','assets/img/seis-energias/sld_energia_'+elementoDroppable[i]+'_mal.jpg');

            // $(img_mal).show();
            $(p_hide_mal).show();
            $(drop_mal).addClass("border-red");

        }
    }

    // $('#btn-validar-candados').hide();
    // $('#btn-reiniciar-candados').show();
   
}

//ACTIVIDAD #2 Para validar cuando se haya terminando la actividad del slide 06
var correctCount = 0;
// Función para verificar si se ha completado todo.
function checkCompletion() {           
    
    let correct = correctCount;
    let total = 4;
    let percentage = (correctCount / total) * 100;;
    //activit_id se usa para controlar cada actividad dentro del módulo y del número de actividades dentro del curso
    let activity_id = 2;

    trackingManager_activities.getProgress(userId, courseId, module_id, fullName, percentage, activity_id);
    getProgressActivity(userId, courseId, module_id, fullName, percentage, activity_id, correct, total);
   
}
// En cada evento 'droppable:drop', aumenta el contador correctCount y verifica la finalización.
// $("#drop1, #drop2, #drop3, #drop4, #drop5").on('droppable:drop', function(e) {
//     correctCount++;
//     checkCompletion();
// });


// ACTIVIDAD #3 Para validar cuando se haya terminando la actividad del slide 10
var correctCount2 = 0;
// Función para verificar si se ha completado todo.
function checkCompletion2() {           
    
    let correct = correctCount2;
    let total = 4;
    let percentage = (correctCount2 / total) * 100;;
    //activit_id se usa para controlar cada actividad dentro del módulo y del número de actividades dentro del curso
    let activity_id = 3;

    trackingManager_activities.getProgress(userId, courseId, module_id, fullName, percentage, activity_id);
    getProgressActivity(userId, courseId, module_id, fullName, percentage, activity_id, correct, total);
   
}
// En cada evento 'droppable:drop', aumenta el contador correctCount y verifica la finalización.
// $("#act2_drop1, #act2_drop2, #act2_drop3, #act2_drop4, #act2_drop5").on('droppable:drop', function(e) {
//     correctCount2++;
//     checkCompletion2();
// });



// ACTIVIDAD #4 Para validar cuando se haya terminando la actividad del slide 11
var correctCount3 = 0;
// Función para verificar si se ha completado todo.
function checkCompletion3() {           
    
    let correct = correctCount3;
    let total = 4;
    let percentage = (correctCount3 / total) * 100;;
    //activit_id se usa para controlar cada actividad dentro del módulo y del número de actividades dentro del curso
    let activity_id = 4;

    trackingManager_activities.getProgress(userId, courseId, module_id, fullName, percentage, activity_id);
    getProgressActivity(userId, courseId, module_id, fullName, percentage, activity_id, correct, total);
   
}
// En cada evento 'droppable:drop', aumenta el contador correctCount y verifica la finalización.
// $("#act3_drop1, #act3_drop2, #act3_drop3, #act3_drop4, #act3_drop5").on('droppable:drop', function(e) {
//     correctCount3++;
//     // checkCompletion3();
// });

// Función para obtener el valor de la cookie
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}
  
  // Función para establecer la cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


//ACTIVIDAD de ordenar la palabra LOTO en orde
$(function() {
    $("#actOrderElement").sortable();
  });
  function actOrderElement(tipo=0){
    for(var i = 1; i <= $("#actOrderElement li").length; i++) {
        if(tipo==1){
            let imgActual = $("#actOrderElement li:nth-child(" + i + ")").attr("value");
            if((imgActual == 2 || imgActual == 4) &&( i == 2 || i == 4) ){
                $("#actOrderElement li:nth-child(" + i + ") img").addClass("correct");
                $("#actOrderElement li:nth-child(" + i + ") .ico").attr("src", "assets/img/checkAct.png");
            }else{
                if($("#actOrderElement li:nth-child(" + i + ")").attr("value") == i) {
                    $("#actOrderElement li:nth-child(" + i + ") img").addClass("correct");
                    $("#actOrderElement li:nth-child(" + i + ") .ico").attr("src", "assets/img/checkAct.png");
                }else {
                    $("#actOrderElement li:nth-child(" + i + ") img").addClass("incorrect");
                    $("#actOrderElement li:nth-child(" + i + ") .ico").attr("src", "assets/img/xmarkAct.png");
              }
            }
        }else{
            if($("#actOrderElement li:nth-child(" + i + ")").attr("value") == i) {
                $("#actOrderElement li:nth-child(" + i + ") img").addClass("correct");
                $("#actOrderElement li:nth-child(" + i + ") .ico").attr("src", "assets/img/checkAct.png");
            }else {
                $("#actOrderElement li:nth-child(" + i + ") img").addClass("incorrect");
                $("#actOrderElement li:nth-child(" + i + ") .ico").attr("src", "assets/img/xmarkAct.png");
          }
        }
    }
  }

  $(function() {
    $("#actOrderElement2").sortable();
  });

  function actOrderElement2(tipo=0){
    for(var i = 1; i <= $("#actOrderElement2 li").length; i++) {
        if(tipo==1){
            let imgActual = $("#actOrderElement2 li:nth-child(" + i + ")").attr("value");
            if((imgActual == 2 || imgActual == 4) &&( i == 2 || i == 4) ){
                $("#actOrderElement2 li:nth-child(" + i + ") img").addClass("correct");
                $("#actOrderElement2 li:nth-child(" + i + ") .ico").attr("src", "assets/img/checkAct.png");
            }else{
                if($("#actOrderElement2 li:nth-child(" + i + ")").attr("value") == i) {
                    $("#actOrderElement2 li:nth-child(" + i + ") img").addClass("correct");
                    $("#actOrderElement2 li:nth-child(" + i + ") .ico").attr("src", "assets/img/checkAct.png");
                }else {
                    $("#actOrderElement2 li:nth-child(" + i + ") img").addClass("incorrect");
                    $("#actOrderElement2 li:nth-child(" + i + ") .ico").attr("src", "assets/img/xmarkAct.png");
              }
            }
        }else{
            if($("#actOrderElement2 li:nth-child(" + i + ")").attr("value") == i) {
                $("#actOrderElement2 li:nth-child(" + i + ") img").addClass("correct");
                $("#actOrderElement2 li:nth-child(" + i + ") .ico").attr("src", "assets/img/checkAct.png");
            }else {
                $("#actOrderElement2 li:nth-child(" + i + ") img").addClass("incorrect");
                $("#actOrderElement2 li:nth-child(" + i + ") .ico").attr("src", "assets/img/xmarkAct.png");
          }
        }
    }
  }


  /*slider 05 -- iterar palabras*/
  document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll('.word');
    let currentWordIndex = 0;

    function showNextWord() {
        // Ocultar la palabra actual
        words[currentWordIndex].classList.remove('show');

        // Calcular el índice de la siguiente palabra
        currentWordIndex = (currentWordIndex + 1) % words.length;

        // Mostrar la siguiente palabra
        words[currentWordIndex].classList.add('show');
    }

    // Inicialmente mostrar la primera palabra
    words[currentWordIndex].classList.add('show');

    // Repetir el ciclo de mostrar/ocultar cada 2 segundos (ajustar según sea necesario)
    setInterval(showNextWord, 2000);
});