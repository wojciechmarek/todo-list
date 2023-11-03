import { configure, render } from '@testing-library/react';
import { Modal } from './modal';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { ModalProvider } from '../../../providers';

describe('Modal', () => {
  beforeEach(() => {
    configure({ throwSuggestions: true });
  });

  it('should render', () => {
    const { baseElement } = render(
      <ModalProvider>
        <Modal />
      </ModalProvider>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const tree = TestRenderer.create(
      <ModalProvider>
        <Modal />
      </ModalProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
