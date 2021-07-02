function dateRangepicker() {
    // 현재 날짜를 알기 위하여 변수 선언
    var now   = new Date();
    var year  = now.getFullYear();
    var month = now.getMonth() + 1;
    var day	  = now.getDate();

    $('#demo').daterangepicker({
        locale: {
            "format": "YYYY.MM.DD",		// date 노출 포멧
            "separator": " ~ ",			// 구분자
            "applyLabel": "확인",			// 확인버튼 텍스트
            "cancelLabel": "취소",		// 취소버튼 텍스트
            "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
            "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        },
        showDropdowns: true,
        minYear: 1950,
        maxYear: 2050,
        timePicker: true,							// 시간 노출 여부
        autoApply: true,							// 확인/취소 버튼 사용여부
        startDate: year,							// 시작일시
        endDate: year + '.' + ++month + '.' + day	// 종료일시
    });
}