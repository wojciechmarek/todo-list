import { ReactNode } from 'react';

export const providerTreeBuilder = (providersWithProps: any[]) => {
  const initialComponent = ({ children }: { children: ReactNode }) => (
    <>{children}</>
  );

  return providersWithProps.reduce(
    (AccumulatedProviders, [Provider, props = {}]) => {
      return ({ children }: { children: ReactNode }) => {
        return (
          <AccumulatedProviders>
            <Provider {...props}>{children}</Provider>
          </AccumulatedProviders>
        );
      };
    },
    initialComponent
  );
};
