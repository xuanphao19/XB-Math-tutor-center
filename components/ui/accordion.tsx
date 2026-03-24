'use client';

import * as React from 'react';
import { Accordion as AccordionPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot='accordion'
      className={cn('flex w-full flex-col', className)}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn('not-last:border-b', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          data-slot='accordion-trigger-icon'
          className='pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden'
        />
        <ChevronUpIcon
          data-slot='accordion-trigger-icon'
          className='pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline'
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up'
      {...props}
    >
      <div
        className={cn(
          'h-(--radix-accordion-content-height) pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4',
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

/*

<div data-index="5" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 1151px;"><div><div tabindex="-1" style="width: 100%; display: inline-block;"><div class="Slideshow-module__item___ZYDpU" style="--cta-hover-color: #fe215e; background: linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2));"><div class="Slideshow-module__left___Y4eF1"><h2 class="Slideshow-module__heading___t47-1"><a href="https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw" target="_blank" rel="noreferrer">F8 trên Youtube</a></h2><p class="Slideshow-module__desc___JJ7FL">F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.</p><div><a href="https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw" target="_blank" rel="noreferrer" class="Slideshow-module__ctaBtn___8SSsM">ĐĂNG KÝ KÊNH</a></div></div><div class="Slideshow-module__right___ZmKhS"><a href="https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw" target="_blank" rel="noreferrer"><img class="Slideshow-module__img___gC5py" src="https://files.f8.edu.vn/f8-prod/banners/Banner_03_youtube.png" alt="F8 trên Youtube" title="F8 trên Youtube"></a></div></div></div></div></div>

*/
