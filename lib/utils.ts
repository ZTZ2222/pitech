import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const customEase = [0.33, 1, 0.68, 1];

export const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

export const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: customEase,
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: customEase,
      duration: 0.8,
    },
  },
};

export const itemLogo = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: customEase,
      duration: 1.6,
    },
  },
};

export const OrderSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Enter your name." })
    .max(100, { message: "Maximum name length is 100 characters." }),
  email: z
    .string()
    .email({ message: "Enter a valid email." })
    .max(100, { message: "Maximum email length is 100 characters." }),
  phone: z
    .string()
    .min(1, { message: "Enter your phone number." })
    .max(50, { message: "Maximum phone number length is 50 characters." }),
  message: z.string().min(1, { message: "Enter your message." }),
});

export interface State {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  } | null;
  message?: string | null;
  success?: boolean;
}
