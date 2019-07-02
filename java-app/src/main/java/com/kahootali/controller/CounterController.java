package com.kahootali.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CounterController {
    private static int num = 0;
    
    @GetMapping("count")
    public int count() {        
        return ++num;
    }
}
