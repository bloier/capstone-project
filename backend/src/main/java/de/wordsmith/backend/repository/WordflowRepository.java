package de.wordsmith.backend.repository;

import de.wordsmith.backend.model.Letters;
import de.wordsmith.backend.model.Word;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Repository
public class WordflowRepository {

    private List<Word> wordsList = new ArrayList<>();
    private int points = 0;

    public Letters findRandomLetters() {
        List<Letters> lettersList = List.of(
                new Letters("pol"),
                new Letters("emp"),
                new Letters("mar"),
                new Letters("int"),
                new Letters("kon"),
                new Letters("ter")
        );
        Random random = new Random();
        Letters randomElement = lettersList.get(random.nextInt(lettersList.size()));
        return randomElement;
    }

    public void addWordToWordsList(Word newWord) {
        wordsList.add(newWord);
    }

    public void setPoints(int newPoints){
        points = newPoints;
    }

    public int getPoints(){
        return points;
    }

    public void reset(){
        points = 0;
        wordsList.clear();
    }

}
