<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" xml:lang="ko" style="overflow: hidden;">
<head>
    <%@ include file="../common/meta.jsp"%>
</head>

<body>
    <main class="main">
        <div class="container">
            <div class="row d-flex flex-center min-vh-100 py-6">
                <div class="col-sm-5">
                    <a class="d-flex flex-center mb-5 login_logo">
                        <img src="/assets/images/logo.png" alt="">
                    </a>
                    <div class="card">
                        <div class="card-body p-5">
                            <div class="d-flex text-left justify-content-between align-items-center mb-2">
                                <div class="col-auto">
                                    <h5>Login</h5>
                                </div>
                                <div class="col-auto">
                                    <p class="fs--1 text-600 mb-0">
                                        <a class="cust-btn" href="/registration" type="button"><span>Go to register</span></a>
                                    </p>
                                </div>
                            </div>
                            <form method="POST" id="login_form" name="login_form">
                                <div class="form-group">
                                    <input type="text" id="loginId" name="loginId" placeholder="LoginId" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <input type="password" id="password" name="password" placeholder="Password" class="form-control" />
                                </div>

                                <div class="form-group">
                                    <button class="cust-btn btn btn-primary btn-block mt-3" name="Submit" value="Login" type="Submit">
                                        <span>Login</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
</html>