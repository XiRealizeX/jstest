window.onload = (event) => {
  var date = new Date(); 
  var hour = date.getUTCHours(); 
  var day = date.getUTCDay();
  
  var flag = false;
 
  if(day == 5 && hour >= 19) {
    flag = true;
  } else if(day == 6) {
    flag = true;   
  } else if(day == 0) {
    flag = true;   
  } else if(day == 1 && hour <= 9) {
    flag = true;
  }
 
    if(flag) {
    document.getElementById('out-office').style.display='block';
    }
  };
