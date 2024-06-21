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


/*actividad de seleccion multiple de audios*/
const correctAnswers = {
    audio1: true,
    audio2: false,
    audio3: true,
    audio4: false,
    audio5: true
};

const userAnswers = {};

function selectAnswer(audioId, answer) {
    userAnswers[audioId] = answer;
    const audioItem = document.getElementById(audioId);
    const btnSi = audioItem.querySelector('.btn-si');
    const btnNo = audioItem.querySelector('.btn-no');

    if (answer) {
        btnSi.classList.add('selected');
        btnNo.classList.remove('selected');
    } else {
        btnNo.classList.add('selected');
        btnSi.classList.remove('selected');
    }
}

function validateAnswers() {
    var correctCount = 0;

    for (const [audioId, correctAnswer] of Object.entries(correctAnswers)) {
        const userAnswer = userAnswers[audioId];
        const audioItem = document.getElementById(audioId);
        const messageDiv = audioItem.querySelector('.message');

        if (userAnswer === correctAnswer) {
            audioItem.classList.add('correct');
            correctCount++;
            if (userAnswer) {
                messageDiv.innerText = "¡Correcto! Sí corresponde a un tipo de Energía Peligrosa";
            } else {
                messageDiv.innerText = "¡Correcto! No pertenece a un tipo de Energía Peligrosa";
            }
        } else {
            audioItem.classList.add('incorrect');
            messageDiv.innerText = "¡Piénsalo bien! Tu selección es incorrecta.";
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Obtuviste ${correctCount} de 5 audios seleccionados correctamente`;
    $('#respuestas_correctas').val(correctCount);
    $('#respuestas_correctas_modal').text(correctCount);
    $('#p_respuestas_modal').attr('hidden', false);
    $('.btn-finalizar').attr('disabled',false);
    $('#surveymd01').modal('show');
}

function pauseOtherAudios(currentAudio) {
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        if (audio !== currentAudio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
}

function resetActividad(){
    $('.audio-container').empty();
    var newContent = `
        <div class="audio-item" id="audio1">
            <audio controls onplay="pauseOtherAudios(this)">
                <source src="assets/audio/actividad-1-ok.mp3" type="audio/mpeg">
            </audio>
            <div class="button-container">
                <button class="btn-si" onclick="selectAnswer('audio1', true)">Sí</button>
                <button class="btn-no" onclick="selectAnswer('audio1', false)">No</button>
            </div>
            <div class="message"></div>
        </div>
        <div class="audio-item" id="audio2">
            <audio controls onplay="pauseOtherAudios(this)">
                <source src="assets/audio/actividad-2.mal.mp3" type="audio/mpeg">
            </audio>
            <div class="button-container">
            <button class="btn-si" onclick="selectAnswer('audio2', true)">Sí</button>
            <button class="btn-no" onclick="selectAnswer('audio2', false)">No</button>
            </div>
            <div class="message"></div>
        </div>
        <div class="audio-item" id="audio3">
            <audio controls onplay="pauseOtherAudios(this)">
                <source src="assets/audio/actividad-3-ok.mp3" type="audio/mpeg">
            </audio>
            <div class="button-container">
            <button class="btn-si" onclick="selectAnswer('audio3', true)">Sí</button>
            <button class="btn-no" onclick="selectAnswer('audio3', false)">No</button>
            </div>
            <div class="message"></div>
        </div>
        <div class="audio-item" id="audio4">
            <audio controls onplay="pauseOtherAudios(this)">
                <source src="assets/audio/actividad-4-mal.mp3" type="audio/mpeg">
            </audio>
            <div class="button-container">
            <button class="btn-si" onclick="selectAnswer('audio4', true)">Sí</button>
            <button class="btn-no" onclick="selectAnswer('audio4', false)">No</button>
            </div>
            <div class="message"></div>
        </div>
        <div class="audio-item" id="audio5">
            <audio controls onplay="pauseOtherAudios(this)">
                <source src="assets/audio/actividad-5-ok.mp3" type="audio/mpeg">
            </audio>
            <div class="button-container">
                <button class="btn-si" onclick="selectAnswer('audio5', true)">Sí</button>
                <button class="btn-no" onclick="selectAnswer('audio5', false)">No</button>
            </div>
            <div class="message"></div>
        </div>
    `;

    $(".audio-container").append(newContent);
    correctCount = 0;
    $('#result').text('');
    $('.btn-finalizar').attr('disabled',true);
    $('#surveymd01').modal('hide');
}
