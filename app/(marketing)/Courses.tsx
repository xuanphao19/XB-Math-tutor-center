'use client';

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const courses = [
  { grade: 6, subject: 'Toán', cta: 'Học ngay' },
  { grade: 6, subject: 'Hóa', cta: 'Học ngay' },
  { grade: 7, subject: 'Toán', cta: 'Học ngay' },
  { grade: 7, subject: 'Hóa', cta: 'Học ngay' },
  { grade: 8, subject: 'Toán', cta: 'Học ngay' },
  { grade: 8, subject: 'Hóa', cta: 'Học ngay' },
];

export default function Courses() {
  return (
    <Section id='courses'>
      <Container>
        <h2 className='text-3xl font-bold mb-6'>Khóa Học:</h2>
        <h3 className='flex items-center gap-3 text-xl font-bold mb-5'>
          <strong>Khóa Học Free</strong>
          <Button className='text-xs dark:text-foreground hover:bg-primary/90 hover:shadow-lg'>
            Tiếp tục học
          </Button>
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {courses.map((c, idx) => (
            <div
              key={idx}
              className='p-4 bg-white rounded-md shadow hover:-translate-y-1 hover:shadow-lg transition border border-blue-50 hover:border-blue-100'
            >
              <h4 className='font-bold text-xl dark:text-chart-4'>
                {c.subject} Lớp {c.grade}
              </h4>
              <p className='text-gray-600 mt-2'>
                Học trực tuyến & offline, giáo viên giàu kinh nghiệm.
              </p>
              <Button
                size='lg'
                className='mt-4 px-6 pb-1 bg-green-600 text-md text-white rounded-2xl hover:bg-green-500'
              >
                {c.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>{' '}
    </Section>
  );
}
