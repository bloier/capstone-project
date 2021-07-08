import axios from "axios";
import {useState} from "react";

export default function usePoints() {
    const [points, setPoints] = useState(0);

    function reset(points) {
        axios
            .post(`/api/points/`, { points })
            .then(() => setPoints(0))
            .catch((error) => console.error(error.message));
    }

    return { points, reset };
}