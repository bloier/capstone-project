import axios from "axios";
import {useState} from "react";

export default function useWords() {

  const [allTypedInWords, setAllTypedInWords] = useState([]);

  function addWordToWordsList(wordText) {
    axios
      .post("/api/letters", { wordText })
      .then(() => setAllTypedInWords([...allTypedInWords, wordText]))
      .catch((error) => console.error(error.message));
  }

  return { allTypedInWords, addWordToWordsList };
}


