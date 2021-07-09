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
    var directional_arrow = document.querySelector("#arrow_direction");
    directional_arrow.setAttribute("look-at", "[target_arrow]")
    camera.appendChild(directional_arrow);
}

function init() {
    //var store_detail_json = localStorage.getItem('store_detail')
    //var store_detail = JSON.parse(store_detail_json)
    var store_detail = {
        "direccionId": 150,
        "usuarioId": 14,
        "direccion_Direccion": "Agustin Gamarra 650, La Victoria 15018, Perú",
        "direccionPiso": "1",
        "direccion_NroLocal": "650",
        "direccion_Referencia": "Alt. Av Agustin Gamarra Cdra 6",
        "direccionTelefono": "",
        "direccionHorario": "9:30 - 20:00",
        "direccion_Latitud": -11.9655429,
        "direccion_Longitud": -76.9943375,
        "nombresComercial": "Kayser",
        "fotoUser": "https://gamarraappstorage.blob.core.windows.net/imagenesusuarios/UserPhoto_14.png",
        "logoUser": "https://gamarraappstorage.blob.core.windows.net/logosusuarios/UserLogo_14.png",
        "galeriaId": 0,
        "galeriaDescripcion": "[No posee Galeria]",
        "galeria_Direccion": null,
        "sM_FacebookId": "kayser.peru",
        "sM_InstagramId": "kayserperu",
        "sM_WhatsappId": "999693860"
      }
    console.log(store_detail)
    var sceneEl = document.querySelector("a-scene");
    const store_card = create_store_card(store_detail)
    store_card.setAttribute('target_arrow', "");
    sceneEl.appendChild(store_card);

    create_directional_arrow();
}