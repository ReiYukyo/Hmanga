document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    });
    
    // Check saved sidebar state
    if (localStorage.getItem('sidebarCollapsed') === 'true') {
        sidebar.classList.add('collapsed');
    }
    
    // Highlight active menu item
    const menuItems = document.querySelectorAll('.menu-section li:not(.system-item)');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            localStorage.setItem('activeMenuItem', this.querySelector('span').textContent);
        });
    });
    
    // Restore active menu item
    const activeItemName = localStorage.getItem('activeMenuItem');
    if (activeItemName) {
        const items = document.querySelectorAll('.menu-section li span');
        items.forEach(span => {
            if (span.textContent === activeItemName) {
                span.parentElement.classList.add('active');
            }
        });
    }
    
    // Initialize first item as active if none selected
    if (!document.querySelector('.menu-section li.active') && menuItems.length > 0) {
        menuItems[0].classList.add('active');
    }
    
    // Add pulse animation to welcome illustration
    const welcomeIllustration = document.querySelector('.placeholder-illustration');
    welcomeIllustration.style.animation = 'pulse 3s infinite ease-in-out';
    
    // Page load transition
    document.body.classList.add('loaded');
});