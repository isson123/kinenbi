$(function () {
  //カーソル要素の指定
  let cursor = $("#cursor");
  //ちょっと遅れてついてくるストーカー要素の指定
  let stalker = $("#stalker");

  //mousemoveイベントでカーソル要素を移動させる
  $(document).on("mousemove", function (e) {
    //カーソルの座標位置を取得
    let x = e.clientX;
    let y = e.clientY;
    //カーソル要素のcssを書き換える用
    cursor.css({
      opacity: "1",
      top: y + "px",
      left: x + "px",
    });
    //ストーカー要素のcssを書き換える用
    setTimeout(function () {
      stalker.css({
        opacity: "1",
        top: y + "px",
        left: x + "px",
      });
    }, 10); //カーソルより遅れる時間を指定
  });

  $("a").on({
    mouseenter: function () {
      //activeクラス付与
      cursor.addClass("active");
      // stalker.addClass("active");
    },
    mouseleave: function () {
      cursor.removeClass("active");
      // stalker.removeClass("active");
    },
  });
});

// --------------↓-スムーススクロール-↓---------------//
$(function () {
  // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
  $('a[href^="#"]').click(function () {
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    const adjust = 0;
    // スクロールの速度（ミリ秒）
    const speed = 100;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    let href = $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    let target = $(href == "#" || href == "" ? "html" : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    let position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// --------------↑ スムーススクロール ↑---------------//
// -----------↓ loader ↓----------//
$(function () {
  // ローダー終了
  function end_loader() {
    $(".loader").fadeOut(800);
  }
  // // テキスト表示
  // function show_txt() {
  //   $(".loader .loader-logo").fadeIn(400);
  // }
  // // テキスト非表示
  // function hide_txt() {
  //   $(".loader .loader-logo").fadeOut(600);
  // }

  // タイマー処理
  $(window).on("load", function () {
    // 処理①ページを開いて1.2秒後にテキスト表示（フェード時間0.8秒）
    // setTimeout(function () {
    //   show_txt();
    // }, 1200);
    // 処理②ページを開いて1.8秒後にテキスト非表示（フェード時間0.4秒）
    // setTimeout(function () {
    //   hide_txt();
    // }, 1800);
    // 処理③ページを開いて3秒後にローダー非表示（フェード時間0.6秒）
    setTimeout(function () {
      end_loader();
    }, 2500);
  });
});

// ----------↑ loader ↑------------//
// -----------↓ ヘッダーナビ ↓----------//

let sectionItem;
let navItem;

for (let i = 1; i < 6; i++) {
  navItem = "#navItem" + i;
  sectionItem = "#section" + i;

  ScrollTrigger.create({
    // markers: true,
    trigger: sectionItem,
    start: "top center",
    end: "bottom center",
    toggleClass: {
      targets: navItem,
      className: "is-active",
    },
  });
}

// ----------↑ ヘッダーナビ ↑------------//
// -----------↓ ケバブメニュー ↓----------//

const keb = document.querySelector("#js-kebab");
const nav = document.querySelector("#js-nav");
const list = document.querySelector("#js-list");
const box = document.querySelector("#js-box");
const body = document.querySelector("#js-body");

keb.addEventListener("click", function () {
  keb.classList.toggle("active");
  nav.classList.toggle("active");
  list.classList.toggle("active");
  box.classList.toggle("active");
  body.classList.toggle("active");
});

// -----------↑ ケバブメニュー ↑----------//
// -----------↓-profile-↓----------//

// .box要素をまとめてアニメーションさせる
gsap.from(".section_profile-photo, .section_profile-txt-box", {
  scrollTrigger: {
    trigger: ".js-trigger-pro",
    start: "top 70%", //着火startの位置
    // markers: true, //着火位置の表示
  },
  duration: 1.5, //表示にかかる時間
  y: 0, // 少し上に移動させる
  opacity: 0,
  ease: "power2.out",
  // 複数要素を扱うプロパティ
  stagger: {
    from: "start", //左側から
    amount: 1.5, // 1.5秒おきに
  },
});

// -----------↑-profile-↑--------//

// -----------↓-skill-↓----------//

gsap.from("#skill-animation, .skill-txt-box", {
  scrollTrigger: {
    trigger: ".js-trigger-skill",
    start: "top 70%", //着火startの位置
    // markers: true, //着火位置の表示
  },
  duration: 0.5, //表示にかかる時間
  y: 0, // 少し上に移動させる
  opacity: 0,

  ease: "power2.out",
  // 複数要素を扱うプロパティ
  stagger: {
    // from: "start", //左側から
    amount: 1.5, // 1.5秒おきに
  },
});

// -----------↑-skill-↑--------//

// -----------↓-works-↓----------//

gsap.from(".works-content", {
  scrollTrigger: {
    trigger: ".js-trigger-works",
    start: "top 70%", //着火startの位置
    // markers: true, //着火位置の表示
  },
  duration: 2.0, //表示にかかる時間
  y: 0,
  opacity: 0,
  ease: "power2.out",
  // 複数要素を扱うプロパティ
  stagger: {
    from: "start", //左側から
    amount: 1.5, // 1.5秒おきに
  },
});

// -----------↑-works-↑--------//

// -----------↓-contact-↓----------//

gsap.from(".contact-border", {
  y: 50,
  duration: 2.5,
  scrollTrigger: {
    trigger: ".js-trigger-con", // .trigger(グレー背景の箇所)が領域に入ったらアニメーションする
    start: "top 70%", //着火startの位置
    // markers: true, // アニメーションの開始と終了位置を表示する
  },
});
// -----------↑-contact-↑--------//

//-----------↓ モーダル ↓----------//
const modal = document.querySelector(".js-modal");
const openBtn = document.querySelector(".js-open-btn");
const closeBtn = document.querySelector(".js-close-btn");

openBtn.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.add("is-open");
  // document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("is-open");
  // document.body.classList.remove("no-scroll");
});

modal.addEventListener("click", (event) => {
  if (!event.target.closest(".modal__inner")) {
    modal.classList.remove("is-open");
    // document.body.classList.remove("no-scroll");
  }
});
// -----------↑ モーダル ↑--------//

//-----------↓-送信後にグーグルフォームに飛ばないための記述-↓----------//
$(document).ready(function () {
  $("#form").submit(function (event) {
    var formData = $("#form").serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfAjVTxbWa6e33Tqw33UBzI03bO7RwzMiNTqU1ev5Oiu4yv7Q/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        },
      },
    });
    event.preventDefault();
  });
});
// -----------↑-送信後にグーグルフォームに飛ばないための記述-↑--------//
