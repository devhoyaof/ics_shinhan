function modalUi() {
    $('a.modalLoad').on('click',function(){
        var $self = $(this);
        var $thisrel = $self.attr('rel');
        var $target = $('#'+ $thisrel);

        // open and focusin
        $target.attr('tabindex', '0').fadeIn(250).focus();
        $target.css({ display: 'table' });
        $target.attr('class', 'modal open');
        // create sizing
        var layerHeight = $target.outerHeight();
        var layerWidth = $target.outerWidth();
        $target.css({
            marginLeft : -layerWidth/2,
            marginTop : -layerHeight/2
        });

        $target.draggable();

        // create background
        createDim();

        // keydown focus repeat
        $target.find(".close").on('keydown', function(e){
            if(e.which=='9'){
                $target.attr('tabindex', '0').focus();
            }
        });

        // close and focusout
        $target.find(".close").on('click',function(e){
            e.preventDefault();
            $target.fadeOut(250);
            removeDim();
            $self.focus();
            $(this).off('click');
            $target.attr('class', 'modal');
            var isVisible = $target.is(':visible');
            var modalLength = $('.modal:visible').length;

            if (isVisible) {
                if (modalLength > 1) {
                    $target.fadeOut(250);
                } else {
                    $('.dim').fadeOut(250);
                }
            }
        });

        $target.find(".modalLoad").on('click',function(e){
            e.preventDefault();
            $target.fadeOut(250);
            $self.focus();
            var isVisible = $target.is(':visible');
            var modalLength = $('.modal:visible').length;

            if (isVisible) {
                if (modalLength > 1) {
                    $target.fadeOut(250);
                } else {
                    $('.dim').fadeOut(250);
                }
            }
        });

        $(document).on("keyup", function(e){
            if(e.which=='27'){
                $target.fadeOut(250);
                removeDim();
                $self.focus();
                $target.attr('class', 'modal');
            }
        });
    });
    $('table .modalLoad').on('dblclick',function(){
        var $self = $(this);
        var $thisrel = $self.attr('rel');
        var $target = $('#'+ $thisrel);

        // open and focusin
        $target.attr('tabindex', '0').fadeIn(250).focus();
        $target.css({ display: 'table' });
        $target.attr('class', 'modal open');

        // create sizing
        var layerHeight = $target.outerHeight();
        var layerWidth = $target.outerWidth();
        $target.css({
            marginLeft : -layerWidth/2,
            marginTop : -layerHeight/2
        });

        // create sizing
        // var layerHeight = $target.outerHeight();
        //         // var layerWidth = $target.outerWidth();
        //         // $target.css({
        //         //     marginLeft : -layerWidth/2,
        //         //     marginTop : -layerHeight/2
        //         // });

        $target.draggable();

        // create background
        createDim();

        // keydown focus repeat
        $target.find(".close").on('keydown', function(e){
            if(e.which=='9'){
                $target.attr('tabindex', '0').focus();
            }
        });

        // close and focusout
        $target.find(".close").on('click',function(e){
            e.preventDefault();
            $target.fadeOut(250);
            removeDim();
            $self.focus();
            $(this).off('click');
            $target.attr('class', 'modal');
            var isVisible = $target.is(':visible');
            var modalLength = $('.modal:visible').length;

            if (isVisible) {
                if (modalLength > 1) {
                    $target.fadeOut(250);
                } else {
                    $('.dim').fadeOut(250);
                }
            }
        });

        $target.find(".modalLoad").on('click',function(e){
            e.preventDefault();
            $target.fadeOut(250);
            $self.focus();
            var isVisible = $target.is(':visible');
            var modalLength = $('.modal:visible').length;

            if (isVisible) {
                if (modalLength > 1) {
                    $target.fadeOut(250);
                } else {
                    $('.dim').fadeOut(250);
                }
            }
        });

        $(document).on("keyup", function(e){
            if(e.which=='27'){
                $target.fadeOut(250);
                removeDim();
                $self.focus();
                $target.attr('class', 'modal');
            }
        });
    });
}

function createDim(){
    if (!$('.dim').length) {
        $('body').append('<div class="dim"></div>');
    }
    $('.dim').fadeIn(250);
    $('body').css({
        overflow : 'hidden'
    }).bind('touchmove', function(e) {
        e.preventDefault();
    });
}

function removeDim(){
    $('.dim').fadeOut(250);
    $('body').css({
        overflow : 'inherit'
    }).unbind('touchmove');
}