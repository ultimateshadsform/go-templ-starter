import { Alpine as AlpineType } from 'alpinejs';
import htmx from 'htmx.org';

declare global {
  interface Window {
    Alpine: AlpineType;
    htmx: typeof htmx;
  }
}
