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
    var iconCode=weatherData.weather[0].icon;


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
     
    switch (iconCode){
        case '01d':
            $('.body').css('background-image', 'url(https://d13yacurqjgara.cloudfront.net/users/199340/screenshots/2146883/sunny-800x600.gif)');
            break;
        case '01n':
            $('.body').css('background-image','url(https://d13yacurqjgara.cloudfront.net/users/5031/screenshots/2035500/latenightx.gif)');
            break


        case '02d':
        case '02n':

          $('.body').css('background-image','url(https://d13yacurqjgara.cloudfront.net/users/199340/screenshots/2146880/cloudy-sunny-800x600.gif)');
            break;
        case '03d':
        case '03n':
            $('.body').css('background-image','url(https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwie0Zu2m9XSAhXLGpQKHemVCmwQjRwIBw&url=http%3A%2F%2Fgiphy.com%2Fgifs%2Fclouds-jtavDv8iqstY4&bvm=bv.149397726,d.dGo&psig=AFQjCNFF4VBzZZFXEzIHDKHuuY5Ew9dKhA&ust=1489554046790836)');
            break;
        case '04d':
        case '04n':
            $('.body').css('background-image','url(https://www.google.com/imgres?imgurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F35%2F87%2F5d%2F35875df7e71a35785f1158790ad14343.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F322148179569717452%2F&docid=wL3OUcrmNxPyGM&tbnid=NQZv-MbvkFANQM%3A&vet=1&w=410&h=320&bih=662&biw=1366&ved=0ahUKEwjriN3qm9XSAhWEfLwKHWgoDoAQxiAIFSgB&iact=c&ictx=1)');
            break;
        case '09d':
         case'09n':
        case'10d':
        case'10n':
            $('.body').css('background-image','url(https://d13yacurqjgara.cloudfront.net/users/199340/screenshots/2146877/rainy-800x600.gif)');
            break;
        case '11d':
        case '11n':
            $('.body').css('background-image','url(https://d13yacurqjgara.cloudfront.net/users/199340/screenshots/2146745/thunderstorm.gif)');
            break
        case '13d':
        case '13n':
            $('.body').css('background-image','url(https://d13yacurqjgara.cloudfront.net/users/355252/screenshots/2424249/snow.gif)');
            break

        case'50d':
        case '50n':

            $('.body').css('background-image', 'url(https://d13yacurqjgara.cloudfront.net/users/358029/screenshots/2399344/glowy_mist.gif)');
            break
    }



     
     
     // setting info to html
     $("#city").html(city);
      $("#country").html(country);
      $("#desc").html(desc);
      $("#temp").html(Ctemp+" &#8451;");

       $(".icon").html("<img src='" + iconUrl  + "'>");
     
     console.log("name: "+city);
     console.log("country "+country);
     console.log("temp "+Ctemp);
     console.log("temp "+Ktemp);
      console.log("temp "+Ftemp);
     
     
     
     
   });
   
   
   
   
 }); 
  
  
  
  
});