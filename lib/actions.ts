"use server";

import Cookies from "js-cookie";
import { OrderSchema, State } from "./utils";

export const createOrder = async (prevState: State, formData: FormData) => {
  const validatedFields = OrderSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Пожалуйста, укажите все необходимые данные.",
      success: false,
    };
  }

  const { name, email, phone, message } = validatedFields.data;

  try {
    // 2 second delay with promise resolver
    const response = await fetch("http://127.0.0.1:8000/api/requests/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken") || "",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
      credentials: "include",
    });

    if (response.ok) {
      return {
        errors: null,
        message: "Заявка успешно создана!",
        success: true,
      };
    } else {
      return {
        errors: null,
        message: "Ошибка при создании заявки.",
        success: false,
      };
    }
  } catch (error) {
    return {
      message: "Технические проблемы. Пожалуйста, повторите позже.",
      success: false,
    };
  }
};
