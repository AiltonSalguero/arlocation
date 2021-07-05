const MAX_DISTANT = 5
function findStoreById(propValue) {
    var stores_data_json = localStorage.getItem('stores_data')
    var stores_data = JSON.parse(stores_data_json)

    for (var i=0; i < stores_data.length; i++)
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


AFRAME.registerComponent("foo", {
    init: function () {
        console.log(this);
        var store = findStoreById(this.el.id)
        this.el.addEventListener('touchstart', function () {
            to_store_detail(store);
        }, false);
        this.el.addEventListener('click', function () {
            to_store_detail(store);
        }, false);
    }
})

AFRAME.registerComponent("store_card", {
    init: function () {
        console.log(this);
        var store = findStoreById(this.el.id)
        
        var img_logo = document.createElement("img");
        img_logo.setAttribute('id', 'image_'+store.direccionId);
        img_logo.setAttribute('src', store.fotoUser);
        img_logo.setAttribute('crossOrigin', 'Anonymous');
        img_logo.class ="img-fluid"
        img_logo.alt="Responsive image"
        document.getElementById('assets-id').appendChild(img_logo);
        // TODO OBTENER ID Y TRAER EL PRODUCTO
        let card = document.createElement("a-entity");
        let background = document.createElement("a-plane");
        let logo = document.createElement("a-image");
        let name = document.createElement("a-text");
        let adress = document.createElement("a-text");
        let ref = document.createElement("a-text");

        card.setAttribute("scale", "5 5 5")
        card.setAttribute("look-at", "[gps-camera]")

        background.setAttribute("color", "#B21ace");
        background.setAttribute("height", "1.2");
        background.setAttribute("width", "3.6");
        background.setAttribute("position", "0 -0.5 -10.15")

        logo.setAttribute("src", '#image_'+store.direccionId)
        logo.setAttribute("position", "-1.17 -0.5 -10");
        logo.setAttribute("scale", "1.17 1.17 1.17")

        name.setAttribute("value", store.nombresComercial)
        name.setAttribute("scale", "1 1 1")
        name.setAttribute("position", "-0.4 0 -10")

        adress.setAttribute("value", store.direccion_Direccion)
        adress.setAttribute("scale", "0.6 0.6 0.6")
        adress.setAttribute("position", "-0.4 -0.2 -10")

        ref.setAttribute("value", store.direccionPiso)
        ref.setAttribute("scale", "0.6 0.6 0.6")
        ref.setAttribute("position", "-0.4 -0.4 -10")

        card.appendChild(background)
        card.appendChild(logo)
        card.appendChild(name)
        card.appendChild(adress)
        card.appendChild(ref)
        this.el.appendChild(card);
    }
})

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
            var stores_data_json = localStorage.getItem('stores_data')
            var stores_data = JSON.parse(stores_data_json)
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

function create_store_card(store) {
    var store_card = document.createElement('a-entity');
    store_card.setAttribute('id', store.direccionId);
    store_card.setAttribute('gps-entity-place', 'latitude: '+ store.latitude + '; longitude: '+ store.longitude + ';');
    store_card.setAttribute('store_card',"");
    store_card.setAttribute('foo',"");
    return store_card;
}

function init() {

    getLocation()


}