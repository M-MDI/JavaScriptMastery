function round(num) {

    var i = to5(num);
  
    if (num < 0) {
      num = num + i;
    } else {
      num = num - i;
    }
  
    if (i >= 0.5) {
      if (num < 0) {
        num = num - 1;
      } else {
        num = num + 1;
      }
      return num;
    } else {
      return num;
    }
}
  
function ceil(num) {
  
    var i = to5(num);
  
    if (i == 0) {
      return num;
    }
  
    if (num > 0) {
      return num - i + 1;
    }
  
    return num + i;
  }
  
  function floor(num) {
  
    var i = to5(num);
  
    if (num < 0) {
      return num + i - 1;
    }
  
    return num - i;
}
  
function trunc(num) {
    
    var i = to5(num);
    
    if (i == 0) {
      return num;
    }
    
    if (num < 0) {
      if (num + i == 0) {
      return -0;
      }
      return num + i;
    }
    
    return num - i;
}
  
function to5(num) {
      
    var i = num;
      
      if (i < 0) {
        i = -i;
      }
    
      while (i >= 1) {
        if (i > 10001) {
          i -= 10000;
        } else if (i > 101) {
          i -= 100;
        }
          i--;
        }
      return i;
}
