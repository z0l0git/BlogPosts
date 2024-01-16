import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full md:w-[800px] flex items-center justify-center bg-white">
      <div className="hidden w-[1216px] md:flex flex-col gap-[25px]">
        <div className="flex justify-between ">
          <div className="w-1/3 flex flex-col gap-5">
            <h2 className="text-2xl font-bold">About</h2>
            <p>
              This footer looks like ass. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Atque, optio! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Deserunt, beatae!
            </p>
            <div className="font-semibold">
              <p>Email : zolbayar.in@gmail.com</p>
              <p>Phone : +976 80052392</p>
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-center gap-5">
            <p className="">
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/blog">Blog</a>
            </p>
            <p>
              <a href="/contact">Contact</a>
            </p>
          </div>
          <div className="w-1/3 flex justify-around ">
            <FaFacebook size={30} />
            <FaInstagram size={30} />
            <FaTwitter size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Image src="/flogo.png" alt="logo" width={48} height={48} />
            <div>
              <p className="italic text-[20px] ">
                Meta<span className="font-bold">Blog</span>
              </p>
              <p>© All rights reserved.</p>
            </div>
          </div>
          <div className="flex gap-[20px] items-center font-semibold text-[#3B3C4A]">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[25px] md:hidden bg-white">
        <div className="w-full flex flex-col items-center gap-5">
          <p className="">
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/blog">Blog</a>
          </p>
          <p>
            <a href="/contact">Contact</a>
          </p>
        </div>
        <div className="w-full flex justify-center gap-[25px] ">
          <FaFacebook size={25} />
          <FaInstagram size={25} />
          <FaTwitter size={25} />
          <FaLinkedin size={25} />
        </div>
        <div className="flex gap-3 items-center">
          <Image src="/flogo.png" alt="logo" width={48} height={48} />
          <div>
            <p className="italic text-[20px] ">
              Meta<span className="font-bold">Blog</span>
            </p>
            <p>© All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
