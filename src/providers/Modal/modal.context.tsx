import { createContext } from 'react';
import { ModalProps } from './modal.interface';

export const ModalContext = createContext<ModalProps | null>(null);
