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

/* 
接下来，我需要一张白纸。
*/
#code{
  position:fixed;
  left:0;
  width:50%;
  height:100%;
}

`;

var result2 = `
#paper{
  position:fixed;
  right:0;
  width:50%;
  height:100%;
  background:yellow;
  padding:10px;
}

#paper > .content{
  height:100%;
  border:10px solid red;
}
`;

var md = `
  # 标题1
  # markdown 转 html 库 
  # marked.js 
  # github.com 去搜
`;

// 封装函数，把code写进#code和style标签里
var writeCode = (prefix, code, fnn) => {
  let domCode = document.querySelector('#code');
  domCode.innerHTML = prefix || '';
  let n = 0;
  let timeID = setInterval(() => {
    n += 1;
    // code为id为code的pre标签
    domCode.innerHTML = Prism.highlight(
      prefix + code.substring(0, n),
      Prism.languages.css,
      'css'
    );
    // styleTag为<style>标签
    styleTag.innerHTML = prefix + code.substring(0, n);

    // 解决代码看不见的bug
    domCode.scrollTop = domCode.scrollHeight;
    if (n >= code.length) {
      clearInterval(timeID);
      fnn();
    }
  }, 10);
};

var writeMD = (markdown, fn) => {
  let domContent = document.querySelector('#paper>.content');
  let n = 0;
  let timeID = setInterval(() => {
    n += 1;
    domContent.innerHTML = Prism.highlight(
      markdown.substring(0, n),
      Prism.languages.css,
      'markdown'
    );
    // 解决代码看不见的bug
    domContent.scrollTop = domContent.scrollHeight;
    if (n >= markdown.length) {
      clearInterval(timeID);
      fn();
    }
  }, 10);
};

// 创建一张白纸
var createPaper = (fn) => {
  var paper = document.createElement('div');
  paper.id = 'paper';
  document.body.appendChild(paper);
  var content = document.createElement('pre');
  content.className = 'content';
  paper.appendChild(content);
  fn();
};

writeCode('', result, () => {
  createPaper(() => {
    writeCode(result, result2, () => {
      writeMD(md, () => {
        console.log('markdown 写完了');
      });
    });
  });
});
