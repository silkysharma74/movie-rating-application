import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmRhZmQzZmRjNjZmZWQ2ZDVkNTNiMTZjNDkyOTkwOSIsInN1YiI6IjY0Zjc4ZDA1MWI3MjJjMDBjNmUzNmU4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sPWTmNfiSjArrOTLaq3o6KVcscK84uR8Ks4WVAbiiLA"
  

const headers = {
    Authorization : `Bearer ${TMDB_TOKEN}`,
};

export const fetchDataFromApi = async (url,params) => {
   try{
    const {data} = await axios.get(BASE_URL + url,
        {
            headers,
            params
        })
        return data;
    }catch(err){
        console.log(err);
        return err;
    }

}