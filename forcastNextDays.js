//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

let container=document.getElementById("show-data")
let arr=JSON.parse(localStorage.getItem("city"))||[]
console.log(arr)
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${arr}&appid=3465c8ccbed7b892a7370ecaaf55c7cc`).then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res)
    let data=res.list
    console.log(data)
    rcb(data);
})
.catch(function(err){
    console.log("err",err)
})

//appending

function rcb(data){
    data.forEach(function(el){
        // console.log(el)
        let box1=document.createElement("div");
        box1.setAttribute("id","box1")

        let date=document.createElement("p");
        date.innerText=el.dt_txt;
        // console.log(date)

        let cloud=document.createElement("p");
        cloud.innerText=el.weather.main;
       
        let tempmax=document.createElement("p");
        tempmax.innerText=`temp-max: ${el.main.temp_max}`;

        let tempmin=document.createElement("p");
        tempmin.innerText=`temp-min: ${el.main.temp_min}`;

        
       
        el.weather.map(function(cl){
            // console.log(cl.main)
            var icon=document.createElement("p")
            icon.innerText=cl.main
            // console.log(icon)
            let img=document.createElement("img")
            if(cl.main=="Rain")
            {
               
                img.src="https://assets.msn.com/bundles/v1/weather/latest/LightRainV3.svg"
            }
            else
            if(cl.main=="Clear")
            {
                img.src="https://assets.msn.com/bundles/v1/weather/latest/SunnyDayV3.svg";
            }
            else if(cl.main=="Clouds"){
                img.src="https://assets.msn.com/bundles/v1/weather/latest/PartlyCloudyDayV3.svg";
            }
            box1.append(date,icon,img,tempmax,tempmin)
            container.append(box1)
        })
       
       
    })
}