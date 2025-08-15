import { render } from '@testing-library/react';

import ShoppingList from './shopping_list';

describe('ShoppingList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShoppingList />);
    expect(baseElement).toBeTruthy();
  });
});
