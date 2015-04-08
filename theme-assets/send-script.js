/**
 * Created by denisbojko on 4/8/15.
 */
$(document).ready(function () {
    $('.send').click(function (e) {
        e.preventDefault();
        $(this).addClass('btn-disabled');
        $(this).prop('disabled', true);
        /*$('.loader').show();
         $('#send > span').html("");*/

        /*name1
         email1
         subject1
         message1*/

        $.post("send-order.php", $(this).parents(".send-form").serialize(),function (response) {
            /*$('.loader').delay(2000).hide(function () {*/
            /*$('#send > span').html("Спасибо!");*/
            /*$('#success').html(response).fadeIn();
             $('#success').delay(2000).fadeOut();
             });*/

        });/*.delay(2000).done(function () {
         $(this).removeClass('btn-disabled');
         $(this).prop('disabled', false);
         });*/
    });
});