function api (){
    const cityName = document.getElementById("cityName").value;
    const enter = document.getElementById("enter");


fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid={API key}` )
.then(resp => resp.json()) 
.then (data =>{

    const card = 
    `<div class ="card">
    <h1 class ="cityName"> ${data.cityName} </h1>
    <p> temp ${data.temp} </p>
    </div>`
    enter.innerHTML = card;
    
})


}
