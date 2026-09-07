// frontend/tests/browser_check.cjs - Automated Playwright browser verification
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const ARTIFACTS_DIR = '/Users/santiagorovira/.gemini/antigravity-cli/brain/1ffdecec-0afc-49b4-b87f-5edf260ac011';

async function runBrowserVerification() {
  console.log('🚀 Iniciando verificación de browser local con Playwright...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 }
  });

  // Pre-autenticar sesión admin LLYC en localStorage
  await context.addInitScript(() => {
    window.localStorage.setItem('admin_user_email', 'developer@llyc.global');
  });

  const page = await context.newPage();

  // Escuchar errores de consola
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('Browser Console Error:', msg.text());
    }
  });

  // 1. Verificar carga de Sanitas (Adobe Analytics)
  console.log('--- 1. Verificando inquilino: Sanitas (Adobe) ---');
  await page.goto('http://localhost:3000/media-impact/?tenant_id=sanitas', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);
  try {
    await page.waitForSelector('table tbody tr', { timeout: 15000 });
  } catch (e) {
    console.log('Timeout esperando table rows en Sanitas');
  }

  const sanitasScreenshotPath = path.join(ARTIFACTS_DIR, 'browser_sanitas_preview.png');
  await page.screenshot({ path: sanitasScreenshotPath, fullPage: true });
  console.log(`📸 Screenshot de Sanitas guardado en: ${sanitasScreenshotPath}`);

  // Inspeccionar estado de Sanitas
  const sanitasKpiScore = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.rounded-xl, .bg-white'));
    const engCard = cards.find(c => c.textContent.includes('Engagement IA') || c.textContent.includes('Score engagement'));
    return engCard ? engCard.innerText : 'Card no encontrada';
  });
  console.log('Sanitas KPI Card Text:', sanitasKpiScore.replace(/\n/g, ' | '));

  const sanitasTableSummary = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll('table tbody tr'));
    return rows.map(r => r.innerText.replace(/\n/g, ' | ')).slice(0, 10);
  });
  console.log('Filas encontradas en tabla de motores (Sanitas):', sanitasTableSummary);

  // 2. Verificar Vidal & Vidal (GA4 / Ecommerce)
  console.log('\n--- 2. Verificando inquilino: Vidal & Vidal (GA4 Ecommerce) ---');
  await page.goto('http://localhost:3000/media-impact/?tenant_id=vidal-vidal', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);
  try {
    await page.waitForSelector('table tbody tr', { timeout: 15000 });
  } catch (e) {
    console.log('Timeout esperando table rows');
  }

  const vidalScreenshotPath = path.join(ARTIFACTS_DIR, 'browser_vidal_preview.png');
  await page.screenshot({ path: vidalScreenshotPath, fullPage: true });
  console.log(`📸 Screenshot de Vidal & Vidal guardado en: ${vidalScreenshotPath}`);

  // Verificar tabla Rendimiento por motor IA
  const tableSummary = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll('table tbody tr'));
    return rows.map(r => r.innerText.replace(/\n/g, ' | ')).slice(0, 10);
  });
  console.log('Filas encontradas en tabla de motores (Vidal & Vidal):', tableSummary);

  // Probar Feature 2.1: Click para abrir acordeón de Landing Pages
  console.log('\n--- 3. Verificando Acordeón de Landing Pages (Feature 2.1) ---');
  const firstRow = await page.$('table tbody tr:first-child');
  if (firstRow) {
    await firstRow.click();
    await page.waitForTimeout(1000);
    const accordionScreenshotPath = path.join(ARTIFACTS_DIR, 'browser_accordion_expanded.png');
    await page.screenshot({ path: accordionScreenshotPath });
    console.log(`📸 Screenshot de Acordeón expandido guardado en: ${accordionScreenshotPath}`);

    const accordionText = await page.evaluate(() => {
      const acc = document.querySelector('tr.bg-dashboard-bg\\/25');
      return acc ? acc.innerText : 'No se detectó acordeón desplegado';
    });
    console.log('Contenido del acordeón expandido:', accordionText.replace(/\n/g, ' | '));
  } else {
    console.log('⚠️ No se encontró la primera fila de la tabla para hacer click');
  }

  await browser.close();
  console.log('\n✅ Verificación de browser completada exitosamente.');
}

runBrowserVerification().catch(err => {
  console.error('❌ Error en ejecución de verificación:', err);
  process.exit(1);
});
