import type { Metadata } from 'next';

export const homeMetadata: Metadata = {
  metadataBase: new URL('https://xb-math-tutor-center.vercel.app/'),

  title: {
    default: 'Trung Tâm Toán Hóa 6-12 | Dạy Toán Hóa Chuyên Sâu - Kết Quả Cao',
    template: '%s | Trung Tâm Toán Hóa 6-12',
  },

  description:
    'Trung tâm Toán Hóa 6-12 uy tín tại Việt Nam. Dạy kèm Toán - Hóa lớp 6 đến 12 chuyên sâu, luyện thi vào 10, thi đại học. Giáo viên giỏi, phương pháp hiện đại, học sinh tiến bộ rõ rệt. Không chỉ giỏi hơn – mà tốt hơn!',

  keywords: [
    'trung tâm toán hóa',
    'dạy toán hóa lớp 6 7 8 9 10 11 12',
    'luyện thi toán hóa vào 10',
    'luyện thi đại học toán hóa',
    'gia sư toán hóa uy tín',
    'học toán hóa online',
    'khóa học toán hóa chuyên sâu',
    'toán hóa 6-12',
  ],

  authors: [{ name: 'Trung Tâm Toán Hóa 6-12' }],
  creator: 'Trung Tâm Toán Hóa 6-12',

  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://xb-math-tutor-center.vercel.app/',
    siteName: 'Trung Tâm Toán Hóa 6-12',
    title: 'Trung Tâm Toán Hóa 6-12 | Dạy Toán Hóa Chuyên Sâu - Kết Quả Cao',
    description:
      'Dạy kèm Toán - Hóa lớp 6-12 chất lượng cao. Giáo viên giỏi, lộ trình cá nhân hóa, giúp học sinh tự tin chinh phục kỳ thi. Không chỉ giỏi hơn – mà tốt hơn!',
    images: [
      {
        url: 'https://xb-math-tutor-center.vercel.app/assets/images/53be7bd1.png',
        width: 1200,
        height: 630,
        alt: 'Trung Tâm Toán Hóa 6-12',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Trung Tâm Toán Hóa 6-12 | Dạy Toán Hóa Chuyên Sâu',
    description:
      'Không chỉ giỏi hơn – mà tốt hơn. Luyện Toán – Hóa từ cơ bản đến nâng cao Dạy kèm Toán - Hóa lớp 6-12. Luyện thi vào 10 & đại học hiệu quả cao.',
    images: ['https://xb-math-tutor-center.vercel.app/assets/images/Logo.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: 'https://xb-math-tutor-center.vercel.app/assets/images/chess-nb.png',
    apple: 'https://xb-math-tutor-center.vercel.app/assets/images/chess-nb.png',
  },
  alternates: {
    canonical: 'https://xb-math-tutor-center.vercel.app',
  },
  category: 'education',
};