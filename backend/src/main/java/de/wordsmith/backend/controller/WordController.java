package de.wordsmith.backend.controller;

import de.wordsmith.backend.model.Word;
import de.wordsmith.backend.service.PonsApiService;
import de.wordsmith.backend.service.WordflowService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/word")
public class WordController {

    private final WordflowService wordflowService;

    @GetMapping()
    public boolean doesWordExist (@RequestParam String wordText) {
        return wordflowService.doesWordExist(wordText);
    }

    @PostMapping
    public void addWordToWordsList(@RequestBody Word newWord) {
        wordflowService.addWordToWordsList(newWord);
    }
}
