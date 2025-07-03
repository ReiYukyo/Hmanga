function loadTheme(themeName) {
    // Remove existing theme if any
    const oldTheme = document.getElementById('current-theme');
    if (oldTheme) oldTheme.remove();
    
    // Create new theme link
    const themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.id = 'current-theme';
    themeLink.href = `../../assets/themes/${themeName}-theme.css`;
    document.head.appendChild(themeLink);
    
    // Save to localStorage and config
    localStorage.setItem('hmanga-theme', themeName);
    if (window.electron) {
        window.electron.ipcRenderer.send('set-theme', themeName);
    }
}

// Load saved theme or default
function initTheme() {
    const savedTheme = localStorage.getItem('hmanga-theme') || 'red';
    loadTheme(savedTheme);
    return savedTheme;
}

// For theme selection page
function setupThemeSelection() {
    const savedTheme = initTheme();
    document.querySelectorAll('.theme-option').forEach(option => {
        if (option.dataset.theme === savedTheme) {
            option.classList.add('selected');
        }
        
        option.addEventListener('click', function() {
            const themeName = this.dataset.theme;
            loadTheme(themeName);
            document.querySelectorAll('.theme-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });
}

// For other pages
function applySavedTheme() {
    initTheme();
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initTheme, setupThemeSelection, applySavedTheme };
}