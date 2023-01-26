import { useContext } from 'react';
import { StorageContext } from './storage.context';

export const useStorageProvider = () => {
  const context = useContext(StorageContext);
  if (context === null) {
    throw new Error(
      'useStorageProvider must be used within the registered StorageContext'
    );
  }
  return context;
};
