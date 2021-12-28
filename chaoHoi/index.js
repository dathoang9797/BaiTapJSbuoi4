const outPutResultEl = document.getElementById('outputResult');
const person = prompt('Who use this machine:', '').toLocaleLowerCase();

if (person === 'bố') {
  outPutResultEl.innerText = 'Xin chào ' + person;
} else if (person === 'mẹ') {
  outPutResultEl.innerText = 'Xin chào ' + person;
} else if (person === 'anh trai') {
  outPutResultEl.innerText = 'Xin chào ' + person;
} else if (person === 'em gái') {
  outPutResultEl.innerText = 'Xin chào ' + person;
} else {
  outPutResultEl.innerText = 'Unknown';
}
