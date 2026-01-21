const navHTML = `
  <nav>
    <div class="menu">
      <ul>
        <li><a href="../filetong/Assignment.html">Trang chủ</a></li>
        <li>
          <a href="../filecon/DanhMuc.html">Sản phẩm</a>
        </li>
        <li><a href="../filecon/ThongBao.html">Thông Báo</a></li>
        <li><a href="../filecon/GioiThieu.html">Giới Thiệu</a></li>
        <li><a href="../filecon/LienHe.html">Hỗ Trợ</a></li>
        <li>
          <a href="../filetong/giohang.html">
            Giỏ Hàng
            <span id="cart-count" style="background:#fff;color:#aa0000;border-radius:50%;padding:2px 8px;margin-left:4px;font-size:14px;vertical-align:middle;">0</span>
          </a>
        </li>
        <li class="dropdown">
          <a href="#">Tài Khoản</a>
          <ul class="dropdown-menu">
            <li><a href="../filecon/Dangki.html">Đăng Ký</a></li>
            <li><a href="../filecon/DangNhap.html">Đăng Nhập</a></li>
          </ul>
        </li>
        <li class="search-icon">
          <input type="checkbox" id="search-toggle" class="search-toggle">
          <label for="search-toggle">
            <img src="../khoicon/find.png" alt="Tìm kiếm">
          </label>
          <div class="Timkiem">
            <input type="text" placeholder="Tìm kiếm sản phẩm...">
          </div>
        </li>
      </ul>
    </div>
  </nav>
`;

document.getElementById("nav-container").innerHTML = navHTML;

// Gọi hàm cập nhật số món sản phẩm giỏ hàng nếu có
if (typeof updateCartCountIcon === "function") {
  updateCartCountIcon();
} else {
  // Nếu chưa có hàm, tự tạo hàm đơn giản
  function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
  function updateCartCountIcon() {
    var count = getCart().length; // Số món sản phẩm
    document.querySelectorAll('#cart-count').forEach(el => {
      el.textContent = count;
    });
  }
  updateCartCountIcon();
}
