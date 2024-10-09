import type { Metadata } from 'next';
import type { FC } from 'react';
import TableKesehatan from './Tablekesehatan';

export const metadata: Metadata = {
  title: 'Kesehatan',
}

const Page: FC = () => {
  return <TableKesehatan/>
}

export default Page