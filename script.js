document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("toggleContainer");
  const bodyE = document.getElementsByTagName("body")[0];
  const cover = document.getElementById("cover");
  const weatherText = document.getElementById("weatherText");

  let weatherState = 0;
  function toggleWeather() {
    weatherState = (weatherState + 1) % 3;

    switch (weatherState) {
      case 0:
        bodyE.style.backgroundColor = "#fff";
        weatherText.textContent = "It's Sunny Day!!!";
        weatherText.style.color = "#000";
        cover.style.transform = "translateX(0)";
        cover.style.backgroundColor = "#fff";
        bodyE.style.background = "none";
        break;
      case 1:
        bodyE.style.backgroundColor = "#000";
        weatherText.textContent = "It's Moonlit Night!!!";
        weatherText.style.color = "#fff";
        cover.style.transform = "translateX(100%)";
        cover.style.backgroundColor = "#000";
        break;
      case 2:
        bodyE.style.backgroundColor = "#C4D3DF";
        weatherText.textContent = "It's Cloudy Day!!!";
        weatherText.style.color = "#333";
        cover.style.transform = "translateX(210%)";
        cover.style.backgroundColor = "#C4D3DF";

        break;
    }
  }
  container.addEventListener("click", toggleWeather);

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      toggleWeather();
    }
  });
});
