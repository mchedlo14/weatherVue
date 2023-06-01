export const geoApi = (lat,long) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((currentPosition) => {
        lat.value = currentPosition.coords.latitude;
        long.value = currentPosition.coords.longitude;
      });
    } else {
      alert("Geolocation is not supported in this browser");
    }
  };