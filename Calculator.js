const getSleepHours = day =>{
  switch (day){
    case 'monday':
      return 8
      break;
    case 'tuseday':
      return 7
      break;
    case 'wednsday':
      return 8
      break;
    case 'thursday':
      return 5
      break;
    case 'friday':
      return 8
      break;
    case 'saturday':
      return 7
      break;
    case 'sunday':
      return 8
      break;
      default:
      return "error"
  }
};
 

const getActualSleepHours = () =>
getSleepHours('monday') + getSleepHours('tuseday') + getSleepHours('wednsday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
;
  
  console.log(getSleepHours('monday'));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};



const calculateSleepDebt = () => {
const actualSleepHours = getActualSleepHours();
  const idealSleepHours =
getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours){
   console.log("perfect"); 
  }
  else if(actualSleepHours > idealSleepHours){console.log("more" + (actualSleepHours - idealSleepHours));}
  else if(actualSleepHours < idealSleepHours){console.log("rest" + (idealSleepHours - actualSleepHours ));}
  else{
    console.log("error")
  }
 }; 
  
calculateSleepDebt();
