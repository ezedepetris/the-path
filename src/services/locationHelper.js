export const getDistanceFromLatLonInKm = (origin, destination) => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(destination.latitude-origin.latitude);  // deg2rad below
  var dLon = deg2rad(destination.longitude-origin.longitude); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(origin.latitude)) * Math.cos(deg2rad(destination.latitude)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

const deg2rad = (deg) => {
  return deg * (Math.PI/180)
}

export const getAddress = (address) => address.split(',')[0]
