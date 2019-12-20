const { ipcRenderer } = require('electron');
const log = require('electron-log');

const constants = {
    CHECKING_UPDATE: 'CHECKING_UPDATE',
    NO_UPDATE: 'NO_UPDATE',
    ERROR: 'ERROR',
    UPDATE_AVAILABLE: 'UPDATE_AVAILABLE'
}

window.onload = function () {
    const messageDiv = document.getElementById('message')
    ipcRenderer.send('loaded');
    ipcRenderer.on('updater', (event, { name, message }) => {
        if (name === constants.CHECKING_UPDATE) {
            // messageDiv.innerText = 'Checking for updates...';
            messageDiv.innerText = '正在检查更新...';
        }
        if (name === constants.NO_UPDATE) {
            // messageDiv.innerText = 'Starting...';
            messageDiv.innerText = '正在启动...';
        }
        if (name === constants.ERROR) {
            // messageDiv.innerText = 'Something went wrong. Error: \n' + message;
            messageDiv.innerText = '出了些问题。 错误：\n' + message;
        }
        if (name === constants.UPDATE_AVAILABLE) {
            log.log('DOWNLOAD_PROGRESS');
            // messageDiv.innerText = 'Downloading update...';
            messageDiv.innerText = '正在下载更新...';
        }
    });
};