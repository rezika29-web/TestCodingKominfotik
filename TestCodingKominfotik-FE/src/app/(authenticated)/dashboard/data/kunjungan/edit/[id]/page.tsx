import type { Metadata } from 'next';
import type { FC } from 'react';
import KunjunganForm from '@/components/Pasien/KunjunganForm';

export const metadata: Metadata = {
  title: 'Edit Kunjungan Pasien',
}

const Page: FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;

  return <KunjunganForm mode="edit" id={id} />
}

export default Page
