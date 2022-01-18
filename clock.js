console.log("this is clock")

function updateclock(){
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currenrtSecond = currentTime.getSeconds();
    let currentmilisecond = currentTime.getMilliseconds();

    currentMinutes = (currentMinutes < 10 ? "0" :"") + currentMinutes;
    currenrtSecond = ( currenrtSecond < 10 ? "0": "")+currenrtSecond;
    currentmilisecond = ( currentmilisecond < 1 ? "0" :"") + currentmilisecond;

   // let timeofDay =  ( currentHour < 12 ) ? "AM" : "PM";
    currentHour = ( currentHour > 12 ) ? currentHour-12 : currentHour;
    currentHour = (currentHour == 0 ) ? 12 : currentHour;
    
    let timeofDay = (currentHour < 12 ) ? "AM" : "PM";
    let currentTimestr = currentHour +" : "+ currentMinutes + " : "+ currenrtSecond + " : "+ currentmilisecond+ " : "+ timeofDay;
    
    document.getElementById("clock" ).innerHTML =  currentTimestr;

}