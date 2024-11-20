document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking the close button or outside the modal
    document.querySelectorAll('.modal-close').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').classList.remove('active');
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
});








// Theme management functionality
const themeManager = {
    // Key used for localStorage
    STORAGE_KEY: 'preferred-theme',
    
    // Initialize theme system
    init() {
        this.themeToggle = document.querySelector('.theme-toggle');
        this.themeIcon = this.themeToggle.querySelector('i');
        
        // Set initial theme based on stored preference
        this.applyStoredTheme();
        
        // Add click event listener
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    },
    
    // Apply theme from localStorage (if exists)
    applyStoredTheme() {
        const storedTheme = localStorage.getItem(this.STORAGE_KEY);
        
        if (storedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            this.themeIcon.classList.remove('fa-sun');
            this.themeIcon.classList.add('fa-moon');
        } else {
            document.body.classList.remove('dark-mode');
            this.themeIcon.classList.remove('fa-moon');
            this.themeIcon.classList.add('fa-sun');
        }
    },
    
    // Toggle theme and save preference
    toggleTheme() {
        const isDark = document.body.classList.toggle('dark-mode');
        this.themeIcon.classList.toggle('fa-moon');
        this.themeIcon.classList.toggle('fa-sun');
        
        // Save preference to localStorage
        localStorage.setItem(this.STORAGE_KEY, isDark ? 'dark' : 'light');
    }
};

// Initialize theme management when DOM is ready
document.addEventListener('DOMContentLoaded', () => themeManager.init());