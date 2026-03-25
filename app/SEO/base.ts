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


/*

Khuyến nghị cụ thể cho bạn (Trung tâm Toán Hóa)
Vì website giáo dục thường có nhiều loại trang (Trang chủ, Khóa học Toán, Khóa học Hóa, Luyện thi vào 10, Luyện thi đại học, Blog, Liên hệ...), tôi khuyên dùng cách 1:

Tạo thư mục app/metadata/
Để base.ts chứa những thứ chung (title template, description mặc định, OG chung, keywords chung…).
Tạo các file riêng cho từng nhóm lớn (courses, blog, exams…).
Dùng ...spread để merge metadata ở từng layout.

Lợi ích lớn nhất:

Khi thay đổi slogan, logo, màu sắc OG, hoặc thêm trường mới (ví dụ: verification cho Google Search Console) → chỉ sửa 1 chỗ.
Code sạch, dễ scale khi trung tâm mở thêm chi nhánh hoặc thêm mảng mới (Toán tiếng Anh, Hóa học thí nghiệm…).

3. Các tối ưu SEO quan trọng khác (nên làm ngay)
Tạo file robots.txt và sitemap.ts trong thư mục app.
Dùng next/image cho tất cả hình ảnh + thêm alt text chứa từ khóa.
Đảm bảo Core Web Vitals tốt (PageSpeed Insights ≥ 90).
Mỗi page con nên có generateMetadata riêng (ví dụ: trang khóa học Toán lớp 10, trang luyện thi đại học…).
Thêm canonical URL trên mọi trang.

Bạn muốn mình tối ưu thêm cho một trang cụ thể (ví dụ: trang chủ, trang khóa học Toán 10, trang liên hệ…) không? Hoặc cần thêm phần dynamic metadata (generateMetadata function)? Cứ nói mình chỉnh tiếp nhé!

*/