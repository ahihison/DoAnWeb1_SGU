const product = [
  {
    id: 1,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f1.jpg",
    span: "Adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: 78,
  },

  {
    id: 2,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f2.jpg",
    span: "Adidas",
    title: "T-shirt Basic ",
    price: 120,
  },
  {
    id: 3,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f3.jpg",
    span: "Adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: 90,
  },
  {
    id: 4,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f4.jpg",
    span: "Gucci",
    title: "Cartoon Astronaut T-Shirts",
    price: 80,
  },
  {
    id: 5,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n1.jpg",
    span: "Gucci",
    title: "Sweeter Basic",
    price: 123,
  },
  {
    id: 6,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi1.jpg",
    span: "Gucci",
    title: "Cartoon Astronaut T-Shirts",
    price: 200,
  },
  {
    id: 7,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n3.jpg",
    span: "Adidas",
    title: "Normal Clothes",
    price: 145,
  },
  {
    id: 8,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n4.jpg",
    span: "Adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: 170,
  },
  {
    id: 9,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n5.jpg",
    span: "Adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: 80,
  },
  {
    id: 10,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f6.jpg",
    span: "Gucci",
    title: "Cartoon Astronaut T-Shirts",
    price: 78,
  },
  {
    id: 11,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi1.jpg",
    span: "Adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: 50,
  },
  {
    id: 12,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi2.jpg",
    span: "Gucci",
    title: "Jacket Man Basic",
    price: 400,
  },
  {
    id: 13,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi3.jpg",
    span: "Adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: 425,
  },
  {
    id: 14,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi4.jpg",
    span: "Adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: 110,
  },
  {
    id: 15,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi5.jpg",
    span: "Gucci",
    title: "Jean jacket",
    price: 30,
  },
  {
    id: 16,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi6.jpg",
    span: "Adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: 120,
  },
  {
    id: 17,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/t-shirt1.jpg",
    span: "Adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: 320,
  },
  {
    id: 18,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/t-shirt2.jpg",
    span: "Gucci",
    title: "Cartoon Astronaut T-Shirts",
    price: 80,
  },
  {
    id: 19,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f1.jpg",
    span: "Adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: 78,
  },
  {
    id: 20,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f2.jpg",
    span: "Adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: 88,
  },
  {
    id: 21,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f3.jpg",
    span: "Gucci",
    title: "Cartoon Astronaut T-Shirts",
    price: 78,
  },
  {
    id: 22,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f4.jpg",
    span: "Adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: 78,
  },
  {
    id: 23,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f1.jpg",
    span: "Gucci",
    title: "Cartoon Astronaut T-Shirts",
    price: 78,
  },
  {
    id: 24,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f5.jpg",
    span: "Adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: 78,
  },
  {
    id: 25,
    image:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f1.jpg",
    span: "Adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: 78,
  },
];
function setItemLocalStorage(product) {
  localStorage.setItem("product", JSON.stringify(product));
}

var products = JSON.parse(localStorage.getItem("product"));
if (localStorage.getItem("product") == null) {
  setItemLocalStorage(product);
}

const detailProduct = [
  {
    id: 1,
    title: "Adidas",
    header: "Main's T Shirt",
    price: 139.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world, with a total combined production of production total of 61 million bales annually. The United States is currently the largest exporter of raw cotton, with sales of $4.9 billion annually. The worldwide cotton market is estimated to total at $12 billion.",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f1.jpg",
    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f1.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f2.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f3.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f4.jpg",
  },
  {
    id: 2,
    title: "Adidas",
    header: "Main's Fashion T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f2.jpg",
    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f2.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f1.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f3.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f4.jpg",
  },
  {
    id: 3,
    title: "Adidas",
    header: "Main's Sweeter T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f3.jpg",
    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f3.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f1.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f2.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f4.jpg",
  },
  {
    id: 4,
    title: "Gucci",
    header: "Main's Jean T Shirt",
    price: 139.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world, with a total combined production of production total of 61 million bales annually. The United States is currently the largest exporter of raw cotton, with sales of $4.9 billion annually. The worldwide cotton market is estimated to total at $12 billion.",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f4.jpg",
    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f4.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f1.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f2.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f3.jpg",
  },
  {
    id: 5,
    title: "Gucci",
    header: "Main's Jacket T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n1.jpg",

    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n1.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n2.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n3.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n4.jpg",
  },
  {
    id: 6,
    title: "Gucci",
    header: "Main's Fashion T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi1.jpg",

    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi1.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n1.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n3.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n4.jpg",
  },
  {
    id: 7,
    title: "Adidas",
    header: "Main's Fashion T Shirt",
    price: 139.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world, with a total combined production of production total of 61 million bales annually. The United States is currently the largest exporter of raw cotton, with sales of $4.9 billion annually. The worldwide cotton market is estimated to total at $12 billion.",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n3.jpg",

    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n3.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n2.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n1.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n4.jpg",
  },
  {
    id: 8,
    title: "Adidas",
    header: "Main's Summer T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n4.jpg",

    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n4.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n2.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n3.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n1.jpg",
  },
  {
    id: 9,
    title: "Adidas",
    header: "Main's Basic T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n5.jpg",

    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n5.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n7.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n8.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f6.jpg",
  },
  {
    id: 10,
    title: "Gucci",
    header: "Main's Fashion T Shirt",
    price: 139.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world, with a total combined production of production total of 61 million bales annually. The United States is currently the largest exporter of raw cotton, with sales of $4.9 billion annually. The worldwide cotton market is estimated to total at $12 billion.",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f6.jpg",

    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f6.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n7.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n8.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n5.jpg",
  },
  {
    id: 11,
    title: "Adidas",
    header: "Main's Fashion T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi1.jpg",

    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi1.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n7.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n8.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/n5.jpg",
  },
  {
    id: 12,
    title: "Gucci",
    header: "Main's Fashion T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi2.jpg",

    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi2.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi5.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi3.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi4.jpg",
  },
  {
    id: 13,
    title: "Adidas",
    header: "Main's Fashion T Shirt",
    price: 139.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi3.jpg",

    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi3.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi5.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi2.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi4.jpg",
  },
  {
    id: 14,
    title: "Adidas",
    header: "Main's Fashion T Shirt",
    price: 139.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world, with a total combined production of production total of 61 million bales annually. The United States is currently the largest exporter of raw cotton, with sales of $4.9 billion annually. The worldwide cotton market is estimated to total at $12 billion.",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi4.jpg",

    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi4.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi5.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi3.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi2.jpg",
  },
  {
    id: 15,
    title: "Gucci",
    header: "Main's Fashion T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi5.jpg",

    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi5.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi6.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi3.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi4.jpg",
  },
  {
    id: 16,
    title: "Adidas",
    header: "Main's Fashion T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi6.jpg",

    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi6.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi5.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi3.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/somi4.jpg",
  },
  {
    id: 17,
    title: "Adidas",
    header: "Main's Fashion T Shirt",
    price: 139.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/t-shirt1.jpg",

    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/t-shirt1.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/t-shirt2.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f7.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f8.jpg",
  },
  {
    id: 18,
    title: "Gucci",
    header: "Main's Fashion T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest ",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/t-shirt2.jpg",

    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/t-shirt2.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/t-shirt1.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f7.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f8.jpg",
  },
  {
    id: 19,
    title: "Adidas",
    header: "Main's Fashion T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f1.jpg",
    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f1.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f2.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f3.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f4.jpg",
  },
  {
    id: 20,
    title: "Adidas",
    header: "Main's Fashion T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f2.jpg",
    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f2.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f1.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f3.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f4.jpg",
  },
  {
    id: 21,
    title: "Gucci",
    header: "Main's Fashion T Shirt",
    price: 139.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest South Asian farming settlements in the world. China and India are currently the two largest producers of cotton in the world",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f3.jpg",
    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f3.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f2.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f5.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f4.jpg",
  },
  {
    id: 22,
    title: "Adidas",
    header: "Main's Fashion T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest ",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f4.jpg",
    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f4.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f2.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f5.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f1.jpg",
  },
  {
    id: 23,
    title: "Gucci",
    header: "Main's Fashion T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest ",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f1.jpg",
    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f1.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f2.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f3.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f5.jpg",
  },
  {
    id: 24,
    title: "Adidas",
    header: "Main's Fashion T Shirt",
    price: 100.0,
    detail:
      "Cotton, the most common T-shirt material, has been grown by humans for over 7,000 years. The first evidence of cotton use was found in the city of Mehrgarh, one of the earliest ",
    img: "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f5.jpg",
    imgsmall1:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f5.jpg",
    imgsmall2:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f2.jpg",
    imgsmall3:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f3.jpg",
    imgsmall4:
      "./assets/img/Build-and-Deploy-Ecommerce-Website-main/img/products/f4.jpg",
  },
];
function setDetailLocalStorage(detailProduct) {
  localStorage.setItem("detailProduct", JSON.stringify(detailProduct));
}
if (localStorage.getItem("detailProduct") == null) {
  setDetailLocalStorage(detailProduct);
}

var detailProducts = JSON.parse(localStorage.getItem("detailProduct"));

// xoa phan tu
// for (var i = 0; i < products.length; i++) {
//   if (products[i].id == 2) {
//     products.splice(i, 1);

//     setItemLocalStorage(products);
//   }
// }

// for (var j = 0; j < detailProducts.length; j++) {
//   if (detailProducts[j].id == 2) {
//     detailProducts.splice(1, 1);
//     setDetailLocalStorage(detailProducts);
//   }
// }
var arrayInfo = [
  {
    id: 1,
    fullname: "nguyen hong son",
    email: "sonnguyen352003@gmail.com",
    password: "123456",
    date: "03-05-2003",
  },
  {
    id: 2,
    fullname: "nguyen van tai",
    email: "taile123@gmail.com",
    password: "000000",
    date: "15-9-2022",
  },
  {
    id: 3,
    fullname: "nguyen van A",
    email: "nguyenvana@gmail.com",
    password: "1234567",
    date: "16-9-2022",
  },
  {
    id: 4,
    fullname: "nguyen van B",
    email: "nguyenvanB@gmail.com",
    password: "000000",
    date: "16-9-2022",
  },
  {
    id: 5,
    fullname: "Vo Le Kim Tien",
    email: "kimtien123@gmail.com",
    password: "000000",
    date: "15-9-2022",
  },
  {
    id: 6,
    fullname: "Nguyen Yen Vy",
    email: "yenvyng266@gmail.com",
    password: "260603",
    date: "16-9-2022",
  },
  {
    id: 7,
    fullname: "Ha Nguyen Yen Vy",
    email: "havi1@gmail.com",
    password: "234111",
    date: "16-9-2022",
  },
  {
    id: 8,
    fullname: "Do Ngoc Xuan Hoang",
    email: "hoangdo2211@gmail.com",
    password: "031122",
    date: "26-9-2022",
  },
  {
    id: 9,
    fullname: "Vi Thi Hoa",
    email: "vihoa2@gmail.com",
    password: "246203",
    date: "26-9-2022",
  },

  {
    id: 10,
    fullname: "Le Trinh Thien Huong",
    email: "huongletrinh@gmail.com",
    password: "123345",
    date: "30-9-2022",
  },
  {
    id: 11,
    fullname: "Nguyen Thanh Sang",
    email: "sangnguyen123@gmail.com",
    password: "987654",
    date: "7-10-2022",
  },
  {
    id: 12,
    fullname: "Nguyen Yen Vy",
    email: "vynguyen000@gmail.com",
    password: "001002",
    date: "17-10-2022",
  },
  {
    id: 13,
    fullname: "Nguyen Hong Son",
    email: "nhson123@gmail.com",
    password: "123456",
    date: "11-11-2022",
  },
];
if (localStorage.getItem("infor") == null) {
  setAccountLocalStorage(arrayInfo);
}

function setAccountLocalStorage(arrayInfo) {
  localStorage.setItem("infor", JSON.stringify(arrayInfo));
}
var arrayInfos = JSON.parse(localStorage.getItem("infor"));
var arrayHisOrder = [
  {
    cost: "78.00",
    date: "11/10/2022",
    details: "Main's T Shirt Adidas    x 2",
    id: "1",
    idPerson: 1,
    shipping: "GiaoHangTietKiem",
    size: "XL",
    status: "da xu ly",
  },
  {
    cost: "78.00",
    date: "11/21/2022",
    details: "Main's T Shirt Adidas    x 1",
    id: "1",
    idPerson: 1,
    shipping: "GiaoHangTietKiem",
    size: "XL",
    status: "chua xu ly",
  },
  {
    cost: "78.00",
    date: "10/21/2022",
    details: "Main's T Shirt Adidas    x 1",
    id: "1",
    idPerson: 1,
    shipping: "GiaoHangTietKiem",
    size: "XL",
    status: "chua xu ly",
  },
  {
    cost: "78.00",
    date: "11/12/2022",
    details: "Main's T Shirt Adidas    x 1",
    id: "1",
    idPerson: 1,
    shipping: "GiaoHangTietKiem",
    size: "XL",
    status: "chua xu ly",
  },
];

function setHistoryOrderLocalStorage(arrayHisOrder) {
  localStorage.setItem("hisOrder", JSON.stringify(arrayHisOrder));
}
if (localStorage.getItem("hisOrder") == null) {
  setHistoryOrderLocalStorage(arrayHisOrder);
}
// var arrayHis = JSON.parse(localStorage.getItem("hisOrder"));
// for (let i = 0; i < arrayHis.length; i++) {
//   if (i == 1) {
//     arrayHis[i].status = "da xu ly";
//   }
// }
// setHistoryOrderLocalStorage(arrayHis);
