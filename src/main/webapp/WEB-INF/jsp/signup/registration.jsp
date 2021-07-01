<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" xml:lang="ko" style="overflow: hidden;">
<head>
    <jsp:include page="../common/meta.jsp"></jsp:include>
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
                                    <h5>registration</h5>
                                </div>
                                <div class="col-auto">
                                    <p class="fs--1 text-600 mb-0">
                                        Have an account?
                                        <a class="cust-btn" href="/login" type="button"><span>Login</span></a>
                                    </p>
                                </div>
                            </div>
                            <form method="POST" id="registration_form" name="registration_form">
                                <div class="form-group">
                                    <label class="validation-message"></label>
                                    <input type="text" placeholder="LoginId" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="validation-message"></label>
                                    <input type="text"  placeholder="UserName" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="Password" class="form-control" />
                                    <label class="validation-message"></label>
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="Password Confirm" class="form-control" />
                                    <label class="validation-message"></label>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="cust-btn btn btn-primary btn-block mt-3"><span>Register</span></button>
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