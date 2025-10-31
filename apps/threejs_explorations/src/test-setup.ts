import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import ResizeObserver from 'resize-observer-polyfill';

// Add ResizeObserver polyfill for Three.js components
global.ResizeObserver = ResizeObserver;

// Mock HTMLCanvasElement.getContext for Three.js WebGL context
HTMLCanvasElement.prototype.getContext = function () {
  return {
    canvas: this,
    drawingBufferWidth: 800,
    drawingBufferHeight: 600,
    getParameter: () => 'WebGL',
    getExtension: () => null,
    getShaderPrecisionFormat: () => ({
      precision: 23,
      rangeMin: 127,
      rangeMax: 127,
    }),
  };
} as any;

// Cleanup after each test
afterEach(() => {
  cleanup();
});
