const getLocation = () => new Promise((resolve, reject) => {
  // navigator.geolocation.getCurrentPosition(
  Geolocation.getCurrentPosition(
    (position) => {
      const {
        latitude,
        longitude,
      } = position.coords;
      resolve({
        latitude,
        longitude,
      });
    },
    error => reject(error),
  );
});

export default getLocation;
