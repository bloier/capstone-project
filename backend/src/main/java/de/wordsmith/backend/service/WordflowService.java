package de.wordsmith.backend.service;

import de.wordsmith.backend.model.Letters;
import de.wordsmith.backend.model.Word;
import de.wordsmith.backend.repository.WordflowRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class WordflowService {

    private final WordflowRepository wordflowRepository;
    private final PonsApiService ponsApiService;

    public Letters findRandomLetters(){
        return wordflowRepository.findRandomLetters();
    }

    public void addWordToWordsList(Word newWord) {
        wordflowRepository.addWordToWordsList(newWord);
    }

    public boolean doesWordExist (String wordText) {
        return ponsApiService.doesWordExist(wordText);
    }
}
