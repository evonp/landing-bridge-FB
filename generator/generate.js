// 使用 Node.js 自动生成唯一子目录中转页
const fs = require('fs');
const path = require('path');

function generateRandomId(length = 6) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function generatePage() {
  const id = generateRandomId();
  const src = path.join(__dirname, '../template/index.html');
  const destDir = path.join(__dirname, '../redirect-pages', id);
  const destFile = path.join(destDir, 'index.html');

  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir);
  fs.copyFileSync(src, destFile);
  console.log(`生成完成：redirect-pages/${id}/index.html`);
}

generatePage();
