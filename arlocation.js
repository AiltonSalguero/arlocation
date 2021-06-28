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