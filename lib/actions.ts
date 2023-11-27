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
      message: "Please provide all the necessary information.",
      success: false,
    };
  }

  const { name, email, phone, message } = validatedFields.data;

  try {
    // 2 second delay with promise resolver
    const response = await fetch("http://167.71.95.216/api/requests/", {
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
        message: "Request successfully created!",
        success: true,
      };
    } else {
      return {
        errors: null,
        message: "Error creating the request.",
        success: false,
      };
    }
  } catch (error) {
    return {
      message: "Technical issues. Please try again later.",
      success: false,
    };
  }
};
