"use client";

import { createOrder } from "@/lib/actions";
import { customEase } from "@/lib/utils";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { InputHTMLAttributes, Ref, forwardRef, useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import FormButton from "./Button";

// Form
export const Form = () => {
  const initialState = { message: null, error: {} };
  const [state, dispatch] = useFormState(createOrder, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
    } else if (state.errors) {
      toast.info(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <motion.form
      action={dispatch}
      variants={wrapperVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, ease: customEase }}
      viewport={{ once: true }}
      className="relative flex max-w-lg translate-x-0 flex-col overflow-clip rounded-br-3xl rounded-tl-3xl bg-custom-gray px-10 py-7 xl:max-w-xl xl:px-16 xl:py-10"
    >
      <motion.h2
        variants={itemVariants}
        className="mb-5 text-xl font-bold text-white lg:text-2xl xl:mb-6"
      >
        Оставьте нам сообщение, и мы обязательно свяжемся с вами.
      </motion.h2>
      <FloatingLabel
        variants={itemVariants}
        id="name"
        name="name"
        label="Имя"
        autoComplete="given-name"
        errors={state.errors?.name}
      />
      <FloatingLabel
        variants={itemVariants}
        id="email"
        name="email"
        label="Email"
        type="email"
        autoComplete="email"
        errors={state.errors?.email}
      />
      <FloatingLabel
        variants={itemVariants}
        id="phone"
        name="phone"
        label="Телефон"
        type="tel"
        autoComplete="tel"
        errors={state.errors?.phone}
      />
      <Textarea
        variants={itemVariants}
        id="message"
        name="message"
        title="Сообщение"
        className="mt-3"
        autoComplete="off"
        errors={state.errors?.message}
      />
      <FormButton variants={itemVariants} />
      <svg
        className="absolute -right-[22%] top-[5%] h-56 w-56 -rotate-45 opacity-5 md:h-72 md:w-72"
        viewBox="0 0 371 371"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="185.5" cy="185.5" r="185.5" fill="black" />
        <path d="M156 185L156 285L116 285L116 185L156 185Z" fill="white" />
        <path d="M156 125L156 165L116 165L116 125L156 125Z" fill="white" />
        <path
          d="M121 95L131 95C142.046 95 151 103.954 151 115V115L141 115C129.954 115 121 106.046 121 95V95Z"
          fill="white"
        />
        <path
          d="M156 105L186 105C213.614 105 236 127.386 236 155V155C236 182.614 213.614 205 186 205L156 205"
          stroke="white"
          strokeWidth="40"
        />
        <path
          d="M241.505 87.47V89.525H238.715V98H236.15V89.525H233.36V87.47H241.505ZM254.717 87.47V98H252.152V91.685L249.797 98H247.727L245.357 91.67V98H242.792V87.47H245.822L248.777 94.76L251.702 87.47H254.717Z"
          fill="white"
        />
      </svg>
    </motion.form>
  );
};

// FloatingLabel
interface FloatingLabelInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  variants?: any;
  errors?: string[] | null;
}

const FloatingLabel = forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  (
    { label, className, variants, errors, ...props },
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <motion.div variants={variants} className={clsx("relative", className)}>
        <input
          className={clsx(
            "peer block w-full appearance-none border-0 border-b-2 border-white bg-transparent px-0 py-1.5 text-xl text-white focus:border-accent focus:outline-none focus:ring-0",
          )}
          placeholder=" "
          {...props}
          ref={ref}
        />
        <label
          htmlFor={props.id}
          className={clsx(
            "absolute top-3 origin-top-left -translate-y-6 scale-75 transform text-xl text-white duration-300",
            "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-accent",
          )}
        >
          {label}
        </label>
        <div className="mb-3 mt-1 h-5 xl:h-6">
          <AnimatePresence>
            {errors && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  rotate: [1, -1, 1, -1, 1, -1, 0],
                }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.2,
                  ease: "backInOut",
                }}
                id={`${props.id}-error`}
                aria-live="polite"
                className="text-sm font-medium text-sky-300"
              >
                {errors.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  },
);

FloatingLabel.displayName = "FloatingLabel";

// Textarea
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
  className?: string;
  variants?: any;
  errors?: string[] | null;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { title, className, variants, errors, ...props },
    ref: Ref<HTMLTextAreaElement>,
  ) => {
    return (
      <motion.div variants={variants} className={clsx("relative", className)}>
        <textarea
          rows={5}
          className={clsx(
            "peer block w-full appearance-none rounded-lg border border-white bg-transparent px-5 py-2.5 text-xl text-white focus:border-accent focus:outline-none focus:ring-0",
          )}
          placeholder=" "
          {...props}
          ref={ref}
        ></textarea>
        <label
          htmlFor={props.id}
          className={clsx(
            "absolute left-3 top-1.5 origin-top-left -translate-y-6 scale-75 transform text-xl text-white duration-300",
            "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-3 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-accent",
          )}
        >
          {title}
        </label>
        <div className="mb-3 mt-1 h-5 xl:h-6">
          <AnimatePresence>
            {errors && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.3,
                  ease: "backInOut",
                }}
                id={`${props.id}-error`}
                aria-live="polite"
                className="text-sm font-medium text-sky-300"
              >
                {errors.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  },
);

Textarea.displayName = "Textarea";

const wrapperVariants = {
  visible: {
    scaleX: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.15 },
  },
  hidden: {
    scaleX: 0,
  },
};

const itemVariants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: -25,
  },
};
