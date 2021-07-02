<%--
  Created by IntelliJ IDEA.
  User: hoyao
  Date: 2021-07-01
  Time: 오전 10:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <title>UserInfo</title>
    <%@ include file="../common/meta.jsp"%>
</head>

<script type="text/javascript" charset="UTF-8" src="/assets/js/page/userInfo.js"></script>
<script>
    // bilboard chart Init 호출
    $(document).ready(function() {
        userInfoInit();
        dateRangepicker();
        modalUi();
    });
</script>

<body>
<div class="skip-navigation">
    <ul>
        <li>
            <a href="#Content" class="go_content">본문 바로가기</a>
        </li>
        <li>
            <a href="#Gnb">메뉴 바로가기</a>
        </li>
    </ul>
</div>
<header>
    <%@ include file="../common/header.jsp" %>
</header>

<div class="wrapper d-flex">
    <%@ include file="../common/lnbMenu.jsp" %>

    <div class="wrapper-inner d-flex">
        <div class="content">
            <div class="container-fluid p-0">
                <h1 class="page-title h3 mb-4">User Info</h1>
                <div class="card flex-fill">
                    <div class="card-header">
                        <div class="box_title">
                            <h2 class="mt12">사용자 조회</h2>
                        </div>
                        <div class="tbl">
                            <table class="search">
                                <colgroup>
                                    <col width="130px">
                                    <col width="25%">
                                    <col width="130px">
                                    <col width="25%">
                                    <col width="130px">
                                    <col width="25%">
                                </colgroup>
                                <tbody>
                                    <tr class="on">
                                        <th>조회조건</th>
                                        <td>
                                            <div class="sel_box">
                                                <select id="searchCondition" class="wide">
                                                    <!--									 <option value="">조회조건 선택</option> -->
                                                    <option value="0">ID</option>
                                                    <option value="1">이름</option>
                                                </select>
                                            </div>
                                        </td>
                                        <th class="tl">조회 명</th>
                                        <td class="tl">
                                            <div class="ipt_box">
                                                <input type="text" placeholder="조회명을 입력해주세요." id="searchKeyword" name="code" class=""  onkeypress="return fncKeyPress();">
                                            </div>
                                        </td>
                                        <th class="tl">조회 기간</th>
                                        <td class="tl">
                                            <input type="text" id="demo" name="demo" value="" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div class="card-body">
                        <%-- table start --%>
                        <div class="cont_box">
                            <div class="box_title d-flex justify-content-between align-items-center">
                                <div class="fl">
                                    <h2 class="mt12">사용자 리스트</h2>
                                </div>
                                <div class="btn_wrap fr">
                                    <a href="#" class="btn btn-danger" onclick="fncDeleteUser(); return false;">삭제</a>
                                    <a href="#" rel="reg_modal" class="btn btn-info modalLoad">신규등록</a>
                                </div>
                            </div>
                            <div class="tbl">
                                <table id="testTb1" class="click">
                                    <colgroup>
                                        <col width="60px">
                                        <col width="70px">
                                        <col width="300px">
                                        <col width="*">
                                        <col width="*">
                                        <col width="250px">
                                        <col width="250px">
                                        <col width="150px">
                                        <col width="250px">
                                    </colgroup>
                                    <thead>
                                    <tr>
                                        <th>
                                            <div class="chk_box">
                                                <input type="checkbox" name="all" id="chk00"  value="">
                                                <label for="chk00"></label>
                                            </div>
                                        </th>
                                        <th>NO</th>
                                        <th>고객사</th>
                                        <th>아이디</th>
                                        <th>사용자 이름</th>
                                        <th>이메일</th>
                                        <th>전화번호</th>
                                        <th>사용여부</th>
                                        <th>등록일시</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--  modal :: 사용자 수정 팝업  -->
    <div class="modal" id="reg_edit_modal">
        <div class="modal_header">
            <h3>사용자 관리 수정</h3>
            <input type="hidden" id="mdSystemUserId" id="mdSystemUserId">
        </div>
        <div class="modal_body">
            <div class="modal_cont">
                <dl>
                    <dt><h4><em class="important">사용자 ID</em></h4></dt>
                    <dd>
                        <div class="ipt_box">
                            <input type="text" name="required" id="mdUserId" disabled>
                        </div>
                        <div>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt><h4><em class="important">이름</em></h4></dt>
                    <dd>
                        <div class="ipt_box">
                            <input type="text" name="required" id="mdUserName">
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt><h4><em class="important">고객사</em></h4></dt>
                    <dd>
                        <div class="sel_box">
                            <select class="wide" id="mdSelectCustName" name="mdSelectCustName" title="검색조건-고객사" >
                                <c:forEach var="siteInfo" items="${siteLists}" varStatus="status">
                                    <option value="<c:out value="${siteInfo.custCode}"/>"><c:out value="${siteInfo.custName}"/></option>
                                </c:forEach>
                            </select>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt><h4><em class="important">권한</em></h4></dt>
                    <dd>
                        <div class="sel_box">
                            <select class="wide" id="mdSelectAuthName" name="mdSelectAuthName" title="검색조건-권한" >
                                <c:choose>
                                    <c:when test="${'VIDEO_SITE_ADMIN'==LoginVO.authCode}">
                                        <option value="VIDEO_SITE_USER" label="영상상담 Site 사용자"/>
                                    </c:when>
                                    <c:otherwise>
                                        <option value="SYS_ADMIN">시스템관리자</option>
                                        <c:forEach var="authInfo" items="${authLists}" varStatus="status">
                                            <option value="<c:out value="${authInfo.code}"/>"><c:out value="${authInfo.codeNm}"/></option>
                                        </c:forEach>
                                    </c:otherwise>
                                </c:choose>
                            </select>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt><h4><em class="important">사용여부</em></h4></dt>
                    <dd>
                        <div class="sel_box">
                            <select id="mdUseFlag" class="wide">
                                <option value="N">미사용</option>
                                <option value="Y">사용</option>
                            </select>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt><h4><em class="">이메일 주소</em></h4></dt>
                    <dd>
                        <div class="ipt_box">
                            <input type="text" id="mdEMail">
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt><h4><em class="">핸드폰 번호</em></h4></dt>
                    <dd>
                        <div class="ipt_box">
                            <input type="text" id="mdMobileNo">
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="modal_footer">
            <div class="btn_wrap fr">
                <a href="javascript:;" class="btn btn-dark" onclick="cudUserInfo('update'); return false;">저장</a>
            </div>
        </div>
        <div class="modal_controller">
            <a href="#" class="close">close</a>
        </div>
    </div>
    <!--  modal :: 사용자 서비스 수정 팝업 end -->

    <!--  modal :: 사용자 등록 팝업  -->
    <div class="modal" id="reg_modal">
        <div class="modal_header">
            <h3>사용자 관리 등록</h3>
        </div>
        <div class="modal_body">
            <div class="modal_cont">
                <dl>
                    <dt><h4><em class="important">사용자 ID</em></h4></dt>
                    <dd>
                        <div class="ipt_box listen">
                            <input type="text" name="required" id="mdNewUserId" onkeypress="return fncUserIdKeyPress(event);" style="width: 326px;">
                            <input type="hidden" id="checkedId">
                            <a href="#" class="btn btn-dark" onclick="checkAreadyId(); return false;" style="height: 36px; line-height: 36px; padding:0 10px">중복검색</a>
                        </div>
                        <div>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt><h4><em class="important">비밀번호</em></h4></dt>
                    <dd>
                        <div class="ipt_box listen">
                            <input type="password" name="required" id="password">
                        </div>
                        <div>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt><h4><em class="important">비밀번호 확인</em></h4></dt>
                    <dd>
                        <div class="ipt_box listen">
                            <input type="password" name="required" id="password2">
                        </div>
                        <div>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt><h4><em class="important">이름</em></h4></dt>
                    <dd>
                        <div class="ipt_box">
                            <input type="text" name="required" id="mdNewUserName">
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt><h4><em class="important">고객사</em></h4></dt>
                    <dd>
                        <div class="sel_box">
                            <select class="wide" id="mdNewSelectCustName" name="mdNewSelectCustName" title="검색조건-고객사" >
                                <option value="">고객사 선택</option>
                                <c:forEach var="siteInfo" items="${siteLists}" varStatus="status">
                                    <option value="<c:out value="${siteInfo.custCode}"/>"><c:out value="${siteInfo.custName}"/></option>
                                </c:forEach>
                            </select>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt><h4><em class="important">권한</em></h4></dt>
                    <dd>
                        <div class="sel_box">
                            <select class="wide" id="mdNewSelectAuthName" name="mdNewSelectAuthName" title="검색조건-권한" >
                                <option value="">권한 선택</option>
                                <c:choose>
                                    <c:when test="${'VIDEO_SITE_ADMIN'==LoginVO.authCode}">
                                        <option value="VIDEO_SITE_USER" label="영상상담 Site 사용자"/>
                                    </c:when>
                                    <c:otherwise>
                                        <option value="SYS_ADMIN">시스템관리자</option>
                                        <c:forEach var="authInfo" items="${authLists}" varStatus="status">
                                            <option value="<c:out value="${authInfo.code}"/>"><c:out value="${authInfo.codeNm}"/></option>
                                        </c:forEach>
                                    </c:otherwise>
                                </c:choose>
                            </select>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt><h4><em class="important">사용여부</em></h4></dt>
                    <dd>
                        <div class="sel_box">
                            <select id="mdNewUseFlag" class="wide">
                                <option value="N">미사용</option>
                                <option value="Y">사용</option>
                            </select>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt><h4><em class="">이메일 주소</em></h4></dt>
                    <dd>
                        <div class="ipt_box">
                            <input type="text" id="mdNewEMail">
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt><h4><em class="">핸드폰 번호</em></h4></dt>
                    <dd>
                        <div class="ipt_box">
                            <input type="text" id="mdNewMobileNo">
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="modal_footer">
            <div class="btn_wrap fr">
                <a href="#" class="btn btn-dark" onclick="cudUserInfo('insert'); return false;">저장</a>
            </div>
        </div>
        <div class="modal_controller">
            <a href="#" class="close">close</a>
        </div>
    </div>
    <!--  modal :: 사용자 서비스 등록 팝업 end -->
</div>

</body>
</html>
