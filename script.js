var result = `
  /* 
    面试官你好，我是xxx
    我将以动画的形式来介绍我自己
    只用文字介绍太单调了
    我就用代码来介绍吧
    首先准备一些样式 
  */

  *{
    transition:all 1s;
  }

  html{
    background:rgb(222,222,222);
    font-size:16px
  }

  #code{
    border:1px solid red;
    padding:16px;
  }
`;
var n = 0;
var timeID = setInterval(() => {
  n += 1;
  // code为id为code的pre标签
  code.innerHTML = result.substring(0, n);
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
  // styleTag为<style>标签
  styleTag.innerHTML = result.substring(0, n);
  if (n >= result.length) {
    clearInterval(timeID);
  }
}, 100);
