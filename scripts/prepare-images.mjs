import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const inputs=JSON.parse(await fs.readFile('/tmp/sloy-image-paths.json','utf8'));
const output=path.join(root,'public/assets/images');
await fs.mkdir(output,{recursive:true});
await Promise.all(Object.entries(inputs).map(async([name,source])=>{
 await fs.copyFile(source,path.join(output,`${name}-original.png`));
 await sharp(source).resize({width:name==='hero'?1600:900,withoutEnlargement:true}).webp({quality:88,effort:5}).toFile(path.join(output,`${name}.webp`));
}));
await fs.writeFile(path.join(root,'public/assets/sources.json'),JSON.stringify({brand:'Слой',type:'fictional-concept',created_at:'2026-10-22',images:Object.keys(inputs).map(name=>({file:`images/${name}.webp`,source:'Created with imagegen for a fictional coffee studio',original:`images/${name}-original.png`}))},null,2));
