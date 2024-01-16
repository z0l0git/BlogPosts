import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-[32px] justify-center w-full md:w-[800px] sansText">
      <div className="flex flex-col gap-5">
        <h1 className="text-[36px] font-[700]">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <div className="flex gap-9">
          <div className="flex gap-4">
            <Image src={"/mockprof.png"} width={28} height={28} />
            <p>Bandi Dorj</p>
          </div>
          <p className="text-[16px] font-[400] text-[#97989F]">
            August 20, 2022
          </p>
        </div>
      </div>
      <Image
        src={"/mockhead.jpg"}
        width={1000}
        height={500}
        className="rounded-[12px]"
      />
      <p className="text-[20px] font-[400] text-[#3B3C4A] seriText">
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you don't plan and prepare adequately. In this blog article, we'll
        explore tips and tricks for a memorable journey and how to make the most
        of your travels. One of the most rewarding aspects of traveling is
        immersing yourself in the local culture and customs. This includes
        trying local cuisine, attending cultural events and festivals, and
        interacting with locals. Learning a few phrases in the local language
        can also go a long way in making connections and showing respect.
      </p>
      <div>
        <h2 className="text-[24px] font-[600] mb-[16px]">
          Research Your Destination
        </h2>
        <p className="text-[20px] font-[400] text-[#3B3C4A] seriText">
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non
          tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper
          sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing
          vitae. Viverra adipiscing at in tellus.
        </p>
      </div>
      <div>
        <h2 className="text-[24px] font-[600] mb-[16px]">
          Plan Your Itinerary
        </h2>
        <p className="text-[20px] font-[400] text-[#3B3C4A] seriText">
          While it's essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax
          and enjoy your journey. Vitae sapien pellentesque habitant morbi
          tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper
          sit amet risus nullam eget felis. Tincidunt arcu non sodales neque
          sodales ut etiam sit amet.
        </p>
      </div>
    </div>
  );
}
