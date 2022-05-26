//src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"



function getData(){
var city=document.getElementById("city").value;

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3465c8ccbed7b892a7370ecaaf55c7cc`;


    fetch(url)
    .then(function(res){
    return res.json();
    })
    .then(function(res){
        append(res);
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    });


}


//location


function getlocation(lat,lon){
    let city=document.getElementById("city").value;


    //paste other url
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3465c8ccbed7b892a7370ecaaf55c7cc`;


    fetch(url)
    .then(function(res){
    return res.json();
    })
    .then(function(res){
        append(res);
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    });


}




function append(data){
    let container=document.getElementById("container")
  
 

  let div=document.createElement("div");
    div.setAttribute("Id","div-main")


  let map=document.getElementById("gmap_canvas");
    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    container.innerHTML=null;
    let city=document.createElement("p");
    city.innerText= `city:${data.name} `;

    let min =document.createElement("p");
    min.innerText=  `Min temp: ${data.main.temp_min}`;

    let max =document.createElement("p");
    max.innerText= `Max temp: ${data.main.temp_max}`;

    let current=document.createElement("p");
    current.innerText="current temp: "+ data.main.temp;

    let humidity=document.createElement("p");
    humidity.innerText=`Humidity: ${data.main.humidity}`;

  let wind=document.createElement("p");
  wind.innerText=`Wind-Speed: ${data.wind.speed}`;
   
  let cloud=document.createElement("p");
  cloud.innerText=`---- ${data.clouds.all}`;
  cloud.setAttribute("id","cloud")
  
  let sunrise=document.createElement("img");
  sunrise.innerText=`sunrise ${data.sys.sunrise}`;
sunrise.setAttribute("id","sunrise")

  let sunset=document.createElement("p");
  sunset.innerText=`Sunset: ${data.sys.sunset}`;
  


  let country=document.createElement("p");
  country.innerText=`Country: ${data.sys.country}`;

    div.append(city,min,max,current,humidity,wind,cloud,sunrise,sunset,country)

    container.append(div)
    
   // let masterBox=document.createElement("div")
    
    localStorage.setItem("city",JSON.stringify(data.name))

}

function getweather(){


navigator.geolocation.getCurrentPosition(success);
function success(position){
    var crd = position.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    getlocation(crd.latitude,crd.longitude)
}
}


