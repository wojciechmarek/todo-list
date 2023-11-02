import { configure, render } from '@testing-library/react';
import { CommonLinkProps } from './common-link.interface';
import { CommonLink } from './common-link';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('CommonLink', () => {
  let commonLinkProps: CommonLinkProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    commonLinkProps = {
      text: 'text',
      color: '#FFF',
      expanded: false,
      icon: <span>A</span>,
      url: 'https://via.placeholder.com/150',
    };
  });

  it('should render', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <CommonLink {...commonLinkProps} />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  describe('when the common link is rendered', () => {
    it('should render the text', () => {
      const { getByText } = render(
        <MemoryRouter>
          <CommonLink {...commonLinkProps} />
        </MemoryRouter>
      );
      const text = getByText(/text/i);
      expect(text).toBeTruthy();
    });

    it('should render the icon', () => {
      const { getByText } = render(
        <MemoryRouter>
          <CommonLink {...commonLinkProps} />
        </MemoryRouter>
      );
      const icon = getByText(/A/i);
      expect(icon).toBeTruthy();
    });

    it('should render the url', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <CommonLink {...commonLinkProps} />
        </MemoryRouter>
      );
      const link = getByRole('link');
      expect(link).toBeTruthy();
    });
  });

  describe('when the common link is clicked', () => {
    it('should call the onClick function', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <CommonLink {...commonLinkProps} />
        </MemoryRouter>
      );
      const link = getByRole('link');
      link.click();
      expect(link).toBeTruthy();

      // WE SHOULD NOT TEST DOM EVENTS IN JEST (like click on Link)
      // https://stackoverflow.com/a/58907587

      // TO DO IT - TEST THIS IN CYPRESS
    });
  });
});
