import axios from "axios";
import {useState} from "react";

export default function usePoints() {
    const [points, setPoints] = useState(null);

    function getPoints() {
        return axios
            .get(`/api/points`)
            .then((response) => response.data)
            .then(setPoints)
            .catch((error) => console.error(error.message));
    }

    function reset(points) {
        axios
            .post(`/api/points/`, { points })
            .then(() => setPoints(0))
            .catch((error) => console.error(error.message));
    }

    return { points, getPoints, reset };
}