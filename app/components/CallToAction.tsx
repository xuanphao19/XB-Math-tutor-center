'use client';

import { Button } from '@/components/ui/button';

export default function CallToAction() {
  return (
    <section
      id='contact'
      className='p-8 bg-green-500 text-white text-center'
    >
      <h2 className='text-3xl font-bold mb-4'>Đăng ký ngay hôm nay!</h2>
      <p className='text-xl mb-4'>Nhận tư vấn miễn phí & trải nghiệm lớp học thử.</p>
      <Button className='text-xl text-green-500 tracking-widest p-6 rounded-sm bg-white hover:bg-gray-100'>
        Đăng ký
      </Button>
    </section>
  );
}
