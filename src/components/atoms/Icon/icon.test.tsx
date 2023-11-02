import { configure, render } from '@testing-library/react';
import { Icon } from './icon';
import { IconProps } from './icon.interface';

describe('Icon', () => {
  let iconProps: IconProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    iconProps = {
      icon: 'icon',
    };
  });

  it('should render', () => {
    const { baseElement } = render(<Icon {...iconProps} />);
    expect(baseElement).toBeTruthy();
  });
});
