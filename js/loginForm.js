// 이미지 슬라이드 구현
$("#slide > div:gt(0)").hide();

setInterval(function () {
  $("#slide > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#slide");
}, 3000);

// sign up클릭시 회원가입 폼으로 전환
let loginForm = document.querySelector("#login-Form"); //로그인폼

$(".sign-up").on("click", () => {
  loginForm.classList.add("hidden");

  $("#sign-up-Form").css({
    display: "block",
  });
});

// back버튼 누르면 로그인창으로
$("#button3").on("click", () => {
  loginForm.classList.remove("hidden");

  $("#sign-up-Form").css({
    display: "none",
  });
});

//영상구현
$(".movie").on("click", () => {
  $("#slide").css({
    visibility: "hidden",
  });
  $(".movie").css({
    visibility: "hidden",
  });
  $("#container").css({
    "background-image": "url(../img/배틀필드영상.gif)",
    // 배필영상
  });
});

// 링크 이동
$("#button2").on("click", () => {
  window.location.href = "../html/mindex.html";
});
