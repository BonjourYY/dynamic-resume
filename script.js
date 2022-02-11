var result = `/* 
    面试官你好，我是xxx
    我将以动画的形式来介绍我自己
    只用文字介绍太单调了
    我就用代码来介绍吧
    首先准备一些样式 
*/

* {
  transition: all 1s;
  font-family: Consolas, 'Courier New', monospace , 'PingFang SC Medium'
}

html {
  background: rgb(222, 222, 222);
  font-size: 16px;
}

#code {
  border: 1px solid red;
  padding: 16px;
}

/*
    接下来，我们来让代码高亮吧！
*/

.token.comment {
  color: #3c526d;
}

.token.selector {
  color: #a04900;
}

.token.punctuation {
  color: #111b27;
}

.token.property {
  color: #005a8e;
}

.token.function {
  color: #7c00aa;
}

/* 
  或许？我们还可以加点 3D 效果
*/

#code {
  transform:rotate(360deg);
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
    fn2();
    fn3(result);
  }
}, 10);

// 创建一张白纸
var fn2 = () => {
  var paper = document.createElement('div');
  paper.id = 'paper';
  document.body.appendChild(paper);
};

var fn3 = (preResult) => {
  var result2 = `
#paper{
  height:100px;
  background:red;
}
`;

  var n = 0;
  var timeID = setInterval(() => {
    n += 1;
    // code为id为code的pre标签
    code.innerHTML = preResult + result2.substring(0, n);
    code.innerHTML = Prism.highlight(
      code.innerHTML,
      Prism.languages.css,
      'css'
    );
    // styleTag为 < style > 标签;
    styleTag.innerHTML += result2[n - 1];
    if (n >= result2.length) {
      clearInterval(timeID);
    }
  }, 10);
};

// 封装函数，把code写进#code和style标签里
var writeCode = (code) => {};
