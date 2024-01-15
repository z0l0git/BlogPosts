export default function Home() {
  return (
    <div className="w-full md:w-[50%] py-[20px] flex flex-col items-center justify-center gap-[60px]">
      <div className="w-full py-[20px] flex flex-col gap-[50px] items-center justify-center">
        <div className="w-full">
          <h1 className="text-[36px] font-[600]">Contact Us</h1>
          <p className="text-[16px] font-[400] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex gap-auto-[20px]">
          <div className="align-self">
            <h2 className="text-[24px] font-[600] mb-[10px]">Address</h2>
            <p className="text-[18px] font-[400]">
              1328 Oak Ridge Drive, Saint Louis, Missouri 63108
            </p>
          </div>
          <div className="align-self">
            <h2 className="text-[24px] font-[600] mb-[10px]">Contact</h2>
            <p className="text-[18px] font-[400]">
              +976 80052392 zolbayar.in@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[90%] px-[10px] md:px-[20px] py-[20px] flex flex-col gap-[20px] items-start">
        <h2 className="text-[18px] font-[600]">Leave a Message</h2>
        <div className="md:flex-row flex flex-col gap-[10px] justify-between w-full">
          <input
            placeholder="Your Name"
            className="h-[40px] px-[20px] border-solid border-2 border-gray-300 rounded-[5px]"
          ></input>
          <input
            placeholder="Your Email"
            className="h-[40px] px-[20px] border-solid border-2 border-gray-300 rounded-[5px]"
          ></input>
        </div>
        <input
          placeholder="Subject"
          className="h-[40px] w-full px-[20px] border-solid border-2 border-gray-300 rounded-[5px]"
        ></input>
        <textarea
          placeholder="Your Message"
          className="h-[110px] w-full px-[20px] border-solid border-2 border-gray-300 rounded-[5px]"
        ></textarea>
        <button className="bg-[#000] text-[#fff] h-[40px] w-[100px] rounded-[12px]">
          Send
        </button>
      </div>
    </div>
  );
}
