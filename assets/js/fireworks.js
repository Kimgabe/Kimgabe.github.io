/**
 * ShokaX Style Mouse Click Fireworks Effect
 * Creates beautiful particle effects on mouse clicks
 */

// Real ShokaX Fireworks Effect - Exact Implementation from theme code
class MouseFireworks {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animationId = null;
    
    // Real ShokaX fireworks colors from _config.yml
    this.colors = [
      "rgba(255,182,185,.9)",  // color-pink-light
      "rgba(250,227,217,.9)",  // warm peach
      "rgba(187,222,214,.9)",  // aqua-light  
      "rgba(138,198,209,.9)"   // blue-light
    ];
    
    // ShokaX fireworks configuration (from _config.yml)
    this.config = {
      excludeElements: ["a"],
      particles: [
        {
          shape: "circle",
          move: ["emit"],
          easing: "easeOutExpo", 
          colors: this.colors,
          number: 30,
          duration: [1200, 1800],
          shapeOptions: {
            radius: [16, 32]
          }
        },
        {
          shape: "circle", 
          move: ["diffuse"],
          easing: "easeOutExpo",
          colors: ["#fff"],
          number: 1,
          duration: [1200, 1800], 
          shapeOptions: {
            radius: 20,
            alpha: 0.5,
            lineWidth: 6
          }
        }
      ]
    };
    
    this.lastFrameTime = 0;
    this.fps = 60;
    this.frameInterval = 1000 / this.fps;
    
    this.init();
  }

  init() {
    this.createCanvas();
    this.bindEvents();
    this.animate();
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'fireworksCanvas';
    this.canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    `;
    document.body.appendChild(this.canvas);
    
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
    
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  bindEvents() {
    // Mouse click fireworks (like ShokaX)
    document.addEventListener('click', (e) => {
      // Exclude link clicks (like ShokaX config)
      if (this.config.excludeElements.includes(e.target.tagName.toLowerCase())) {
        return;
      }
      
      this.createFirework(e.clientX, e.clientY);
    });
    
    // Konami Code Easter Egg (like ShokaX)
    this.setupKonamiCode();
  }

  createFirework(x, y) {
    // First particle group: emit effect (30 particles)
    const emitConfig = this.config.particles[0];
    for (let i = 0; i < emitConfig.number; i++) {
      this.particles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.5) * 12,
        life: this.randomBetween(emitConfig.duration[0], emitConfig.duration[1]),
        maxLife: this.randomBetween(emitConfig.duration[0], emitConfig.duration[1]),
        color: emitConfig.colors[Math.floor(Math.random() * emitConfig.colors.length)],
        radius: this.randomBetween(emitConfig.shapeOptions.radius[0], emitConfig.shapeOptions.radius[1]),
        type: 'emit'
      });
    }
    
    // Second particle group: diffuse effect (1 white particle)
    const diffuseConfig = this.config.particles[1];
    this.particles.push({
      x: x,
      y: y,
      vx: 0,
      vy: 0,
      life: this.randomBetween(diffuseConfig.duration[0], diffuseConfig.duration[1]),
      maxLife: this.randomBetween(diffuseConfig.duration[0], diffuseConfig.duration[1]),
      color: diffuseConfig.colors[0],
      radius: diffuseConfig.shapeOptions.radius,
      alpha: diffuseConfig.shapeOptions.alpha,
      lineWidth: diffuseConfig.shapeOptions.lineWidth,
      type: 'diffuse'
    });
  }

  randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  animate(currentTime = 0) {
    // FPS limiter for performance
    if (currentTime - this.lastFrameTime < this.frameInterval) {
      this.animationId = requestAnimationFrame((time) => this.animate(time));
      return;
    }
    
    this.lastFrameTime = currentTime;
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Update and draw particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Apply gravity and friction
      particle.vy += 0.1; // gravity
      particle.vx *= 0.99; // friction
      particle.vy *= 0.99;
      
      // Update life
      particle.life--;
      
      // Calculate alpha based on life and easing
      const progress = 1 - (particle.life / particle.maxLife);
      const easedProgress = this.easeOutExpo(progress);
      
      if (particle.type === 'emit') {
        const alpha = (1 - easedProgress) * 0.9;
        
        this.ctx.save();
        this.ctx.globalAlpha = alpha;
        this.ctx.fillStyle = particle.color;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.radius * (1 - easedProgress), 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
        
      } else if (particle.type === 'diffuse') {
        const alpha = particle.alpha * (1 - easedProgress);
        const radius = particle.radius * (1 + easedProgress * 2);
        
        this.ctx.save();
        this.ctx.globalAlpha = alpha;
        this.ctx.strokeStyle = particle.color;
        this.ctx.lineWidth = particle.lineWidth;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.restore();
      }
      
      // Remove dead particles
      if (particle.life <= 0) {
        this.particles.splice(i, 1);
      }
    }
    
    this.animationId = requestAnimationFrame((time) => this.animate(time));
  }

  setupKonamiCode() {
    // Konami Code sequence
    const konamiCode = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ];
    
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
      if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          this.triggerSpecialEffect();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    });
  }

  triggerSpecialEffect() {
    // Special fireworks show when Konami code is entered
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Show toast notification
    this.showToast('🎆 Konami Code activated! Special fireworks show! 🎆');
    
    // Create multiple fireworks in sequence
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const x = centerX + (Math.random() - 0.5) * 400;
        const y = centerY + (Math.random() - 0.5) * 300;
        this.createFirework(x, y);
      }, i * 100);
    }
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(45deg, #e9546b, #ed6ea0);
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      font-weight: 600;
      text-align: center;
      z-index: 10000;
      animation: toastFadeInOut 3s ease forwards;
      box-shadow: 0 8px 32px rgba(233, 84, 107, 0.3);
    `;
    
    // Add CSS animation for toast
    if (!document.querySelector('#toastStyles')) {
      const style = document.createElement('style');
      style.id = 'toastStyles';
      style.textContent = `
        @keyframes toastFadeInOut {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 3000);
  }

  // Performance monitoring
  getPerformanceInfo() {
    return {
      particleCount: this.particles.length,
      fps: Math.round(1000 / this.frameInterval),
      memoryUsage: this.particles.length * 100 // rough estimate
    };
  }

  // Clean up
  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    this.particles = [];
  }
}

// Initialize fireworks when DOM is loaded
let fireworksInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  // Wait a bit for other scripts to load
  setTimeout(() => {
    fireworksInstance = new MouseFireworks();
    
    // Add performance monitoring (optional, for debugging)
    if (window.location.hash === '#debug') {
      setInterval(() => {
        const perf = fireworksInstance.getPerformanceInfo();
        console.log(`🎆 Fireworks Performance: ${perf.particleCount} particles, ${perf.fps} FPS`);
      }, 5000);
    }
  }, 500);
});

// Clean up on page unload
window.addEventListener('beforeunload', () => {
  if (fireworksInstance) {
    fireworksInstance.destroy();
  }
});