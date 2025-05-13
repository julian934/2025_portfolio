import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Metadata } from 'next'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

