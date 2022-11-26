const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var login = $(".option-login");
var validation1 = $("#form-1");
var validation2 = $("#form-2");
var logout = $(".option-logout");
var container = $(".container");
var checkSingup = $(".form-submit-1");
var checkSingin = $(".form-submit-2");
var toastSuccess = $(".message-notification");
var btnclose = $(".close-val1");
var btnclose2 = $(".close-val2");
var container = $(".container");
var modalContainer = $(".modal-container");
var modalContainer2 = $(".modal-container2");
var toastFail = $(".message-notification-fail");
var cartMobile = $(".cart-mobile");
var myOrderMobile = $(".my-order-mobile");
var logoutMobile = $(".logout-mobile");
var signInOut = $(".signin-singout");
var userAvatar = $(".user-avatar");
var userSingOut = $(".option-user-signOut");
var avatarMoblie = $(".avt-menu-mobile");
var btnHome = $(".btn-up");
let perPage = 8;
let currentPages = 1;
let start = 0;
let end = perPage;
var btn2 = $(".btn-2");
var btnNext = $(".btn-next");
var btnPrev = $(".btn-prev");
var btnNext1 = $(".btn-next1");
var btnPrev1 = $(".btn-prev1");
var btnNext2 = $(".btn-next2");
var btnPrev2 = $(".btn-prev2");
var btnNext3 = $(".btn-next3");
var btnPrev3 = $(".btn-prev3");
var products = JSON.parse(localStorage.getItem("product"));
const totalPage = Math.ceil(products.length / perPage);
var productGucci = countProductGucci();
var productAdidas = countProductAdidas();
const totalPageGucci = Math.ceil(productGucci.length / perPage);
const totalPageAdidas = Math.ceil(productAdidas.length / perPage);

var allProduct = $(".all-product");
var gucciProduct = $(".gucci-product");
var adidasProduct = $(".adidas-product");
var procontainer = $("#product1 .pro-container");
var pagingItem = $(".paging-item");
var containerAllProduct = $(".container-product-all");
var numberPage = $(".number-page");
var pagingItem1 = $(".paging-item1");
var pagingItem2 = $(".paging-item2");
var pagingItem3 = $(".paging-item3");
var idPerson;
var checkSinginBuyPro = false;
function Validator(options) {
  function geParent(elements, selector) {
    while (elements.parentElement) {
      if (elements.parentElement.matches(selector)) {
        return elements.parentElement;
      }
      elements = elements.parentElement;
    }
  }

  var selectorRule = {};
  //hàm thực hiện validate
  function validate(inputElement, rule) {
    var errorElement = geParent(
      inputElement,
      options.formGroupSelector
    ).querySelector(options.errorSelector);

    var errorMessage;

    //lấy ra các rule của các selector
    var rules = selectorRule[rule.selector];

    //lập qua từng rules và kiểm tra
    //Nếu có lỗi thì dừng việc kiểm tra
    for (var i = 0; i < rules.length; i++) {
      switch (inputElement.type) {
        case "radio":
        case "checkbox":
          errorMessage = rules[i](
            formElement.querySelector(rule.selector + ":checked")
          );
          break;
        default:
          errorMessage = rules[i](inputElement.value);
      }

      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      geParent(inputElement, options.formGroupSelector).classList.add(
        "invalid"
      );
    } else {
      errorElement.innerText = "";
      geParent(inputElement, options.formGroupSelector).classList.remove(
        "invalid"
      );
    }
    return !!errorMessage;
  }
  // lấy được form elements
  var formElement = $(options.form);

  if (formElement) {
    //Lắng nghe sự kiện onsubmit

    formElement.onsubmit = function (e) {
      e.preventDefault();

      var isFormValid = true;

      // Lặp qua từng rules và validate
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isInValid = validate(inputElement, rule);
        if (isInValid) {
          isFormValid = false;
          ischeck = false;
        }
      });

      if (isFormValid) {
        //Trường hợp submit với js

        if (typeof options.onSubmit === "function") {
          var enableInputs = formElement.querySelectorAll("[name]");

          var formValues = Array.from(enableInputs).reduce(
            function (values, input) {
              switch (input.type) {
                case "radio":
                  values[input.name] = formElement.querySelector(
                    'input[name="' + input.name + '"]:checked'
                  ).value;
                case "checkbox":
                  if (!input.matches(":checked")) {
                    values[input.name] = "";
                    return values;
                  }
                  if (!Array.isArray(values[input.name])) {
                    values[input.name] = [];
                  }
                  values[input.name].push(input.value);
                  break;
                case "file":
                  values[input.name] = input.files;
                  break;
                default:
                  values[input.name] = input.value;
              }

              return values;
            },

            {}
          );
          if (options.form === "#form-1") {
            var arrayInfos = JSON.parse(localStorage.getItem("infor"));
            var check = false;
            arrayInfos.forEach((e) => {
              if (e.email === `${formValues.email}`) {
                alert("Email da ton tai!!");
                check = true;
              }
            });
            if (check === false) {
              idPerson = arrayInfos.length + 1;
              arrayInfos.push({
                id: arrayInfos.length + 1,
                fullname: formValues.fullname,
                email: formValues.email,
                password: formValues.password,
              });
              console.log(arrayInfos.length + 1);
              if (flag === false) {
              }
              validation1.classList.remove("active");
              toastSuccess.classList.add("active");
              signInOut.classList.add("active");
              userAvatar.classList.add("active");
              setAccountLocalStorage(arrayInfos);
              checkSinginBuyPro = true;
            }
          }
          options.onSubmit(arrayInfo);

          if (options.form === "#form-2") {
            if (
              formValues.email == "admin@gmail.com" &&
              formValues.password == "admin123"
            ) {
              location.href = "admin.html";
            } else {
              var flag = true;
              var arrayInfos = JSON.parse(localStorage.getItem("infor"));
              arrayInfos.forEach((e) => {
                if (
                  e.email === `${formValues.email}` &&
                  e.password === `${formValues.password}`
                ) {
                  validation2.classList.remove("active");
                  $(".message-text").innerHTML = "Login Successfully! ";
                  toastSuccess.classList.add("active");
                  signInOut.classList.add("active");
                  userAvatar.classList.add("active");
                  avatarMoblie.classList.add("active");
                  myOrderMobile.classList.add("active");
                  logoutMobile.classList.add("active");
                  flag = false;
                  checkSinginBuyPro = true;

                  idPerson = e.id;

                  var arrayHis = JSON.parse(localStorage.getItem("hisOrder"));

                  for (var i = 0; i < arrayHis.length; i++) {
                    if (arrayHis[i].idPerson == e.id) {
                      hisOrderUser(
                        arrayHis[i].id,
                        arrayHis[i].size,
                        arrayHis[i].details,
                        arrayHis[i].date,
                        arrayHis[i].cost,
                        arrayHis[i].status
                      );
                    }
                  }
                  var moneyBill = $$(".money-bill-item");
                  sum = 0;
                  var toltalAllMoney = $(".total-all-money");
                  for (i = 0; i < moneyBill.length; i++) {
                    sum = Number(sum) + Number(moneyBill[i].innerText);
                  }
                  toltalAllMoney.innerHTML = `$` + sum + `.00`;
                }
              });
              if (flag == true) {
                toastFail.classList.add("active");
              }
            }
          }
        }
        //submit với hành vi mặc định
        else {
          formElement.submit();
        }
      }
    };

    //Lặp qua mỗi rule xử lí sự kiện (blur click....)
    options.rules.forEach(function (rule) {
      //Lưu lại các  rules cho mỗi input
      if (Array.isArray(selectorRule[rule.selector])) {
        selectorRule[rule.selector].push(rule.test);
      } else {
        selectorRule[rule.selector] = [rule.test];
      }

      var inputElements = formElement.querySelectorAll(rule.selector);
      Array.from(inputElements).forEach(function (inputElement) {
        //Xử lí trường hợp blur ra khỏi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
        // Xử lí mỗi khi người dùng nhập vào input
        inputElement.oninput = function () {
          var errorElement = geParent(
            inputElement,
            options.formGroupSelector
          ).querySelector(options.errorSelector);
          errorElement.innerText = "";
          geParent(inputElement, options.formGroupSelector).classList.remove(
            "invalid"
          );
        };
      });
    });
  }
}

//định nghĩa rules
//Nguyên tắc rules
//1. khi có lỗi : => trả về message
//2. Khi hợp lệ: => ko trả về gì hết (undefined)
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

      return regex.test(value)
        ? undefined
        : message || "Trường này phải là email";
    },
  };
};
Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : message || `Vui lòng nhập tối thiếu ${min} ký tự`;
    },
  };
};

Validator.isConfirmed = function (selector, getconfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getconfirmValue()
        ? undefined
        : message || "Giá trị nhập vào không chính xác";
    },
  };
};
// JS header
var home = $(".home");
var shop = $(".shop");
var blog = $(".blog");
var about = $(".about");
var contact = $(".contact");
if (screen.width > 1023) {
  window.onscroll = function (e) {
    if (window.scrollY >= 942) {
      home.classList.remove("active");
      shop.classList.add("active");
    }
    if (window.scrollY < 942) {
      shop.classList.remove("active");
      home.classList.add("active");
    }
    if (window.scrollY >= 2850) {
      home.classList.remove("active");
      shop.classList.remove("active");
      blog.classList.add("active");
    }
    if (window.scrollY < 2850 && window.scrollY >= 942) {
      home.classList.remove("active");
      shop.classList.add("active");
      blog.classList.remove("active");
    }
    if (window.scrollY >= 4500) {
      home.classList.remove("active");
      shop.classList.remove("active");
      blog.classList.remove("active");
      about.classList.add("active");
    }
    if (window.scrollY < 4500 && window.scrollY > 2850) {
      home.classList.remove("active");
      shop.classList.remove("active");
      blog.classList.add("active");
      about.classList.remove("active");
    }
    if (window.scrollY >= 5500) {
      home.classList.remove("active");
      shop.classList.remove("active");
      blog.classList.remove("active");
      about.classList.remove("active");
      contact.classList.add("active");
    }
    if (window.scrollY < 5500 && window.scrollY > 4500) {
      home.classList.remove("active");
      shop.classList.remove("active");
      blog.classList.remove("active");
      about.classList.add("active");
      contact.classList.remove("active");
    }
  };
} else if (screen.width > 740 && screen.width < 1023) {
  window.onscroll = function (e) {
    if (window.scrollY >= 1420) {
      home.classList.remove("active");
      shop.classList.add("active");
    }
    if (window.scrollY < 1420) {
      home.classList.add("active");
      shop.classList.remove("active");
    }
    if (window.scrollY > 4801) {
      home.classList.remove("active");
      shop.classList.remove("active");
      blog.classList.add("active");
    }
    if (window.scrollY < 4801 && window.scrollY > 1441) {
      home.classList.remove("active");
      shop.classList.add("active");
      blog.classList.remove("active");
    }
    if (window.scrollY >= 6292) {
      home.classList.remove("active");
      shop.classList.remove("active");
      blog.classList.remove("active");
      about.classList.add("active");
    }
    if (window.scrollY < 6292 && window.scrollY > 3183) {
      home.classList.remove("active");
      shop.classList.remove("active");
      blog.classList.add("active");
      about.classList.remove("active");
    }
    if (window.scrollY > 6985) {
      home.classList.remove("active");
      shop.classList.remove("active");
      blog.classList.remove("active");
      about.classList.remove("active");
      contact.classList.add("active");
    }
    if (window.scrollY < 6985 && window.scrollY > 6292) {
      home.classList.remove("active");
      shop.classList.remove("active");
      blog.classList.remove("active");
      about.classList.add("active");
      contact.classList.remove("active");
    }
  };
}
btnHome.addEventListener("click", () => {
  shop.classList.remove("active");
  home.classList.add("active");
});
if (shop) {
  shop.addEventListener("click", () => {
    home.classList.remove("active");
    shop.classList.add("active");
  });
}
if (home) {
  home.addEventListener("click", () => {
    shop.classList.remove("active");
    home.classList.add("active");
  });
}

// js menu

if (login) {
  login.addEventListener("click", () => {
    validation1.classList.add("active");
    validation2.classList.remove("active");
    container.classList.add("active");
  });
}
if (logout) {
  logout.addEventListener("click", () => {
    validation2.classList.add("active");
    validation1.classList.remove("active");
    container.classList.add("active");
  });
}

if (btnclose) {
  btnclose.addEventListener("click", () => {
    container.classList.remove("active");
    validation1.classList.remove("active");
    toastSuccess.classList.remove("active");
  });
}
if (btnclose2) {
  btnclose2.addEventListener("click", () => {
    container.classList.remove("active");
    // toastSuccess.classList.add("active");
    validation2.classList.remove("active");
    toastFail.classList.remove("active");
  });
}
if (container) {
  container.addEventListener("click", () => {
    validation1.classList.remove("active");
    container.classList.remove("active");
    productDetail.classList.remove("active");
  });
}
modalContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});

if (userSingOut) {
  userSingOut.addEventListener("click", () => {
    signInOut.classList.remove("active");
    userAvatar.classList.remove("active");

    window.location.reload();
  });
}
if (logoutMobile) {
  logoutMobile.addEventListener("click", () => {
    window.location.reload();
    signInOut.classList.remove("active");
    userAvatar.classList.remove("active");
  });
}
if (container) {
  container.addEventListener("click", () => {
    validation1.classList.remove("active");
    container.classList.remove("active");
    validation2.classList.remove("active");
    toastSuccess.classList.remove("active");
    toastFail.classList.remove("active");
  });
}
modalContainer2.addEventListener("click", (e) => {
  e.stopPropagation();
});

// // Sidebar
const body = $("body"),
  sidebar = body.querySelector("nav"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});
var btnBars = $(".btn-bars");
var btnClose = $(".close-btn");

var sidaebarEvent = $(".sidebar-event");
var containerContent = $(".container-content");

if (btnBars) {
  btnBars.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    sidebar.classList.remove("close");
  });
}
btnClose.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
containerContent.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
sidaebarEvent.addEventListener("click", (e) => {
  e.stopPropagation();
});

//Product

function getCurentPage(currentPages) {
  start = (currentPages - 1) * perPage;
  end = currentPages * perPage;
}

function countProductGucci() {
  var productGucci = [];
  var products = JSON.parse(localStorage.getItem("product"));
  products.map((item, index) => {
    if (item.span == "Gucci") {
      productGucci.push(products[index]);
    }
  });
  return productGucci;
}
function countProductAdidas() {
  var productAdidas = [];
  var products = JSON.parse(localStorage.getItem("product"));
  products.map((item, index) => {
    if (item.span == "Adidas") {
      productAdidas.push(products[index]);
    }
  });
  return productAdidas;
}

function renderProduct(start, end) {
  html = "";
  var products = JSON.parse(localStorage.getItem("product"));

  const content = products.map((item, index) => {
    if (index >= start && index < end) {
      html += `<div class="pro">`;
      html += `<img src=` + item.image + `>`;
      html += `<div class="des">`;
      html += `<span>` + item.span + `</span>`;
      html += `<h5>` + item.title + `</h5>`;
      html += `<div class="star">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
  </div>`;
      html += `<h4>$` + item.price + `.00</h4>`;
      html += `</div>`;
      html += `
    <i class="fa-solid fa-heart cart"></i>
  `;
      html += `</div>`;
    }
    return html;
  });

  $(".pro-container").innerHTML = html;
}
function renderProductGucci(start, end) {
  html = "";

  const content = productGucci.map((item, index) => {
    if (index >= start && index < end) {
      html += `<div class="pro">`;
      html += `<img src=` + item.image + `>`;
      html += `<div class="des">`;
      html += `<span>` + item.span + `</span>`;
      html += `<h5>` + item.title + `</h5>`;
      html += `<div class="star">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
  </div>`;
      html += `<h4>$` + item.price + `.00</h4>`;
      html += `</div>`;
      html += `
    <i class="fa-solid fa-heart cart"></i>
  `;
      html += `</div>`;
    }
    return html;
  });

  $(".pro-container-gucci").innerHTML = html;
}
function renderProducAdidas() {
  html = "";

  const content = productAdidas.map((item, index) => {
    if (index >= start && index < end) {
      html += `<div class="pro">`;
      html += `<img src=` + item.image + `>`;
      html += `<div class="des">`;
      html += `<span>` + item.span + `</span>`;
      html += `<h5>` + item.title + `</h5>`;
      html += `<div class="star">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
  </div>`;
      html += `<h4>$` + item.price + `.00</h4>`;
      html += `</div>`;
      html += `
    <i class="fa-solid fa-heart cart"></i>
  `;
      html += `</div>`;
    }
    return html;
  });

  $(".pro-container-adidas").innerHTML = html;
}
function renderProductFilter(start, end) {
  html = "";

  const content = productFilter.map((item, index) => {
    if (index >= start && index < end) {
      html += `<div class="pro">`;
      html += `<img src=` + item.image + `>`;
      html += `<div class="des">`;
      html += `<span>` + item.span + `</span>`;
      html += `<h5>` + item.title + `</h5>`;
      html += `<div class="star">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
  </div>`;
      html += `<h4>$` + item.price + `.00</h4>`;
      html += `</div>`;
      html += `
    <i class="fa-solid fa-heart cart"></i>
  `;
      html += `</div>`;
    }
    return html;
  });

  $(".pro-container-filter").innerHTML = html;
}
function renderListPageGucci(totalPageGucci) {
  let html = "";
  html += `<button class="active">${1}</button>`;
  for (let i = 2; i <= totalPageGucci; i++) {
    html += `<button>${i}</button>`;
  }

  $(".number-page1").innerHTML = html;
}
function renderListPageAdidas(totalPageAdidas) {
  let html = "";
  html += `<button class="active">${1}</button>`;
  for (let i = 2; i <= totalPageAdidas; i++) {
    html += `<button>${i}</button>`;
  }

  $(".number-page2").innerHTML = html;
}
function renderListPageFilter(totalPageFilter) {
  let html = "";
  html += `<button class="active">${1}</button>`;
  for (let i = 2; i <= totalPageFilter; i++) {
    html += `<button>${i}</button>`;
  }

  $(".number-page3").innerHTML = html;
}
function gucciProduct() {
  renderProductGucci();
  renderListPageGucci(totalPageGucci);
  btnChangepageGucci(btnNext1, btnPrev1, totalPageGucci);
  changePageGucci();
}
function adidasProduct() {
  renderProducAdidas();
  renderListPageAdidas(totalPageAdidas);
  btnChangepageAdidas(btnNext2, btnPrev2, totalPageAdidas);
  ChangepageAdidas();
}

renderProduct(start, end);
// getGucciProduct();
renderListPage(totalPage);
btnChangepage(btnNext, btnPrev, totalPage);

var ProductList = $$("#product1 .pro");
function changePrice(i) {
  var pricePro = $(".price-pro-detail");
  var inputChange = $(".total-cartshop input");
  inputChange.addEventListener("change", () => {
    const val = $(".total-cartshop input").value;
    var totalPrice = val * products[i].price;
    pricePro.innerHTML = `$${totalPrice}.00`;
  });
  ready();
}

function getIndexProduct(index) {
  var detailProduct = JSON.parse(localStorage.getItem("detailProduct"));
  html = "";
  html +=
    `<div class="detail-pro">
      
  <section id="prodetails" class="section-p1">
   <div class="single-pro-image">
     <div class="close-detail"><i class="fa-solid fa-xmark btn-close-detail
       "></i></div>
       <img class="shop-item-img" src="` +
    detailProduct[index].img +
    `" width="100%" height="300px" id="MainImg" alt="">
       <div class="small-img-group">
           <div class="small-img-col">`;
  html +=
    `<img src="` +
    detailProduct[index].imgsmall1 +
    `" width="100%" height="87%" class ="small-img" alt="">`;

  html += `
           </div>`;

  html += `
           <div class="small-img-col">`;
  html +=
    `<img src="` +
    detailProduct[index].imgsmall2 +
    `" width="100%" height="87%" class ="small-img" alt="">`;
  html += `</div>
    <div class="small-img-col">`;
  html +=
    `<img src="` +
    detailProduct[index].imgsmall3 +
    `" width="100%" height="87%" class ="small-img" alt="">`;
  html += `</div>
    <div class="small-img-col">`;
  html +=
    `<img src="` +
    detailProduct[index].imgsmall4 +
    `" width="100%" height="87%" class ="small-img" alt="">`;
  html += ` </div>`;
  html += ` </div>`;
  html += ` </div>`;
  html += `     
   <div class="single-pro-details">`;
  html += `<h6 class ="shop-brand">` + detailProduct[index].title + `</h6> `;
  html +=
    `<h4 class ="shop-item-title">` + detailProduct[index].header + `</h4>`;
  html +=
    `<h2 class="price-pro-detail"> $` + products[index].price + `.00</h2>`;
  html += ` <select class="size-product-detail" name="" id="">
        <option value="">Select size</option>
        <option value="">XL</option>
        <option value="">XXL</option>
        <option value="">Small</option>
        <option value="">Large</option>
    </select>
    <div class="total-cartshop"> <input type="number" value="1" min="1" style ="display:none">
      <button class="normal shop-item-button">Add To Cart</button></div>

    <h4>Product Details</h4>
    <div class="details-product">`;
  html += `<span>` + detailProduct[index].detail + `</span>`;

  html += `</div>`;
  html += `</div>
  </section>

   </div>
`;
  $(".detail-container").innerHTML = html;
  changerSmallProduct();
  closeDetail();
  ready();
}
var containerDetail = $(".container-detail");

function innerDetail() {
  var detailProducts = JSON.parse(localStorage.getItem("detailProduct"));
  const currentProduct = $$("#product1 .pro");
  var value;
  var filterInput = $(".search-text");
  var filterValue = filterInput.value.toUpperCase();
  for (let i = 0; i < currentProduct.length; i++) {
    currentProduct[i].addEventListener("click", () => {
      if (filterValue != "") {
        if (currentPages < 2) {
          for (var j = 0; j < detailProducts.length; j++) {
            if (productFilter[i].id == detailProducts[j].id) {
              value = j;
            }
          }
          getIndexProduct(value);
          changePrice(i);
          productDetail.classList.add("active");
          containerDetail.classList.add("active");
          var addToCartButtons = $$(".shop-item-button");
          var button = addToCartButtons[0];
          button.addEventListener("click", addToCartClicked);
        } else if (currentPages >= 2) {
          for (var j = 0; j < detailProducts.length; j++) {
            if (
              productFilter[i + perPage * (currentPages - 1)].id ==
              detailProducts[j].id
            ) {
              value = j;
            }
          }
          getIndexProduct(value);
          changerSmallProduct();
          changePrice(i);
          closeDetail();
          productDetail.classList.add("active");
          containerDetail.classList.add("active");
          var addToCartButtons = $$(".shop-item-button");
          var button = addToCartButtons[0];
          button.addEventListener("click", addToCartClicked);
        }
      } else if (checkAdidas == false) {
        for (var j = 0; j < detailProducts.length; j++) {
          if (productAdidas[i].id == detailProducts[j].id) {
            value = j;
          }
        }
        getIndexProduct(value);

        changePrice(i);
        productDetail.classList.add("active");
        containerDetail.classList.add("active");
        var addToCartButtons = $$(".shop-item-button");
        var button = addToCartButtons[0];
        button.addEventListener("click", addToCartClicked);
        if (currentPages >= 2) {
          for (var j = 0; j < detailProducts.length; j++) {
            if (
              productAdidas[i + perPage * (currentPages - 1)].id ==
              detailProducts[j].id
            ) {
              value = j;
            }
          }
          getIndexProduct(value);
          changerSmallProduct();
          changePrice(i);
          closeDetail();
        }
      } else if (checkGucci == false) {
        for (var j = 0; j < detailProducts.length; j++) {
          if (productGucci[i].id == detailProducts[j].id) {
            value = j;
          }
        }
        getIndexProduct(value);
        changePrice(i);
        productDetail.classList.add("active");
        containerDetail.classList.add("active");
        var addToCartButtons = $$(".shop-item-button");
        var button = addToCartButtons[0];
        button.addEventListener("click", addToCartClicked);
        if (currentPages >= 2) {
          for (var j = 0; j < detailProducts.length; j++) {
            if (
              productGucci[i + perPage * (currentPages - 1)].id ==
              detailProducts[j].id
            ) {
              value = j;
            }
          }
          getIndexProduct(value);
          changerSmallProduct();
          changePrice(i);
          closeDetail();
        }
      } else {
        for (var j = 0; j < detailProducts.length; j++) {
          if (products[i].id == detailProducts[j].id) {
            value = j;
          }
        }
        getIndexProduct(value);
        changePrice(i);
        productDetail.classList.add("active");
        containerDetail.classList.add("active");
        var addToCartButtons = $$(".shop-item-button");
        var button = addToCartButtons[0];
        button.addEventListener("click", addToCartClicked);
        if (currentPages >= 2) {
          for (var j = 0; j < detailProducts.length; j++) {
            if (
              products[i + perPage * (currentPages - 1)].id ==
              detailProducts[j].id
            ) {
              value = j;
            }
          }
          console.log("value nè", value);
          getIndexProduct(value);
          changerSmallProduct();
          changePrice(i);
          closeDetail();
        }
      }
    });
  }
}

innerDetail();
function renderListPage(totalPage) {
  let html = "";
  html += `<button class="active">${1}</button>`;
  for (let i = 2; i <= totalPage; i++) {
    html += `<button>${i}</button>`;
  }

  $(".number-page").innerHTML = html;
}
function changePage() {
  const currentPage = $$(".number-page button");

  for (let i = 0; i < currentPage.length; i++) {
    currentPage[i].addEventListener("click", () => {
      const value = i + 1;
      currentPages = value;
      getCurentPage(currentPages);
      renderProduct(start, end);
      innerDetail();
      // changePrice(i);
      const btnActive = $("button.active");
      btnActive.classList.remove("active");
      currentPage[i].classList.add("active");
    });
  }
}
function changePageGucci() {
  const currentPage = $$(".number-page1 button");
  currentPages = 1;

  for (let i = 0; i < currentPage.length; i++) {
    currentPage[i].addEventListener("click", () => {
      const value = i + 1;
      currentPages = value;
      getCurentPage(currentPages);
      renderProductGucci(start, end);
      innerDetail();
      // changePrice(i);
      const btnActive = $(".number-page1 button.active");

      btnActive.classList.remove("active");
      currentPage[i].classList.add("active");
    });
  }
}
function changePageFilter() {
  const currentPage = $$(".number-page3 button");
  currentPages = 1;
  for (let i = 0; i < currentPage.length; i++) {
    currentPage[i].addEventListener("click", () => {
      const value = i + 1;
      currentPages = value;

      getCurentPage(currentPages);
      renderProductFilter(start, end);
      innerDetail();
      // changePrice(i);
      const btnActive = $(".number-page3 button.active");

      btnActive.classList.remove("active");
      currentPage[i].classList.add("active");
    });
  }
}
function ChangepageAdidas() {
  const currentPage = $$(".number-page2 button");
  currentPages = 1;
  for (let i = 0; i < currentPage.length; i++) {
    currentPage[i].addEventListener("click", () => {
      const value = i + 1;
      currentPages = value;
      getCurentPage(currentPages);
      renderProducAdidas(start, end);
      innerDetail();
      // changePrice(i);
      const btnActive = $(".number-page2 button.active");
      btnActive.classList.remove("active");
      currentPage[i].classList.add("active");
    });
  }
}
var checkGucci = true;
gucciProduct.addEventListener("click", () => {
  checkGucci = false;
  procontainer.classList.add("remove");
  procontainer.classList.add("pro-container-gucci");
  pagingItem.classList.add("active");
  pagingItem1.classList.add("active");
  procontainer.classList.remove("remove");
  procontainer.classList.remove("pro-container-adidas");
  pagingItem2.classList.remove("active");
  gucciProduct.classList.add("active");
  allProduct.classList.add("color");

  adidasProduct.classList.remove("active");
  start = 0;
  end = perPage;
  renderProductGucci(start, end);
  renderListPageGucci(totalPageGucci);
  btnChangepageGucci(btnNext1, btnPrev1, totalPageGucci);
  changePageGucci();
  innerDetail();
});
var checkAdidas = true;
adidasProduct.addEventListener("click", () => {
  checkAdidas = false;
  procontainer.classList.remove("remove");
  procontainer.classList.remove("pro-container-gucci");
  pagingItem.classList.remove("active");
  pagingItem1.classList.remove("active");
  procontainer.classList.add("remove");
  procontainer.classList.add("pro-container-adidas");
  pagingItem.classList.add("active");
  pagingItem2.classList.add("active");
  adidasProduct.classList.add("active");
  allProduct.classList.add("color");
  gucciProduct.classList.remove("active");
  start = 0;
  end = perPage;

  renderProducAdidas(start, end);
  renderListPageAdidas(totalPageAdidas);

  btnChangepageAdidas(btnNext2, btnPrev2, totalPageAdidas);
  ChangepageAdidas();
  innerDetail();
});
allProduct.addEventListener("click", () => {
  checkAdidas = true;
  checkGucci = true;
  procontainer.classList.remove("remove");
  procontainer.classList.remove("pro-container-gucci");
  pagingItem.classList.add("active");
  pagingItem1.classList.remove("active");
  procontainer.classList.remove("remove");
  procontainer.classList.remove("pro-container-adidas");
  pagingItem.classList.remove("active");
  pagingItem2.classList.remove("active");
  adidasProduct.classList.remove("active");
  gucciProduct.classList.remove("active");
  allProduct.classList.add("active");
  allProduct.classList.remove("color");
  start = 0;
  end = perPage;
  renderProduct(start, end);
  renderListPage(totalPage);
  currentPages = 1;

  changePage();
  innerDetail();
});
changePage();
function btnChangepage(btnNext, btnPrev, totalPage) {
  btnNext.addEventListener("click", () => {
    currentPages++;
    if (currentPages > totalPage) {
      currentPages = totalPage;
    } else {
      const btnActive = $(".number-page button.active");
      btnActive.classList.remove("active");
      let nextBtnActive = btnActive.nextElementSibling;
      nextBtnActive.classList.add("active");
    }
    getCurentPage(currentPages);
    renderProduct(start, end);
    innerDetail();
  });
  btnPrev.addEventListener("click", () => {
    currentPages--;
    if (currentPages < 1) {
      currentPages = 1;
    } else {
      const btnActive = $("button.active");
      btnActive.classList.remove("active");
      let prevBtnActive = btnActive.previousElementSibling;
      if (prevBtnActive) {
        prevBtnActive.classList.add("active");
      }
    }
    getCurentPage(currentPages);
    renderProduct(start, end);
    innerDetail();
  });
}

function btnChangepageGucci(btnNext, btnPrev, totalPage) {
  btnNext.addEventListener("click", () => {
    currentPages++;
    if (currentPages > totalPage) {
      currentPages = totalPage;
    } else {
      const btnActive = $(".number-page1 button.active");

      btnActive.classList.remove("active");
      let nextBtnActive = btnActive.nextElementSibling;
      nextBtnActive.classList.add("active");
    }
    getCurentPage(currentPages);
    renderProductGucci(start, end);
    innerDetail();
  });
  btnPrev.addEventListener("click", () => {
    currentPages--;

    if (currentPages < 1) {
      currentPages = 1;
    } else {
      const btnActive = $(".number-page1 button.active");
      btnActive.classList.remove("active");
      let prevBtnActive = btnActive.previousElementSibling;
      if (prevBtnActive) {
        prevBtnActive.classList.add("active");
      }
    }

    getCurentPage(currentPages);
    renderProductGucci(start, end);
    innerDetail();
  });
}
function btnChangepageFilter(btnNext, btnPrev, totalPage) {
  btnNext.addEventListener("click", () => {
    currentPages++;
    console.log("cur", currentPages);
    console.log("toltal", totalPage);
    if (currentPages > totalPage) {
      currentPages = totalPage;
    } else {
      const btnActive = $(".number-page3 button.active");
      btnActive.classList.remove("active");
      let nextBtnActive = btnActive.nextElementSibling;
      nextBtnActive.classList.add("active");
    }
    getCurentPage(currentPages);
    renderProductFilter(start, end);
    innerDetail();
  });
  btnPrev.addEventListener("click", () => {
    currentPages--;

    if (currentPages < 1) {
      currentPages = 1;
    } else {
      const btnActive = $(".number-page3 button.active");
      btnActive.classList.remove("active");
      let prevBtnActive = btnActive.previousElementSibling;
      if (prevBtnActive) {
        prevBtnActive.classList.add("active");
      }
    }
    console.log("prev", currentPages);
    getCurentPage(currentPages);
    renderProductFilter(start, end);
    innerDetail();
  });
}
function btnChangepageAdidas(btnNext, btnPrev, totalPage) {
  btnNext.addEventListener("click", () => {
    currentPages++;

    if (currentPages > totalPage) {
      currentPages = totalPage;
    } else {
      const btnActive = $(".number-page2 button.active");

      btnActive.classList.remove("active");
      let nextBtnActive = btnActive.nextElementSibling;
      nextBtnActive.classList.add("active");
    }
    getCurentPage(currentPages);
    renderProducAdidas(start, end);
    innerDetail();
    // changePrice(i);
  });
  btnPrev.addEventListener("click", () => {
    currentPages--;

    if (currentPages < 1) {
      currentPages = 1;
    } else {
      const btnActive = $(".number-page2 button.active");
      btnActive.classList.remove("active");
      let prevBtnActive = btnActive.previousElementSibling;
      if (prevBtnActive) {
        prevBtnActive.classList.add("active");
      }
    }

    getCurentPage(currentPages);
    renderProducAdidas(start, end);
    innerDetail();
  });
}

var productDetail = $(".detail-container");

productDetail.addEventListener("click", (e) => {
  e.stopPropagation();
});
function closeDetail() {
  var btnCloseDetail = $$(".close-detail");
  for (var i = 0; i < btnCloseDetail.length; i++) {
    btnCloseDetail[i].addEventListener("click", () => {
      productDetail.classList.remove("active");
      containerDetail.classList.remove("active");
    });
  }
}

containerDetail.addEventListener("click", () => {
  containerDetail.classList.remove("active");
});

function changerSmallProduct() {
  var MainImg = document.getElementById("MainImg");
  var smallimg = document.getElementsByClassName("small-img");

  smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
  };
  smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
  };
  smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
  };
  smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
  };
}

// Shop cart
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  var removeItemShopCart = $$(".btn-close-shopcart");

  for (var i = 0; i < removeItemShopCart.length; i++) {
    var button = removeItemShopCart[i];
    button.addEventListener("click", removeCartItem);
  }
  var quantityInputs = $$(".cart-quality");

  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChange);
  }
  var addToCartButtons = $$(".shop-item-button");

  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
  document
    .querySelectorAll(".btn-purchase")[0]
    .addEventListener("click", purChaseClicked);
}
var itemsNameBuy = [];
function purChaseClicked() {
  if (checkSinginBuyPro == false) {
    alert("Please login to continue shopping");
  } else {
    alert("Thanks you for your purchase");
    var cartItems = $$(".cart-items")[0];
    var carItemNames = $$(".cart-item-title");
    var cartItemsPriceBuy = $$(".cart-price");
    var cartQualityBuy = $$(".cart-quality");
    var cartSizeBuy = $$(".cart-item-size");
    var cartRowBuy = $$(".cart-row");

    stt = 1;
    for (i = 0; i < cartRowBuy.length; i++) {
      itemsNameBuy.push({
        id: stt,
        size: `${cartSizeBuy[i].innerText}`,
        details: `${carItemNames[i].innerText}`,
        quality: `${cartQualityBuy[i].value}`,
        date: new Date().toLocaleDateString(),
        total: `${cartItemsPriceBuy[i].innerText}`,
      });
      stt++;
    }

    for (i = 0; i < itemsNameBuy.length; i++) {
      addItemToBill(
        itemsNameBuy[i].id,
        itemsNameBuy[i].size,
        itemsNameBuy[i].details,
        itemsNameBuy[i].quality,
        itemsNameBuy[i].date,
        itemsNameBuy[i].total
      );
    }
    var moneyBill = $$(".money-bill-item");
    sum = 0;
    var toltalAllMoney = $(".total-all-money");
    for (i = 0; i < moneyBill.length; i++) {
      sum = Number(sum) + Number(moneyBill[i].innerText);
    }
    toltalAllMoney.innerHTML = `$` + sum + `.00`;

    while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild);
    }
    while (itemsNameBuy.length > 0) {
      itemsNameBuy.pop();
    }
    updateCartTotal();

    var numberBill = $$(".number-bill");

    var sizeBill = $$(".size-bill");
    var detailsBill = $$(".details-bill");
    var dateBill = $$(".date-bill");
    var shippingBill = $$(".shipping-bill");
    var costBill = $$(".money-bill-item");
    var deliveryStatus = $$(".delivery-status");
    var arrayHis = JSON.parse(localStorage.getItem("hisOrder"));
    temp = 0;
    for (let i = 0; i < cartItemsPriceBuy.length; i++) {
      arrayHis.push({
        idPerson: idPerson,
        id: numberBill[numberBill.length - cartItemsPriceBuy.length + temp]
          .innerText,
        size: sizeBill[numberBill.length - cartItemsPriceBuy.length + temp]
          .innerText,
        details:
          detailsBill[numberBill.length - cartItemsPriceBuy.length + temp]
            .innerText,
        date: dateBill[numberBill.length - cartItemsPriceBuy.length + temp]
          .innerText,
        shipping:
          shippingBill[numberBill.length - cartItemsPriceBuy.length + temp]
            .innerText,
        cost: costBill[numberBill.length - cartItemsPriceBuy.length + temp]
          .innerText,
        status:
          deliveryStatus[numberBill.length - cartItemsPriceBuy.length + temp]
            .innerText,
      });
      temp++;
    }
    setHistoryOrderLocalStorage(arrayHis);
  }
}

var closeBill = $(".btn-close-bill");
closeBill.addEventListener("click", () => {
  billOrderProduct.classList.remove("active");
  containerContent.classList.remove("setheight");
  headerContainer.classList.remove("active");
});
function addToCartClicked(e) {
  var button = e.target;
  $(".cart-no-item").classList.add("active");
  $(".table-bill").classList.add("active");
  $(".cart-total-bill").classList.add("active");
  $(".container-table").classList.add("active");
  $(".container-content-no-item").classList.add("active");
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.querySelectorAll(".shop-item-title")[0].innerText;
  var price = shopItem.querySelectorAll(".price-pro-detail")[0].innerText;
  var brandShop = shopItem.querySelectorAll(".shop-brand")[0].innerText;
  var imgSrc = $$(".shop-item-img")[0].src;
  var temp = $(".size-product-detail");
  var text = temp.options[temp.selectedIndex].text;
  if (text == "Select size") {
    alert("Plese chose Size!");
  } else {
    addItemToCart(title, brandShop, price, imgSrc, text);
    updateCartTotal();
  }
}

// Bill order click
var billOrder = $(".my-order");
var billOrderProduct = $(".bill-order-product");
billOrder.addEventListener("click", () => {
  billOrderProduct.classList.add("active");
  containerContent.classList.add("setheight");
  headerContainer.classList.add("active");
});
myOrderMobile.addEventListener("click", () => {
  billOrderProduct.classList.add("active");
  containerContent.classList.add("setheight");
  headerContainer.classList.add("active");
  sidebar.classList.remove("active");
});
function addItemToBill(id, size, details, quality, date, total) {
  var cartRowBill = document.createElement("tr");
  cartRowBill.classList.add("cart-row-bill");
  var billOrders = $$(".bill-order")[0];
  var billRowContent = `
  <td class ="number-bill">${id}</td>
  <td  class="size-bill">${size}</td>
  <td class="details-bill">${details}    x ${quality}</td>
  <td class="date-bill" >${date}</td>
  <td class="shipping-bill">GiaoHangTietKiem</td>
  <td class="money-bill-item" style="color :red; font-weight:600;">${
    Number(`${total.slice(1)}`) * Number(`${quality}`)
  }.00</td>
  <td class="delivery-status">chua xu ly</td>
  `;
  cartRowBill.innerHTML = billRowContent;
  billOrders.append(cartRowBill);
}
function hisOrderUser(id, size, details, date, cost, status) {
  var cartRowBill = document.createElement("tr");
  cartRowBill.classList.add("cart-row-bill");
  var billOrders = $$(".bill-order")[0];
  var billRowContent = `
  <td class ="number-bill">${id}</td>
  <td  class="size-bill">${size}</td>
  <td class="details-bill">${details}</td>
  <td class="date-bill" >${date}</td>
  <td class="shipping-bill">GiaoHangTietKiem</td>
  <td class="money-bill-item" style="color :red; font-weight:600;">${cost}</td>
  <td class="delivery-status">${status}</td>`;
  cartRowBill.innerHTML = billRowContent;
  billOrders.append(cartRowBill);
}
function addItemToCart(title, brandShop, price, imgSrc, size) {
  var cartRow = document.createElement("tr");
  cartRow.classList.add("cart-row");
  var cartItems = $$(".cart-items")[0];
  var carItemNames = $$(".cart-item-title");

  for (var i = 0; i < carItemNames.length; i++) {
    if (carItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  alert("add success");
  var cartRowContent = `<td>
  <a class="btn-close-shopcart" href="#"><i class="far fa-times-circle "></a></i>
  </td>
  <td><img src="${imgSrc}" alt=""></td>
  <td class="cart-item-title">${title} 
  ${brandShop}</td>
  <td class="cart-price">${price}</td>
  <td ><input class="cart-quality" type="number" value="1" min="1">
  </td>
  <td class="cart-item-size">
    ${size}
  </td>`;
  cartRow.innerHTML = cartRowContent;
  cartItems.append(cartRow);
  cartRow
    .querySelectorAll(".btn-close-shopcart")[0]
    .addEventListener("click", removeCartItem);

  cartRow
    .querySelectorAll(".cart-quality")[0]
    .addEventListener("change", quantityChange);
}
function removeCartItem(e) {
  var buttonClicked = e.target;
  if (buttonClicked) {
    if (confirm("Do you want to remove product")) {
      buttonClicked.parentElement.parentElement.parentElement.remove();
      updateCartTotal();
    }
  }
}
var headerContainer = $("#header");
function quantityChange(e) {
  var input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function updateCartTotal() {
  var cartItemContainer = $$(".cart-items")[0];
  var cartRows = cartItemContainer.querySelectorAll(".cart-row");

  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.querySelectorAll(".cart-price")[0];
    var qualityElement = cartRow.querySelectorAll(".cart-quality")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = qualityElement.value;

    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  $$(".cart-total-price")[0].innerText = `$` + total;
  $$(".Last-total-price")[0].innerText = `$` + total;
}
document
  .querySelector(".close-detail.btn-close-no-item")
  .addEventListener("click", () => {
    $(".container-cart-shop").classList.remove("active");
    containerContent.classList.remove("setheight");
    headerContainer.classList.remove("active");
  });
$(".cart-shop-item").addEventListener("click", () => {
  $(".container-cart-shop").classList.add("active");
  containerContent.classList.add("setheight");
  headerContainer.classList.add("active");
});
cartMobile.addEventListener("click", () => {
  $(".container-cart-shop").classList.add("active");

  sidebar.classList.remove("active");
  containerContent.classList.add("setheight");
  headerContainer.classList.add("active");
});

//Filter product
var filterAdidas = $(".filter-adidas");
var check1 = $("#check1");
var check2 = $("#check2");
var filterGucci = $(".filter-gucci");
var valueAdidas = $(".brand-adidas");
var valueGucci = $(".brand-gucci");
var minPrice = $(".min-price");
var maxPrice = $(".max-price");
var btnSearch = $(".btn-search");
var filterInput = $(".search-text");
searchAdvanced();
filterInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    var filterValue = filterInput.value.toUpperCase();

    filterProducts(filterValue);

    if (filterValue != "") {
      start = 0;
      end = perPage;
      procontainer.classList.add("remove");
      procontainer.classList.add("pro-container-filter");
      pagingItem.classList.add("active");
      pagingItem3.classList.add("active");
      // procontainer.classList.remove("remove");
      renderProductFilter(start, end);
      const totalPageFilter = Math.ceil(productFilter.length / perPage);
      renderListPageFilter(totalPageFilter);
      console.log("hello: ", currentPages);
      changePageFilter();
      btnChangepageFilter(btnNext3, btnPrev3, totalPageFilter);
      innerDetail();
    }
  }
  filterInput.addEventListener("keyup", () => {
    {
      var filterValue = filterInput.value.toUpperCase();
      if (filterValue == "") {
        while (productFilter.length > 0) {
          productFilter.pop();
        }
        while (temp.length > 0) {
          temp.pop();
        }
        while (brandSelect.length > 0) {
          brandSelect.pop();
        }
        location.reload();
        currentPages = 1;
        start = 0;
        end = perPage;
      }
    }
  });
});

var productFilter = [];
var temp = [];
var priceMin = 0;
var priceMax = 120;
var brandSelect = [];
var brandSelectTemp = [];

function filterProducts(filterValue) {
  // pagingItem.classList.add("active");

  for (let i = 0; i < products.length; i++) {
    var span = products[i].title;
    var brand = products[i].span;
    var price = products[i].price;

    if (brandSelect.length == 0) {
      if (
        span.toUpperCase().indexOf(filterValue) > -1 &&
        minPrice.value <= price &&
        price <= maxPrice.value
      ) {
        temp.push(products[i]);
        temp.forEach((e) => {
          if (productFilter.indexOf(e) == -1) productFilter.push(e);
        });
      }
    } else if (
      span.toUpperCase().indexOf(filterValue) > -1 &&
      minPrice.value <= price &&
      price <= maxPrice.value &&
      (brand == brandSelect[0] || brand == brandSelect[1])
    ) {
      temp.push(products[i]);
      temp.forEach((e) => {
        if (productFilter.indexOf(e) == -1) productFilter.push(e);
      });
    }
    if (filterValue == "") {
      while (productFilter.length > 0) {
        productFilter.pop();
      }
    }
  }
}
function searchAdvanced() {
  minPrice.value = 10;
  minPrice.addEventListener("change", (e) => {
    var input = e.target;
    if (isNaN(input.value) || input.value <= 10) {
      input.value = 10;
    }
  });
  maxPrice.value = 1000;
  maxPrice.addEventListener("change", (e) => {
    var input = e.target;
    if (isNaN(input.value) || Number(input.value) <= Number(minPrice.value)) {
      input.value = Number(minPrice.value) + 10;
    }
  });
  filterInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      if (check1.checked == true) {
        console.log(valueAdidas.innerText);
        brandSelectTemp.push(valueAdidas.innerText);
      }
      if (check2.checked == true) {
        console.log(valueGucci.innerText);
        brandSelectTemp.push(valueGucci.innerText);
      }
      brandSelectTemp.forEach((e) => {
        if (brandSelect.indexOf(e) == -1) brandSelect.push(e);
      });

      while (brandSelectTemp.length > 0) {
        brandSelectTemp.pop();
      }
    }
  });
}
var filterAdvance = $(".filter-advanced");
var sectionP1 = $("#product1.section-p1");
btnSearch.addEventListener("click", () => {
  var product = $$("#product1 .pro");
  for (i = 0; i < product.length; i++) {
    product[i].classList.toggle("active");
  }
  filterAdvance.classList.toggle("active");

  sectionP1.classList.toggle("active");
});
