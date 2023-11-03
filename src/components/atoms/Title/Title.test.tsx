import { configure, render } from '@testing-library/react';
import { Title } from './title';
import { TitleProps } from './title.interface';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';

describe('Title', () => {
  let titleProps: TitleProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    titleProps = {
      title: 'hello title world',
    };
  });

  it('should render', () => {
    const { baseElement } = render(<Title {...titleProps} />);
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const tree = TestRenderer.create(<Title {...titleProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when the title is rendered', () => {
    it('should have the correct value', () => {
      const { getByRole } = render(<Title {...titleProps} />);
      const title = getByRole('heading', { name: /hello title world/i });
      expect(title).toBeInTheDocument();
    });
  });
});
