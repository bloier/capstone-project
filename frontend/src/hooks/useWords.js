import axios from "axios";
import { useState } from "react";

export default function useWords() {
  const [allTypedInWords, setAllTypedInWords] = useState([]);
  const [points, setPoints] = useState(0);

  function doesWordExist(wordText) {
    return axios
      .get(`/api/word?wordText=${wordText}`)
      .then((response) => response.data)
      .catch((error) => console.error(error.message));
  }

  function addWordAndGetPoints(wordText) {
    axios
      .post(`/api/word/`, { wordText })
      .then((response) => response.data)
      .then(setPoints)
      .then(() => setAllTypedInWords([...allTypedInWords, wordText]))
      .catch((error) => console.error(error.message));
  }

  return { points, doesWordExist, allTypedInWords, addWordAndGetPoints };
}
