const canhThuNhatEl = document.getElementById('canh1');
const canhThuHaiEl = document.getElementById('canh2');
const canhThuBaEl = document.getElementById('canh3');
const btnResultEl = document.getElementById('btnResult');
const outPutResultEl = document.getElementById('outputResult');
const tamGiacCan = 'Tam giác cân';
const tamGiacDeu = 'Tam giác đều';
const tamGiacVuong = 'Tam giác vuông';
const tamGiacNhon = 'Tam giác Nhọn';
const tamGiacTu = 'Tam giác Tù';

/**
 *  Chúng ta sẽ lấy giá trị của 3 cạnh sau đó so sánh từng lượt 3 giá trị nếu giá trị ,của một tam giác phải thỏa mãn điều kiện là tổng hai cạnh bất kì luôn lớn hơn cạnh còn lại. Tức là canh1+canh2>canh3 và canh2+canh3>canh1 và canh1+canh3>canh2. Nếu nó đúng là ba cạnh của một tam giác thì ta tiến hành kiểm tra loại tam giác trên là loại nào. Nếu canh1,canh2, canh3 không phải là ba cạnh của một tam giác thì ta in ra màn hình không phải là cạnh của tam giác và kết thúc chương trình.
 *
 **/

/**
 * Tam giác vuông là tam giác có bình phương một cạnh bằng tổng bình phương hai cạnh còn lại.
 **/

/**
 * Tam giác đều là tam giác có ba cạnh bằng nhau. Ta chỉ cần kiểm tra điều kiện canh1 === canh2 && canh1 === canh3 nếu đúng thì đó là tam giác đều.
 **/

/**
 * Tam giác cân là tam giác có hai cạnh bằng nhau. Để kiểm tra xem có phải là tam giác cân hay không ta chỉ cần kiểm tra điều kiện sau: canh1 === canh2 || canh1 === canh3 || canh2 === canh3.
 **/

/**
 * Tam giác tù là tam giác có một góc lớn hơn 90 độ. Giả sử tam giác tù có cạnh lớn là canh3, hai cạnh canh1, canh2 còn lại sẽ bằng hai cạnh a’, b’ của một tam giác vuông. Dễ thấy là c sẽ lớn hơn c’, mặt khác c’²=a² +b². Từ điều kiện để là tam giác tù: (a*a>b*b+c*c||b*b>a*a+c*c||c*c >a*a+b*b)
 **/

btnResultEl.addEventListener('click', function (e) {
  e.preventDefault();
  const canh1 = +canhThuNhatEl.value.replace(',', '.');
  const canh2 = +canhThuHaiEl.value.replace(',', '.');
  const canh3 = +canhThuBaEl.value.replace(',', '.');

  if (canh1 < canh2 + canh3 && canh2 < canh1 + canh3 && canh3 < canh1 + canh2) {
    if (canh1 === canh2 && canh1 === canh3) {
      outPutResultEl.innerText = tamGiacDeu;
      return;
    }

    if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3) {
      outPutResultEl.innerText = tamGiacCan;
      return;
    }

    if (canh1 * canh1 === canh2 * canh2 + canh3 * canh3 || canh2 * canh2 === canh1 * canh1 + canh3 * canh3 || canh3 * canh3 === canh1 * canh1 + canh2 * canh2) {
      outPutResultEl.innerText = tamGiacVuong;
      return;
    }

    if (canh1 * canh1 > canh2 * canh2 + canh3 * canh3 || canh2 * canh2 > canh1 * canh1 + canh3 * canh3 || canh3 * canh3 > canh1 * canh1 + canh2 * canh2) {
      outPutResultEl.innerText = tamGiacTu;
      return;
    } else {
      outPutResultEl.innerText = tamGiacNhon;
      return;
    }
  }
  outPutResultEl.innerText = 'Đây không phải là tam giác';
});
