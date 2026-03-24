'use client';

import Section from '@/components/ui/Section';
import Container from './../../components/ui/Container';

export default function About() {
  return (
    <Section
      id='about'
      bgColor='bg-green-100'
    >
      <Container>
        <h2 className='text-chart-5 text-3xl font-bold mb-4'>Về Chúng Tôi</h2>
        <p className='mb-4 text-chart-3'>
          Chúng tôi chuyên dạy Toán & Hóa từ lớp 6–12 với phương pháp học tối ưu.
        </p>
        <ul className='list-disc ml-6 space-y-2 text-chart-3'>
          <li>Giáo viên giàu kinh nghiệm</li>
          <li>Phương pháp học cá nhân hóa</li>
          <li>Kết quả cải thiện rõ rệt</li>
        </ul>
      </Container>
    </Section>
  );
}
