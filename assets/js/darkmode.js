/**
 * ShokaX Style Dark Mode Toggle with Time-based Auto Switch
 * Automatically switches to dark mode between 20:00 and 07:00
 */

class DarkModeManager {
  constructor() {
    this.storageKey = 'darkModePreference';
    this.autoSwitchEnabled = true;
    this.nightStart = 20; // 20:00
    this.nightEnd = 7;    // 07:00
    
    this.init();
  }
  
  init() {
    this.setupToggleButton();
    this.loadUserPreference();
    this.applyTheme();
    this.startAutoCheck();
    this.setupSystemThemeListener();
  }
  
  /**
   * Check if current time is considered "night time"
   */
  isNightTime() {
    const hour = new Date().getHours();
    return hour >= this.nightStart || hour <= this.nightEnd;
  }
  
  /**
   * Get current theme preference
   */
  getCurrentPreference() {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      return JSON.parse(stored);
    }
    return {
      mode: 'dark', // 기본값을 'dark'로 변경
      autoSwitch: false // 자동 전환 비활성화하여 다크모드 고정
    };
  }
  
  /**
   * Save theme preference to localStorage
   */
  savePreference(preference) {
    localStorage.setItem(this.storageKey, JSON.stringify(preference));
  }
  
  /**
   * Load user preference from storage
   */
  loadUserPreference() {
    this.preference = this.getCurrentPreference();
  }
  
  /**
   * Determine if dark theme should be active
   */
  shouldUseDarkTheme() {
    const preference = this.getCurrentPreference();
    
    switch (preference.mode) {
      case 'dark':
        return true;
      case 'light':
        return false;
      case 'auto':
      default:
        return preference.autoSwitch ? this.isNightTime() : false;
    }
  }
  
  /**
   * Apply theme to document
   */
  applyTheme() {
    const shouldBeDark = this.shouldUseDarkTheme();
    const body = document.body;
    const html = document.documentElement;
    const toggleButton = document.getElementById('darkModeToggle');
    
    // 모든 테마 클래스 제거
    body.classList.remove('light-theme', 'dark-theme');
    html.removeAttribute('data-theme');
    
    if (shouldBeDark) {
      body.classList.add('dark-theme');
      html.setAttribute('data-theme', 'dark');
      if (toggleButton) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        toggleButton.setAttribute('aria-label', 'Switch to light mode');
      }
    } else {
      body.classList.add('light-theme');
      html.setAttribute('data-theme', 'light');
      if (toggleButton) {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        toggleButton.setAttribute('aria-label', 'Switch to dark mode');
      }
    }
    
    // Update button appearance based on mode
    this.updateToggleButtonAppearance();
    
    // Trigger custom event for other components
    document.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { isDark: shouldBeDark, preference: this.getCurrentPreference() }
    }));
  }
  
  /**
   * Update toggle button appearance based on current mode
   */
  updateToggleButtonAppearance() {
    const toggleButton = document.getElementById('darkModeToggle');
    const preference = this.getCurrentPreference();
    
    if (!toggleButton) return;
    
    // Remove all mode classes
    toggleButton.classList.remove('auto-mode', 'manual-mode');
    
    // Add appropriate class
    if (preference.mode === 'auto') {
      toggleButton.classList.add('auto-mode');
      toggleButton.title = `Auto mode: ${this.isNightTime() ? 'Night' : 'Day'} time`;
    } else {
      toggleButton.classList.add('manual-mode');
      toggleButton.title = `Manual mode: ${preference.mode}`;
    }
  }
  
  /**
   * Cycle through theme modes: auto -> light -> dark -> auto
   */
  toggleTheme() {
    const current = this.getCurrentPreference();
    let newPreference;
    
    switch (current.mode) {
      case 'auto':
        newPreference = { mode: 'light', autoSwitch: false };
        break;
      case 'light':
        newPreference = { mode: 'dark', autoSwitch: false };
        break;
      case 'dark':
      default:
        newPreference = { mode: 'auto', autoSwitch: true };
        break;
    }
    
    this.savePreference(newPreference);
    this.applyTheme();
    
    // Show brief notification
    this.showModeNotification(newPreference.mode);
  }
  
  /**
   * Show a brief notification about the current mode
   */
  showModeNotification(mode) {
    // Remove existing notification
    const existing = document.querySelector('.theme-notification');
    if (existing) {
      existing.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'theme-notification';
    notification.innerHTML = `
      <i class="fas fa-${mode === 'auto' ? 'clock' : mode === 'light' ? 'sun' : 'moon'}"></i>
      ${mode === 'auto' ? 'Auto' : mode === 'light' ? 'Light' : 'Dark'} Mode
    `;
    
    // Style notification
    Object.assign(notification.style, {
      position: 'fixed',
      top: '80px',
      right: '20px',
      background: 'var(--primary-color)',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '600',
      zIndex: '1001',
      opacity: '0',
      transform: 'translateY(-10px)',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateY(0)';
    });
    
    // Remove after 2 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(-10px)';
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }
  
  /**
   * Setup the toggle button event listener
   */
  setupToggleButton() {
    const toggleButton = document.getElementById('darkModeToggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => this.toggleTheme());
      
      // Add hover effect
      toggleButton.addEventListener('mouseenter', () => {
        const preference = this.getCurrentPreference();
        const nextMode = preference.mode === 'auto' ? 'light' : 
                        preference.mode === 'light' ? 'dark' : 'auto';
        toggleButton.title = `Click for ${nextMode} mode`;
      });
    }
  }
  
  /**
   * Start automatic theme checking (ShokaX style)
   */
  startAutoCheck() {
    // Check every minute for time-based switching
    setInterval(() => {
      const preference = this.getCurrentPreference();
      if (preference.mode === 'auto' && preference.autoSwitch) {
        this.applyTheme();
      }
    }, 60000); // Check every minute
    
    // Also check when page becomes visible again
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        const preference = this.getCurrentPreference();
        if (preference.mode === 'auto' && preference.autoSwitch) {
          this.applyTheme();
        }
      }
    });
  }
  
  /**
   * Listen for system theme changes
   */
  setupSystemThemeListener() {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', () => {
        const preference = this.getCurrentPreference();
        if (preference.mode === 'auto') {
          this.applyTheme();
        }
      });
    }
  }
  
  /**
   * Get system theme preference
   */
  getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }
  
  /**
   * Force set theme (for external use)
   */
  setTheme(mode, autoSwitch = true) {
    const newPreference = { mode, autoSwitch };
    this.savePreference(newPreference);
    this.applyTheme();
  }
  
  /**
   * Get current theme status (for external use)
   */
  getStatus() {
    const preference = this.getCurrentPreference();
    return {
      currentTheme: document.body.classList.contains('dark-theme') ? 'dark' : 'light',
      mode: preference.mode,
      autoSwitch: preference.autoSwitch,
      isNightTime: this.isNightTime(),
      systemTheme: this.getSystemTheme()
    };
  }
}

// CSS for toggle button modes
const modeStyles = document.createElement('style');
modeStyles.textContent = `
  .dark-mode-toggle.auto-mode {
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  }
  
  .dark-mode-toggle.manual-mode {
    background: var(--primary-color);
  }
  
  .theme-notification {
    pointer-events: none;
  }
`;
document.head.appendChild(modeStyles);

// Initialize when DOM is loaded
let darkModeManager;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    darkModeManager = new DarkModeManager();
  });
} else {
  darkModeManager = new DarkModeManager();
}

// Export for external use
window.DarkModeManager = DarkModeManager;
window.darkModeManager = darkModeManager;