const articleHTML = `
  <div class="product-list" id="productList"></div>
`;

document.getElementById("article-container").innerHTML = articleHTML;

const products = [
  {
    name: "Set Huy Hiệu Toàn Chức Cao Thủ",
    img: "../Anhsp/Badge/Bg1.jpg",
    link: "TTSanPhamBadge1.html",
    priceOld: "380.000VND",
    priceNew: "299.999VND"
  },
  {
    name: "Set Huy Hiệu Toàn Chức Cao Thủ",
    img: "../Anhsp/Badge/Bg2.jpg",
    link: "TTSanPhamBadge2.html",
    priceOld: "380.000VND",
    priceNew: "299.999VND"
  },
  {
    name: "Bàn Phím in hình nhân vật Diệp Tu",
    img: "../Anhsp/BanPhim/Kw1.jpg",
    link: "#",
    priceOld: "1.280.000VND",
    priceNew: "999.999VND"
  },
  {
    name: "Set Card Toàn Chức Cao Thủ",
    img: "../Anhsp/Card/Pc1.jpg",
    link: "#",
    priceOld: "380.000VND",
    priceNew: "299.999VND"
  },
  {
    name: "Set Móc Khóa Toàn Chức Cao Thủ",
    img: "../Anhsp/Key/Key1.jpg",
    link: "#",
    priceOld: "380.000VND",
    priceNew: "299.999VND"
  },
  {
    name: "Set Pola Toàn Chức Cao Thủ",
    img: "../Anhsp/Pola/Pola1.jpg",
    link: "#",
    priceOld: "380.000VND",
    priceNew: "299.999VND"
  },
  {
    name: "Set Standee Toàn Chức Cao Thủ",
    img: "../Anhsp/std/Std1.jpg",
    link: "#",
    priceOld: "380.000VND",
    priceNew: "299.999VND"
  },
  {
    name: "Set Vé Hologram Toàn Chức Cao Thủ",
    img: "../Anhsp/Ve/Ve1.jpg",
    link: "#",
    priceOld: "380.000VND",
    priceNew: "299.999VND"
  },
  {
    name: "Set Huy Hiệu Toàn Chức Cao Thủ",
    img: "../Anhsp/Badge/Bg5.jpg",
    link: "TTSanPhamBadge1.html",
    priceOld: "380.000VND",
    priceNew: "299.999VND"
  },
  {
    name: "Set Standee Toàn Chức Cao Thủ",
    img: "../Anhsp/std/Std4.jpg",
    link: "#",
    priceOld: "380.000VND",
    priceNew: "299.999VND"
  },
  {
    name: "Set Card Toàn Chức Cao Thủ",
    img: "../Anhsp/Card/Pc4.jpg",
    link: "#",
    priceOld: "380.000VND",
    priceNew: "299.999VND"
  },
  {
    name: "Set Vé Hologram Toàn Chức Cao Thủ",
    img: "../Anhsp/Ve/Ve2.jpg",
    link: "#",
    priceOld: "380.000VND",
    priceNew: "299.999VND"
  }
];

function renderProducts() {
  const productList = document.getElementById("productList");
  products.forEach(product => {
    const item = document.createElement("div");
    item.className = "hangmua";
    item.innerHTML = `
      <a href="${product.link}">${product.name}</a>
      <img src="${product.img}" alt="${product.name}">
      <p class="giamua"><span>${product.priceOld}</span>${product.priceNew}</p>
    `;
    productList.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", renderProducts);
