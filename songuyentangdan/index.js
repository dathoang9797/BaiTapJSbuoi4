const soNguyenThuNhatEl = document.getElementById('soNguyen1');
const soNguyenThuHaiEl = document.getElementById('soNguyen2');
const soNguyenThuBaEl = document.getElementById('soNguyen3');
const btnResultEl = document.getElementById('btnResult');
const outPutResultEl = document.getElementById('outputResult');

btnResultEl.addEventListener('click', function (e) {
  e.preventDefault();
  const soNguyenThuNhatVal = Math.floor(+soNguyenThuNhatEl.value.replace(',', '.'));
  const soNguyenThuHaiVal = Math.floor(+soNguyenThuHaiEl.value.replace(',', '.'));
  const soNguyenThuBaVal = Math.floor(+soNguyenThuBaEl.value.replace(',', '.'));

  switch (true) {
    case soNguyenThuNhatVal <= soNguyenThuHaiVal && soNguyenThuNhatVal <= soNguyenThuBaVal:
      if (soNguyenThuHaiVal <= soNguyenThuBaVal) {
        outPutResultEl.innerText = `${soNguyenThuNhatVal},${soNguyenThuHaiVal},${soNguyenThuBaVal}`;
      } else {
        outPutResultEl.innerText = `${soNguyenThuNhatVal},${soNguyenThuBaVal},${soNguyenThuHaiVal}`;
      }
      return;

    case soNguyenThuHaiVal <= soNguyenThuNhatVal && soNguyenThuHaiVal <= soNguyenThuBaVal:
      if (soNguyenThuNhatVal <= soNguyenThuBaVal) {
        outPutResultEl.innerText = `${soNguyenThuHaiVal},${soNguyenThuNhatVal},${soNguyenThuBaVal}`;
      } else {
        outPutResultEl.innerText = `${soNguyenThuHaiVal},${soNguyenThuBaVal},${soNguyenThuNhatVal}`;
      }
      return;

    case soNguyenThuBaVal <= soNguyenThuNhatVal && soNguyenThuBaVal <= soNguyenThuHaiVal:
      if (soNguyenThuNhatVal <= soNguyenThuHaiVal) {
        outPutResultEl.innerText = `${soNguyenThuBaVal},${soNguyenThuNhatVal},${soNguyenThuHaiVal}`;
      } else {
        outPutResultEl.innerText = `${soNguyenThuBaVal},${soNguyenThuHaiVal},${soNguyenThuNhatVal}`;
      }
      return;
  }
});
