document.addEventListener("DOMContentLoaded", function () {
    var productContainer = document.getElementById("products")
    var search = document.getElementById("search")
    var productlist = productContainer.querySelectorAll(".product-box")

    search.addEventListener("keyup", function () {
        var enteredvalue = event.target.value.toUpperCase()

        for (var count = 0; count < productlist.length; count = count + 1) {
            var productname = productlist[count].querySelector("p").textContent  //product[0].Loafers in paragraph tag
            if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
                productlist[count].style.display = "none"
            }
            else {
                productlist[count].style.display = "block"
            }
        }
    })
})
