$(document).ready(function(){
var latitude;
var longitude;
  // getting user Ip to get latitude & longitude;
 $.getJSON("http://ip-api.com/json",function(Dataip){
   lat=Dataip.lat;
   lon=Dataip.lon;
  // alert(data2.lat);
  
   var APIKEY="2c5c8d6d1d75702249ed406b79b39a91";
 var api="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+APIKEY; 
   console.log(api);
   //now calling Open Weather API
   var Ctemp;
   var Ftemp;
   var tempSwitch=true;
   $.getJSON(api,function(weatherData){
    var city=weatherData.name;
    var country=weatherData.sys.country;
    var Ktemp=weatherData.main.temp;
    var desc=weatherData.weather[0].description; 
     // Temperature convertion
    Ctemp=(Ktemp-273.15).toFixed(1);
    Ftemp=(Ktemp*(9/5) - 459.67).toFixed(1); 
    $("#temp").click(function(){
      if(tempSwitch===true){
        $("#temp").html(Ctemp+" &#8451;"); 
        tempSwitch=false;
      }
        else 
          { $("#temp").html(Ftemp+" &#8457;");
           tempSwitch=true;
          }
      
      
      
    }
    );
     
     
     
     
     // setting info to html
     $("#city").html(city);
      $("#country").html(country);
      $("#desc").html(desc);
      $("#temp").html(Ctemp+" &#8451;");
     
     
     console.log("name: "+city);
     console.log("country "+country);
     console.log("temp "+Ctemp);
     console.log("temp "+Ktemp);
      console.log("temp "+Ftemp);
     
     
     
     
   });
   
   
   
   
 }); 
  
  
  
  
});