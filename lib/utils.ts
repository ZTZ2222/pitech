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
    .min(1, { message: "Введите ваше имя." })
    .max(100, { message: "Максимальная длина имени 100 символов." }),
  email: z
    .string()
    .email({ message: "Введите корректный email." })
    .max(100, { message: "Максимальная длина email 100 символов." }),
  phone: z
    .string()
    .min(1, { message: "Введите ваш телефон." })
    .max(50, { message: "Максимальная длина номера 50 символов." }),
  message: z.string().min(1, { message: "Введите ваше сообщение." }),
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
