$(document).ready(function() {
    aniSl19(1);
   

    // sistemaVotacion();
    pausarMultimedia();
    mediaIdioma();

    setTimeout(() => {
        $(".actVorF .tol").html($(".itemQ").length);
    }, "2000");

  
});

let corret = 0;
  function actVorF(el, res) {
    $(".actVorF button").attr("disabled", "disabled");
    //mostrar respuesta
    if (res == "correct") {
      $(el).parents(".itemQ").find("img").attr("src", "assets/img/true.jpg");
      corret = corret + 1;
    } else {
      $(el).parents(".itemQ").find("img").attr("src", "assets/img/false.jpg");
    }

    setTimeout(() => {
      $(el).parents(".itemQ").addClass("hideT");
      $(".actVorF .inc").html($(".hideT").length + 1);
      //mostrar la siguiente pregunta
      $(".itemQ").removeClass("view");
      let view = ".actVorF > div:nth-child(" + ($(".hideT").length + 2) + ")";
      $(view).addClass("view");
      // mostrar resultados finales
      if ($(".itemQ").length == $(".hideT").length) {
        $(".actVorF .inc").html($(".hideT").length);
        $(".actFin").show();
        $(".btn-reintentar").show();
        $(".actFin .p-res").css("font-size", "30px");
        $(".actFin .p-res").css("text-align", "center");
        $(".actFin h1").css("text-align", "center");
        $(".actFin button").css("text-align", "center");
        $(".actFin h1").html(corret + " de " + $(".itemQ").length);
        $('.btn-finalizar').attr('disabled', false);
        // localStorage.setItem("slider28", "ok");
      }
      $(".actVorF button").removeAttr("disabled");
    }, "1000");
  }


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
