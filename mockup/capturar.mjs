// capturas del prototipo publicado
import { chromium } from 'playwright';
const URL = 'https://marlonjara-s.github.io/ACA-ING-WEB/';
// Espera a que GitHub Pages publique la última versión de los estilos.
for (let i = 0; i < 40; i++) {
  const css = await (await fetch(URL + 'styles.css?t=' + Date.now(), { cache: 'no-store' })).text();
  if (css.includes('.rec-open .media')) break;
  await new Promise(r => setTimeout(r, 15000));
}
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
async function settle() {
  await p.waitForLoadState('networkidle');
  await p.evaluate(async () => {
    const imgs = [...document.images];
    await Promise.all(imgs.map(i => i.complete ? null : new Promise(r => { i.onload = i.onerror = r; })));
  });
  await p.waitForTimeout(1200);
}
await p.goto(URL + '?v=' + Date.now() + '#/inicio');
await p.waitForSelector('#loader', { state: 'detached', timeout: 15000 });
await settle();
await p.screenshot({ path: 'mockup/1-inicio.png', fullPage: true });
await p.click('.nav-link[data-go="biblioteca"]'); await settle();
await p.click('.fav-btn[data-fav="2"]'); await p.click('.fav-btn[data-fav="4"]');
await p.waitForTimeout(2500); // espera a que se oculte el aviso
await p.mouse.move(0, 0);
await p.screenshot({ path: 'mockup/2-biblioteca.png', fullPage: true });
await p.click('.rec-open[data-open="1"]'); await settle();
await p.mouse.move(0, 0);
await p.screenshot({ path: 'mockup/3-detalle.png', fullPage: true });
await p.click('.nav-link[data-go="favoritos"]'); await settle();
for (let i = 0; i < 5; i++) await p.click('[data-habit="vaso+"]');
for (let i = 0; i < 14; i++) await p.click('[data-habit="min+"]');
await p.waitForTimeout(2500); await p.mouse.move(0, 0); await settle();
await p.screenshot({ path: 'mockup/4-favoritos.png', fullPage: true });
await b.close();
