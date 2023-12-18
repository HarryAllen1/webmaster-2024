import { readFile, writeFile } from 'node:fs/promises';
import glob from 'tiny-glob';

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
