import { useContext } from 'react';
import { ModalContext } from './modal.context';

export const useModalProvider = () => {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error(
      'useModalProvider must be used within the registered ModalContext'
    );
  }
  return context;
};
