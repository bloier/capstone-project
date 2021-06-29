package de.wordsmith.backend.repository;

import de.wordsmith.backend.model.Letters;
import de.wordsmith.backend.model.Word;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class WordflowRepository {

    private List<Word> wordsList = new ArrayList<>();

    public Letters findRandomLetters() {
        Letters testLetters = new Letters("int");
        return testLetters;
    }

    public void addWordToWordsList(Word newWord) {
        wordsList.add(newWord);
    }
}
