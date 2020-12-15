import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
export default instance;


// https://api.themoviedb.org/3/movie/550?api_key=98efcbed350422161eb735160545cf37

// https://netflix-clone-d27f9.web.app