// Định nghĩa hàm hiển thị sản phẩm theo danh mục
function renderProductsByCategory(category) {
    var list = document.getElementById("productList");
    if (!list) return;
    // Lọc sản phẩm theo category
    var filtered = productData.filter(sp => sp.category === category);
    if (filtered.length === 0) {
        list.innerHTML = "<p>Không có sản phẩm nào trong danh mục này.</p>";
        return;
    }
    var html = "";
    filtered.forEach(sp => {
        html += `
      <div class="product-card">
        <a href="../filecon/Chitietsanpham.html?id=${sp.id}">
          <h3>${sp.name}</h3>
          <img src="${sp.img}" alt="${sp.name}">
          <div class="price">
            <span class="old-price">${sp.priceOld}</span>
            <span class="new-price">${sp.priceNew}</span>
          </div>
        </a>
        <div class="card-actions">
          <a href="../filetong/chitietsanpham.html?id=${sp.id}" class="btn-buy">Mua ngay</a>
          <button class="btn-add-cart" data-id="${sp.id}">Thêm vào giỏ hàng</button>
        </div>
      </div>
    `;
    });
    list.innerHTML = html;

    // Thêm sự kiện cho nút "Thêm vào giỏ hàng"
    document.querySelectorAll(".btn-add-cart").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const id = this.getAttribute("data-id");
            console.log("Click Thêm vào giỏ hàng, id:", id);
            if (window.addToCart && typeof window.addToCart === "function") {
                window.addToCart(id);
                console.log("Đã gọi addToCart với id:", id);
            } else {
                alert("Không tìm thấy chức năng giỏ hàng!");
                console.log("window.addToCart:", window.addToCart);
            }
        });
    });
}

// Sự kiện click cho các nút danh mục
document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        var category = this.getAttribute("data-category");
        renderProductsByCategory(category);
        // Active button
        document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    });
});

// Hiển thị mặc định danh mục đầu tiên
document.addEventListener("DOMContentLoaded", function () {
    var firstBtn = document.querySelector(".category-btn");
    if (firstBtn) firstBtn.click();
});