AFRAME.registerComponent("foo", {
    init: function () {
        this.el.addEventListener("click", (e) => {
            console.log("HELLO"); window.location.href = "./store_detail.html";
        })
    }
})