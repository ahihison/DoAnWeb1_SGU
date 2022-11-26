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
var options = document.querySelectorAll("select option");

gucciClick.addEventListener("click", () => {
  gucciClick.classList.add("active");
  allClick.classList.add("color");
  adidasClick.classList.remove("active");

  for (var i = 0; i < options.length; i++) {
    options[i].selected = options[i].defaultSelected;
  }
  chart.innerHTML = `<canvas id="myChartGucci" style="width: 100%; max-width: 600px; font-size:20px;"></canvas>`;
  check = "gucci";
  innerStatisticsGucci(sumAll, countGucci, totalMoneyGucci);
  drawChartGucci();
  if (check == "gucci") {
    timeOption.addEventListener("change", () => {
      countAdidas = 0;
      countGucci = 0;
      totalMoneyAdidas = 0;
      totalMoneyGucci = 0;
      totalMoney = 0;
      sumAll = 0;
      chart.innerHTML = `<canvas id="myChartGucci" style="width: 100%; max-width: 600px"></canvas>`;
      if (timeOption.value == "week" && check == "gucci") {
        handleChartTime(timeOption.value);
        innerStatisticsGucci(sumAll, countGucci, totalMoneyGucci);
        drawChartGucci();
      } else if (timeOption.value == "month" && check == "gucci") {
        handleChartTime(timeOption.value);
        innerStatisticsGucci(sumAll, countGucci, totalMoneyGucci);
        drawChartGucci();
      } else if (timeOption.value == "year" && check == "gucci") {
        handleChartTime(timeOption.value);
        innerStatisticsGucci(sumAll, countGucci, totalMoneyGucci);
        drawChartGucci();
      } else if (timeOption.value == "all" && check == "gucci") {
        handleChartTime(timeOption.value);
        innerStatisticsGucci(sumAll, countGucci, totalMoneyGucci);
        drawChartGucci();
      }
    });
  }
});
adidasClick.addEventListener("click", () => {
  adidasClick.classList.add("active");
  allClick.classList.add("color");
  gucciClick.classList.remove("active");

  for (var i = 0; i < options.length; i++) {
    options[i].selected = options[i].defaultSelected;
  }
  check = "adidas";
  chart.innerHTML = `<canvas id="myChartAdidas" style="width: 100%; max-width: 600px"></canvas>`;

  innerStatisticsAdidas(sumAll, countAdidas, totalMoneyAdidas);
  drawChartAdidas();
  if (check == "adidas") {
    timeOption.addEventListener("change", () => {
      countAdidas = 0;
      countGucci = 0;
      totalMoneyAdidas = 0;
      totalMoneyGucci = 0;
      totalMoney = 0;
      sumAll = 0;
      chart.innerHTML = `<canvas id="myChartAdidas" style="width: 100%; max-width: 600px"></canvas>`;

      if (timeOption.value == "week" && check == "adidas") {
        handleChartTime(timeOption.value);
        innerStatisticsAdidas(sumAll, countAdidas, totalMoneyAdidas);
        drawChartAdidas();
      } else if (timeOption.value == "month" && check == "adidas") {
        handleChartTime(timeOption.value);
        innerStatisticsAdidas(sumAll, countAdidas, totalMoneyAdidas);
        drawChartAdidas();
      } else if (timeOption.value == "year" && check == "adidas") {
        handleChartTime(timeOption.value);
        innerStatisticsAdidas(sumAll, countAdidas, totalMoneyAdidas);
        drawChartAdidas();
      } else if (timeOption.value == "year" && check == "adidas") {
        handleChartTime(timeOption.value);
        innerStatisticsAdidas(sumAll, countAdidas, totalMoneyAdidas);
        drawChartAdidas();
      } else if (timeOption.value == "all" && check == "adidas") {
        handleChartTime(timeOption.value);
        innerStatisticsAdidas(sumAll, countAdidas, totalMoneyAdidas);
        drawChartAdidas();
      }
    });
  }
});
allClick.addEventListener("click", () => {
  allClick.classList.add("active");
  allClick.classList.remove("color");
  adidasClick.classList.remove("active");
  gucciClick.classList.remove("active");
  for (var i = 0; i < options.length; i++) {
    options[i].selected = options[i].defaultSelected;
  }
  check = "all";
  chart.innerHTML = `<canvas id="myChart" style="width: 100%; max-width: 600px"></canvas>`;
  innerStatistics(sumAll, countAdidas, countGucci, totalMoney);
  drawChart();
  if (check == "all") {
    timeOption.addEventListener("change", () => {
      countAdidas = 0;
      countGucci = 0;
      totalMoneyAdidas = 0;
      totalMoneyGucci = 0;
      totalMoney = 0;
      sumAll = 0;
      chart.innerHTML = `<canvas id="myChart" style="width: 100%; max-width: 600px"></canvas>`;
      if (timeOption.value == "week" && check == "all") {
        handleChartTime(timeOption.value);
        innerStatistics(sumAll, countAdidas, countGucci, totalMoney);
        drawChart();
      } else if (timeOption.value == "month" && check == "all") {
        handleChartTime(timeOption.value);
        innerStatistics(sumAll, countAdidas, countGucci, totalMoney);
        drawChart();
      } else if (timeOption.value == "year" && check == "all") {
        handleChartTime(timeOption.value);
        innerStatistics(sumAll, countAdidas, countGucci, totalMoney);
        drawChart();
      } else if (timeOption.value == "all" && check == "all") {
        handleChartTime(timeOption.value);
        innerStatistics(sumAll, countAdidas, countGucci, totalMoney);
        drawChart();
      }
    });
  }
});
getTime();

function handleChartTime(time) {
  for (let i = 0; i < arrayHis.length; i++) {
    var day = arrayHis[i].date.slice(3, 5);
    var month = arrayHis[i].date.slice(0, 2);
    var year = arrayHis[i].date.slice(-4);
    if (arrayHis[i].details.includes("Adidas")) {
      if (Number(dayNow) - Number(day) <= 7 && time == "week") {
        console.log(arrayHis[i]);

        countAdidas += Number(arrayHis[i].details.slice(-1));
        totalMoneyAdidas +=
          Number(arrayHis[i].details.slice(-1)) * Number(arrayHis[i].cost);
      } else if (Number(monthNow) - Number(month) <= 1 && time == "month") {
        console.log(arrayHis[i]);
        countAdidas += Number(arrayHis[i].details.slice(-1));
        totalMoneyAdidas +=
          Number(arrayHis[i].details.slice(-1)) * Number(arrayHis[i].cost);
      } else if (Number(yearNow) - Number(year) <= 1 && time == "year") {
        console.log(arrayHis[i]);
        countAdidas += Number(arrayHis[i].details.slice(-1));
        totalMoneyAdidas +=
          Number(arrayHis[i].details.slice(-1)) * Number(arrayHis[i].cost);
        console.log("count adidas:", countAdidas);
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
    sumAll = countAdidas + countGucci;
    totalMoney = totalMoneyAdidas + totalMoneyGucci;
  }
}
function getTime() {
  handleChartTime("all");
  check = "all";
  chart.innerHTML = `<canvas id="myChart" style="width: 100%; max-width: 600px"></canvas>`;
  innerStatistics(sumAll, countAdidas, countGucci, totalMoney);
  drawChart();
  if (check == "all") {
    timeOption.addEventListener("change", () => {
      countAdidas = 0;
      countGucci = 0;
      totalMoneyAdidas = 0;
      totalMoneyGucci = 0;
      totalMoney = 0;
      sumAll = 0;
      chart.innerHTML = `<canvas id="myChart" style="width: 100%; max-width: 600px"></canvas>`;
      if (timeOption.value == "week" && check == "all") {
        handleChartTime(timeOption.value);
        innerStatistics(sumAll, countAdidas, countGucci, totalMoney);
        drawChart();
      } else if (timeOption.value == "month" && check == "all") {
        handleChartTime(timeOption.value);
        innerStatistics(sumAll, countAdidas, countGucci, totalMoney);
        drawChart();
      } else if (timeOption.value == "year" && check == "all") {
        handleChartTime(timeOption.value);
        innerStatistics(sumAll, countAdidas, countGucci, totalMoney);
        drawChart();
      } else if (timeOption.value == "all" && check == "all") {
        handleChartTime(timeOption.value);
        innerStatistics(sumAll, countAdidas, countGucci, totalMoney);
        drawChart();
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
  var yValues = [sumAll, countAdidas, 0];
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
  var yValues = [sumAll, countGucci, 0];
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
      ).innerText = `Please enter Product's ${inputElement[i].id}`;
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
  console.log(arrImg);
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

  for (let i = 0; i < ProductArray.length; i++) {
    if (ProductArray[i].id == deletePro)
      if (
        confirm(
          "Are you sure you want to delete this product? This action cannot be undone."
        )
      )
        ProductArray.splice(i, 1);
  }
  createProduct(ProductArray);
  showProductList(ProductArray);
}

var temp;
var indexArr;
//Sửa sản phẩm
function editProduct(index) {
  // cái index này là lấy được cái id của cái sản phẩm đó, id chứ ko phải ví trí của nó trong mảng
  let ProductArray = JSON.parse(localStorage.getItem("product"));

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
    }
  }
}

changeImg();
function updateProduct() {
  let ProductArray = JSON.parse(localStorage.getItem("product"));

  // gán giá trị trong mảng đó cho giá trị sửa
  ProductArray[indexArr] = {
    id: document.getElementById("id").value,
    title: document.getElementById("name").value,
    span: document.getElementById("brand").value,
    price: document.getElementById("price").value,

    image: localStorage.getItem("recent-img"),
  };
  createProduct(ProductArray);
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
              <td> 
                  <button class = "btn-deactivate" onclick = "deleteUser(${index})"><i class="fa-solid fa-user-slash"></i></button> 
              </td>
          </tr>
      </tbody>`;
  }
  document.getElementById("UserList").innerHTML = table;
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
