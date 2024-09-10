import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/country-flag-finder/',  // Asegúrate de que este es el nombre de tu repositorio
});