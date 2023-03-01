//* DEKLARASI ---------------------------------------------
let form_harga = document.getElementById("harga");
let form_bayar = document.getElementById("bayar");
let form_kembalian = document.getElementById("kembalian");
let btn_random = document.getElementById("btn-random");
let btn_reset = document.getElementById("btn-reset");
let btn_find = document.getElementById("btn-find");

const list_uang = [
  "rp100k",
  "rp50k",
  "rp20k",
  "rp10k",
  "rp5k",
  "rp2k",
  "rp1k",
  "rp500",
  "rp200",
  "rp100",
];

const list_nominal = [
  100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100,
];

//* FUNGSI MENCARI HARGA ACAK -----------------------------
function random_number() {
  let form_harga_random = Math.floor(Math.random() * 1000) + 1;
  form_harga.value = form_harga_random + "00";
}

//* FUNGSI RESET ------------------------------------------
function reset() {
  form_harga.value = "";
  form_bayar.value = "";
  form_kembalian.innerText = "0";

  for (i = 0; i < list_uang.length; i++) {
    let uang = document.getElementById(list_uang[i]);
    uang.innerText = "-";
  }
}

//* FUNGSI MENCARI UANG KEMBALIAN -------------------------
function find() {
  let harga = Number(form_harga.value);
  let bayar = Number(form_bayar.value);

  if (harga > bayar) {
    alert("Uang Anda Kurang.");
    bayar.focus();
  } else {
    let kembalian = bayar - harga;
    form_kembalian.innerText = kembalian.toLocaleString("en");

    for (i = 0; i < list_uang.length; i++) {
      let uang = document.getElementById(list_uang[i]);
      let total = Math.floor(kembalian / list_nominal[i]);
      if (total != 0) {
        uang.innerText = total;
      }
      kembalian = kembalian % list_nominal[i];
    }
  }
}
