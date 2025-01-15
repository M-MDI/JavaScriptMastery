function fusion(obj1, obj2) {

  let res = {...obj2};

  for (let [key] of Object.entries(obj1)) {
      
  
    if (obj2.hasOwnProperty(key)) {
    
    
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      res[key] = obj1[key].concat(obj2[key]);
    } else if (typeof obj1[key] === "string" && typeof obj2[key] === "string") {
      res[key] = obj1[key] + " " + obj2[key];
    } else if (typeof obj1[key] === "number" && typeof obj2[key] === "number") {
      res[key] = obj1[key] + obj2[key];
    } else if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      res[key] = fusion(obj1[key], obj2[key]);
    } else {
      res[key] = obj2[key];
    }
    } else {
     res[key] = obj1[key]
    }
  }

  return res;
}
