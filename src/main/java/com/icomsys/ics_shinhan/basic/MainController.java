package com.icomsys.ics_shinhan.basic;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.nio.charset.Charset;

@Controller
public class MainController {
    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/login")
    public String login() {
        return "/signup/login";
    }

    @GetMapping("/registration")
    public String registration() {
        return "/signup/registration";
    }

    @GetMapping("/dashBoard")
    public String dashBoard() {
        return "/page/dashBoard";
    }

    @GetMapping("/dashBoardTemp")
    public String dashBoardTemp() {
        return "/page/pop/dashBoardTemp";
    }

    @GetMapping("/userInfo")
    public String userInfo() { return "/page/userInfo"; }
}
