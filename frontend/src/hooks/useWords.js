import axios from "axios";
import { useState } from "react";

export default function useWords() {
  const [allTypedInWords, setAllTypedInWords] = useState([]);

  function doesWordExist(wordText) {
    return axios
      .get(`/api/word?wordText=${wordText}`)
      .then((response) => response.data);
  }

  function addWordToWordsList(wordText) {
    axios
      .post(`/api/word/`, { wordText })
      .then(() => setAllTypedInWords([...allTypedInWords, wordText]))
      .catch((error) => console.error(error.message));
  }

  return { doesWordExist, allTypedInWords, addWordToWordsList };
}
