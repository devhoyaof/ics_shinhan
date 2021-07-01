<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <title>DashBoard</title>
    <%@ include file="../common/meta.jsp"%>
</head>

<script type="text/javascript" charset="UTF-8" src="/assets/js/page/dashBoard.js"></script>
<script>
    // bilboard chart Init 호출
    $(document).ready(function() {
        chartInit();
        dashBoardInit();
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

    <!-- content start -->
    <div class="wrapper-inner d-flex">
        <div class="content">
            <div class="container-fluid p-0">
                <h1 class="page-title h3 mb-4">Dashboard</h1>
                <div class="row d-flex flex-wrap mb-2">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">barChart</h5>
                                <h6 class="card-subtitle text-muted">상세내용</h6>
                            </div>
                            <div class="card-body">
                                <!-- Markup -->
                                <div id="barChart" class="charts"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">donutChart</h5>
                                <h6 class="card-subtitle text-muted">상세내용</h6>
                            </div>
                            <div class="card-body">
                                <!-- Markup -->
                                <div id="donutChart" class="charts"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">simpleXYLineChart</h5>
                                <h6 class="card-subtitle text-muted">상세내용</h6>
                            </div>
                            <div class="card-body">
                                <!-- Markup -->
                                <div id="simpleXYLineChart" class="charts"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card flex-fill">
                    <div class="card-header">
                        <h5 class="card-title mb-0">통계 List</h5>

                        <div class="box_title">
                            <dl class="customer">
                                <dd>
                                    <div class="sel_box">
                                        <select class="top" name="selectCustName" id="selectCustName" style="display: none;">
                                            <option value="">고객사 선택</option>

                                            <option value="ICS">아이컴시스</option>

                                            <option value="VITO">VITO</option>

                                        </select><div class="nice-select top" tabindex="0"><span class="current">고객사 선택</span><ul class="list"><li data-value="" class="option selected focus">고객사 선택</li><li data-value="ICS" class="option">아이컴시스</li><li data-value="VITO" class="option">VITO</li></ul></div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </div>

                    <div class="card-body">
                        <%-- table start --%>
                        <div class="cont_box">
                            <div class="box_title">
                                <div class="fl">
                                    <h2 class="mt12">사용자 리스트</h2>
                                </div>
                            </div>
                            <div class="tbl">
                                <table id="testTb1" class="click">
                                    <colgroup>
                                        <col width="70px">
                                        <col width="150px">
                                        <col width="*">
                                        <col width="300px">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>NO</th>
                                            <th>STT</th>
                                            <th>TTS</th>
                                            <th>REGDATE</th>
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
</div>


</body>
</html>