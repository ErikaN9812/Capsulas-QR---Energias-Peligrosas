$(document).ready(function() {
    aniSl19(1);
   

    // sistemaVotacion();
    pausarMultimedia();
    mediaIdioma();

    setTimeout(() => {
        $(".actVorF .tol").html($(".itemQ").length);
    }, "2000");

  
});


function aniSl19(e) {

    // number of slider
    var sliders = $(".contentModule > div").length;
    $('#nSlider').html(sliders - 1);
    var progressBar = Math.round((e/sliders)*100);
    $(".progBar > div").css("width",progressBar+"%");

    if (e === 2) {
        // $("#pagIndex").css('display', 'none');
        $("#next-btn").on('click', function () {
            $("#next").click();
        });

    }
    if (e === 1) {
        $("#prev").show();

        $("#prev").attr('disabled', true);
    }
    if (e === 2) {
        $("#prev").attr('disabled', false);
        $("#next").css('display', 'none');
    }

}

function mediaIdioma(){
    var toggleSwitch = document.getElementById("toggleSwitch");

    var mediaElementsIngles = document.querySelectorAll(".media-ingles");
    var mediaElementsEspanol = document.querySelectorAll(".media-espanol");

    mediaElementsIngles.forEach(media => {
        media.style.display = "none";
    });

    mediaElementsEspanol.forEach(media => {
        media.classList.add("center-media");
    });

    function pauseMedia(mediaElements) {
        mediaElements.forEach(media => {
            var video = media.querySelector('video');
            if (video && !video.paused) {
                video.pause();
            }

            var audio = media.querySelector('audio');
            if (audio && !audio.paused) {
                audio.pause();
            }
        });
    }

    function toggleMediaVisibility(mediaElements, isVisible) {
        mediaElements.forEach(media => {
            media.style.display = isVisible ? "block" : "none";
            media.classList.toggle("center-media", isVisible);
        });
    }

    toggleSwitch.addEventListener("change", function() {
        pauseMedia(mediaElementsIngles);
        pauseMedia(mediaElementsEspanol);

        if (this.checked) {
            toggleMediaVisibility(mediaElementsIngles, true);
            toggleMediaVisibility(mediaElementsEspanol, false);
        } else {
            toggleMediaVisibility(mediaElementsEspanol, true);
            toggleMediaVisibility(mediaElementsIngles, false);
        }
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



  var results4 = [];
  var elements4 = [];

  function Questions4(el, e) {
      var index = elements4.indexOf(el);
      if (index === -1) {
          elements4.push(el);
          results4.push(e);
      } else {
          results4[index] = e;
      }
      
      $(el).addClass('act');
  }


  function valid4(numCorrect4) {
    var correctCount4 = 0;
    // var malCount = 0;
    for (var i = 0; i < elements4.length; i++) {
        if (results4[i] ) {
            $(elements4[i]).addClass('true');
            correctCount4++;
        }else if(correctCount4 >=1 && correctCount4 < numCorrect4){
          $(elements4[i]).addClass('false');
          
        } else {
            $(elements4[i]).addClass('false');
        }
    }

    if (correctCount4 == numCorrect4) {
        for (var i = 0; i < elements4.length; i++) {
            $(elements4[i]).removeClass('false');
            $(elements4[i]).removeClass('act');
        }
        $('#respuesta_mal4').hide();
    }
    $('#respuestas_correctas').val(correctCount4);
    $('#reiniciar4').attr('disabled',false);
    $('.btn-finalizar').attr('disabled',false);
    $('#respuesta4').html(correctCount4 + ' respuestas correctas de '+numCorrect4);
    $('#respuesta4').show();
    $('#p_respuestas_modal').attr('hidden', false);
    $('#respuestas_correctas_modal').text(correctCount4);
    let resultado= (correctCount4 / 3)*100;
    $('#p_resultado_modal').attr('hidden', false);
    $('#p_resultado').attr('hidden', false);
    $('#resultado_modal').text(Math.round(resultado));
    $('#resultado').text(Math.round(resultado));
    $('#surveymd01').modal('show');
  }

  function reiniciarActividad(actividad='', posicionesIniciales='',tipo=0,idActividad=0) {

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
        $('#respuesta3').hide();
        $('#reiniciar4').attr('disabled',true);
        $('.btn-finalizar').attr('disabled',true);
        $('#p_resultado').attr('hidden', true);
        $('#surveymd01').modal('hide');
      }
    }
    
  }