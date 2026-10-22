import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const hero=await sharp(path.join(root,'public/assets/images/hero.webp')).resize(665,630,{fit:'cover'}).toBuffer();
const type=Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="535" height="630" fill="#fbfbfd"/><text x="56" y="77" fill="#171719" font-family="Arial,sans-serif" font-size="46" font-weight="600" letter-spacing="-3">слой</text><text x="55" y="229" fill="#171719" font-family="Arial,sans-serif" font-size="91" font-weight="500" letter-spacing="-5">Кофе.</text><text x="55" y="326" fill="#171719" font-family="Arial,sans-serif" font-size="85" font-weight="500" letter-spacing="-5">В чистом</text><text x="55" y="423" fill="#171719" font-family="Arial,sans-serif" font-size="91" font-weight="500" letter-spacing="-5">виде.</text><text x="58" y="553" fill="#73737d" font-family="Arial,sans-serif" font-size="17">Вымышленная кофе-студия / дизайн-концепт</text></svg>`);
await sharp({create:{width:1200,height:630,channels:3,background:'#eeedf2'}}).composite([{input:hero,left:535,top:0},{input:type,left:0,top:0}]).jpeg({quality:90,mozjpeg:true}).toFile(path.join(root,'public/social-cover.jpg'));
