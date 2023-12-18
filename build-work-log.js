// @ts-check
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
	console.log('created canvas');
	/** @type {any} */
	const ctx = canvas.getContext('2d');
	console.log('got context');

	const doc = await getDocument({
		url: file,
		standardFontDataUrl: './static/',
	}).promise;
	console.log('got document');

	const page = await doc.getPage(1);
	console.log('got page');
	const viewport = page.getViewport({ scale: 4.1 });
	console.log('got viewport');
	await page.render({
		canvasContext: ctx,
		viewport,
	}).promise;
	console.log('rendered page');
	const buffer = canvas.toBuffer('image/webp');
	console.log('got buffer');

	await writeFile(out, buffer);
	console.log('wrote file');
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
	const licenseText = await readFile(license);
	const [name] = license.split('/').slice(-2);
	if (allLicenseText.includes(`${name}\n`)) continue;
	allLicenseText += `
${name}
${'-'.repeat(name.length)}
${licenseText}
`;
}

await writeFile('./static/licenses.txt', allLicenseText);
