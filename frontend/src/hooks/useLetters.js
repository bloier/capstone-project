import axios from "axios";
import { useEffect, useState } from "react";

export default function useLetters() {
  const [letters, setLetters] = useState("");

  useEffect(() => {
    axios
      .get("/api/letters")
      .then((response) => response.data.givenLetters)
      .then(setLetters)
      .catch((error) => console.log(error));
  }, []);

  return { letters };
}
