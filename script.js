var result = `body{
    background:red;
  }
`;
var n = 0;
var timeID = setInterval(() => {
  n += 1;
  // code为id为code的pre标签
  code.innerHTML = result.substring(0, n);
  // styleTag为<style>标签
  styleTag.innerHTML = result.substring(0, n);
  if (n >= result.length) {
    clearInterval(timeID);
  }
}, 100);
