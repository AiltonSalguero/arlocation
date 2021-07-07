function findStoreById(propValue) {
    var stores_data_json = localStorage.getItem('stores_data')
    var stores_data = JSON.parse(stores_data_json)

    for (var i = 0; i < stores_data.length; i++)
        if (stores_data[i].direccionId == propValue)
            return stores_data[i];

        // will return undefined if not found; you could return a default instead
}

AFRAME.registerComponent("store_card", {
    init: function() {
        console.log(this);
        var store = findStoreById(this.el.id)

        var img_logo = document.createElement("img");
        img_logo.setAttribute('id', 'image_' + store.direccionId);
        img_logo.setAttribute('src', store.logoUser);
        img_logo.class = "img-fluid"
        img_logo.crossOrigin = "anonymous";
        img_logo.alt = "Responsive image"
        document.getElementById('assets-id').appendChild(img_logo);
        // TODO OBTENER ID Y TRAER EL PRODUCTO
        let card = document.createElement("a-entity");
        let background = document.createElement("a-plane");
        let logo = document.createElement("a-image");
        let name = document.createElement("a-text");
        let adress = document.createElement("a-text");
        let ref = document.createElement("a-text");

        card.setAttribute("scale", "9 9 9")
        card.setAttribute("look-at", "[gps-camera]")

        background.setAttribute("color", "#B21ace");
        background.setAttribute("height", "1.6");
        background.setAttribute("width", "4");
        background.setAttribute("position", "0 -0.5 -10.15")

        logo.setAttribute("src", '#image_' + store.direccionId)
        logo.setAttribute("position", "-1.2 -0.5 -10");
        logo.setAttribute("scale", "1.17 1.17 1.17")

        name.setAttribute("value", store.nombresComercial)
        name.setAttribute("scale", "1 1 1")
        name.setAttribute("position", "-0.4 0 -10")
        name.setAttribute("text", "wrapCount: 30")
            //name.setAttribute("font", "custom-msdf.json")

        adress.setAttribute("value", store.direccion_Direccion)
        adress.setAttribute("scale", "0.6 0.6 0.6")
        adress.setAttribute("position", "-0.4 -0.2 -10")
        adress.setAttribute("text", "wrapCount: 30")
            //adress.setAttribute("font", "custom-msdf.json")

        ref.setAttribute("value", store.direccionPiso)
        ref.setAttribute("scale", "0.6 0.6 0.6")
        ref.setAttribute("position", "-0.4 -0.4 -10")
        ref.setAttribute("text", "wrapCount: 30")
            //ref.setAttribute("font", "custom-msdf.json")

        card.appendChild(background)
        card.appendChild(logo)
        card.appendChild(name)
        card.appendChild(adress)
        card.appendChild(ref)
        this.el.appendChild(card);
        console.log(card)
    }
})

AFRAME.registerComponent("foo", {
    init: function() {
        console.log(this);
        var store = findStoreById(this.el.id)
        this.el.addEventListener('touchstart', function() {
            to_store_detail(store);
        }, false);
        this.el.addEventListener('click', function() {
            to_store_detail(store);
        }, false);
    }
})

function create_store_card(store) {
    var store_card = document.createElement('a-entity');
    store_card.setAttribute('id', store.direccionId);
    store_card.setAttribute('gps-entity-place', 'latitude: ' + store.latitude + '; longitude: ' + store.longitude + ';');
    store_card.setAttribute('store_card', "");
    store_card.setAttribute('foo', "");
    return store_card;
}

function init() {
    var store_detail_json = localStorage.getItem('store_detail')
    var store_detail = JSON.parse(store_detail_json)
    console.log(store_detail)
    store_detail = {
        "direccionId": 102,
        "usuarioId": 23,
        "direccion_Direccion": "Jr, Jirón Hipólito Unanue 1568, La Victoria 15018, Peru",
        "direccionPiso": "Piso 1",
        "direccionTelefono": "TelefonoNuevo",
        "direccionHorario": "HorarioNuevo",
        "nombresComercial": "Angelas Flowers",
        "logoUser": "https://gamarraappstorage.blob.core.windows.net/imagenesusuarios/fu_vestidorojo.jpg",
        "logoUser": "https://gamarraappstorage.blob.core.windows.net/logosusuarios/logoAngela.jpeg",
        "galeriaId": 3,
        "galeriaDescripcion": "Galeria La Fontana",
        "galeria_Direccion": null,
        "sM_FacebookId": null,
        "sM_InstagramId": null,
        "sM_WhatsappId": null,
        "latitude": -11.9654429,
        "longitude": -76.9942375
    }
    var sceneEl = document.querySelector("a-scene");
    const store_card = create_store_card(store_detail)
    sceneEl.appendChild(store_card);
    var arrow_img = document.getElementById('arrow2')
    arrow_img.setAttribute("rotation", "180 270 90")
    arrow_img.setAttribute("look-at", '#102')
}