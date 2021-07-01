<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<script>
    $(document).ready(function() {
        commonInit();
    });
</script>

<header id="header">
    <div class="d-flex text-left justify-content-between align-items-center mb-2">
        <div class="logo">
            <a href="#">
                <img src="<c:url value='/assets/images/logo.png' />">
            </a>
        </div>
        <div class="login_info">
            <div class="user_name">
                <a class="user_name_btn" href="javascript:;">
                    <em class="user_name_btn">시스템어드민</em> 님 반갑습니다.
                </a>
            </div>
            <div class="user_info">
                <ul>
                    <li>
                        <a href="javascript:;" class="user_info_btn pwd">비밀번호변경</a>
                    </li>
                    <li>
                        <a href="javascript:;" class="user_info_btn logout">로그아웃</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>