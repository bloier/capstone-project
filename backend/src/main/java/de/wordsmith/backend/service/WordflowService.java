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
    private final PointsService pointsService;

    @Autowired
    public WordflowService(WordflowRepository wordflowRepository, PonsApiService ponsApiService, PointsService pointsService) {
        this.wordflowRepository = wordflowRepository;
        this.ponsApiService = ponsApiService;
        this.pointsService = pointsService;
    }

    public Letters findRandomLetters(){
        return wordflowRepository.findRandomLetters();
    }

    public boolean doesWordExist (String wordText) {
        return ponsApiService.doesWordExist(wordText);
    }

    public int addWordAndGetPoints(Word newWord) {
        wordflowRepository.addWordToWordsList(newWord);
        return pointsService.calculateAndAddPoints(newWord);
    }

}
