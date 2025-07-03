// Handle folder selection
document.getElementById('select-folder')?.addEventListener('click', () => {
    window.electron.ipcRenderer.send('open-folder-dialog');
});

// Receive selected folder
window.electron.ipcRenderer.on('selected-folder', (event, path) => {
    document.getElementById('selected-folder').textContent = path || 'No folder selected';
});

// Theme selection
document.querySelectorAll('.theme-option').forEach(option => {
    option.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        document.body.className = theme;
        // Save theme preference (you'd implement this)
    });
});

// Sidebar toggle
document.querySelector('.menu-toggle')?.addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('collapsed');
});