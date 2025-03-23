
let icon=document.querySelector("#icon");
let city="";
let url="";
icon.addEventListener("click",()=>{
    let input=document.querySelector("input");
    city=input.value;
    url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=19090151c938404469cd4d5dd5570c27`;
    weather(city);
})
let data=document.querySelector(".data");
async function weather(city) {
    try{
        let info=await axios.get(url);
        console.log(info);
        data.style.display="block";
        document.querySelector(".n1").innerHTML="";
        document.querySelector(".city").innerHTML=info.data.name;
        document.querySelector("#w").innerHTML=info.data.wind.speed;
        document.querySelector(".deg").innerHTML=`${info.data.main.temp}°k`;
        document.querySelector("#hm").innerHTML=info.data.main.humidity;
        
    }catch(err){
        document.querySelector(".n1").innerHTML="City Not Found";
        data.style.display="none";

        
    }
    
    }