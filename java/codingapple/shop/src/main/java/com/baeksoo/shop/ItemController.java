package com.baeksoo.shop;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ItemController {

    @GetMapping("/list")
    String list(Model model) {
        model.addAttribute("name", "홍길동");
        model.addAttribute("aaa", "bbb");
        return "list.html";
    }

}
