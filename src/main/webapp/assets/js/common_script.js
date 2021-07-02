function commonInit(){

    // LNB 현재 위치에 맞게 표기
    var currUrl = $(location).attr('pathname');
    var href    = $('#lnb > ul > li').find('a[href="' + currUrl + '"]');

    console.log('currUrl : ' + currUrl);

    console.log('href : ' + href);

    $(href).addClass('on');
    $(href).parents('#lnb > ul > li').addClass('on');


    // top userInfo toggle
    $('.user_name_btn').on('click', function(){
        $(this).toggleClass('on');
        $(this).parent().parent().find('.user_info').toggleClass('on');
    });

    // lnb menu list toggle
    $("#lnb > ul > li > a").on('click', function(e){
        e.preventDefault();
        $(this).parent().siblings('li').removeClass('on');
        $(this).parent().addClass('on');
    });

    // lnb menu left toggle
    $('.lnb_menu_menu').on('click', function(){

        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
        } else {
            $(this).addClass("open");
        }

        $('.sidebar').animate({width: 'toggle'});

    });

    // 체크 박스 all
    $("input:checkbox[name='all']").on('click', function(){
       if(this.checked){
           $("input:checkbox[name='checkbox']").prop("checked", true);
       } else {
           $("input:checkbox[name='checkbox']").prop("checked", false);
       }
    });

    // browser size cheking
    $(window).resize(function() {
        if (window.matchMedia('(max-width: 1300px)').matches){
            $('article').css('display', 'none');
            $('.lnb_menu_menu').removeClass('open');
        } else {
            $('article').css('display', 'block');
            $('.lnb_menu_menu').addClass('open');
        }
        var layerHeight = $('.modal').height();
        var layerWidth = $('.modal').width();
        if ($('.modal').hasClass('open')){
            $('.modal').css({
                marginLeft : -layerWidth/2,
                marginTop : -layerHeight/2
            });
        }
    });
}


/*
 * swal(alert) 공통 알림
 *
 * type (필수) : error / success / warning / info
 * msg (info/warning/success 필수) : info메시지 또는 단어(저장/수정/삭제)
 * action (warning 필수) : warning 에서 우측 버튼을 클릭했을 경우 실행 할 function
 */
function swalAlert(type, msg, swalAction) {
    var title = "";
    var text = "";
    var icon = "";
    var buttons = [];

    switch (type) {
        case "info":
            title = "Information";
            text = msg;
            icon = "info";
            buttons = "확인";
            break;
        case "warning":
            title = "Warning";
            text = msg + '하시겠습니까?';
            icon = "warning";
            buttons = ["취소", msg];
            break;
        case "success":
            title = "Success";
            text = "정상적으로 " + msg + "되었습니다.";
            icon = "success";
            buttons = "확인";
            break;
        case "error":
            title = "Error";
            text = "예상치 못한 오류가 발생하였습니다.";
            icon = "error";
            buttons = "확인";
            break;
        default:
            swal("Type not found!");
    }
    swal({
        title: title,
        text: text,
        icon: icon,
        buttons: buttons
    }).then(function(willDelete) {
        if(type == "warning" && willDelete) {
            swalAction();
        }
    });
}

/* 메뉴클릭시 팝업 */
function disPop(){
    var win = window.open("/dashBoardTemp", "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=500,left=500,width=700,height=1000");


}