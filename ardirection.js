AFRAME.registerComponent("directional_arrow", {
    init: function () {
        console.log(this);
        var store = findStoreById(this.el.id)

        var arrow_img = document.getElementById('arrow2')
        arrow_img.setAttribute("rotation", "180 270 90")

        card.appendChild(logo)
        this.el.appendChild(card);
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
    create_store_card(store_detail)


}