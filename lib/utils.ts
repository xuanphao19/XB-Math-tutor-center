import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const smoothScrollTo = (href: string, offset: number = 80) => {
  // Lấy id từ href (loại bỏ dấu # nếu có)
  const targetId = href.startsWith('#') ? href.slice(1) : href;
  const element = document.getElementById(targetId);

  if (!element) {
    console.warn(`Không tìm thấy section với id: ${targetId}`);
    return;
  }

  const bodyRect = document.body.getBoundingClientRect().top;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - bodyRect - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};