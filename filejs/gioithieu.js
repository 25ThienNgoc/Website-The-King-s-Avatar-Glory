document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("gioiThieuContainer");

    container.innerHTML = `
    <h1>Giới thiệu về <span class="highlight">Toàn Chức Cao Thủ</span></h1>
    <div class="gioithieu-card-intro">
      <p><strong>Toàn Chức Cao Thủ</strong> là một tiểu thuyết eSports của tác giả Hồ Điệp Lam, xoay quanh <strong>Diệp Tu</strong> – một tuyển thủ kỳ cựu bắt đầu lại từ con số 0 cùng tài khoản <strong>Quân Mạc Tiếu</strong>. Bộ truyện đề cao tinh thần không bỏ cuộc, tình bạn và chiến đấu vì đam mê. Tác phẩm đã được chuyển thể thành anime, manhua và thu hút lượng lớn người hâm mộ khắp châu Á.</p>
    </div>

    <h2>Câu Chuyện Về Vinh Quang Của Chúng Tôi</h2>
    <div class="gioithieu-timeline">
      <div class="gioithieu-timeline-item">
        <div class="gioithieu-timeline-dot"></div>
        <div class="gioithieu-timeline-content">
          <h3>Khởi Đầu Từ Đam Mê</h3>
          <p>Giống như hành trình mười năm của Diệp Tu, tình yêu của chúng tôi dành cho Toàn Chức Cao Thủ cũng chưa bao giờ tắt. Không phải là tập đoàn lớn, chúng tôi là những fan từng trashtalk, hò hét khi Hưng Hãn vô địch và tiếc nuối vì thần thoại đó lưu niệm xứng tầm. Vì vậy, Shop <strong>Toàn Chức Cao Thủ</strong> ra đời – để phục vụ chính cộng đồng fan.</p>
        </div>
      </div>
      <div class="gioithieu-timeline-item">
        <div class="gioithieu-timeline-dot"></div>
        <div class="gioithieu-timeline-content">
          <h3>Gặp Gỡ Những Người Đồng Hành</h3>
          <p>Cửa hàng của chúng tôi từ những con người chỉ là fan đam mê, nhưng ngày nay chúng tôi đã có dũng khí đưa <strong>Toàn Chức Cao Thủ</strong> đến với mọi người</p>
        </div>
      </div>
      <div class="timeline-branch">
        <div class="timeline-branch-lines">
          <div class="timeline-branch-dot"></div>
          <div class="timeline-branch-vertical"></div>
          <div class="timeline-branch-horizontal"></div>
        </div>
        <div class="timeline-branch-members">
          <div>
            <div class="timeline-branch-member-connector">
              <div class="timeline-branch-member-connector-line"></div>
            </div>
            <div class="gioithieu-card team-card">
              <strong>(Đặng Nguyễn Thiên Ngọc)</strong>
              <div>"Chiếc lá cô đọng" Nhất Diệp Chi Thu, người lưu trữ ký ức và truyền thông khống.</div>
            </div>
          </div>
          <div>
            <div class="timeline-branch-member-connector">
              <div class="timeline-branch-member-connector-line"></div>
            </div>
            <div class="gioithieu-card team-card">
              <strong>(Thiên Ngọc)</strong>
              <div>"Người cảm tình" Quân Mạc Tiếu, lo về sản phẩm, thiết kế và tinh thần Vinh Quang.</div>
            </div>
          </div>
          <div>
            <div class="timeline-branch-member-connector">
              <div class="timeline-branch-member-connector-line"></div>
            </div>
            <div class="gioithieu-card team-card">
              <strong>(Thiên Ngọc Đặng Nguyễn)</strong>
              <div>"Tay hòm chìa khóa" Diệp Tu, phụ trách vận hành và giao hàng.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2>Những Giá Trị Chúng Tôi Theo Đuổi</h2>
    <div class="gioithieu-grid">
      <div class="gioithieu-card">
        <strong>Đam Mê Bất Tận</strong>
        <div>Hiểu rõ từng nhân vật, tận trọng từng chi tiết.</div>
      </div>
      <div class="gioithieu-card">
        <strong>Chất Lượng Xứng Tầm</strong>
        <div>Bán sản phẩm mà chính mình muốn sở hữu.</div>
      </div>
      <div class="gioithieu-card">
        <strong>Gọn Gàng Dễ Làm Nhớ</strong>
        <div>Không lan man, là điểm đến của fan.</div>
      </div>
      <div class="gioithieu-card">
        <strong>Minh Bạch & Tận Tâm</strong>
        <div>Công khai rõ ràng, tư vấn tận tình.</div>
      </div>
    </div>

    <h2>Sản Phẩm Của Chúng Tôi</h2>
    <div class="gioithieu-grid">
      <div class="gioithieu-card">
        <strong>Đồ trang trí & Sưu tầm</strong>
        <div>Standee acrylic, figure, huy hiệu, poster... sắc nét đến từng chi tiết.</div>
      </div>
      <div class="gioithieu-card">
        <strong>Vật phẩm độc quyền</strong>
        <div>Art print, pola, card do chính đội artist thiết kế riêng.</div>
      </div>
      <div class="gioithieu-card">
        <strong>Gửi hiện hàng ngày</strong>
        <div>Móc khóa, sticker – mang Vinh Quang bên bạn mỗi ngày.</div>
      </div>
    </div>

    <div class="callout">
      <h2>Hãy Là Một Phần Của Vinh Quang</h2>
      <p>Hành trình này không thể thiếu bạn. Hãy kết nối với chúng tôi và hàng ngàn người hâm mộ khác.</p>
    </div>
    `;
});
