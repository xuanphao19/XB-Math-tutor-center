// app/components/Hero.tsx
'use client';

import Link from 'next/link';
import Slider from '@/components/ui/Slider';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

const heroSlidesData = [
  {
    title: 'Cộng đồng XB Math',
    description:
      'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
    ctaText: 'THAM GIA NHÓM',
    ctaLink: 'https://www.facebook.com/f8vnofficial',
    imgSrc: 'https://files.f8.edu.vn/f8-prod/banners/Banner_04_2.png',
    imgAlt: 'XB Math trên Facebook',
    bgGradient: 'from-indigo-800 via-blue-700 to-cyan-500',
    accentColor: '--color-indigo-800',
  },
  {
    title: 'XB Math trên Youtube',
    description:
      'F8 được nhắc tới ở mọi nơi, cơ hội việc làm nghề IT, nơi những con người yêu lập trình sẽ ở đó.',
    ctaText: 'ĐĂNG KÝ KÊNH',
    ctaLink: 'https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw',
    imgSrc: 'https://files.f8.edu.vn/f8-prod/banners/Banner_03_youtube.png',
    imgAlt: 'XB Math trên Youtube',
    bgGradient: 'from-orange-400 via-pink-500 to-rose-500',
    accentColor: '--color-orange-400',
  },

  {
    title: 'Đăng ký Học Kèm 1 - 1',
    description:
      'Đăng ký học Online - Offline tương tác 1 - 1 trực tiếp với đội ngũ giáo viên giỏi giầu kinh nghiêm của chúng tôi',
    ctaText: 'THAM GIA NHÓM',
    ctaLink: 'https://www.facebook.com/f8vnofficial',
    imgSrc: 'https://files.f8.edu.vn/f8-prod/banners/Banner_04_2.png',
    imgAlt: 'F8 trên Facebook',
    bgGradient: 'from-purple-700 via-fuchsia-700 to-pink-700',
    accentColor: '--color-purple-700',
  },
  {
    title: 'Lớp XB Math qua Zoom',
    description:
      'F8 được nhắc tới ở mọi nơi, cơ hội việc làm nghề IT, nơi những con người yêu lập trình sẽ ở đó.',
    ctaText: 'ĐĂNG KÝ KÊNH',
    ctaLink: '/',
    imgSrc: '/assets/images/chess-nb.png',
    imgAlt: 'XB Math trên Youtube',
    bgGradient: 'from-blue-500 via-indigo-600 to-violet-600',
    accentColor: '--color-blue-500',
  },
  {
    title: 'Bạn Bị Mất Gốc Toán?',
    description:
      'Đăng ký học Online - Offline tương tác 1 - 1 trực tiếp với đội ngũ giáo viên giỏi giầu kinh nghiêm của chúng tôi',
    ctaText: 'THAM GIA NHÓM',
    ctaLink: 'https://www.facebook.com/f8vnofficial',
    imgSrc: 'https://files.f8.edu.vn/f8-prod/banners/Banner_04_2.png',
    imgAlt: 'F8 trên Facebook',
    bgGradient: 'from-purple-600 via-fuchsia-500 to-pink-400',
    accentColor: '--color-purple-600',
  },
  {
    title: 'Bạn Bị Mất Gốc Hóa?',
    description:
      'Đăng ký học Online - Offline tương tác 1 - 1 trực tiếp với đội ngũ giáo viên giỏi giầu kinh nghiêm của chúng tôi',
    ctaText: 'Tham gia học',
    ctaLink: 'https://www.facebook.com/f8vnofficial',
    imgSrc: 'https://files.f8.edu.vn/f8-prod/banners/Banner_04_2.png',
    imgAlt: 'F8 trên Facebook',
    bgGradient: 'from-pink-500 to-orange-400',
    accentColor: '--color-pink-500',
  },
];

function HeroSlide({
  title,
  description,
  ctaText,
  ctaLink,
  imgSrc,
  imgAlt,
  bgGradient,
  accentColor,
}: (typeof heroSlidesData)[0]) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between gap-6 text-white p-6 md:px-8 rounded-lg bg-linear-to-r ${bgGradient}`}
    >
      <div className='flex-1 space-y-4'>
        <h2 className='mb-4 text-xl md:text-2xl font-bold'>
          <Link
            href={ctaLink}
            target='_blank'
            rel='noreferrer'
          >
            {title}
          </Link>
        </h2>
        <p className='text-sm md:text-base line-clamp-2 wrap-break-word'>{description}</p>
        <Link
          href={ctaLink}
          target='_blank'
          rel='noreferrer'
          className={`group inline-block px-4 py-2 text-xs font-semibold rounded-full border border-white/80 bg-white/10 hover:bg-white hover:text-accent transition-all duration-250 uppercase`}
          style={
            {
              '--accent': `var(${String(accentColor)})`,
            } as React.CSSProperties
          }
        >
          {ctaText}
        </Link>
      </div>

      <div className='flex-1 flex justify-center md:justify-end'>
        <Link
          href={ctaLink}
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            className='w-full h-46 max-w-sm rounded-lg shadow-lg'
          />
        </Link>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const slides = heroSlidesData.map((slide, idx) => (
    <HeroSlide
      key={idx}
      {...slide}
    />
  ));

  return (
    <Section className='pt-1 sm:pt-1'>
      <Container className={`px-2`}>
        <Slider
          customSlider={`
            ul li.slick-active > * {
              background-color: #fe215e;
              transform: scaleX(2);
              transform-origin: left;
              transition:
                transform 0.5s ease-in-out,
                background-color 0.3s;
            }
            .slick-list {
              border-radius: 16px;
            }
          `}
          settings={{
            autoplaySpeed: 8000,
            className: 'hero-slider-wrap px-2',
          }}
          slides={slides}
        />
      </Container>
    </Section>
  );
}
