document.addEventListener('DOMContentLoaded', function() {
  const thongbaos = [
    {
      title: "Chào mừng bạn đến với Toàn Chức Cao Thủ Shop!",
      content: "Cảm ơn bạn đã ghé thăm. Đừng quên theo dõi các chương trình khuyến mãi mới nhất.",
      date: "01-06-2025"
    },
    {
      title: "Miễn phí vận chuyển toàn quốc",
      content: "Đơn hàng từ 500.000đ sẽ được miễn phí vận chuyển trên toàn quốc.",
      date: "05-06-2025"
    },
    {
      title: "Sản phẩm mới: Figure giới hạn",
      content: "Figure nhân vật Quân Mạc Tiếu đã có mặt tại shop, số lượng cực giới hạn!",
      date: "25-07-2025"
    }
  ];

  const list = document.getElementById('thongbao-list');
  if (!list) return;
  if (thongbaos.length === 0) {
    list.innerHTML = "<div class='tb-empty'>Hiện chưa có thông báo nào.</div>";
    return;
  }
  let html = "<ul class='tb-list'>";
  thongbaos.forEach(tb => {
    html += `
      <li class="tb-item">
        <div class="tb-title">${tb.title}</div>
        <div class="tb-date">${tb.date}</div>
        <div class="tb-content">${tb.content}</div>
      </li>
    `;
  });
  html += "</ul>";
  list.innerHTML = html;
});
