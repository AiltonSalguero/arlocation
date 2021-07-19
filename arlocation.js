const MAX_DISTANT = 10

function findStoreById(propValue) {
    var stores_data_json = localStorage.getItem('stores_data')
    var stores_data = JSON.parse(stores_data_json)

    for (var i = 0; i < stores_data.length; i++)
        if (stores_data[i].direccionId == propValue)
            return stores_data[i];

        // will return undefined if not found; you could return a default instead
}

function to_store_detail(store_detail) {
    console.log(store_detail);
    console.log("click1");
    localStorage.setItem('store_detail', JSON.stringify(store_detail));
    window.location.href = "./store_detail.html";
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var my_lat = position.coords.latitude
            var my_lng = position.coords.longitude
            console.log("Latitude is :", my_lat);
            console.log("Longitude is :", my_lng);
            current_location = {
                lat: my_lat,
                lng: my_lng
            }
            var stores_data_json = localStorage.getItem('stores_data')
            var stores_data = JSON.parse(stores_data_json)
            console.log(stores_data)
            var near_stores = get_near_stores(stores_data, current_location.lat, current_location.lng, MAX_DISTANT)
            for (const store of near_stores) {
                var sceneEl = document.querySelector("a-scene");
                const store_card = create_store_card(store);
                sceneEl.appendChild(store_card);
            }
        });
    }
}

function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    } else {
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
        console.log(dist)
        return dist;
    }
}

function get_near_stores(stores, lat, lng, max_distance) {
    var near_stores = []
    for (const store of stores) {
        if (distance(store.direccion_Latitud, store.direccion_Longitud, lat, lng, "k") < max_distance) {
            near_stores.push(store)
        }

    }
    return near_stores
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.direccion_Latitud + "Longitude: " + position.coords.direccion_Longitud)
}

function create_store_card(store) {
    var store_card = document.createElement('a-entity');
    store_card.setAttribute('id', store.direccionId);
    store_card.setAttribute('gps-entity-place', 'latitude: ' + store.direccion_Latitud + '; longitude: ' + store.direccion_Longitud + ';');
    store_card.setAttribute('store_card', "");
    store_card.setAttribute('foo', "");
    return store_card;
}

function init() {

    getLocation()


}