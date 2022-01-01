const soNguyenThuNhatEl = document.getElementById('soNguyen1');
const soNguyenThuHaiEl = document.getElementById('soNguyen2');
const soNguyenThuBaEl = document.getElementById('soNguyen3');
const btnResultEl = document.getElementById('btnResult');
const outPutResultEl = document.getElementById('outputResult');

btnResultEl.addEventListener('click', function (e) {
  e.preventDefault();
  let countChan = 0;
  let countLe = 0;
  const soNguyenThuNhatVal = Math.floor(+soNguyenThuNhatEl.value.replace(',', '.'));
  const soNguyenThuHaiVal = Math.floor(+soNguyenThuHaiEl.value.replace(',', '.'));
  const soNguyenThuBaVal = Math.floor(+soNguyenThuBaEl.value.replace(',', '.'));

  if (soNguyenThuNhatVal >= 1) {
    if (soNguyenThuNhatVal % 2 === 0) {
      countChan++;
    } else {
      countLe++;
    }
  }

  if (soNguyenThuHaiVal >= 1) {
    if (soNguyenThuHaiVal % 2 === 0) {
      countChan++;
    } else {
      countLe++;
    }
  }

  if (soNguyenThuBaVal >= 1) {
    if (soNguyenThuBaVal % 2 === 0) {
      countChan++;
    } else {
      countLe++;
    }
  }

  outPutResultEl.innerHTML = `<p>Có ${countChan} số chẵn</p>
  <p>Có ${countLe} số lẽ</p>`;
});
