import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should display the main title', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('Three.js Explorations')).toBeTruthy();
  });

  it('should display the subtitle', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(
      screen.getByText('Interactive 3D graphics experiments with React Three Fiber')
    ).toBeTruthy();
  });

  it('should render all three scene cards', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('Rotating Cube')).toBeTruthy();
    expect(screen.getByText('Wireframe Sphere')).toBeTruthy();
    expect(screen.getByText('Torus Knot')).toBeTruthy();
  });

  it('should render the getting started card', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('Getting Started')).toBeTruthy();
    expect(screen.getByText('Click and drag to rotate')).toBeTruthy();
  });
});
