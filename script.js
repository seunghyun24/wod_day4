function convertMilitary(timestr) {
  var nightCheck = timestr.indexOf("PM")
  var newt;
  var hourTime;
  var militaryt;
  var actualT
if (nightCheck > -1 == true) {
    newt = timestr.replace("PM", "");
    newt = newt.split(":")
    hourTime = newt[0]
    var hourTime = parseInt(hourTime, 10)
    if (hourTime != '12') {
      militaryt = hourTime + 12
    }
else {
      militaryt = 12
    }
    newt[0] = militaryt
    actualT = newt.join(':')
  }
else if (nightCheck == -1) {
    newt = timestr.replace("AM", "");
    newt = newt.split(":")
    hourTime = newtt[0]
    var hourTime = parseInt(hourTime, 10)
    militaryt = hourTime - 12
    newt[0] = miltaryt
    actualT = newt.join(':')
  }
return actualT
}

document.write(convertMilitary("07:05:045PM"));
document.write("<br/>")
document.write(convertMilitary("12:05:45AM"));
document.write("<br/>")
document.write(convertMilitary("12:05:45PM"));
