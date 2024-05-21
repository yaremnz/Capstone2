
document.addEventListener("DOMContentLoaded", () =>{

function getPark(park){
    const element = document.createElement("div");
    element.classList.add("park");
    element.innerHTML = `
        <hr>
        <h3>${park.LocationName}</h3>
        <h4>${park.LocationID}</h4>
        <h4>${park.Address} , ${park.State} ${park.ZipCode}</h4>

    `;
    return element;}

    function showResults(){ 
    results.innerHTML= ""; //clear out the old
        let filtered = [];
            if (locationsRadio.checked) {
                filtered = nationalParksArray.filter(o=>{
                   return o.State.toUpperCase() ===locations.value.toUpperCase();
                });
            }else {
                filtered = nationalParksArray.filter(o => {
                    return o.LocationName.includes(parkType.value);
                })
            }
            filtered.forEach(p=>
            results.appendChild(getPark(p)));
        };

    

    
   
function handleSearchBy(){
        if(locationsRadio.checked){
            locationLabel.style.display = "block";
            parkTypeLabel.style.display ="none";
        }else{
            locationLabel.style.display = "none";
            parkTypeLabel.style.display = "block";
        }
    }


locations.addEventListener("change", showResults);
    parkType.addEventListener("change", showResults);


locationsRadio.addEventListener("click",handleSearchBy)
parkTypeRadio.addEventListener("click",handleSearchBy)


    locationsArray
        .map(option)
        .forEach(oe => locations.appendChild(oe));

    parkTypesArray
        .map(option)
        .forEach(pto => parkType.appendChild(pto));

    // handleSearchBy();
});
