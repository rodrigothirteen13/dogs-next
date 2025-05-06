import { Metadata } from 'next';
import React from 'react';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Minha Conta',
};

export default function ContaPage() {
  return (
    <main>
      <h1>Conta</h1>
    </main>
  );
}
