import { configure, render } from '@testing-library/react';
import { Text } from './text';
import { TextProps } from './text.interface';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';

describe('Text', () => {
  let textProps: TextProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    textProps = {
      text: 'hello world',
    };
  });

  it('should render', () => {
    const { baseElement } = render(<Text {...textProps} />);
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const tree = TestRenderer.create(<Text {...textProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when the text is rendered', () => {
    it('should have the correct value', () => {
      const { getByText } = render(<Text {...textProps} />);
      const text = getByText('hello world');
      expect(text).toBeInTheDocument();
    });
  });
});
