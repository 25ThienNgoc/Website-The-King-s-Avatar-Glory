const products_standee = [
  {
    name: "Standee Nhân Vật Phổ Biến",
    img: "../Anhsp/Std/Std1.jpg",
    link: "TTSanPhamStandee1.html",
    priceOld: "250.000VND",
    priceNew: "199.000VND"
  },
  {
    name: "Standee Nhân Vật Phổ Biến",
    img: "../Anhsp/Std/Std1.jpg",
    link: "TTSanPhamStandee1.html",
    priceOld: "250.000VND",
    priceNew: "199.000VND"
  },
  {
    name: "Standee Nhân Vật Phổ Biến",
    img: "../Anhsp/Std/Std2.jpg",
    link: "TTSanPhamStandee1.html",
    priceOld: "250.000VND",
    priceNew: "199.000VND"
  },
  {
    name: "Standee Nhân Vật Phổ Biến",
    img: "../Anhsp/Std/Std3.jpg",
    link: "TTSanPhamStandee1.html",
    priceOld: "250.000VND",
    priceNew: "199.000VND"
  },
  {
    name: "Standee Nhân Vật Phổ Biến",
    img: "../Anhsp/Std/Std4.jpg",
    link: "TTSanPhamStandee1.html",
    priceOld: "250.000VND",
    priceNew: "199.000VND"
  },
  {
    name: "Standee Nhân Vật Phổ Biến",
    img: "../Anhsp/Std/Std5.jpg",
    link: "TTSanPhamStandee1.html",
    priceOld: "250.000VND",
    priceNew: "199.000VND"
  },
  {
    name: "Standee Nhân Vật Phổ Biến",
    img: "../Anhsp/Std/Std6.jpg",
    link: "TTSanPhamStandee6.html",
    priceOld: "250.000VND",
    priceNew: "199.000VND"
  },
  {
    name: "Standee Nhân Vật Phổ Biến",
    img: "../Anhsp/Std/Std7.jpg",
    link: "TTSanPhamStandee1.html",
    priceOld: "250.000VND",
    priceNew: "199.000VND"
  }
];

function renderProductsStandee() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  products_standee.forEach(product => {
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

