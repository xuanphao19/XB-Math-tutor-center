'use client';

export default function CallToAction() {
  return (
    <section
      id='contact'
      className='p-8 bg-green-500 text-white text-center'
    >
      <h2 className='text-3xl font-bold mb-4'>Đăng ký ngay hôm nay!</h2>
      <p className='mb-4'>Nhận tư vấn miễn phí & trải nghiệm lớp học thử.</p>
      <button className='bg-white text-green-500 px-6 py-3 rounded hover:bg-gray-100'>
        Đăng ký
      </button>
    </section>
  );
}
