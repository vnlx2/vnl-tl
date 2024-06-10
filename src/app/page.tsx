import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto ">
      <div className="bg-white w-100 p-5 mt-10 flex flex-col md:flex-row gap-5">
        <Image src="/images/nadha.png" width={250} height={250} alt="Nadha" />
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-row gap-x-1">
            <h1 className="font-semibold text-2xl text-[#FF90B4]">ABOUT</h1>
            <h1 className="font-semibold text-2xl">US</h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ea suscipit atque ducimus delectus eveniet, fugiat unde voluptates non quisquam. Accusamus facilis eius et, id omnis assumenda asperiores voluptates consequatur.</p>
        </div>
      </div>

      <div className="bg-white w-100 p-5 mt-10 flex flex-col gap-y-10">
        <div className="flex flex-row gap-x-1">
          <h1 className="font-semibold text-2xl text-[#FF90B4]">RECENT</h1>
          <h1 className="font-semibold text-2xl">POST</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[0,1,2,3,4,5].map((v) => (
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
  );
}
