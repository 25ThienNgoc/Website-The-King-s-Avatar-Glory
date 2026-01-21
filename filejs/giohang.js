// Giỏ hàng lưu ở localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function showNotification(msg) {
  var noti = document.getElementById('cart-notification');
  if (!noti) {
    // Tạo phần tử nếu chưa có
    noti = document.createElement('div');
    noti.id = 'cart-notification';
    noti.className = 'cart-notification';
    document.body.appendChild(noti);
  }
  noti.textContent = msg;
  noti.style.display = 'block';
  setTimeout(() => { noti.style.display = 'none'; }, 2000);
}
function updateCartCountIcon() {
  // Hiển thị số món sản phẩm (số dòng sản phẩm khác nhau)
  var count = getCart().length;
  document.querySelectorAll('#cart-count').forEach(el => {
    el.textContent = count;
  });
}

// Thêm vào giỏ hàng (gọi từ nút "Thêm vào giỏ hàng" ở danh mục)
function addToCart(productId) {
  var cart = getCart();
  var item = cart.find(i => i.id === productId);
  if (item) {
    item.qty += 1;
  } else {
    var product = productData.find(p => p.id === productId);
    console.log("Tìm sản phẩm với id:", productId, "Kết quả:", product);
    if (product) {
      cart.push({
        id: product.id,
        name: product.name,
        img: product.img,
        price: product.priceNew,
        qty: 1
      });
    } else {
      console.log("Không tìm thấy sản phẩm với id:", productId);
    }
  }
  saveCart(cart);
  showNotification('Đã thêm vào giỏ hàng!');
  updateCartCountIcon();
  console.log("Giỏ hàng sau khi thêm:", cart);
}

// Hiển thị giỏ hàng
function renderCart() {
  var cart = getCart();
  var list = document.getElementById('cart-list');
  var totalDiv = document.getElementById('cart-total');
  if (!list) return;
  if (cart.length === 0) {
    list.innerHTML = '<p>Giỏ hàng trống.</p>';
    totalDiv.textContent = '';
    return;
  }
  var html = '<table class="cart-table"><thead><tr><th>Hình</th><th>Tên</th><th>Giá</th><th>Số lượng</th><th>Thành tiền</th><th>Xóa</th></tr></thead><tbody>';
  var total = 0;
  cart.forEach((item, idx) => {
    // Xử lý giá cho cả kiểu price (chuỗi) và gia (số)
    let priceValue = 0;
    if (item.price) {
      priceValue = parseInt(item.price.replace(/\D/g, ''));
    } else if (item.gia) {
      priceValue = parseInt(item.gia);
    }
    var itemTotal = priceValue * (item.qty || item.quantity || 1);
    total += itemTotal;
    html += `<tr>
      <td><img src="${item.img || item.anh}" class="cart-img"></td>
      <td>${item.name || item.ten}</td>
      <td>${item.price || item.gia}</td>
      <td>
        <button class="cart-qty-btn" data-idx="${idx}" data-action="dec">-</button>
        <span>${item.qty || item.quantity || 1}</span>
        <button class="cart-qty-btn" data-idx="${idx}" data-action="inc">+</button>
      </td>
      <td>${itemTotal.toLocaleString('vi-VN')}đ</td>
      <td><button class="cart-remove-btn" data-idx="${idx}">Xóa</button></td>
    </tr>`;
  });
  html += '</tbody></table>';
  list.innerHTML = html;
  totalDiv.textContent = 'Tổng tiền: ' + total.toLocaleString('vi-VN') + 'đ';

  // Sự kiện tăng/giảm/xóa
  document.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.onclick = function() {
      var idx = parseInt(this.getAttribute('data-idx'));
      var action = this.getAttribute('data-action');
      var cart = getCart();
      if (action === 'inc') cart[idx].qty += 1;
      if (action === 'dec' && cart[idx].qty > 1) cart[idx].qty -= 1;
      saveCart(cart);
      renderCart();
      updateCartCountIcon();
    };
  });
  document.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.onclick = function() {
      var idx = parseInt(this.getAttribute('data-idx'));
      var cart = getCart();
      cart.splice(idx, 1);
      saveCart(cart);
      renderCart();
      updateCartCountIcon();
    };
  });
}

// Tự động render khi vào trang giỏ hàng
document.addEventListener('DOMContentLoaded', function() {
  renderCart();
  updateCartCountIcon();

  // Xử lý nút thanh toán
  var checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.onclick = function() {
      var msg = document.getElementById('checkout-message');
      if (msg) {
        msg.innerHTML = 'Chức năng này chưa được hoàn thiện';
        msg.style.display = 'inline-block';
        // màu và icon đã có trong CSS
        setTimeout(() => { msg.style.display = 'none'; }, 2000);
      }
    };
  }
});

// Để gọi addToCart từ trang danh mục, bạn có thể export hàm này ra window
window.addToCart = addToCart;
// Để gọi addToCart từ trang danh mục, bạn có thể export hàm này ra window
window.addToCart = addToCart;
