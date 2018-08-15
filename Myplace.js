let myPlaces = ['shiraz', 'tehran', 'kashan'];
let friendPlaces = ['shiraz', 'qom', 'kish'];

for(let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++){
  
  for(let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++){
    if(myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]){
      console.log('Match:' + myPlaces[myPlacesIndex] );
    };

};
};