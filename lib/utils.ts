import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// lib/smoothScroll.ts
/**
 * Smooth scroll vào phần <main> đang scroll (không scroll window)
 * Dùng cho trường hợp layout có Sidebar + main overflow-auto
 */
export const smoothScrollTo = (href: string, offset: number = 20) => {
  const targetId = href.startsWith('#') ? href.slice(1) : href;
  const targetElement = document.getElementById(targetId);

  if (!targetElement) {
    console.warn(`Không tìm thấy section với id: ${targetId}`);
    return;
  }

  // Tìm thẻ <main> đang chứa nội dung và scroll
  const mainElement = document.querySelector('main#main-scroll') as HTMLElement | null;

  if (mainElement) {
    // Tính toán vị trí chính xác relative với main
    const mainRect = mainElement.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();

    const scrollPosition =
      targetRect.top -
      mainRect.top +
      mainElement.scrollTop -
      offset;

    mainElement.scrollTo({
      top: scrollPosition,
      behavior: 'smooth' as ScrollBehavior,
    });
  }
  else {
    // Fallback: nếu không tìm thấy main thì scroll window bình thường
    const yOffset = -offset;
    const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  }
};


// lib/smoothScroll.ts

/**
 * Scroll về đầu trang (đầu của thẻ <main>)
 */
export const scrollToTop = (offset: number = 0) => {
  const mainElement = document.querySelector('main') as HTMLElement | null;

  if (mainElement) {
    mainElement.scrollTo({
      top: offset,
      behavior: 'smooth',
    });
  } else {
    // Fallback nếu không tìm thấy main
    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });
  }
};
