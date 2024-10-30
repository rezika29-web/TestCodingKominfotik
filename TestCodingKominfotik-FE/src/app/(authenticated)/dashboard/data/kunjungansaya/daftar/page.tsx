import type { Metadata } from 'next';
import type { FC } from 'react';
import TableKunjungan from './TableKunjungan';

export const metadata: Metadata = {
  title: 'Kunjungan',
}

const Page: FC = () => {
  return <TableKunjungan/>
}

export default Page