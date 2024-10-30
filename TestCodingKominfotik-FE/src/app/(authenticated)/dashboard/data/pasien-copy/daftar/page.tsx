import type { Metadata } from 'next';
import type { FC } from 'react';
import TablePasien from './TablePasien';

export const metadata: Metadata = {
  title: 'Pasien',
}

const Page: FC = () => {
  return <TablePasien/>
}

export default Page