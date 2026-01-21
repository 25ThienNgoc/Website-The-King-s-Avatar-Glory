// Gộp dữ liệu sản phẩm từ các file sản phẩm
const danhSachSanPham = [
  {
    id: "mockhoa1",
    name: "Set Móc Khóa Toàn Chức Cao Thủ",
    img: "../Anhsp/Key/Key1.jpg",
    priceOld: "100.000VND",
    priceNew: "79.000VND",
    description: "Bộ móc khóa chủ đề Toàn Chức Cao Thủ, chất liệu acrylic cao cấp, hình ảnh sắc nét.",
    rating: 4.5,
    sold: 120,
    stock: 50,
    ship: "30.000đ"
  },
  {
    id: "badge1",
    name: "Set Huy Hiệu Toàn Chức Cao Thủ",
    img: "../Anhsp/Badge/Bg1.jpg",
    priceOld: "380.000VND",
    priceNew: "299.999VND",
    description: "Set huy hiệu nhân vật Toàn Chức Cao Thủ, phù hợp sưu tầm và trang trí balo, áo.",
    rating: 4.0,
    sold: 80,
    stock: 0,
    ship: "30.000đ"
  },
  // ...thêm các sản phẩm khác với id, name, img, priceOld, priceNew, description, rating, sold, stock, ship...
];

// Lấy id sản phẩm từ URL
function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Tìm sản phẩm theo id
function findProductById(id) {
  // Sử dụng đúng biến dữ liệu sản phẩm
  return (typeof productData !== "undefined" ? productData : danhSachSanPham).find(sp => sp.id === id);
}

// Hiển thị thông tin sản phẩm
function renderProductDetail(product) {
  if (!product) {
    document.body.innerHTML = "<h2>Không tìm thấy sản phẩm!</h2>";
    return;
  }
  document.getElementById("product-img").src = product.img;
  document.getElementById("product-img").alt = product.name;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").innerHTML =
    `<span class="old-price">${product.priceOld}</span> <span class="new-price">${product.priceNew}</span>`;
  document.getElementById("product-description").textContent = product.description;

  // Hiển thị chi tiết sản phẩm
  document.getElementById("product-rating").textContent = product.rating || "Chưa có";
  document.getElementById("product-sold").textContent = product.sold || "0";
  document.getElementById("product-stock").textContent = product.stock || "Còn hàng";
  document.getElementById("product-ship").textContent = product.ship || "30.000đ";
}

// Khởi tạo khi trang tải xong
document.addEventListener("DOMContentLoaded", function() {
  const id = getProductIdFromURL();
  const product = findProductById(id);
  renderProductDetail(product);

  // Thêm vào giỏ hàng
  const addBtn = document.getElementById("add-to-cart-btn");
  if (addBtn && product) {
    addBtn.onclick = function() {
      if (window.addToCart) {
        window.addToCart(product.id);
      } else {
        alert("Không tìm thấy chức năng giỏ hàng!");
      }
    };
  }
});
