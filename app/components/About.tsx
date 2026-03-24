'use client';

export default function About() {
  return (
    <section
      id='about'
      className='p-8 bg-white text-gray-800'
    >
      <h2 className='text-3xl font-bold mb-4'>Về Chúng Tôi</h2>
      <p className='mb-4'>
        Chúng tôi chuyên dạy Toán & Hóa từ lớp 6–12 với phương pháp học tối ưu.
      </p>
      <ul className='list-disc ml-6 space-y-2'>
        <li>Giáo viên giàu kinh nghiệm</li>
        <li>Phương pháp học cá nhân hóa</li>
        <li>Kết quả cải thiện rõ rệt</li>
      </ul>
    </section>
  );
}
