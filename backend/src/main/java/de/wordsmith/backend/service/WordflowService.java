package de.wordsmith.backend.service;

import de.wordsmith.backend.model.Letters;
import de.wordsmith.backend.model.Word;
import de.wordsmith.backend.repository.WordflowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WordflowService {

    private final WordflowRepository wordflowRepository;
    private final PonsApiService ponsApiService;

    @Autowired
    public WordflowService(WordflowRepository wordflowRepository, PonsApiService ponsApiService) {
        this.wordflowRepository = wordflowRepository;
        this.ponsApiService = ponsApiService;
    }

    public Letters findRandomLetters(){
        return wordflowRepository.findRandomLetters();
    }

    public boolean doesWordExist (String wordText) {
        return ponsApiService.doesWordExist(wordText);
    }

    public void addWordToWordsList(Word newWord) {
        wordflowRepository.addWordToWordsList(newWord);
        calculateAndAddPoints(newWord);
    }

    private void calculateAndAddPoints(Word newWord) {
        int increasedPoints = wordflowRepository.getPoints() + 10;
        System.out.println(increasedPoints);
        wordflowRepository.setPoints(increasedPoints);
    }

    public int getPoints () {
        return wordflowRepository.getPoints();
    }

    public void reset(){
        wordflowRepository.reset();
    }

}
