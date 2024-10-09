import type { Metadata } from 'next';
import type { FC } from 'react';
import TablePasien from '../../(authenticated)/dashboard/data/pasien/daftar/page';

export const metadata: Metadata = {
  title: 'Pasien',
}

const Page: FC = () => {
  return <TablePasien/>
}

export default Page