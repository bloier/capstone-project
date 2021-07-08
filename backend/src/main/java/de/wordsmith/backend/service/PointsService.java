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

    public int calculateAndAddPoints(Word newWord) {
        int increasedPoints = wordflowRepository.getPoints() + 10;
        wordflowRepository.setPoints(increasedPoints);
        return increasedPoints;
    }

    public void reset(){
        wordflowRepository.reset();
    }
}
