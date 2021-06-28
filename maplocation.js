const MAX_DISTANT = 5
var stores_data = [
    {
        "id": 1,
        "name": "Victors Nombre Comercial",
        "adress": "Av. Agustin Gamarra 140",
        "latitude": -12.0641762,
        "longitude": -77.1525624
    },
    {
        "id": 2,
        "name": "Kayser",
        "adress": "Av Agustin Gamarra 650",
        "latitude": -12.0665232,
        "longitude": -77.01325109999999
    },
    {
        "id": 3,
        "name": "Mya Line",
        "adress": "Av. Agustin Gamarra 1103",
        "latitude": -12.0695634,
        "longitude": -77.0128069
    },
    {
        "id": 4,
        "name": "Mya Line",
        "adress": "Av Agustin Gamarra 1105",
        "latitude": -12.0694625,
        "longitude": -77.0127509
    },
    {
        "id": 5,
        "name": "Pioner",
        "adress": "Av Agustin Gamarra 445",
        "latitude": -12.0652889,
        "longitude": -77.154501
    },
    {
        "id": 6,
        "name": "Bata",
        "adress": "Av. Agustin Gamarra 1017",
        "latitude": -12.0684229,
        "longitude": -77.0128529
    },
    {
        "id": 7,
        "name": "Kayser",
        "adress": "Av. La Mar 2225 - San Miguel",
        "latitude": -12.0750562,
        "longitude": -77.08071819999999
    },
    {
        "id": 8,
        "name": "Bata",
        "adress": "Av. La Marina 2000, San Miguel",
        "latitude": -12.0761542,
        "longitude": -77.083643
    },
    {
        "id": 9,
        "name": "Bata",
        "adress": "Jiron Jose Galvez 522 - B",
        "latitude": -12.0903509,
        "longitude": -77.07283799999999
    },
    {
        "id": 10,
        "name": "Bata",
        "adress": "Av. La Mar 2275, San Miguel",
        "latitude": -12.0749941,
        "longitude": -77.08168979999999
    },
    {
        "id": 11,
        "name": "Victors Nombre Comercial",
        "adress": "Av. Las Carmelias 234",
        "latitude": -12.0931147,
        "longitude": -77.0293717
    },
    {
        "id": 12,
        "name": "Angelas Flowers",
        "adress": "Av. Las Carmelias 234",
        "latitude": -12.0931147,
        "longitude": -77.0293717
    },
    {
        "id": 13,
        "name": "Victors Nombre Comercial",
        "adress": "Av. Las Carmelias 234",
        "latitude": -12.0931147,
        "longitude": -77.0293717
    },
    {
        "id": 14,
        "name": "Victors Nombre Comercial",
        "adress": "Av. Las Carmelias 234",
        "latitude": -12.0931147,
        "longitude": -77.0293717
    },
    {
        "id": 15,
        "name": "Angelas Flowers",
        "adress": "Av. Las Carmelias 234",
        "latitude": -12.0931147,
        "longitude": -77.0293717
    },
    {
        "id": 16,
        "name": "Abraham Store",
        "adress": "Av. Universitaria",
        "latitude": -12.0751071,
        "longitude": -77.0803832
    }
];
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var my_lat = position.coords.latitude
            var my_lng = position.coords.longitude
            console.log("Latitude is :", my_lat);
            console.log("Longitude is :", my_lng);
            current_location = {
                lat: my_lat,
                lng: my_lng
            }
            
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: current_location,
            });
            var near_stores = get_near_stores(stores_data, current_location.lat, current_location.lng, MAX_DISTANT)
            for (const store of near_stores) {
                var marker = new google.maps.Marker({
                    position: { lat: store.latitude, lng: store.longitude },
                    map: map,
                });
        
            }
        });
    }
}
function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") { dist = dist * 1.609344 }
        if (unit == "N") { dist = dist * 0.8684 }
        return dist;
    }
}
function get_near_stores(stores, lat, lng, max_distance) {
    var near_stores = []
    for (const store of stores) {
        if (distance(store.latitude, store.longitude, lat, lng, "k") < max_distance) {
            near_stores.push(store)
        }

    }
    return near_stores
}
function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude)
}

function initMap() {
    
    getLocation()
    
    
}