import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import Circles from "./ui/Circles";
import CopyButton from "./ui/CopyButton";
import { Form } from "./ui/Form";
import SectionName from "./ui/SectionName";

const Contact = () => {
  return (
    <Element
      name="contact"
      className="mb-[80px] flex flex-col items-center justify-center"
    >
      <SectionName>Contact</SectionName>
      <div className="relative mx-5 flex max-w-lg flex-col items-center justify-between gap-16 md:max-w-none lg:flex-row">
        {/* Contact */}
        <div className="flex flex-col gap-8 text-center md:flex-row md:text-start lg:flex-col lg:gap-[60px]">
          <div className="flex flex-col justify-center gap-6">
            <h2 className="text-3xl font-bold xl:text-[40px]">
              Let&apos;s Talk – It&apos;s Absolutely Free!
            </h2>
            <p className="text-xl opacity-80 xl:text-2xl">
              Discuss your project and goals with us, and let&apos;s find the
              best solution.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-10 md:gap-5 lg:gap-10">
            {/* Наша почта */}
            <div className="flex flex-col items-center gap-2 md:items-start lg:gap-3.5">
              <p className="text-lg xl:text-xl">Email Us:</p>
              <div className="flex gap-5">
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                  className="flex w-fit items-center justify-center gap-3 hover:underline md:justify-start"
                >
                  <Image
                    src="/images/contact/email.svg"
                    alt="email"
                    width={42}
                    height={30}
                    className="h-[22px] w-[31px] xl:h-[30px] xl:w-[42px]"
                  />
                  <span className="text-2xl xl:text-[28px]">
                    {process.env.NEXT_PUBLIC_EMAIL}
                  </span>
                </Link>
                <CopyButton textToCopy={process.env.NEXT_PUBLIC_EMAIL!} />
              </div>
            </div>
            {/* Наш телефон */}
            <div className="flex flex-col items-center gap-2 md:items-start lg:gap-3.5">
              <p className="text-lg xl:text-xl">Phone:</p>
              <div className="flex gap-5">
                <Link
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                  className="flex w-fit items-center justify-center gap-3 hover:underline md:justify-start"
                >
                  <Image
                    src="/images/contact/phone.svg"
                    alt="phone"
                    width={35}
                    height={35}
                    className="h-[26px] w-[26px] xl:h-[35px] xl:w-[35px]"
                  />
                  <span className="text-2xl xl:text-[28px]">
                    {process.env.NEXT_PUBLIC_PHONE}
                  </span>
                </Link>
                <CopyButton textToCopy={process.env.NEXT_PUBLIC_PHONE!} />
              </div>
            </div>
            {/* Наши соцсети */}
            <div className="flex flex-col gap-2 lg:gap-3.5">
              <p className="text-lg xl:text-xl">Social Media:</p>
              <div className="flex justify-center gap-6 md:justify-start">
                {/* WhatsApp */}
                <Link
                  href="#"
                  className="transition duration-300 hover:scale-110"
                >
                  <Image
                    src="/images/contact/whatsapp.svg"
                    alt="phone"
                    width={50}
                    height={50}
                    className="h-9 w-9 xl:h-[50px] xl:w-[50px]"
                  />
                </Link>
                {/* Instagram */}
                <Link
                  href="#"
                  className="transition duration-300 hover:scale-110"
                >
                  <Image
                    src="/images/contact/insta.svg"
                    alt="phone"
                    width={50}
                    height={50}
                    className="h-9 w-9 xl:h-[50px] xl:w-[50px]"
                  />
                </Link>
                {/* Telegram */}
                <Link
                  href="#"
                  className="transition duration-300 hover:scale-110"
                >
                  <Image
                    src="/images/contact/telegram.svg"
                    alt="phone"
                    width={50}
                    height={50}
                    className="h-9 w-9 xl:h-[50px] xl:w-[50px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Form />
      </div>
      <Circles className="absolute left-[10%] top-[89%] -z-50 max-h-max w-1/5" />
      <Circles className="absolute left-[50%] top-[92%] -z-50 max-h-max w-2/5" />
    </Element>
  );
};

export default Contact;
