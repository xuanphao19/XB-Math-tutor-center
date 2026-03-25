// app/metadata/base.ts
import type { Metadata } from 'next';

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://xb-math-tutor-center.vercel.app'),
  title: {
    default: 'Trung Tâm Toán Hóa 6-12',
    template: '%s | Trung Tâm Toán Hóa 6-12',
  },
  description: 'Không chỉ giỏi hơn – mà tốt hơn',
  keywords: ['trung tâm toán hóa', 'dạy toán hóa 6-12', 'luyện thi toán hóa'],
  openGraph: {
    images: [{ url: '/og-image.jpg' }],
  },
  // ... các field chung khác
};