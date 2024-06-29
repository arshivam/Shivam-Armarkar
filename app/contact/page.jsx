import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Contact = () => {
  return (
    <section className="contact bg-[#fef9f5] dark:bg-transparent">
      <div className="container mx-auto flex flex-col items-center md:flex-row h-[81vh] xl:h-[74.1vh]">
        <h4 className="h4 max-w-[500px] py-6 text-center xl:text-left">
          "Seeking a skilled craftsman to transform your stunning UI designs
          into a seamlessly functioning reality? Let's bring your vision to life
          with precision and creativity!"
        </h4>
        <div className="w-full h-full p-8 flex flex-col items-center justify-center gap-y-4">
          <h3 className='h3'>Connect with me</h3>
          <a href='mailto:shivam.armarkar007@gmail.com'>
            <Button variant='secondary' className='dark:bg-secondary-foreground dark:text-black'><span className="px-2"><FcGoogle size={20}/></span><span>Mail to shivam.armarkar007@gmail.com</span></Button>
          </a>
          <div class="md:max-w-[534px] flex gap-[20px] flex-col text-sm subtitle">
            <p class="text-center">
              By providing your email, you agree to receive occasional emails
              from me. These emails may include important updates about my
              latest projects, insightful blog posts, and relevant replies.
            </p>
            <p class="text-center">
              Your privacy is important to me, and I assure you that I will not
              share your email address with third parties without your explicit
              consent.
            </p>
            <p class="text-center"> Thank you!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
