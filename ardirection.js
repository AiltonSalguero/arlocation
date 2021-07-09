function findStoreById(propValue) {
    var stores_data_json = localStorage.getItem('stores_data')
    var stores_data = JSON.parse(stores_data_json)

    for (var i = 0; i < stores_data.length; i++)
        if (stores_data[i].direccionId == propValue)
            return stores_data[i];

    // will return undefined if not found; you could return a default instead
}

function create_store_card(store) {
    var store_card = document.createElement('a-entity');
    store_card.setAttribute('id', store.direccionId);
    store_card.setAttribute('gps-entity-place', 'latitude: ' + store.direccion_Latitud + '; longitude: ' + store.direccion_Longitud + ';');
    store_card.setAttribute('store_card', "");
    store_card.setAttribute('foo', "");
    return store_card;
}

function create_directional_arrow() {
    var camera = document.querySelector("a-camera");
    console.log(camera);
    let directional_arrow = document.createElement("a-entity");
    directional_arrow.setAttribute("id", "arrow_direction")
    directional_arrow.setAttribute("gltf-model", "#arrow_model")
    directional_arrow.setAttribute("position", "0 -0.5 -0.5");
    directional_arrow.setAttribute("scale", "0.8 0.8 0.8")
    directional_arrow.setAttribute("rotation", "180 -90 -90")
    directional_arrow.setAttribute("look-at", "[target_arrow]")
    camera.appendChild(directional_arrow);
}

function init() {
    var store_detail_json = localStorage.getItem('store_detail')
    var store_detail = JSON.parse(store_detail_json)
    console.log(store_detail)
    var sceneEl = document.querySelector("a-scene");
    const store_card = create_store_card(store_detail)
    store_card.setAttribute('target_arrow', "");
    sceneEl.appendChild(store_card);

    create_directional_arrow();
}