import { createContext } from 'react';
import { StorageProps } from './storage.interface';

export const StorageContext = createContext<StorageProps | null>(null);
