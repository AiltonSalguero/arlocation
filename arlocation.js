function to_store_detail(evt) {
    evt.preventDefault()
    console.log(evt);
    console.log("click");
    window.location.href = "./store_detail.html";
}
AFRAME.registerComponent("foo", {
    init: function () {
        console.log(this);
        this.el.addEventListener('touchstart', to_store_detail)
        this.el.addEventListener('click', to_store_detail)
    }
})

AFRAME.registerComponent("store_card", {
    init: function () {
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

        logo.setAttribute("src", "#my-image")
        logo.setAttribute("position", "-1.17 -0.5 -10");
        logo.setAttribute("scale", "1.17 1.17 1.17")
        
        name.setAttribute("value", "Abraham Store")
        name.setAttribute("scale", "1 1 1")
        name.setAttribute("position", "-0.4 0 -10")

        adress.setAttribute("value", "Av La Mar 2223")
        adress.setAttribute("scale", "0.6 0.6 0.6")
        adress.setAttribute("position", "-0.4 -0.2 -10")

        ref.setAttribute("value", "Interior 1")
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