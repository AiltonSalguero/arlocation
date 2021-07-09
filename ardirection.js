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

function init() {
    var store_detail_json = localStorage.getItem('store_detail')
    var store_detail = JSON.parse(store_detail_json)
    console.log(store_detail)
    var sceneEl = document.querySelector("a-scene");
    const store_card = create_store_card(store_detail)
    sceneEl.appendChild(store_card);
    var arrow_img = document.getElementById('arrow2')
    arrow_img.setAttribute("rotation", "180 270 90")
    //arrow_img.setAttribute("look-at", '#'+store_detail.direccionId)
}