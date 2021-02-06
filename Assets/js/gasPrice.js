const baseURL = "https://api.collectapi.com/gasPrice/fromCity";
const apiKey = "apikey 2oNtUauNnK4rwUC12Hf0JG:7kAKpeTyfp8vujuYHrHhe6";
const city = "istanbul";
const header = {
  authorization: apiKey,
  "content-type": "application/json",
};
const cityStateMap = getCityStateMap();
const statePriceMap = getStatePriceMap();

function makeQueryURL(baseURL, queryObject) {
  // join the query into the string
  const query = Object.keys(queryObject)
    .map((k) => `${escape(k)}=${escape(queryObject[k])}`)
    .join("&");

  return `${baseURL}?${query}`;
}

async function getCityStateMap() {
  const cityState = new Map();

  const baseURL = "https://api.collectapi.com/gasPrice/usaCitiesList";
  await fetch(baseURL, { method: "GET", headers: header })
    .then((response) => response.json())
    .then((data) => data.result)
    .then((result) =>
      result[0].forEach((it) => {
        it.cities.forEach((city) => {
          cityState.set(city.name, it.state);
        });
      })
    );

  return cityState;
}

async function getStatePriceMap() {
  const statePriceMap = new Map();
  const baseURL = "https://api.collectapi.com/gasPrice/allUsaPrice";
  await fetch(baseURL, { method: "GET", headers: header })
    .then((response) => response.json())
    .then((data) => data.result)
    .then((result) =>
      result.forEach((element) => {
        statePriceMap.set(element.name, {
          gasoline: element.gasoline,
          midGrade: element.midGrade,
          premium: element.premium,
        });
      })
    );

  return statePriceMap;
}

function searchByCity(city) {
  cityStateMap
    .then((map) => map.get(city))
    .then((state) => {
      if (state === undefined) throw new Error("city not known from api");
      // logic for price known
      statePriceMap
        .then((map) => map.get(state))
        .then((price) => console.log(price));
    })
    .catch((error) => console.log("City not searchable from api"));
}

const price = searchByCity("Seattle");
