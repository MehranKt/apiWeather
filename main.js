let select = document.querySelector("#select").value;
let temp = document.querySelector("#temp");
let feels = document.querySelector("#feels");
let wind = document.querySelector("#wind");
let humit = document.querySelector("#humit");
let img = document.querySelector("#img");
let time = document.querySelector("#time");

window.addEventListener("load", function () {
  loadLocation();
});
async function loadLocation() {
  try {
    const data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=cb7565cfb0f74e86a0f155847221912&q=${select}&aqi=no`
    ).then((response) => response.json());
    console.log(data)
    temp.innerHTML = `<span>${data.current.temp_c}Cº</span>`
    feels.innerHTML = `<span>${data.current.feelslike_c}Cº</span>`
    wind.innerHTML = `<span>${data.current.wind_kph} km/h</span>`
    humit.innerHTML = `<span>${data.current.humidity} %</span>`
    img.src = `${data.current.condition.icon}`
    time.innerHTML = `<span>${data.location.localtime}</span>`
  } catch (err) {
    console.log(err);
  }
}

function changeLocation() {
  select = document.querySelector("#select").value;
  loadLocation();
  console.log(select);
}
