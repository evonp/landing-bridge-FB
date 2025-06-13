const fs = require('fs');
const path = require('path');

function generateId(length = 6) {
  return [...Array(length)].map(() => Math.random().toString(36)[2]).join('');
}

const id = generateId();
const template = fs.readFileSync('./template/index.html', 'utf8');
const outputPath = `./redirect-pages/${id}`;
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(path.join(outputPath, 'index.html'), template.replace(/{{RANDOM_PATH}}/g, id));

console.log(`✅ 成功生成中转页: redirect-pages/${id}/index.html`);

