var arrayHis = JSON.parse(localStorage.getItem("hisOrder"));
let dayNow = new Date().toLocaleDateString().slice(3, 5);
let monthNow = new Date().toLocaleDateString().slice(0, 2);
let yearNow = new Date().toLocaleDateString().slice(-4);
let totalMoneyAdidas = 0;
let totalMoneyGucci = 0;
let totalMoney = 0;
let sumAll = 0;
let countAdidas = 0;
let countGucci = 0;
var check;
let timeOption = document.querySelector("#statistical-time");
var gucciClick = document.querySelector(".gucci-product");
var adidasClick = document.querySelector(".adidas-product");
var allClick = document.querySelector(".all-product");
var chart = document.querySelector(".chart-admin");
var chartGucci = document.querySelector(".chart-Gucci");
var chartAdidas = document.querySelector(".chart-Adidas");
// var options = document.querySelectorAll("select option");
var totalHis;
var totalGucci;
var getTimeCalander1 = document.querySelector(".time-get");
var getTimeCalander2 = document.querySelector(".time-get2");
var time1 = [];
var time2 = [];
var date = [];
var checkDraw = false;
var totalBrand;
getTimeCalander1.addEventListener("change", () => {
  time1 = getTimeCalander1.value.split("-");
  console.log(time1);
});

function handleChartTime2(time1, time2, arrayHis, brand) {
  countGucci = 0;
  totalMoneyAdidas = 0;
  totalMoneyGucci = 0;
  totalMoney = 0;
  sumAll = 0;
  totalBrand = 0;
  countAdidas = 0;
  for (let i = 0; i < arrayHis.length; i++) {
    if (arrayHis[i].details.includes(brand)) {
      totalBrand += Number(arrayHis[i].details.slice(-1));
    }
    if (brand == "All") {
      totalBrand += Number(arrayHis[i].details.slice(-1));
    }

    date = arrayHis[i].date.split("/");
    var from = new Date(time1[0], parseInt(time1[1]) - 1, time1[2]);
    var to = new Date(time2[0], parseInt(time2[1]) - 1, time2[2]);
    var check = new Date(date[2], parseInt(date[0]) - 1, date[1]);

    // if (arrayHis[i].details.includes(brand)) {
    //   if (
    //     Number(time1[0]) <= Number(year) &&
    //     Number(time2[0] >= Number(year))
    //   ) {
    //     console.log(day, month, year);
    //     console.log("year:", year);
    //     console.log("time1:", time1);
    //     console.log("time2", time2);

    //     if (Number(year) == time1[0] && year < time2[0]) {
    //       console.log("ahjdgjkashgdkasgdlak");
    //       checkHandle = true;
    //       if (month > time1[1] && month <= time2[1]) {
    //         console.log("test 1");
    //         handleTime(brand, arrayHis[i]);
    //       } else if (month == time1[1] && month <= time2[1]) {
    //         console.log("asdjshadukahg");
    //         if (day >= time1[2]) {
    //           console.log("iejda");
    //           handleTime(brand, arrayHis[i]);
    //         }
    //       }
    //     } else if (year == time2[0] && year > time1[0]) {
    //       checkHandle = true;
    //       console.log("test 2");

    //       if (month < time2[1] && month >= time1[1]) {
    //         handleTime(brand, arrayHis[i]);
    //       } else if (month == time2[1] && month >= time1[1]) {
    //         if (day <= time2[2]) {
    //           handleTime(brand, arrayHis[i]);
    //         }
    //       }
    //     } else if (year == time1[0] && year == time2[0]) {
    //       console.log("test 3");

    //       checkHandle = true;
    //       if (
    //         Number(time1[1]) <= Number(month) &&
    //         Number(time2[1] >= Number(month))
    //       ) {
    //         if (Number(month) == time1[1] && month < time2[1]) {
    //           if (day >= time1[2]) {
    //             handleTime(brand, arrayHis[i]);
    //           }
    //         } else if (month == time2[1] && month > time1[0]) {
    //           if (day <= time2[1]) {
    //             console.log("test 4");
    //             handleTime(brand, arrayHis[i]);
    //           }
    //         }
    //       }
    //     }
    //   }
    //   // if (checkHandle == false) {
    //   //   console.log("test 6");

    //   //   handleChartTime(brand, arrayHis[i]);
    //   // }
    // }
    if (check > from && check < to) {
      console.log("!23");
      if (arrayHis[i].details.includes(brand)) {
        handleTime(brand, arrayHis[i]);
        console.log("brnad", brand);
      }
      if (brand == "All") {
        if (arrayHis[i].details.includes("Adidas")) {
          handleTime("Adidas", arrayHis[i]);
        } else if (arrayHis[i].details.includes("Gucci")) {
          handleTime("Gucci", arrayHis[i]);
        }
      }

      checkDraw = true;
    }
  }
  console.log("adidas", totalBrand);
  sumAll = countAdidas + countGucci;
  totalMoney = totalMoneyAdidas + totalMoneyGucci;
}
function handleTime(brand, arrayHisI) {
  if (brand == "Adidas") {
    countAdidas += Number(arrayHisI.details.slice(-1));
    totalMoneyAdidas +=
      Number(arrayHisI.details.slice(-1)) * Number(arrayHisI.cost);
    console.log("dem ", countAdidas);
  } else if (brand == "Gucci") {
    totalMoneyGucci +=
      Number(arrayHisI.details.slice(-1)) * Number(arrayHisI.cost);
    countGucci += Number(arrayHisI.details.slice(-1));
    console.log("dem 2", countGucci);
  }
}
gucciClick.addEventListener("click", () => {
  countAdidas = 0;
  countGucci = 0;
  totalMoneyAdidas = 0;
  totalMoneyGucci = 0;
  totalMoney = 0;
  sumAll = 0;
  gucciClick.classList.add("active");
  allClick.classList.add("color");
  adidasClick.classList.remove("active");
  countGucci = 0;
  getTimeCalander1.value = "";
  getTimeCalander2.value = "";
  innerStatisticsGucci(0, 0, 0);
  chart.innerHTML = `<canvas id="myChartGucci" style="width: 100%; max-width: 600px; font-size:20px;"></canvas>`;
  check = "gucci";
  if (check == "gucci") {
    getTimeCalander1.addEventListener("change", () => {
      time1 = getTimeCalander1.value.split("-");

      chart.innerHTML = `<canvas id="myChartGucci" style="width: 100%; max-width: 600px; font-size:20px;"></canvas>`;

      handleChartTime2(time1, time2, arrayHis, "Gucci");
      innerStatisticsGucci(totalBrand, countGucci, totalMoneyGucci);
      if (checkDraw == true) {
        drawChartGucci();
        checkDraw = false;
      }
    });
    getTimeCalander2.addEventListener("change", () => {
      time2 = getTimeCalander2.value.split("-");
      handleChartTime2(time1, time2, arrayHis, "Gucci");
      chart.innerHTML = `<canvas id="myChartGucci" style="width: 100%; max-width: 600px; font-size:20px;"></canvas>`;
      handleChartTime2(time1, time2, arrayHis, "Gucci");
      innerStatisticsGucci(totalBrand, countGucci, totalMoneyGucci);
      if (checkDraw == true) {
        drawChartGucci();
        checkDraw = false;
      }
    });
  }
});
var totalBrand;
adidasClick.addEventListener("click", () => {
  getTimeCalander1.value = "";
  getTimeCalander2.value = "";
  adidasClick.classList.add("active");
  allClick.classList.add("color");
  gucciClick.classList.remove("active");
  innerStatisticsAdidas(0, 0, 0);
  check = "adidas";
  chart.innerHTML = `<canvas id="myChartAdidas" style="width: 100%; max-width: 600px; font-size:20px;"></canvas>`;

  if (check == "adidas") {
    getTimeCalander1.addEventListener("change", () => {
      time1 = getTimeCalander1.value.split("-");
      chart.innerHTML = `<canvas id="myChartAdidas" style="width: 100%; max-width: 600px; font-size:20px;"></canvas>`;

      handleChartTime2(time1, time2, arrayHis, "Adidas");
      innerStatisticsAdidas(totalBrand, countAdidas, totalMoneyAdidas);

      if (checkDraw == true) {
        drawChartAdidas();
        checkDraw = false;
      }
    });
    getTimeCalander2.addEventListener("change", () => {
      time2 = getTimeCalander2.value.split("-");
      chart.innerHTML = `<canvas id="myChartAdidas" style="width: 100%; max-width: 600px; font-size:20px;"></canvas>`;
      check = "Adidas";

      handleChartTime2(time1, time2, arrayHis, "Adidas");
      innerStatisticsAdidas(totalBrand, countAdidas, totalMoneyAdidas);
      if (checkDraw == true) {
        drawChartAdidas();
        checkDraw = false;
      }
    });
  }
});
allClick.addEventListener("click", () => {
  getTimeCalander1.value = "";
  getTimeCalander2.value = "";
  allClick.classList.add("active");
  allClick.classList.remove("color");
  adidasClick.classList.remove("active");
  gucciClick.classList.remove("active");
  innerStatistics(0, 0, 0, 0);
  check = "all";
  chart.innerHTML = `<canvas id="myChart" style="width: 100%; max-width: 600px"></canvas>`;
  handleChartTime2(time1, time2, arrayHis, "All");
  totalMoney = totalGucci + totalMoneyAdidas;

  drawChart();
  if (check == "all") {
    getTimeCalander1.addEventListener("change", () => {
      time1 = getTimeCalander1.value.split("-");
      chart.innerHTML = `<canvas id="myChart" style="width: 100%; max-width: 600px; font-size:20px;"></canvas>`;
      handleChartTime2(time1, time2, arrayHis, "All");
      innerStatistics(totalBrand, countAdidas, countGucci, totalMoney);
      if (checkDraw == true) {
        drawChart();
        checkDraw = false;
      }
    });
    getTimeCalander2.addEventListener("change", () => {
      time2 = getTimeCalander2.value.split("-");
      handleChartTime2(time1, time2, arrayHis, "All");
      chart.innerHTML = `<canvas id="myChart" style="width: 100%; max-width: 600px; font-size:20px;"></canvas>`;
      handleChartTime2(time1, time2, arrayHis, "All");
      console.log("coutn1 ", countAdidas);
      console.log("coutn2 ", countGucci);
      innerStatistics(totalBrand, countAdidas, countGucci, totalMoney);
      if (checkDraw == true) {
        drawChart();
        checkDraw = false;
      }
    });
  }
});
getTime();

function handleChartTime(time, arrayHis) {
  countAdidas = 0;
  countGucci = 0;
  totalMoneyAdidas = 0;
  totalMoneyGucci = 0;
  totalMoney = 0;
  sumAll = 0;
  for (let i = 0; i < arrayHis.length; i++) {
    var day = arrayHis[i].date.slice(3, 5);
    var month = arrayHis[i].date.slice(0, 2);
    var year = arrayHis[i].date.slice(-4);
    if (arrayHis[i].details.includes("Adidas")) {
      if (Number(dayNow) - Number(day) <= 7 && time == "week") {
        countAdidas += Number(arrayHis[i].details.slice(-1));
        totalMoneyAdidas +=
          Number(arrayHis[i].details.slice(-1)) * Number(arrayHis[i].cost);
      } else if (Number(monthNow) - Number(month) <= 1 && time == "month") {
        countAdidas += Number(arrayHis[i].details.slice(-1));
        totalMoneyAdidas +=
          Number(arrayHis[i].details.slice(-1)) * Number(arrayHis[i].cost);
      } else if (Number(yearNow) - Number(year) <= 1 && time == "year") {
        countAdidas += Number(arrayHis[i].details.slice(-1));
        totalMoneyAdidas +=
          Number(arrayHis[i].details.slice(-1)) * Number(arrayHis[i].cost);
      } else if (time == "all") {
        countAdidas += Number(arrayHis[i].details.slice(-1));
        totalMoneyAdidas +=
          Number(arrayHis[i].details.slice(-1)) * Number(arrayHis[i].cost);
      }
    } else if (arrayHis[i].details.includes("Gucci")) {
      if (Number(dayNow) - Number(day) <= 7 && time == "week") {
        totalMoneyGucci +=
          Number(arrayHis[i].details.slice(-1)) * Number(arrayHis[i].cost);
        countGucci += Number(arrayHis[i].details.slice(-1));
      } else if (Number(monthNow) - Number(month) <= 1 && time == "month") {
        totalMoneyGucci +=
          Number(arrayHis[i].details.slice(-1)) * Number(arrayHis[i].cost);
        countGucci += Number(arrayHis[i].details.slice(-1));
      } else if (Number(yearNow) - Number(year) <= 1 && time == "year") {
        totalMoneyGucci +=
          Number(arrayHis[i].details.slice(-1)) * Number(arrayHis[i].cost);
        countGucci += Number(arrayHis[i].details.slice(-1));
        console.log("count gucci:", countGucci);
      } else if (time == "all") {
        countGucci += Number(arrayHis[i].details.slice(-1));
        totalMoneyGucci +=
          Number(arrayHis[i].details.slice(-1)) * Number(arrayHis[i].cost);
      }
    }
    console.log("sumall ne", sumAll);
    sumAll = countAdidas + countGucci;
    totalMoney = totalMoneyAdidas + totalMoneyGucci;
    if (time == "all") {
      totalHis = sumAll;
    }
  }
}
function getTime() {
  getTimeCalander1.value = "";
  getTimeCalander2.value = "";
  allClick.classList.add("active");
  allClick.classList.remove("color");
  adidasClick.classList.remove("active");
  gucciClick.classList.remove("active");
  innerStatistics(0, 0, 0, 0);
  check = "all";
  chart.innerHTML = `<canvas id="myChart" style="width: 100%; max-width: 600px"></canvas>`;
  handleChartTime2(time1, time2, arrayHis, "All");
  totalMoney = totalGucci + totalMoneyAdidas;

  drawChart();
  if (check == "all") {
    getTimeCalander1.addEventListener("change", () => {
      time1 = getTimeCalander1.value.split("-");
      chart.innerHTML = `<canvas id="myChart" style="width: 100%; max-width: 600px; font-size:20px;"></canvas>`;
      handleChartTime2(time1, time2, arrayHis, "All");
      innerStatistics(totalBrand, countAdidas, countGucci, totalMoney);
      if (checkDraw == true) {
        drawChart();
        checkDraw = false;
      }
    });
    getTimeCalander2.addEventListener("change", () => {
      time2 = getTimeCalander2.value.split("-");
      handleChartTime2(time1, time2, arrayHis, "All");
      chart.innerHTML = `<canvas id="myChart" style="width: 100%; max-width: 600px; font-size:20px;"></canvas>`;
      handleChartTime2(time1, time2, arrayHis, "All");
      console.log("coutn1 ", countAdidas);
      console.log("coutn2 ", countGucci);
      innerStatistics(totalBrand, countAdidas, countGucci, totalMoney);
      if (checkDraw == true) {
        drawChart();
        checkDraw = false;
      }
    });
  }
}

function innerStatistics(total, adidas, gucci, cost) {
  var innerAdmin = document.querySelector(".statistics-admin");
  var threadInner = document.querySelector(".infor-inner");
  var thInner = `<tr>
  <th style="width: 30%">Total</th>
  <th style="width: 25%">Adidas</th>
  <th style="width: 25%">Gucci</th>
  <th style="width: 20%">Cost</th>
</tr>`;
  threadInner.innerHTML = thInner;
  var inforInner = `<tr>
  <td class="total-Sta">${total}</td>
  <td class="adidas-Sta">${adidas}</td>
  <td class="gucci-Sta">${gucci}</td>
  <td class="cost-Sta">${cost}</td>
</tr>`;
  innerAdmin.innerHTML = inforInner;
}
function innerStatisticsAdidas(total, adidas, cost) {
  var innerAdmin = document.querySelector(".statistics-admin");
  var threadInner = document.querySelector(".infor-inner");
  var thInner = `<tr>
  <th style="width: 30%">Total</th>
  <th style="width: 25%">Adidas</th>

  <th style="width: 20%">Cost</th>
</tr>`;
  threadInner.innerHTML = thInner;
  var inforInner = `<tr>
  <td class="total-Sta">${total}</td>
  <td class="adidas-Sta">${adidas}</td>
  <td class="cost-Sta">${cost}</td>
</tr>`;
  innerAdmin.innerHTML = inforInner;
}
function innerStatisticsGucci(total, gucci, cost) {
  var innerAdmin = document.querySelector(".statistics-admin");
  var threadInner = document.querySelector(".infor-inner");
  var thInner = `<tr>
  <th style="width: 30%">Total</th>
  <th style="width: 25%">Gucci</th>

  <th style="width: 20%">Cost</th>
</tr>`;
  threadInner.innerHTML = thInner;
  var inforInner = `<tr>
  <td class="total-Sta">${total}</td>
  <td class="adidas-Sta">${gucci}</td>
  <td class="cost-Sta">${cost}</td>
</tr>`;
  innerAdmin.innerHTML = inforInner;
}

function drawChartAdidas() {
  var xValues = ["All", "Adidas", ""];
  var yValues = [totalBrand, countAdidas, 0];
  var barColors = ["red", "green"];

  new Chart("myChartAdidas", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Chart of business statistics for Adidas`,
        font: {
          size: 100,
          weight: "bold",
          lineHeight: 1.2,
        },
      },
    },
  });
}

function drawChartGucci() {
  var xValues = ["All", "Gucci", ""];
  var yValues = [totalBrand, countGucci, 0];
  var barColors = ["pink", "yellow"];
  new Chart("myChartGucci", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: `Chart of business statistics for Gucci`,
      },
    },
  });
}

function drawChart() {
  var xValues = ["Gucci", "Adidas"];
  var yValues = [countGucci, countAdidas];
  var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Business Statistics",
      },
    },
  });
}

// Admin code
const body = document.querySelector("body");
button = body.querySelector("nav");
buttonToggle = body.querySelector("#button");

buttonToggle.addEventListener("click", () => {
  button.classList.toggle("close");
});

function redirect() {
  var url = window.location.href;
  var id = url.split("?");
  id = id[1];
  // console.log=(id)
  switch (id) {
    case "home":
      document.getElementById("product").style.display = "none";
      document.getElementById("home").style.display = "block";
      break;

    case "product":
      document.getElementById("home").style.display = "none";
      document.getElementById("product").style.display = "block";
      break;

    case "customer": {
      document.getElementById("home").style.display = "none";
      document.getElementById("customer").style.display = "block";
      break;
    }
    case "order": {
      document.getElementById("home").style.display = "none";
      document.getElementById("order").style.display = "block";
      break;
    }
    case "statistic": {
      document.getElementById("home").style.display = "none";
      document.getElementById("statistic").style.display = "block";
      break;
    }
  }
}
function createProduct(product) {
  localStorage.setItem("product", JSON.stringify(product));
}

if (localStorage.getItem("product") == null) {
  createProduct(product);
}
//Hiển thị danh sách sản phẩm
function showProductList(ProductArray) {
  if (localStorage.getItem("product") == null) return false;

  let table = `<thead>
        <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Brand</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
      </thead>`;
  for (let i = 0; i < ProductArray.length; i++) {
    table += `<tbody>
            <tr>
                <td class = "num-id">${ProductArray[i].id}</td>
                <td><img style="width:100px" src = "${ProductArray[i].image}" alt = ""></td>
                <td>${ProductArray[i].span}</td>
                <td>${ProductArray[i].title}</td>
                <td>${ProductArray[i].price}</td>
                <td> 
                <a href="#form-scroll" style="text-decoration:none">
                    <button class = "btn-edit" onclick = "editProduct(${ProductArray[i].id})"><i class="fa-regular fa-pen-to-square"></i></button> </a>

                    <button class = "btn-delete" onclick = "deleteProduct(${ProductArray[i].id})"><i class="fa-solid fa-xmark"></i></button> 
                </td>
            </tr>
        </tbody>`;
  }
  document.getElementById("ProductList").innerHTML = table;
}

//Kiểm tra trạng thái form
function validate_form() {
  let formElement = document.querySelector(".add-form");
  let inputElement = formElement.querySelectorAll(".form-input");

  for (let i = 0; i < inputElement.length; i++) {
    if (inputElement[i].value == "") {
      inputElement[i].parentElement.querySelector(
        ".error-message"
      ).innerHTML = `Please enter Product's ${inputElement[i].id}`;
    }
    // else
    //   inputElement[i].parentElement.querySelector(".error-message").innerText =
    //     "";
  }
}

var arrImg = [];
function changeImg() {
  document.querySelector("#img").addEventListener("change", function () {
    var reader = new FileReader();
    reader.addEventListener("load", function listen() {
      // localStorage.setItem("recent-img", reader.result);
      if (arrImg.includes(reader.result) == false) {
        arrImg.push(reader.result);
      }
    });
    reader.readAsDataURL(this.files[0]);
  });
  document.querySelector("#img2").addEventListener("change", function () {
    var reader = new FileReader();
    reader.addEventListener("load", function listen() {
      // localStorage.setItem("recent-img", reader.result);
      if (arrImg.includes(reader.result) == false) {
        arrImg.push(reader.result);
      }
    });
    reader.readAsDataURL(this.files[0]);
  });
  document.querySelector("#img3").addEventListener("change", function () {
    var reader = new FileReader();
    reader.addEventListener("load", function listen() {
      // localStorage.setItem("recent-img", reader.result);
      if (arrImg.includes(reader.result) == false) {
        arrImg.push(reader.result);
      }
    });
    reader.readAsDataURL(this.files[0]);
  });
  document.querySelector("#img4").addEventListener("change", function () {
    var reader = new FileReader();
    reader.addEventListener("load", function listen() {
      // localStorage.setItem("recent-img", reader.result);
      if (arrImg.includes(reader.result) == false) {
        arrImg.push(reader.result);
      }
    });
    reader.readAsDataURL(this.files[0]);
  });
}
changeImg();

//Thêm sản phẩm
function addProduct() {
  // localStorage.setItem("recent-img", reader.result);
  validate_form();
  let ProductArray = JSON.parse(localStorage.getItem("product"));
  let formElement = document.querySelector(".add-form");
  let errorElement = formElement.querySelectorAll(".error-message");
  let arrError = [];
  for (let i = 0; i < errorElement.length; i++) {
    arrError.push(errorElement[i].innerText);
  }

  let checkError = arrError.every((value) => value == "");
  if (checkError) {
    let item_id = document.getElementById("id").value;
    let item_name = document.getElementById("name").value;
    let item_brand = document.getElementById("brand").value;
    let item_price = document.getElementById("price").value;
    let item_image = arrImg[0];

    ProductArray.push({
      id: item_id,
      image: item_image,
      span: item_brand,
      title: item_name,
      price: item_price,
    });
  }

  createProduct(ProductArray);
  showProductList(ProductArray);
  var detailProducts = JSON.parse(localStorage.getItem("detailProduct"));
  let item_image = arrImg[0];
  detailProducts.push({
    detail: document.getElementById("detail").value,
    header: document.getElementById("header1").value,
    id: document.getElementById("id").value,
    img: item_image,
    imgsmall1: item_image,
    imgsmall2: arrImg[1],
    imgsmall3: arrImg[2],
    imgsmall4: arrImg[3],
    price: document.getElementById("price").value,
    title: document.getElementById("brand").value,
  });
  setDetailLocalStorage(detailProducts);
  clear();
}

//Xóa dữ liệu trên form sau khi submit
function clear() {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("detail").value = "";
  document.getElementById("header1").value = "";
  document.getElementById("brand").value = "";
  document.getElementById("price").value = "";
  document.getElementById("img").value = "";
  document.getElementById("img2").value = "";
  document.getElementById("img3").value = "";
  document.getElementById("img4").value = "";
  while (arrImg.length > 0) {
    arrImg.pop();
  }
}

//Xóa sản phẩm
function deleteProduct(deletePro) {
  let ProductArray = JSON.parse(localStorage.getItem("product"));
  var detailProducts = JSON.parse(localStorage.getItem("detailProduct"));

  for (let i = 0; i < ProductArray.length; i++) {
    if (ProductArray[i].id == deletePro) {
      if (
        confirm(
          "Are you sure you want to delete this product? This action cannot be undone."
        )
      ) {
        ProductArray.splice(i, 1);
      }
    }
  }
  for (var j = 0; j < detailProducts.length; j++) {
    if (detailProducts[j].id == deletePro) {
      detailProducts.splice(j, 1);
    }
  }
  createProduct(ProductArray);
  setDetailLocalStorage(detailProducts);
  showProductList(ProductArray);
}

var temp;
var indexArr;
//Sửa sản phẩm
function editProduct(index) {
  // cái index này là lấy được cái id của cái sản phẩm đó, id chứ ko phải ví trí của nó trong mảng
  let ProductArray = JSON.parse(localStorage.getItem("product"));
  var detailProducts = JSON.parse(localStorage.getItem("detailProduct"));
  document.getElementById("id").value = index;
  for (let i = 0; i < ProductArray.length; i++) {
    document.getElementById("h1").innerHTML = "Edit Product";
    document.getElementById("btn-submit").style.display = "none";
    document.getElementById("btn-update").style.display = "inline";
    // kiểm tra trùng id xong vô kiểm tra nó nằm thứ mấy trong mảng
    if (ProductArray[i].id == index) {
      // cái này lấy ra được là cái sản phẩm này nằm ở ví trí thứ mấy trong mảng
      indexArr = ProductArray.indexOf(ProductArray[i]);

      document.getElementById("id").value = ProductArray[i].id;
      document.getElementById("name").value = ProductArray[i].title;
      document.getElementById("brand").value = ProductArray[i].span;
      document.getElementById("price").value = ProductArray[i].price;
      document.getElementById("detail").value = detailProducts[i].detail;
      document.getElementById("header1").value = detailProducts[i].header;
    }
  }
  validate_form();
}

changeImg();
function updateProduct() {
  let ProductArray = JSON.parse(localStorage.getItem("product"));
  changeImg();
  var detailProducts = JSON.parse(localStorage.getItem("detailProduct"));
  // gán giá trị trong mảng đó cho giá trị sửa
  ProductArray[indexArr] = {
    id: document.getElementById("id").value,
    title: document.getElementById("name").value,
    span: document.getElementById("brand").value,
    price: document.getElementById("price").value,
    image: arrImg[0],
  };
  detailProducts[indexArr] = {
    detail: document.getElementById("detail").value,
    title: document.getElementById("name").value,
    header: document.getElementById("brand").value,
    price: document.getElementById("price").value,
    img: arrImg[0],
    imgsmall1: arrImg[0],
    imgsmall2: arrImg[1],
    imgsmall3: arrImg[2],
    imgsmall4: arrImg[3],
    id: document.getElementById("id").value,
  };

  createProduct(ProductArray);
  setDetailLocalStorage(detailProducts);
  showProductList(ProductArray);

  clear();
  document.getElementById("h1").innerHTML = "Add Product";
  document.getElementById("btn-submit").style.display = "inline";
  document.getElementById("btn-update").style.display = "none";
}

function showUserList(arrayInfos) {
  if (localStorage.getItem("infor") == null) return false;
  let table = `<thead>
      <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Registered</th>
          <th>Role</th>
          <th>Actions</th>
      </tr>
    </thead>`;
  for (let i = 0; i < arrayInfos.length; i++) {
    let index = i;
    table += `<tbody>
          <tr>
              <td class = "num-id">${i + 1}</td>
              <td>${arrayInfos[i].fullname}</td>
              <td>${arrayInfos[i].email}</td>
              <td>${arrayInfos[i].date}</td>
              <td style = "color: grey">${arrayInfos[i].usertype}</td>
              <td>
                  <button 
                    class = "btn-editRole" 
                    onclick = "editUser(${index})">
                    <i class="fa-solid fa-plus-minus"></i>
                  </button>
                  <button 
                    class = "btn-deactivate" 
                    onclick = "deleteUser(${index})">
                    <i class="fa-solid fa-user-slash"></i>
                  </button>
              </td>
          </tr>
      </tbody>`;
  }
  document.getElementById("UserList").innerHTML = table;
}
function editUser(index) {
  var role;
  var arrayInfos = JSON.parse(localStorage.getItem("infor"));
  for (let i = 0; i < arrayInfos.length; i++) {
    role = arrayInfos[index].usertype;
    if (role == "User") {
      if (
        confirm(
          "Are you sure you want to give this user the Administrative Privileges?"
        )
      )
        arrayInfos[index].usertype = "Admin";
      break;
    } else {
      if (
        confirm(
          "Are you sure you want to cancel this user's Administrative Privileges?"
        )
      )
        arrayInfos[index].usertype = "User";
      break;
    }
  }
  setAccountLocalStorage(arrayInfos);
  showUserList(arrayInfos);
}
function deleteUser(deleteUser) {
  var arrayInfos = JSON.parse(localStorage.getItem("infor"));
  for (let i = 0; i < arrayInfos.length; i++) {
    let index = i;

    if (index == deleteUser)
      if (
        confirm(
          "Are you sure you want to deactivate this user? All of this user's information will be deleted and cannot be undone."
        )
      )
        arrayInfos.splice(index, 1);
  }
  setAccountLocalStorage(arrayInfos);
  showUserList(arrayInfos);
}

window.onload = function () {
  redirect();

  let ProductArray = JSON.parse(localStorage.getItem("product"));

  var arrayInfos = JSON.parse(localStorage.getItem("infor"));
  showProductList(ProductArray);
  updateProduct();
  showUserList(arrayInfos);
  deleteUser();
};

// customer order

function showCustomerOrder(arrayHisOrder) {
  var arrayInfos = JSON.parse(localStorage.getItem("infor"));
  let table = `
  <thead>
  <tr  >
  <th style="width: 10%">ID</th>
  <th style="width: 30%">Email</th>
  <th style="width: 30%">Date</th>
  <th style="width: 30%">Status</th>
</tr>
</thead>`;
  for (let i = 0; i < arrayHisOrder.length; i++) {
    let index;
    for (var j = 0; j < arrayInfos.length; j++) {
      if (arrayHisOrder[i].idPerson == arrayInfos[j].id) {
        index = j;
      }
    }
    table += `<tbody>
          <tr class ="row-cusorder">
              <td class = "cus-id">${i + 1}</td>
              <td class="cus-email">${arrayInfos[index].email}</td>
              <td>${arrayHisOrder[i].date}</td>
              <td>${arrayHisOrder[i].status}</td>
          </tr>
      </tbody>
    `;
  }
  document.querySelector(".table-order").innerHTML = table;
}

var arrayHis = JSON.parse(localStorage.getItem("hisOrder"));
var getIndexOr;
showCustomerOrder(arrayHis);
var dasboard = document.querySelector(".dashboard");
var container = document.querySelector(".container");
var overlay = document.querySelector(".container-detailorder");
function showDetailOrder() {
  var arrayInfos = JSON.parse(localStorage.getItem("infor"));
  var arrayHis = JSON.parse(localStorage.getItem("hisOrder"));
  var rowCusOrder = document.querySelectorAll(".table-order .row-cusorder");
  var styleVar;
  var cusId = document.querySelectorAll(".cus-id");
  for (let i = 0; i < rowCusOrder.length; i++) {
    rowCusOrder[i].addEventListener("click", () => {
      var indexOrder = cusId[i].innerText;
      getIndexOr = cusId[i].innerText;
      var indexPer = arrayHis[indexOrder - 1].idPerson - 1;
      if (arrayHis[indexOrder - 1].status == "da xu ly") {
        styleVar = "none";
      } else styleVar = "block";

      detailOrder(
        arrayHis,
        indexOrder - 1,
        arrayInfos,
        indexPer,
        styleVar,
        "changeStatusOrder()"
      );

      var container = document.querySelector(".container");
      var overlay = document.querySelector(".container-detailorder");

      container.classList.add("acitve");
      overlay.classList.add("active");
    });
  }
}
showDetailOrder();
var indexPer;
var getIndexOr;
function showDetailOrderTime(indexTime, arrOrder) {
  var arrayInfos = JSON.parse(localStorage.getItem("infor"));
  var arrayHis = JSON.parse(localStorage.getItem("hisOrder"));
  var rowCusOrder = document.querySelectorAll(".table-order .row-cusorder");
  var styleVar;

  var cusId = document.querySelectorAll(".cus-id");
  for (let i = 0; i < rowCusOrder.length; i++) {
    rowCusOrder[i].addEventListener("click", () => {
      getIndexOr = indexTime[cusId[i].innerText - 1];

      indexPer = arrayHis[indexTime[cusId[i].innerText - 1]].idPerson - 1;

      if (arrayHis[indexTime[cusId[i].innerText - 1]].status == "da xu ly") {
        styleVar = "none";
      } else styleVar = "block";
      detailOrder(
        arrayHis,
        indexTime[cusId[i].innerText - 1],
        arrayInfos,
        indexPer,
        styleVar,
        "changeStatusTime()"
      );

      var container = document.querySelector(".container");
      var overlay = document.querySelector(".container-detailorder");

      container.classList.add("acitve");
      overlay.classList.add("active");
    });
  }
}

function detailOrder(arrayHis, index, arrayInfos, indexPer, style, func) {
  html = `
  <div class="detail-ordercus">
  <div class="close-orderdetail">
              <i class="fa-solid fa-xmark"></i>
            </div>
              <h2 class="title-detailcus">Details Order</h2>
              <div class="date-order">Date: <span>${arrayHis[index].date}</span></div>
              <div class="details-order">
                Details: <span>${arrayHis[index].details} </span>
              </div>
              <div class="name-cusorder">
                Customer Name:
                <span> ${arrayInfos[indexPer].fullname} </span>
              </div>
              <div class="shipping-order">
                Shipping: 
                <span> Giaohangtietkiem </span>
              </div>
              <div class="size-order">
                Size:
                <span>${arrayHis[index].size} </span>
              </div>
              <div class="status-order">
                Status: <span class="status-text"> ${arrayHis[index].status} </span><input type="checkbox" id="myCheck" onclick="${func}" style ="display:${style}" />
              </div>
            </div>`;
  document.querySelector(".container-detailorder").innerHTML = html;
  var formOrderDetail = document.querySelector(".detail-ordercus");
  var closeDetailOrder = document.querySelector(
    ".detail-ordercus .close-orderdetail"
  );
  var overlay = document.querySelector(".container-detailorder");
  closeDetailOrder.addEventListener("click", () => {
    formOrderDetail.classList.add("remove");
    console.log(overlay);
    overlay.classList.remove("active");
  });
}
var messageCheck;
function changeStatusTime() {
  var checkbox = document.querySelector("#myCheck");
  var statusText = document.querySelector(".status-text");
  if (checkbox.checked == true) {
    if (statusText.innerText == "da xu ly") {
      statusText.innerHTML = "chua xu ly";
    } else {
      statusText.innerHTML = "da xu ly";
    }
  }
  var hidenCheckbox = document.querySelector(".status-order .status-text");
  messageCheck = hidenCheckbox.innerText;
  if (hidenCheckbox.innerText == "da xu ly") {
    var arrayHis = JSON.parse(localStorage.getItem("hisOrder"));
    checkbox.style.display = "none";
    arrayHis[getIndexOr].status = "da xu ly";
    setHistoryOrderLocalStorage(arrayHis);
    var arrayHis = JSON.parse(localStorage.getItem("hisOrder"));

    orderCustomerTime(timeOrder.value);
    // orderCustomerTime("month");
    // orderCustomerTime("week");
    // showDetailOrderTime(indexTime, arrOrder);
  }
}
function changeStatusOrder() {
  var checkbox = document.querySelector("#myCheck");
  var statusText = document.querySelector(".status-text");
  if (checkbox.checked == true) {
    if (statusText.innerText == "da xu ly") {
      statusText.innerHTML = "chua xu ly";
    } else {
      statusText.innerHTML = "da xu ly";
    }
  }
  var hidenCheckbox = document.querySelector(".status-order .status-text");
  messageCheck = hidenCheckbox.innerText;
  if (hidenCheckbox.innerText == "da xu ly") {
    var arrayHis = JSON.parse(localStorage.getItem("hisOrder"));
    checkbox.style.display = "none";

    arrayHis[getIndexOr - 1].status = "da xu ly";
    setHistoryOrderLocalStorage(arrayHis);
    var arrayHis = JSON.parse(localStorage.getItem("hisOrder"));
    showCustomerOrder(arrayHis);
    showDetailOrder();

    // orderCustomerTime("week");
    // showDetailOrderTime(indexTime, arrOrder);
  }
}

var arrOrder = [];
var indexTime = [];
function orderCustomerTime(time) {
  indexTime = [];
  var temp = [];
  var dayOrder = [];
  var monthOrder = [];
  var yearOrder = [];
  var arrayHis = JSON.parse(localStorage.getItem("hisOrder"));
  for (var k = 0; k < arrayHis.length; k++) {
    temp = arrayHis[k].date.split("/");
    dayOrder.push(temp[1]);
    monthOrder.push(temp[0]);
    yearOrder.push(temp[2]);
  }

  for (var i = 0; i < arrayHis.length; i++) {
    if (Number(dayNow) - Number(dayOrder[i]) <= 7 && time == "week") {
      arrOrder.push(arrayHis[i]);
    } else if (
      Number(monthNow) - Number(monthOrder[i]) <= 1 &&
      time == "month"
    ) {
      arrOrder.push(arrayHis[i]);
    } else if (Number(monthNow) - Number(yearOrder[i]) <= 1 && time == "year") {
      arrOrder.push(arrayHis[i]);
    }
    if (time == "all") {
      arrOrder.push(arrayHis[i]);
    }
  }

  for (var j = 0; j < arrOrder.length; j++) {
    indexTime.push(arrayHis.indexOf(arrOrder[j]));
  }
  showCustomerOrder(arrOrder);
  showDetailOrderTime(indexTime, arrOrder);

  while (arrOrder.length > 0) {
    arrOrder.pop();
  }
}

var timeOrder = document.querySelector("#ordercus-time");
function getValueTime() {
  timeOrder.addEventListener("change", () => {
    if (timeOrder.value == "week") {
      orderCustomerTime(timeOrder.value);
      while (arrOrder.length > 0) {
        arrOrder.pop();
      }
    } else if (timeOrder.value == "month") {
      orderCustomerTime(timeOrder.value);

      while (arrOrder.length > 0) {
        arrOrder.pop();
      }
    } else if (timeOrder.value == "year") {
      orderCustomerTime(timeOrder.value);

      while (arrOrder.length > 0) {
        arrOrder.pop();
      }
    } else {
      orderCustomerTime(timeOrder.value);

      while (arrOrder.length > 0) {
        arrOrder.pop();
      }
    }
  });
}
getValueTime();

var xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

new Chart("myChartDashboard", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "#99a9f6",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    },
  },
});
