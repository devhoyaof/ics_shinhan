function dashBoardInit() {
    object = {
        message: '성공',
        response: '',
    }
    listCB(object);
}

function listCB(object){
    object.response = {
        list : [
            {"STT":"성공","TTS":"서울","registDate":"2021-06-24 15:20","rownum":1}
            ,{"STT":"성공","TTS":"인천","registDate":"2021-06-24 15:20","rownum":2}
            ,{"STT":"성공","TTS":"부천","registDate":"2021-06-24 15:20","rownum":3}
            ,{"STT":"성공","TTS":"대구","registDate":"2021-06-24 15:20","rownum":4}
            ,{"STT":"성공","TTS":"부산","registDate":"2021-06-24 15:20","rownum":5}
            ,{"STT":"성공","TTS":"제주도","registDate":"2021-06-24 15:20","rownum":6}
            ,{"STT":"성공","TTS":"전라남도","registDate":"2021-06-24 15:20","rownum":7}
            ,{"STT":"성공","TTS":"전라북도","registDate":"2021-06-24 15:20","rownum":8}
            ,{"STT":"성공","TTS":"충청북도","registDate":"2021-06-24 15:20","rownum":9}
        ]
    };
    if(object.response){
        reqDashBoardTables(object.response.list);
    }
}

function reqDashBoardTables(data){
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
            {data: "rownum"},
            {data: "STT"},
            {data: "TTS"},
            {data: "registDate"},
        ],
    });
    $('.sel_box select').niceSelect();
}