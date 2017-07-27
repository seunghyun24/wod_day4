function clock(time)
{
  var split = time.split(":");
var first = parseInt(split[0]);
var ampm = time.substring(8,10);

if(ampm == "PM"){
 document.write(first + ":" + split[1] + ":" + time[6]+time[7]);
}
else{
  first = "00";
  document.write(first+":"+split[1]+":"+time[6]+time[7]);
}
}
clock("08:45:00AM");

//test with 12:45:00AM
