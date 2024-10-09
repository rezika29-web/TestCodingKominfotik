import type { Metadata } from 'next';
import type { FC } from 'react';
import PasienForm from '@/components/Pasien/PasienForm';

export const metadata: Metadata = {
  title: 'Edit Pasien',
}

const Page: FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;

  return <PasienForm mode="edit" id={id} />
}

export default Page
