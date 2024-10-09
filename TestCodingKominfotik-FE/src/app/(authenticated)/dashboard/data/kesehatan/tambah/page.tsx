import type { Metadata } from 'next';
import type { FC } from 'react';
import PasienForm from '@/components/Pasien/PasienForm';

export const metadata: Metadata = {
  title: 'Tambah Jabatan',
}

const Page: FC = () => {
  return <PasienForm mode="add" />
}

export default Page