const API_KEY = "4dPyLjJaHsNmgn8Gh07gg0Lnqx12";

// get all the matches [upcomming matches]
export const getMatches = () => {
  const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR : ", error));
};

// Load matches details
export const getMatchDetail = (id) => {
  const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

  return fetch(url).then((response) => response.json()).catch(error => console.log(error));
}

