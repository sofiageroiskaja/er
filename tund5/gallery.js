$(document).ready(function(){
    $('img').css({'width':'20vw'});

    let firstPic = $('img.active').prop('src');

    $('.big-image').html('<img src="' + firstPic + '">')

    $('#prev').click(picBackward);
    $('#hide').click(hidePic);
    $('#next').click(picForward);
    $(document).keydown(buttonPress);

    $('#picContainer img').click(function(){
        let currentPic = $('img.active');
        let selectedPic = $(this);

        helperFunc(currentPic, selectedPic);
    });

    function buttonPress(event){
        console.log(event.keyCode);
        if(event.keyCode == 39){
            picForward();
        }
        if(event.keyCode == 37){
            picBackward();
        }
        if(event.keyCode == 72){
            hidePic();
        }
    }

    function picBackward(){
        let currentPic = $('img.active');
        let selectedPic = currentPic.prev();

        if(selectedPic.length == 0){
            selectedPic = $('#picContainer img').siblings().last();
        }

        helperFunc(currentPic, selectedPic);
    }

    function picForward(){
        let currentPic = $('img.active');
        let selectedPic = currentPic.next();

        if(selectedPic.length == 0){
            selectedPic = $('#picContainer img').siblings().first();
        }

        helperFunc(currentPic, selectedPic);
    }

    function helperFunc(currentPic, selectedPic){
        currentPic.removeClass('active');
        selectedPic.addClass('active');

        $('.big-image').html('<img src="' + selectedPic.prop('src') + '">').fadeIn(1700);
        $('.big-image img').css({'width':'90vw'});
    }

    function hidePic(){
        $('.big-image-container').fadeOut('slow');
        //$('.big-image-container').slideUp('slow');
        //$('.big-image-container').slideDown('slow');
        //$('.big-image-container').toggle('slow');
        if($('#hide').html() == "Peida"){
            $('#hide').html('Näita');
        } else{
            $('#hide').html('Peida');
        }
    }
});