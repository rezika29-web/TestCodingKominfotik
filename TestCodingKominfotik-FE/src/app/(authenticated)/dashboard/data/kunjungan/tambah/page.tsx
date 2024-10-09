import type { Metadata } from 'next';
import type { FC } from 'react';
import KunjunganForm from '@/components/Kunjungan/KunjunganForm';

export const metadata: Metadata = {
  title: 'Tambah Jabatan',
}

const Page: FC = () => {
  return <KunjunganForm mode="add" />
}

export default Page