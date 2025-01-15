function firstDayWeek(num,str){

 
    const date = new Date()

    date.setFullYear(str)
    date.setDate((num *7)-6)
  
    while (date.getDate() !== 1 && date.getDay() !== 1) {
         date.setDate(date.getDate() - 1)
    }

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth()+1).padStart(2, '0');
        const year = String(date.getFullYear()).padStart(4, '0');

    return `${day}-${month}-${year}`;
}
