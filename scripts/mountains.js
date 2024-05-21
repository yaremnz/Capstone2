
// function that can "fetch" the sunrise/sunset times
async function getSunsetForMountain(lat, lng){
    let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
    );
    let data = await response.json();
    return data;
}



document.addEventListener("DOMContentLoaded", ()=>{
for(m of mountainsArray){
    mountainList.appendChild(option(m.name));
}  

    for(mountain of mountainsArray){
        const name = mountain.name;
        const o = option(name)
        mountainList.appendChild(o);
}

// {
//     "results": {"sunrise":"5:18:00 AM",
//     "sunset":"6:43:52 PM",
//     "solar_noon":"12:00:56PM",
//     "day_length":"13:25:52",
//     "civil_twilight_begin":"4:49:23 AM",
//     "civil_twilight_end":"7:12:29 PM",
//     "nautical_twilight_begin":"4:13:02 AM",
//     "nautical_twilight_end":"7:48:50 PM",
//     "astronomical_twilight_begin":"3:34:23 AM",
//     "astronomical_twilight_end":"8:27:29 PM"},
//     "status":"OK"
//     }

mountainList.addEventListener("change", async e=>{
    const mountain = mountainsArray[mountainList.selectedIndex - 1];
    const sunData = await getSunsetForMountain(mountain.coords.lat, mountain.coords.lng);


mountainResults.innerHTML = `
    <h3>${mountain.name}</h3>
    <br>
    Elevation: ${mountain.elevation} feet <br>
    Effort: ${mountain.effort}<br>
    Lattitude/Longitude: (${mountain.coords.lat}, ${mountain.coords.lng})
    sunraise: ${sunData.results.sunrise} <br>
    sunset: ${sunData.results.sunset} <br>

    <p>${mountain.desc}</p>
    <img src="./images/${mountain.img}">
    `;;
});

// mountainsArray.forEach(m => mountainList.appendChild(option(m.name)));

// // mountainResults



});

