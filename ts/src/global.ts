import Alpine from 'alpinejs';
import htmx from 'htmx.org';

window.Alpine = Alpine;
window.htmx = htmx;

// Add this.on variable

Alpine.store('darkMode', {
  init(this: { on: boolean }) {
    // LocalStorage:
    this.on = localStorage.getItem('darkMode') === 'true';
    document.documentElement.classList.toggle('dark', this.on);
  },

  on: false,

  toggle(this: { on: boolean }) {
    localStorage.setItem('darkMode', (this.on = !this.on) ? 'true' : 'false');
    this.on = !this.on;
    document.documentElement.classList.toggle('dark');
  },
});

Alpine.start();
