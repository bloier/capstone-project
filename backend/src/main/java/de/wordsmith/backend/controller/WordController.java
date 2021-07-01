package de.wordsmith.backend.controller;

import de.wordsmith.backend.model.Word;
import de.wordsmith.backend.service.PonsApiService;
import de.wordsmith.backend.service.WordflowService;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/word")
public class WordController {

    private final WordflowService wordflowService;
    private final PonsApiService ponsApiService;

    public WordController(WordflowService wordflowService, PonsApiService ponsApiService) {
        this.wordflowService = wordflowService;
        this.ponsApiService = ponsApiService;
    }

    @GetMapping()
    public boolean doesWordExist (@RequestParam String wordText) {
        return ponsApiService.doesWordExist(wordText);
    }

    @PostMapping
    public void addWordToWordsList(@RequestBody Word newWord) {
        wordflowService.addWordToWordsList(newWord);
    }
}
