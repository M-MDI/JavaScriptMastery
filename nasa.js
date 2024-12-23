function nasa(N) {
    let result = "";
  
    for (let i = 1; i <= N ; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        if (i != N) {
            result += "NASA ";
        } else  {
            result += "NASA";
        }
      } else if (i % 3 === 0) {
        if (i != N) {
            result += "NA ";
        } else  {
            result += "NA";
        }
        //result += "NA";
      } else if (i % 5 === 0) {
        if (i != N) {
            result += "SA ";
        } else  {
            result += "SA";
        }
      } else{
        if (i != N) {
            result += i+ ' '
        } else  {
            result += i
        }
        
      }
    }
  
    return result;
  }

  console.log(nasa(15))