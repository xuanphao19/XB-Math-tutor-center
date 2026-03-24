'use client';

import * as React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Plus,
  Edit,
  Trash2,
  Heart,
  Settings,
  ArrowLeft,
  ArrowRight,
  Loader2,
  Send,
} from 'lucide-react';
import Link from 'next/link';

export default function ButtonExamples() {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className='min-h-screen bg-background py-12 px-6'>
      <div className='max-w-5xl mx-auto'>
        <div className='mb-12'>
          <h1 className='text-4xl font-bold tracking-tight mb-3'>Button Component</h1>
          <p className='text-xl text-muted-foreground'>
            Hệ thống Button được xây dựng bằng <code>class-variance-authority</code> +
            Radix Slot. Hỗ trợ đầy đủ dark mode, responsive và composition.
          </p>
        </div>

        {/* 1. Variants & Sizes */}
        <section className='mb-16'>
          <h2 className='text-2xl font-semibold mb-6 flex items-center gap-2'>
            1. Variants &amp; Sizes
          </h2>
          <div className='flex flex-wrap gap-4'>
            <Button>Default</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='destructive'>Destructive</Button>
            <Button variant='link'>Link</Button>
          </div>

          <div className='mt-8 flex flex-wrap gap-4'>
            <Button size='xs'>Size xs</Button>
            <Button size='sm'>Size sm</Button>
            <Button size='default'>Default (h-8)</Button>
            <Button size='lg'>Size lg</Button>
          </div>

          <div className='mt-8 flex gap-4'>
            <Button size='icon'>
              <Heart className='size-4 ' />
            </Button>
            <Button size='icon-sm'>
              <Settings className='size-4' />
            </Button>
            <Button size='icon-lg'>
              <Settings className='size-5' />
            </Button>
          </div>
        </section>

        {/* 2. With Icons */}
        <section className='mb-16'>
          <h2 className='text-2xl font-semibold mb-6'>2. Buttons với Icon</h2>
          <div className='flex flex-wrap gap-4'>
            <Button>
              <Plus className='size-4' />
              Thêm mới
            </Button>

            <Button variant='outline'>
              <Edit className='size-4' />
              Chỉnh sửa
            </Button>

            <Button
              variant='destructive'
              size='sm'
            >
              <Trash2 className='size-4' />
              Xóa
            </Button>

            <Button
              variant='ghost'
              size='sm'
            >
              <Heart className='size-4' />
              Yêu thích
            </Button>
          </div>

          <div className='mt-6 flex flex-wrap gap-4'>
            <Button has-data-icon='inline-start'>
              <ArrowLeft className='size-4' />
              Quay lại
            </Button>

            <Button
              has-data-icon='inline-end'
              variant='secondary'
            >
              Tiếp tục
              <ArrowRight className='size-4' />
            </Button>
          </div>
        </section>

        {/* 3. Button Group */}
        <section className='mb-16'>
          <h2 className='text-2xl font-semibold mb-6'>3. Button Group</h2>

          <div
            className='inline-flex rounded-lg border border-border overflow-hidden'
            data-slot='button-group'
          >
            <Button
              variant='outline'
              className='rounded-none'
            >
              Trước
            </Button>
            <Button
              variant='outline'
              className='rounded-none border-l-0'
            >
              Hôm nay
            </Button>
            <Button
              variant='outline'
              className='rounded-none border-l-0'
            >
              Sau
            </Button>
          </div>

          <div
            className='mt-6 inline-flex flex-col rounded-lg border border-border overflow-hidden'
            data-slot='button-group'
          >
            <Button
              variant='outline'
              className='rounded-none'
            >
              Profile
            </Button>
            <Button
              variant='outline'
              className='rounded-none border-t-0'
            >
              Settings
            </Button>
            <Button
              variant='outline'
              className='rounded-none border-t-0'
            >
              Logout
            </Button>
          </div>
        </section>

        {/* 4. AsChild Composition */}
        <section className='mb-16'>
          <h2 className='text-2xl font-semibold mb-6'>4. AsChild (Composition)</h2>
          <div className='flex flex-wrap gap-4'>
            <Button asChild>
              <a
                href='https://google.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Mở liên kết ngoài
              </a>
            </Button>

            <Button
              asChild
              variant='outline'
            >
              <Link href='/dashboard'>Vào Dashboard (Next.js Link)</Link>
            </Button>

            <Button
              asChild
              size='lg'
              variant='secondary'
            >
              <a href='#demo'>Custom Anchor</a>
            </Button>
          </div>
        </section>

        {/* 5. States */}
        <section className='mb-16'>
          <h2 className='text-2xl font-semibold mb-6'>
            5. States (Disabled, Loading, Invalid)
          </h2>
          <div className='flex flex-wrap gap-4'>
            <Button disabled>Disabled</Button>
            <Button
              variant='outline'
              disabled
            >
              Outline Disabled
            </Button>

            <Button
              onClick={handleLoadingDemo}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className='size-4 animate-spin' />
                  Đang xử lý...
                </>
              ) : (
                <>
                  <Send className='size-4' />
                  Gửi yêu cầu
                </>
              )}
            </Button>

            <Button
              variant='destructive'
              className='aria-invalid:border-destructive aria-invalid:ring-destructive/20'
            >
              Invalid Field
            </Button>
          </div>
        </section>

        {/* 6. Responsive & Full width */}
        <section className='mb-16'>
          <h2 className='text-2xl font-semibold mb-6'>6. Responsive & Full Width</h2>
          <div className='flex flex-col sm:flex-row gap-4 max-w-md'>
            <Button
              className='w-full sm:w-auto'
              size='lg'
            >
              Button full width trên mobile
            </Button>
            <Button
              variant='outline'
              className='w-full sm:w-auto'
              size='lg'
            >
              Cancel
            </Button>
          </div>
          <p className='mt-4 text-sm text-muted-foreground'>
            Thử thu nhỏ màn hình để thấy hiệu ứng responsive.
          </p>
        </section>

        {/* 7. Using buttonVariants directly */}
        <section className='mb-16'>
          <h2 className='text-2xl font-semibold mb-6'>
            7. Sử dụng buttonVariants trực tiếp
          </h2>
          <a
            href='#'
            className={buttonVariants({
              variant: 'default',
              size: 'lg',
              className: 'shadow-lg hover:shadow-xl',
            })}
          >
            Link styled as Button
          </a>
        </section>

        {/* Footer note */}
        <div className='pt-12 border-t border-border'>
          <p className='text-sm text-muted-foreground'>
            Component <code>Button</code> được thiết kế theme-ready (dark mode),
            responsive và hỗ trợ mạnh mẽ <code>asChild</code> pattern từ Radix UI.
            <br />
            Bạn có thể dễ dàng mở rộng variant/size bằng cách chỉnh sửa{' '}
            <code>buttonVariants</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
