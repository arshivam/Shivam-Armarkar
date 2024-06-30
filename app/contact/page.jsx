'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Contact = () => {
  return (
    <section className="contact dark:bg-transparent">
      <div className="container mx-auto flex flex-col items-center md:flex-row min-h-screen xl:min-h-screen">
        <h4 className="h4 max-w-[500px] py-6 text-center xl:text-left">
          &quot;Seeking a skilled craftsman to transform your stunning UI designs
          into a seamlessly functioning reality? Let&apos;s bring your vision to life
          with precision and creativity!&quot;
        </h4>
        <div className="w-full h-full p-8 flex flex-col items-center justify-center gap-y-4">
          <h3 className='h3'>Connect with me</h3>
          <a target="_blank" href='mailto:shivam.armarkar007@gmail.com'>
            <Button variant='secondary' className='dark:bg-secondary-foreground dark:text-black'><span className="px-2"><FcGoogle size={20}/></span><span>Mail to shivam.armarkar007@gmail.com</span></Button>
          </a>
          <div className="md:max-w-[534px] flex gap-[20px] flex-col text-sm subtitle">
            <p className="text-center">
              By providing your email, you agree to receive occasional emails
              from me. These emails may include important updates about my
              latest projects, insightful blog posts, and relevant replies.
            </p>
            <p className="text-center">
              Your privacy is important to me, and I assure you that I will not
              share your email address with third parties without your explicit
              consent.
            </p>
            <p className="text-center"> Thank you!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
