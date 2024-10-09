import type { Metadata } from 'next';
import type { FC } from 'react';
import KesehatanForm from '@/components/Kesehatan/KesehatanForm';

export const metadata: Metadata = {
  title: 'Tambah Jabatan',
}

const Page: FC = () => {
  return <KesehatanForm mode="add" />
}

export default Page