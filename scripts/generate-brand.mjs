import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const directory=path.join(root,'public/assets/logo');
const mark='<g fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"><path d="m9 22 23-13 23 13-23 13L9 22Z"/><path d="m9 32 23 13 23-13M9 42l23 13 23-13"/></g>';
const icon=(dark=false)=>`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 64 64" color="${dark?'#fbfbfd':'#171719'}"><title>Слой — coffee studio</title><rect width="64" height="64" rx="16" fill="${dark?'#171719':'#fbfbfd'}"/>${mark}</svg>`;
const transparent=`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 64 64" color="#171719"><title>Слой — фирменный знак</title>${mark}</svg>`;
const logo=`<svg xmlns="http://www.w3.org/2000/svg" width="700" height="200" viewBox="0 0 700 200"><title>Слой — coffee studio</title><g transform="translate(10 10) scale(2.8)" color="#171719">${mark}</g><text x="235" y="142" font-size="140" font-family="Arial,sans-serif" font-weight="600" letter-spacing="-11" fill="#171719">слой</text></svg>`;
await fs.mkdir(directory,{recursive:true});
await Promise.all([
 fs.writeFile(path.join(directory,'sloy-logo.svg'),logo),fs.writeFile(path.join(directory,'sloy-mark.svg'),transparent),fs.writeFile(path.join(root,'public/favicon.svg'),icon(true)),
 sharp(Buffer.from(logo)).resize(2800,800).png().toFile(path.join(directory,'sloy-logo.png')),
 sharp(Buffer.from(transparent)).resize(2048,2048).png().toFile(path.join(directory,'sloy-mark.png')),
 sharp(Buffer.from(icon(true))).resize(64,64).png().toFile(path.join(root,'public/favicon.png')),
 sharp(Buffer.from(icon(true))).resize(180,180).png().toFile(path.join(root,'public/apple-touch-icon.png')),
]);
