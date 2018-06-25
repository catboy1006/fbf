
## 生成逐帧动画小工具

## 安装

```bash
npm i fbf -g
```

## 开始使用

只需一行命令，快速生成动画文件，支持效果预览。

进入img同级目录，执行
```bash
fbf start img  # 对 img 目录中的图片进行处理
```
done!

## 生成的代码

fbf.html

```
<!doctype html>
<html lang="en" dir="rtl">
<head>
<title>逐帧动画</title>
<meta charset="utf-8">
<link rel="icon" href="favicon.png">
<meta name="description" content="example">


</head>
<body>
<div class="fbf-animation"></div>
      <style>
      .fbf-animation{
        width: 159px;
        height: 189px;
        margin:auto;
        background-image: url(./img/a1.png);
        background-size: 159px 189px;
        background-repeat: no-repeat;
        animation-name: keyframes-img;
        animation-duration: 0.36s;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: steps(1);
      }
      @keyframes keyframes-img {
        
        0% {
          background:url(./img/a1.png) center center no-repeat;
          background-size:100% auto;
        }
      
        10% {
          background:url(./img/a2.png) center center no-repeat;
          background-size:100% auto;
        }
      
        20% {
          background:url(./img/a3.png) center center no-repeat;
          background-size:100% auto;
        }
      
        30% {
          background:url(./img/a4.png) center center no-repeat;
          background-size:100% auto;
        }
      
        40% {
          background:url(./img/a5.png) center center no-repeat;
          background-size:100% auto;
        }
      
        50% {
          background:url(./img/a6.png) center center no-repeat;
          background-size:100% auto;
        }
      
        60% {
          background:url(./img/a7.png) center center no-repeat;
          background-size:100% auto;
        }
      
        70% {
          background:url(./img/a8.png) center center no-repeat;
          background-size:100% auto;
        }
      
        80% {
          background:url(./img/a9.png) center center no-repeat;
          background-size:100% auto;
        }
      
        90%, 100% {
          background:url(./img/a10.png) center center no-repeat;
          background-size:100% auto;
        }
      
      }
    </style>
    

</body>
</html>

```
