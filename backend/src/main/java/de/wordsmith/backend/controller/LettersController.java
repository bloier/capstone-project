package de.wordsmith.backend.controller;

import de.wordsmith.backend.model.Letters;
import de.wordsmith.backend.model.Word;
import de.wordsmith.backend.service.WordflowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/letters")
public class LettersController {

    private final WordflowService wordflowService;

    @Autowired
    public LettersController(WordflowService wordflowService) {
        this.wordflowService = wordflowService;
    }

    @GetMapping
    public Letters findRandomLetters(){
        return wordflowService.findRandomLetters();
    }

}
