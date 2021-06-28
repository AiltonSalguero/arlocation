AFRAME.registerComponent("foo", {
    init: function () {
        this.el.addEventListener("click", function (e) {
            console.log(e);
            console.log("click");
            window.location.href = "./store_detail.html";
        })
    }
})