/**
 * ShokaX Dark Mode System - From Web Demo
 * 3-stage toggle: Auto → Light → Dark → Auto
 * Time-based auto switching (20:00-07:00)
 */

class ShokaXDarkMode {
  constructor() {
    this.themes = ['auto', 'light', 'dark'];
    this.currentIndex = 0;
    this.storageKey = 'shokax-theme';
    
    // Bind methods to preserve context
    this.init = this.init.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.applyTheme = this.applyTheme.bind(this);
    this.updateToggleIcon = this.updateToggleIcon.bind(this);
    
    this.init();
  }
  
  init() {
    this.loadSavedTheme();
    this.setupToggleButton();
    this.applyTheme();
    
    // Set up auto theme checking for 'auto' mode
    if (this.getCurrentTheme() === 'auto') {
      this.setupAutoThemeMonitoring();
    }
    
    console.log('🌙 ShokaX Dark Mode initialized:', this.getCurrentTheme());
  }
  
  loadSavedTheme() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved && this.themes.includes(saved)) {
        this.currentIndex = this.themes.indexOf(saved);
      } else {
        // Default to auto mode
        this.currentIndex = 0;
        localStorage.setItem(this.storageKey, 'auto');
      }
    } catch (error) {
      console.warn('Could not load saved theme:', error);
      this.currentIndex = 0;
    }
  }
  
  setupToggleButton() {
    let toggle = document.getElementById('darkModeToggle');
    
    if (!toggle) {
      // Create toggle button if it doesn't exist
      toggle = document.createElement('button');
      toggle.id = 'darkModeToggle';
      toggle.className = 'dark-mode-toggle';
      toggle.setAttribute('aria-label', 'Toggle dark mode');
      document.body.appendChild(toggle);
    }
    
    toggle.addEventListener('click', this.toggleTheme);
    this.updateToggleIcon();
  }
  
  setupAutoThemeMonitoring() {
    // Check time every minute for auto mode
    this.timeInterval = setInterval(() => {
      if (this.getCurrentTheme() === 'auto') {
        this.applyAutoTheme();
      }
    }, 60000); // Check every minute
  }
  
  isNightTime() {
    const hour = new Date().getHours();
    return hour >= 20 || hour <= 7;
  }
  
  applyAutoTheme() {
    const isNight = this.isNightTime();
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    if (isNight) {
      htmlElement.setAttribute('data-theme', 'dark');
      bodyElement.classList.remove('light-theme');
      bodyElement.classList.add('dark-theme');
    } else {
      htmlElement.setAttribute('data-theme', 'light');
      bodyElement.classList.remove('dark-theme');
      bodyElement.classList.add('light-theme');
    }
  }
  
  toggleTheme() {
    // Clear any auto monitoring
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
      this.timeInterval = null;
    }
    
    // Cycle through themes: auto → light → dark → auto
    this.currentIndex = (this.currentIndex + 1) % this.themes.length;
    const newTheme = this.getCurrentTheme();
    
    try {
      localStorage.setItem(this.storageKey, newTheme);
    } catch (error) {
      console.warn('Could not save theme preference:', error);
    }
    
    this.applyTheme();
    
    // Restart auto monitoring if back to auto mode
    if (newTheme === 'auto') {
      this.setupAutoThemeMonitoring();
    }
    
    console.log('🎨 Theme changed to:', newTheme);
  }
  
  applyTheme() {
    const theme = this.getCurrentTheme();
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    // Remove all theme classes first
    bodyElement.classList.remove('light-theme', 'dark-theme');
    
    if (theme === 'auto') {
      this.applyAutoTheme();
    } else if (theme === 'light') {
      htmlElement.setAttribute('data-theme', 'light');
      bodyElement.classList.add('light-theme');
    } else if (theme === 'dark') {
      htmlElement.setAttribute('data-theme', 'dark');
      bodyElement.classList.add('dark-theme');
    }
    
    this.updateToggleIcon();
    
    // Dispatch custom event for other components
    try {
      const event = new CustomEvent('themeChange', {
        detail: { theme: theme }
      });
      document.dispatchEvent(event);
    } catch (error) {
      // Fallback for older browsers
      console.log('Theme changed to:', theme);
    }
  }
  
  updateToggleIcon() {
    const toggle = document.getElementById('darkModeToggle');
    if (!toggle) return;
    
    const icons = {
      'auto': '🌓',  // Auto mode - moon and sun
      'light': '🌞', // Light mode - sun
      'dark': '🌙'   // Dark mode - moon
    };
    
    const currentTheme = this.getCurrentTheme();
    const icon = icons[currentTheme] || '🌓';
    
    toggle.innerHTML = `<i>${icon}</i>`;
    toggle.setAttribute('title', `Current: ${currentTheme} mode (click to cycle)`);
  }
  
  getCurrentTheme() {
    return this.themes[this.currentIndex];
  }
  
  // Public API methods
  setTheme(themeName) {
    if (!this.themes.includes(themeName)) {
      console.warn('Invalid theme name:', themeName);
      return;
    }
    
    this.currentIndex = this.themes.indexOf(themeName);
    this.applyTheme();
    
    try {
      localStorage.setItem(this.storageKey, themeName);
    } catch (error) {
      console.warn('Could not save theme preference:', error);
    }
  }
  
  getTheme() {
    return this.getCurrentTheme();
  }
  
  destroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
    
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
      toggle.removeEventListener('click', this.toggleTheme);
    }
  }
}

// Initialize when DOM is ready
let shokaXDarkMode;

function initShokaXDarkMode() {
  if (shokaXDarkMode) {
    shokaXDarkMode.destroy();
  }
  shokaXDarkMode = new ShokaXDarkMode();
}

// Initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initShokaXDarkMode);
} else {
  initShokaXDarkMode();
}

// Export for global access
if (typeof window !== 'undefined') {
  window.ShokaXDarkMode = ShokaXDarkMode;
  window.shokaXDarkMode = shokaXDarkMode;
}

// Handle page navigation in SPA-like environments
document.addEventListener('turbo:load', initShokaXDarkMode);
document.addEventListener('turbolinks:load', initShokaXDarkMode); 