console.log("Working");

let getdata = function() {
  fetch("/data.json")
    .then((response) => {
      console.log("inside 1st then");
      return response.json();
    })
    .then((rsp) => {
      rsp.data.forEach((element) => {
        console.log(element.Country);

        let long = element["longitude"];
        let lat = element["latitude"];
        let cases = element["infected"];
        if (cases > 255) {
          color = "rgb(255,0,0)";
        } else {
          color = `rgb(${cases},0,0)`;
        }
        new mapboxgl.Marker({
          draggable: false,
          color: color,
        })
          .setLngLat([long, lat])
          .addTo(map);
        console.log(`marked ${element["Country"]}`);
      });
    });
};

setInterval(getdata, 10000);
