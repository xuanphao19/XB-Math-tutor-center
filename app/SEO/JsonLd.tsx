// app/components/JsonLd.tsx

export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Trung Tâm Toán Hóa 6-12',
  description:
    'Trung tâm dạy kèm Toán - Hóa lớp 6 đến 12 chuyên sâu, luyện thi vào 10 & đại học',
  url: 'https://xb-math-tutor-center.vercel.app',
  logo: 'https://xb-math-tutor-center.vercel.app/assets/images/Logo.png',

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Địa chỉ cụ thể của bạn',
    addressLocality: 'Hà Nội',
    addressRegion: 'Việt Nam',
    postalCode: '100000',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '0123 456 789',
    contactType: 'customer service',
    areaServed: 'VN',
    availableLanguage: ['Vietnamese'],
  },
  sameAs: [
    'https://facebook.com/toanhoahoc',
    'https://www.youtube.com/@toanhoahoc',
    // thêm TikTok, Zalo OA, Instagram...
  ],
};

/*

Đoạn code này là gì?
Đó là JSON-LD (JavaScript Object Notation for Linked Data) –
một loại dữ liệu có cấu trúc (Structured Data) dùng ngôn ngữ Schema.org.
Nó mô tả thông tin về Trung Tâm Toán Hóa 6-12 dưới dạng mà
máy tính (Google, Bing…) dễ đọc và hiểu chính xác, thay vì
chỉ đọc văn bản thông thường trên website.

Tại sao phải tạo ra nó?
Google và các công cụ tìm kiếm không phải lúc nào cũng hiểu hết
nội dung website chỉ qua văn bản thông thường. Chúng có thể hiểu
sai hoặc không hiểu sâu (ví dụ: không biết rõ đây là trung tâm giáo
dục, địa chỉ, số điện thoại, Facebook…).

JSON-LD giúp bạn “nói trực tiếp” với Google rằng:
Đây là một Tổ chức giáo dục (EducationalOrganization)
Tên là gì, mô tả ra sao
Địa chỉ ở đâu
Số điện thoại liên hệ
Logo, website, các trang mạng xã hội…

Lợi ích thực tế khi thêm đoạn này

Tăng khả năng hiển thị đẹp trên Google (Rich Results)
Có thể xuất hiện đánh giá sao, logo, địa chỉ, số điện
thoại ngay trong kết quả tìm kiếm.
Tăng tỷ lệ click (CTR) vì kết quả trông chuyên nghiệp và đáng tin hơn.

Giúp Google hiểu website chính xác hơn
Cải thiện SEO lâu dài (dù không phải yếu tố xếp hạng trực tiếp).
Tốt cho tìm kiếm địa phương (Local SEO) và tìm kiếm giọng nói.

Hữu ích cho trung tâm giáo dục như của bạn
Khi ai đó tìm “trung tâm toán hóa Hà Nội”, Google dễ nhận diện và
hiển thị thông tin trung tâm của bạn đẹp hơn.


Ví dụ minh họa
Không có JSON-LD → Kết quả tìm kiếm chỉ là tiêu đề + mô tả thông thường.
Có JSON-LD → Kết quả có thể hiển thị thêm:

Logo trung tâm
Địa chỉ + số điện thoại
Liên kết Facebook, YouTube…


*/
