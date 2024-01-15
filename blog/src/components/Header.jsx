import { IoSearchSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "@/components/Footer";

export const Header = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col items-center gap-[30px] md:gap-[100px] w-full px-[10px] md:px-[50px] my-[32px] font-work-sans bg-white">
      <div className="hidden md:flex justify-between items-center w-[1216px] h-[100px] sticky top-0 z-10 bg-white">
        <Image src={"/hlogo.png"} width={158} height={36} alt={""} />
        <div className="flex justify-between text-[16px] font-[400] text-[#3B3C4A] gap-[40px] items-center">
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
        <div className="flex items-center w-[165px] bg-[#F4F4F5] p-[8px] gap-[12px] pl-[16px] ">
          <input
            placeholder="Search"
            className="outline-none bg-transparent w-[80%]"
          ></input>
          <IoSearchSharp />
        </div>
      </div>
      <div className="md:hidden flex justify-between items-center w-full bg-white sticky top-0 z-10">
        <Image src={"/hlogo.png"} width={158} height={36} alt={""} />
        <IoMdMenu
          size={30}
          onClick={handleOpen}
          className="cursor-pointer absolute z-30 right-0"
        />
      </div>
      <div className="fixed z-20 -top-100 right-0 ">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ right: "-100%" }}
              animate={{
                right: 0,
                transition: { duration: 1, ease: "easeInOut" },
              }}
              exit={{ right: "-100%", transition: { duration: 1 } }}
              className="fixed top-5 w-1/2 h-fit"
            >
              <div className="flex flex-col w-full gap-[20px] h-[300px] justify-between items-start p-[20px] bg-gray-50 rounded-[12px]">
                <div className="flex w-full justify-between">
                  <div className="flex flex-col gap-[15px]">
                    <p className="">Home</p>
                    <p>Blog</p>
                    <p>Contact</p>
                  </div>
                  <IoMdMenu
                    size={30}
                    onClick={handleOpen}
                    className="cursor-pointer"
                  />
                </div>

                <div className="flex items-center w-[165px] bg-[#F4F4F5] p-[8px] gap-[12px] pl-[16px] ">
                  <input
                    placeholder="Search"
                    className="outline-none bg-transparent w-[80%]"
                  ></input>
                  <IoSearchSharp />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {children}
      <Footer />
    </div>
  );
};
