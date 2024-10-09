import type { Metadata } from 'next';
import type { FC } from 'react';
import KesehatanForm from '@/components/Kesehatan/KesehatanForm';

export const metadata: Metadata = {
  title: 'Edit Data Kesehatan Pasien',
}

const Page: FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;

  return <KesehatanForm mode="edit" id={id} />
}

export default Page
