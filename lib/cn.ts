// lib/cn.ts
import { twMerge } from "tailwind-merge";

// Hàm cn dùng gộp className (giống clsx + twMerge)
export function cn(...classes: (string | undefined | false | null)[]) {
  return twMerge(classes.filter(Boolean).join(" "));
}