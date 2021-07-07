package de.wordsmith.backend.controller;

import de.wordsmith.backend.model.Word;
import de.wordsmith.backend.service.WordflowService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/word")
public class WordController {

    private final WordflowService wordflowService;

    public WordController(WordflowService wordflowService) {
        this.wordflowService = wordflowService;
    }

    @GetMapping()
    public boolean doesWordExist (@RequestParam String wordText) {
        return wordflowService.doesWordExist(wordText);
    }

    @PostMapping
    public void addWordToWordsList(@RequestBody Word newWord) {
        wordflowService.addWordToWordsList(newWord);
    }

    @GetMapping()
    public int getPoints () {
        return wordflowService.getPoints();
    }

    @PostMapping
    public void reset(){
        wordflowService.reset();
    }
}
