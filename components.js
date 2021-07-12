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

AFRAME.registerComponent("target_arrow", {
    init: function () {
        console.log(this);
    }
})

AFRAME.registerComponent("store_card", {
    init: function () {
        console.log(this);
        var store_detail = findStoreById(this.el.id)

        var img_logo = document.createElement("img");
        img_logo.setAttribute('id', 'image_' + store_detail.direccionId);
        img_logo.setAttribute('src', store_detail.logoUser);
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
        let n_local = document.createElement("a-text");
        let ref = document.createElement("a-text");

        card.setAttribute("scale", "5 5 5")
        card.setAttribute("look-at", "[gps-camera]")

        background.setAttribute("color", "#B21ace");
        background.setAttribute("height", "1.6");
        background.setAttribute("width", "4");
        background.setAttribute("position", "0 -0.5 -10.15")

        logo.setAttribute("src", '#image_' + store_detail.direccionId)
        logo.setAttribute("position", "-1.2 -0.5 -10");
        logo.setAttribute("scale", "1.6 1.6 1.6")


        name.setAttribute("value", store_detail.nombresComercial ? store_detail.nombresComercial : "")
        name.setAttribute("scale", "1 1 1")
        name.setAttribute("position", "-0.4 0 -10")
        name.setAttribute("text", "wrapCount: 30")
        //name.setAttribute("font", "custom-msdf.json")

        adress.setAttribute("value", store_detail.direccion_Direccion ? store_detail.direccion_Direccion : "")
        adress.setAttribute("scale", "0.4 0.4 0.4")
        adress.setAttribute("position", "-0.4 -0.4 -10")
        adress.setAttribute("text", "wrapCount: 20")
        adress.setAttribute("text", "height: 1")
        //adress.setAttribute("font", "custom-msdf.json")

        n_local.setAttribute("value", "N local: " + (store_detail.direccion_NroLocal ? store_detail.direccion_NroLocal : ""))
        n_local.setAttribute("scale", "0.6 0.6 0.6")
        n_local.setAttribute("position", "-0.4 -0.75 -10")
        n_local.setAttribute("text", "wrapCount: 30")
        //ref.setAttribute("font", "custom-msdf.json")

        ref.setAttribute("value", "Piso: " + (store_detail.direccionPiso ? store_detail.direccionPiso : ""))
        ref.setAttribute("scale", "0.6 0.6 0.6")
        ref.setAttribute("position", "-0.4 -0.9 -10")
        ref.setAttribute("text", "wrapCount: 30")
        //ref.setAttribute("font", "custom-msdf.json")

        card.appendChild(background)
        card.appendChild(logo)
        card.appendChild(name)
        card.appendChild(adress)
        card.appendChild(n_local)
        card.appendChild(ref)
        this.el.appendChild(card);
    }
})