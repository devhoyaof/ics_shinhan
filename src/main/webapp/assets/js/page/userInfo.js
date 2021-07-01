
function userInfoInit(){
    object = {
        message: '성공',
        response: '',
    }
    listCB(object);
}

function listCB(object) {
    object.response = {
        list : [
             {"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
            ,{"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
            ,{"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
            ,{"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
            ,{"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
            ,{"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
            ,{"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
            ,{"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
            ,{"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
            ,{"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
            ,{"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
            ,{"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
            ,{"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
            ,{"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
            ,{"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
            ,{"authCode":"NSH_USER","custCode":"ICS","custName":"아이컴시스","eMail":"","mobileNo":"","registDate":1597285044000,"rownum":1,"systemUserId":"USRCNFRM_00000000452","useFlag":"Y","userId":"kt","userName":"케이티"}
        ]
    };
    if(object.response){
        reqUserInfoTables(object.response.list);
    }
}

function reqUserInfoTables(data){
    var cnt = 0;
    $("#testTb1").dataTable({
        "autoWidth": false,
        "paging": true,
        "pagingType" : "full_numbers",
        "ordering": true,
        "info": false,
        "filter": false,
        "lengthChange": true,
        "dom": 'rt<"bottom"fip><"clear">',
        "pageLength" : '10',
        "data": data,
        "destroy": true,
        "select": true,
        "columns" : [
            {data: "systemUserId"},
            {data: "rownum"},
            {data: "custName"},
            {data: "userId"},
            {data: "userName"},
            {data: "eMail"},
            {data: "mobileNo"},
            {data: "useFlag"},
            {data: "registDate"},
        ],
        "columnDefs": [ {
            orderable: false,
            targets:   0,
            render: function ( data, type, row ) {
                cnt++;
                apdStr = '<div class="chk_box">';
                apdStr += '	<input type="checkbox" name="checkbox" value="'+data+'" >';
                apdStr += '	<label for="chk01"></label>';
                apdStr += '</div>';
                return apdStr;
            }
        },
            {
                orderable: false,
                targets: 6,
                render : function(data) {
                    if(data=='' || data=='undefined'){
                        data = '';
                    }else if(data.length==11){
                        data = data.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
                    }else if(data.length==8){
                        data = data.replace(/(\d{4})(\d{4})/, '$1-$2');
                    }else{
                        if(data.indexOf('02')==0){
                            data = data.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
                        } else {
                            data = data.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
                        }
                    }
                    return data;
                }
            },
            {
                orderable: false,
                targets: 8,
                render : function(data) {
                    return moment(data).format('YYYY-MM-DD HH:mm:ss');
                }
            }
        ],
        createdRow: function (row, data, index) {
            $(row).addClass("modalLoad");
            $(row).attr("rel", "reg_edit_modal");
        },
        drawCallback: function( settings ) {
            // scripts.js : 조회list modal 연결
            modalUi();
        }
    });
    $('.sel_box select').niceSelect();
}



function checkAreadyId(){
    if($('#mdNewUserId').val() == '' || $('#mdNewUserId').val() == 'undefined'){
        swalAlert("info", '중복 조회 할 ID를 입력해 주세요.');
        return false;
    }
}


function cudUserInfo(jobCudType){
    var param = "&jobCudType="+jobCudType;

    if( jobCudType == 'insert'){
        if($("#checkedId").val()=="0") {
            if($("#mdNewUserId").val()==""||$("#mdNewUserId").val()=="undefined"
                || $("#mdNewUserName").val()==""||$("#mdNewUserName").val()=="undefined"
                || $("#mdNewSelectCustName").val()==""||$("#mdNewSelectCustName").val()=="undefined"
                || $("#mdNewSelectAuthName").val()==""||$("#mdNewSelectAuthName").val()=="undefined"
                || $("#password").val()==""||$("#password").val()=="undefined"
                || $("#password2").val()==""||$("#password2").val()=="undefined" ) {

                swalAlert('info', '필수 항목을 확인 후 진행해 주세요.');

                return false;
            }

            if(	$("#password").val() != $("#password2").val() ){
                swalAlert('info', '비밀번호를 확인해 주세요.');
                return false;
            }

            param += "&userId="+$("#mdNewUserId").val();
            param += "&userName="+$("#mdNewUserName").val();
            param += "&mobileNo="+$("#mdNewMobileNo").val();
            param += "&eMail="+$("#mdNewEMail").val();
            param += "&useFlag="+$("#mdNewUseFlag").val();
            param += "&siteCode="+$("#mdNewSelectCustName").val();
            param += "&authCode="+$("#mdNewSelectAuthName").val();
            param += "&password="+$("#password").val();

        } else if ( $("#checkedId").val()==""||$("#checkedId").val()=="undefined" ){
            swalAlert('info', '먼저 ID 중복 확인을 실행하십시오');
            return false;
        } else {
            swalAlert('info', '사용할 수 없는 ID 입니다.');
            return false;
        }
    } else {
        if($("#mdUserName").val()==""||$("#mdUserName").val()=="undefined" ) {
            swalAlert('info', '필수 항목을 확인 후 진행해 주세요.');
            return false;
        }
        param += "&userId="+$("#mdUserId").val();
        param += "&userName="+$("#mdUserName").val();
        param += "&mobileNo="+$("#mdMobileNo").val();
        param += "&eMail="+$("#mdEMail").val();
        param += "&useFlag="+$("#mdUseFlag").val();
        param += "&siteCode="+$("#mdSelectCustName").val();
        param += "&authCode="+$("#mdSelectAuthName").val();
        param += "&systemUserId="+$("#mdSystemUserId").val();
    }

    $.ajax({
        type : "post",
        async : false,
        datatype : "text",
        url : 'test',
        data : param,
        success : function(data) {
            if(data.nMap.resultCode == "fail.common.login"){
                swalAlert("info", '로그인한 후에 진행해 주세요.');
            } else if(data.nMap.resultCode == "success.common.update" || data.nMap.resultCode == "success.common.insert") {
                swalAlert('success', '저장');
                $('a.close').trigger('click');
                fncRetrieveUserList(data.nMap);
            } else {
                swalAlert('error');
            }
        },
        error : function(data) {
            swalAlert('error');
        }
    });
}

function fncDeleteUser(){
    var table = $('#testTb1').DataTable();
    var param = table.$('input').serialize();

    $.ajax({
        type : "post",
        async : false,
        datatype : "text",
        url : "<c:url value='/adm/egov/user/EgovUserDelete.do'/>",
        data : param,
        success : function(data) {
            if(data.nMap.resultCode == "fail.common.login"){
                swalAlert("info", '로그인한 후에 진행해 주세요.');
            } else if(data.nMap.resultCode == "success.common.delete") {
                swalAlert('success', '삭제');
                $('a.close').trigger('click');
                fncRetrieveUserList(data.nMap);
            } else {
                swalAlert('error');
            }
        },
        error : function(data) {
            swalAlert('error');
        }
    });
}
