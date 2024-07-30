import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const classNames = (...inputs: string[]): string => twMerge(clsx(inputs));
