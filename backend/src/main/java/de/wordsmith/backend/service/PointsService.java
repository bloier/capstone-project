package de.wordsmith.backend.service;

import de.wordsmith.backend.model.Word;
import de.wordsmith.backend.repository.WordflowRepository;
import org.springframework.stereotype.Service;

@Service
public class PointsService {

    private final WordflowRepository wordflowRepository;

    public PointsService(WordflowRepository wordflowRepository) {
        this.wordflowRepository = wordflowRepository;
    }

    public void calculateAndAddPoints(Word newWord) {
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
