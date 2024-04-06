import axios from "axios";

//
export const getTrackById = async (id) => {
  try {
    const { data } = await axios.get(
      `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "7d089f5febmsh30fc858cae826dep1fb892jsnc72c7a2fc743",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

//
export const getArtistById = async (id) => {
  try {
    const { data } = await axios.get(
      `https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "7d089f5febmsh30fc858cae826dep1fb892jsnc72c7a2fc743",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

//
export const searchTrack = async (q) => {
  try {
    const response = await axios.get(
      `https://deezerdevs-deezer.p.rapidapi.com/search`,
      {
        params: { q, limit: 10 },
        headers: {
          "X-RapidAPI-Key":
            "7d089f5febmsh30fc858cae826dep1fb892jsnc72c7a2fc743",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
