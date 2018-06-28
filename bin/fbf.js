#!/usr/bin/env node
const program = require('commander');
const fs = require('fs');
const path = require('path');
const createHTML = require('create-html');
const sizeOf = require('image-size');
const chalk = require('chalk');

//排序
const sortByFileName = files =>  {
  const reg = /[0-9]+/g;
  return files.sort((a, b) => {
    let imga = (a.match(reg) || []).slice(-1),
      imgb = (b.match(reg) || []).slice(-1)
    return imga - imgb
  });
}

//删除.DS_Store
function deleteDS(file) {
  file.map((v, i) => {
    if(v === '.DS_Store'){
      fs.unlink('img/.DS_Store', err => {})
    }
  })
}

// 生成keyframe
function toCss(dir, fileList){
  let _css = '';
  let start = 0;
  const per = Math.floor(100/fileList.length);
  fileList.map((path, i) => {
    if(i === fileList.length - 1){
      _css += `
        ${start + i*per}%, 100% {
          background:url(./${dir}/${path}) center center no-repeat;
          background-size:100% auto;
        }
      `
    }else{
      _css += `
        ${start + i*per}% {
          background:url(./${dir}/${path}) center center no-repeat;
          background-size:100% auto;
        }
      `
    }
  })
  console.log(chalk.green('css successed!'))
  return _css;
}

program.version('1.0.0', '-v, --version')
  .command('start <dir>')
  .action((dir) => {

    const imgPath = path.resolve(dir)

    let imgSize = null;
    fs.readdir(imgPath, (err, file) => {
      const newFile = sortByFileName(file)
      deleteDS(newFile)
      if(newFile.length < 2){
        console.log(chalk.red('图片数量必须大于两张!'))
        return;
      }
      imgSize = sizeOf(dir + '/' +file[0]);
      let frameCss = toCss(dir, newFile)

      //取第一个图片的尺寸作为框尺寸
      let cssString = `
      .fbf-animation{
        width: ${imgSize.width}px;
        height: ${imgSize.height}px;
        margin:auto;
        background-image: url(./${dir}/${file[0]});
        background-size: ${imgSize.width}px ${imgSize.height}px;
        background-repeat: no-repeat;
        animation-name: keyframes-img;
        animation-duration: 3s;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: steps(1);
      }
      @keyframes keyframes-img {
        ${frameCss}
      }
    `
      let css = `
      <style>${cssString}</style>
    `
      //生成html
      let html = createHTML({
        title: '逐帧动画',
        scriptAsync: true,
        lang: 'en',
        dir: 'rtl',
        head: '<meta name="description" content="example">',
        body: '<div class="fbf-animation"></div>' + css,
        favicon: 'favicon.png'
      })
      fs.writeFile('fbf.html', html, function (err) {
        console.log(chalk.green('html successed!'))
        if (err) console.log(err)
      })
    })
  });
program.parse(process.argv);
