import { render } from '@testing-library/react';
import { Divider } from './divider';
import TestRenderer from 'react-test-renderer';

describe('Divider', () => {
  it('should render', () => {
    const { baseElement } = render(<Divider />);
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const tree = TestRenderer.create(<Divider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
