let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

const section = document.querySelector(".listPlanets");

for (let i = 0; i < planets.length; i++) {
    let planetDiv = document.createElement("div");
    planetDiv.className = "planet";
    planetDiv.textContent = planets[i];

    switch (planets[i]) {
        case "Mercury": planetDiv.style.backgroundColor = "gray"; break;
        case "Venus": planetDiv.style.backgroundColor = "yellow"; planetDiv.style.color = "black"; break;
        case "Earth": planetDiv.style.backgroundColor = "blue"; break;
        case "Mars": planetDiv.style.backgroundColor = "red"; break;
        case "Jupiter": planetDiv.style.backgroundColor = "orange"; break;
        case "Saturn": planetDiv.style.backgroundColor = "lightyellow"; planetDiv.style.color = "black"; break;
        case "Uranus": planetDiv.style.backgroundColor = "lightblue"; planetDiv.style.color = "black"; break;
        case "Neptune": planetDiv.style.backgroundColor = "darkblue"; break;
    }
    section.appendChild(planetDiv);
}
