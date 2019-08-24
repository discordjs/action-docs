"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const exec_1 = require("@actions/exec");
const io_1 = require("@actions/io");
const core_1 = require("@actions/core");
async function run() {
    try {
        await exec_1.exec(await io_1.which('bash', true), ['src/deploy.sh'], { cwd: path_1.resolve(__dirname, '..') });
    }
    catch (error) {
        core_1.setFailed(error.message);
    }
}
run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJtYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLHdDQUFxQztBQUNyQyxvQ0FBb0M7QUFDcEMsd0NBQTBDO0FBRTFDLEtBQUssVUFBVSxHQUFHO0lBQ2pCLElBQUk7UUFDSCxNQUFNLFdBQUksQ0FBQyxNQUFNLFVBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxjQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUM1RjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2YsZ0JBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDekI7QUFDRixDQUFDO0FBRUQsR0FBRyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnQGFjdGlvbnMvZXhlYyc7XG5pbXBvcnQgeyB3aGljaCB9IGZyb20gJ0BhY3Rpb25zL2lvJztcbmltcG9ydCB7IHNldEZhaWxlZCB9IGZyb20gJ0BhY3Rpb25zL2NvcmUnO1xuXG5hc3luYyBmdW5jdGlvbiBydW4oKSB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgZXhlYyhhd2FpdCB3aGljaCgnYmFzaCcsIHRydWUpLCBbJ3NyYy9kZXBsb3kuc2gnXSwgeyBjd2Q6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4nKSB9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRzZXRGYWlsZWQoZXJyb3IubWVzc2FnZSk7XG5cdH1cbn1cblxucnVuKCk7XG4iXX0=