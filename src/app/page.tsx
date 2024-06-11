import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center p-5 gap-3">
          <Image src={"/images/vnl-logo.png"} width={400} height={225} alt="vnl" />
          <div>
            <h1 className="text-3xl font-semibold text-[#FF90B4]">VISUAL NOVEL</h1>
            <div className="flex flex-row gap-2">
              <h1 className="text-3xl font-semibold text-[#FF90B4]">DATABASE</h1>
              <h1 className="text-3xl font-semibold text-black">INDONESIA</h1>
            </div>
            <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus possimus in odio voluptate amet esse modi unde. Alias illo explicabo dignissimos voluptates beatae, rerum consequuntur quisquam odio corporis, amet repudiandae!</p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto">

        <div className="bg-white w-100 p-5 my-5 flex flex-col gap-y-10">
        <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-x-1">
              <h1 className="font-semibold text-2xl text-[#FF90B4]">RECENT</h1>
              <h1 className="font-semibold text-2xl">POST</h1>
            </div>
            <a href="/post" className="text-[#FF90B4]">See All</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[0, 1, 2, 3, 4, 5].map((v) => (
              <div className="w-100 aspect-[3/4] bg-[url('/images/atri.png')] bg-cover cursor-pointer group" key={v}>
                <div className="w-100 h-full backdrop-blur-md p-2 overflow-hidden hidden group-hover:block">
                  <h1 className="font-bold text-2xl mb-3">ATRI</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto libero ex et consequatur reprehenderit sunt modi sed magni odit. Ipsum, quas eos? Saepe quia, expedita placeat veritatis voluptates repellendus aspernatur!</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white w-100 p-5 my-5 flex flex-col gap-y-10">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-x-1">
              <h1 className="font-semibold text-2xl text-[#FF90B4]">POUPLAR</h1>
              <h1 className="font-semibold text-2xl">POST</h1>
            </div>
            <a href="/post" className="text-[#FF90B4]">See All</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[0, 1, 2, 3, 4, 5].map((v) => (
              <div className="w-100 aspect-[3/4] bg-[url('/images/atri.png')] bg-cover cursor-pointer group" key={v}>
                <div className="w-100 h-full backdrop-blur-md p-2 overflow-hidden hidden group-hover:block">
                  <h1 className="font-bold text-2xl mb-3">ATRI</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto libero ex et consequatur reprehenderit sunt modi sed magni odit. Ipsum, quas eos? Saepe quia, expedita placeat veritatis voluptates repellendus aspernatur!</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
