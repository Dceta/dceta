(function($){

    // Menu settings
    $('#menuToggle, .menu-close').on('click', function(){
        $('#menuToggle').toggleClass('active');
        $('body').toggleClass('body-push-toleft');
        $('#theMenu').toggleClass('menu-open');
    });


    // CAROUSEL PREVIEW

    (function(){
        var next=$("#dceta-slider .item").eq(1).text();
        var prev=$("#dceta-slider .item").eq($(this).length+1).text();

        $('#dceta-slider').on('slid.bs.carousel', function () {
            next=$("#dceta-slider .item.active").next(".item").find(".carousel-caption").html();
            if (typeof next == "undefined") next=$("#dceta-slider .item").eq(0).text();

            prev=$("#dceta-slider .item.active").prev(".item").find(".carousel-caption").html();
            if (typeof prev == "undefined") prev=$("#dceta-slider .item").eq($(this).length+1).text();
            $(".carousel-control.left div h3").html(prev);
            $(".carousel-control.right div h3").html(next);
        });

        $(".carousel-control.left div h3").html(prev);
        $(".carousel-control.right div h3").html(next);

    })();





})(jQuery);
