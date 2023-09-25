import { ReactNode } from 'react';
import { NextPage } from 'next';

export type TNextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};