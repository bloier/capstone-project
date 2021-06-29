import axios from "axios";

export default function useWords() {

  function addWordToWordsList(wordText) {
    axios
      .post("/api/letters", { wordText })
      .catch((error) => console.error(error.message));
  }

  return { addWordToWordsList };
}


