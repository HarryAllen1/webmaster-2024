import { createCanvas } from '@napi-rs/canvas';
import { readFile, writeFile } from 'node:fs/promises';
import { getDocument } from 'pdfjs-dist';
import glob from 'tiny-glob';

/**
 * @param {string} file
 * @param {string} out
 * @param {'landscape' | 'portrait'} orientation
 */
const convertPDF = async (file, out, orientation) => {
	const canvas =
		orientation === 'landscape'
			? createCanvas(3300, 2550)
			: createCanvas(2550, 3300);
	/** @type {any} */
	const ctx = canvas.getContext('2d');

	const doc = await getDocument({
		url: file,
		standardFontDataUrl: './static/',
	}).promise;

	const page = await doc.getPage(1);
	const viewport = page.getViewport({ scale: 4.1 });
	await page.render({
		canvasContext: ctx,
		viewport,
	}).promise;
	const buffer = canvas.toBuffer('image/webp');

	await writeFile(out, buffer);
};

await convertPDF(
	'./static/work-log.pdf',
	'./src/routes/about/work-log.webp',
	'landscape',
);
await convertPDF(
	'./static/student-copyright-checklist.pdf',
	'./src/routes/about/copyright-checklist.webp',
	'portrait',
);

const allLicenses = await glob('./node_modules/**/LICENSE*', {
	dot: true,
	filesOnly: true,
});

let allLicenseText = '';
for (const license of allLicenses) {
	const licenseText = await readFile(license, 'utf-8');
	const [name] = license.split('/').slice(-2);
	if (allLicenseText.includes(`${name}\n`)) continue;
	allLicenseText += `
${name}
${'-'.repeat(name.length)}
${licenseText}
`;
}

await writeFile('./static/licenses.txt', allLicenseText);
