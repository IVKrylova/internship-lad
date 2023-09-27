import { ReactNode } from 'react';
import { NextPage } from 'next';

export type TNextPageWithLayout<TProps = {}> = NextPage<TProps> & {
  getLayout?: (page: ReactNode) => ReactNode;
};