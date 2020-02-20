
promise = new Promise((resolve, reject) => {
  resolve();
});

promise
  .then(() => console.log("Im done"))
  .then(() => console.log("I also got called"))
  .catch(() => console.log("Fejl"));

// --------------------------------------

promise = new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();

  request.open("GET", "https://api.icndb.com/jokes/random");
  request.onload = () => {
    if (request.status === 200) {
      resolve.request.response();
    } else {
      reject(Error("Error fetching data"));
    }
  };

  request.onerror = () => {
    reject(Error("Error fetching data"));
    request.send();
  };
});

console.log("Async request made.");

promise.then(
  data => {
    console.log("got data! Promise fulfilled");
    console.log(JSON.parse(data).value.joke);
  },
  error => {
    console.log("Promise rejected");
    console.log(error.message);
  }
);

// ---------------------------------------

url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
  .then(data => console.log(data.json()))
  .catch(error => console.log("bad", error));

url2 = "https://ergast.com/api/f1/2018/drivers.json";

fetch(url2)
  .then(responce => responce.json())
  .then(data => console.table(data.MRData.DriverTable.Drivers))
  .catch(err => console.log(err));

// --- AXIOS ---


const axios = require('axios');
const BASE_URL = "https://ergast.com/api/f1/2018/drivers.json";

const getDrivers = async () => {
  try {
    const res = await axios.get(`${BASE_URL}`);
    const drivers = console.table(res.data.MRData.DriverTable.Drivers)
    return drivers;
  } catch (e) {
    console.log(e);
  }
};

