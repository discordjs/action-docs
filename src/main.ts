import { exec } from '@actions/exec';
import { which } from '@actions/io';
import { setFailed } from '@actions/core';

async function run() {
	try {
		await exec(await which('bash', true), ['src/deploy.sh'], { cwd: process.cwd() });
	} catch (error) {
		setFailed(error.message);
	}
}

run();
