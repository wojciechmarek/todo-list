import { render } from '@testing-library/react';
import { Divider } from './divider';

describe('Divider', () => {
  it('should render', () => {
    const { baseElement } = render(<Divider />);
    expect(baseElement).toBeTruthy();
  });
});
