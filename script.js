window.onload = () => {
  const btnnav = document.querySelector(".btnnav");
  const ul = document.querySelector("ul");
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const back = document.querySelector(".back");
  const backform = document.querySelector(".form-feedback");
  const form = document.querySelector("form");
  const exist = document.querySelector(".exit-form");
  const btnfeedback = document.querySelector(".feedback");
  const email = document.querySelector("#email");
  const boxEmail = document.querySelector(".box-email");
  const btnSubmit = document.querySelector(".btn-submit");
  const customAlert = document.querySelector(".custom-alert");
  btnnav.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

  nav.addEventListener("mouseleave", () => {
    ul.classList.remove("show");
  });

  window.onscroll = () => {
    if (body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      header.style.background = "#fff";
      header.style.boxShadow = "0px -1px 3px 1px #000";
      back.style.opacity = "1";
    } else {
      header.style.background = "none";
      header.style.boxShadow = "none";
      back.style.opacity = "0";
    }
  };
  back.addEventListener("click", () => {
    body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  btnfeedback.addEventListener("click", () => {
    backform.style.display = "flex";
  });
  form.addEventListener("touchmove", () => {
    backform.style.display = "none";
  });
  exist.addEventListener("click", () => {
    backform.style.display = "none";
  });
  btnSubmit.addEventListener("click", () => {
    function removeClass() {
      customAlert.classList.remove("show");
      email.value = "";
      message.value = "";
      backform.style.display = "none";
    }
    setInterval(
      () => {
        customAlert.classList.add("show");
      },
      200,
      removeClass()
    );
  });
};
