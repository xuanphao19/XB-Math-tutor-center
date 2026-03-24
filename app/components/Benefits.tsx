'use client';

const benefits = [
  'Phương pháp học cá nhân hóa',
  'Giáo viên giàu kinh nghiệm',
  'Kết quả rõ rệt',
  'Cộng đồng học tập hỗ trợ',
];

export default function Benefits() {
  return (
    <section
      id='benefits'
      className='p-8 bg-green-50'
    >
      <h2 className='text-3xl font-bold mb-6'>Tại sao chọn chúng tôi</h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {benefits.map((b, i) => (
          <li
            key={i}
            className='p-4 bg-white rounded shadow text-center font-semibold'
          >
            {b}
          </li>
        ))}
      </ul>
    </section>
  );
}
