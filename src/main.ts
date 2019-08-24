import { resolve } from 'path';
import { exec } from '@actions/exec';
import { which } from '@actions/io';
import { setFailed } from '@actions/core';

async function run() {
	try {
		await exec(await which('bash', true), ['src/deploy.sh'], { cwd: resolve(__dirname, '..') });
	} catch (error) {
		setFailed(error.message);
	}
}

run();
