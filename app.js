const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "North Star",
    price: 109,
    colors: [
      {
        code: "black",
        img: "https://5.imimg.com/data5/MV/GR/GLADMIN-25662178/north-star.png",
      },
      {
        code: "white",
        img: "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwdb637e7e/images/large/8311431_1.jpeg?sw=1634",
      },
    ],
  },
  {
    id: 2,
    title: "Weinbrenner",
    price: 149,
    colors: [
      {
        code: "lightblue",
        img: "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwd4885375/images/large/8299216_1.jpeg?sw=1634",
      },
      {
        code: "black",
        img: "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw213b2327/images/large/8096053_1.jpeg?sw=1634",
      },
    ],
  },
  {
    id: 3,
    title: "Sparx",
    price: 119,
    colors: [
      {
        code: "black",
        img: "https://m.media-amazon.com/images/I/716VGkQ5vGL._AC_UY1000_.jpg",
      },
      {
        code: "lightgray",
        img: "https://www.jiomart.com/images/product/original/rvn6vbttgk/sparx-grey-running-shoes-for-men-sm-704-product-images-rvn6vbttgk-4-202306252202.jpg?im=Resize=(500,630)",
      },
    ],
  },
  {
    id: 4,
    title: "Power",
    price: 129,
    colors: [
      {
        code: "blue",
        img: "https://images.jdmagicbox.com/quickquotes/images_main/bata-mens-footwear-24-09-2020-1342-210348124-sytyq.jpeg",
      },
       {
       code: "white",
         img: "https://5.imimg.com/data5/GJ/ZZ/IB/SELLER-11707534/bata-power-match-8891340-unisex-white-lace-up-school-shoes.jpg",

       },
    ],
  },
  {
    id: 5,
    title: "Toughees",
    price: 999,
    colors: [
      {
        code: "gray",
        img: "https://www.gemschoolwear.com/cdn/shop/products/Boys_Toughees_Lace_Up_Black_580x.png?v=1627918965",
      },
      {
        code: "black",
        img: "https://toughees.co.za/cdn/shop/files/4446015_2_449ffa7e-8326-4b1a-b6d4-6b7da454e831.jpg?v=1690969578",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});