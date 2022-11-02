function initMap(){
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {lat:37.77, lng: -122.447},
    });

    directionsRenderer.setMap(map);
    calculateAndDisplayRoutes(directionsService, directionsRenderer);
    document.getElementById("mode").addEventListener("change", () => {
        calculateAndDisplayRoutes(directionsService, directionsRenderer);
    });
}

function calculateAndDisplayRoutes(directionsService, directionsRenderer){
    const selectedMode = document.getElementById("mode").value;

    directionsService.route({
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,

        travelMode: google.maps.TravelMode[selectedMode],
    }).then((response) => {
        directionsRenderer.setDirections(response);
    }).catch((e) => window.alert("Direction failed for " + status));
}