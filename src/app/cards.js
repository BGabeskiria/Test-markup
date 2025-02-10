import Image from "next/image";

export default function Cards() {
  return (
    <div className="bg-[#FF9E68] rounded-[20px] p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        <div className="flex flex-col gap-2 items-center text-center">
          <Image 
            src="/card1.png" 
            alt="card" 
            width={302} 
            height={192} 
            className="rounded-[20px] object-cover w-[302px] h-[192px]"
          />
          <h1 className="text-[20px] font-[800] text-white">ჩვენი გუნდი</h1>
          <p className="text-[16px] font-[500] text-white">
            გაიცანით “ციცინათელების ქვეყნის” გუნდი
          </p>
          <button className="bg-white px-4 py-2 rounded-[26.5px] font-semibold hover:bg-gray-200 transition duration-300">
            გაიგე მეტი
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <Image 
            src="/card2.png" 
            alt="card" 
            width={302} 
            height={192} 
            className="rounded-[20px] object-cover w-[302px] h-[192px]"
          />
          <h1 className="text-[20px] font-[800] text-white">როგორ ვეხმარებით?</h1>
          <p className="text-[16px] font-[500] text-white">
            გაიცანით “ციცინათელების ქვეყნის” გუნდი
          </p>
          <button className="bg-white px-4 py-2 rounded-[26.5px] font-semibold hover:bg-gray-200 transition duration-300">
            გაიგე მეტი
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <Image 
            src="/card3.png" 
            alt="card" 
            width={302} 
            height={192} 
            className="rounded-[20px] object-cover w-[302px] h-[192px]"
          />
          <h1 className="text-[20px] font-[800] text-white">დღის ცენტრი</h1>
          <p className="text-[16px] font-[500] text-white">
            გაიცანით “ციცინათელების ქვეყნის” გუნდი
          </p>
          <button className="bg-white px-4 py-2 rounded-[26.5px] font-semibold hover:bg-gray-200 transition duration-300">
            გაიგე მეტი
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <Image 
            src="/card4.png" 
            alt="card" 
            width={302} 
            height={192} 
            className="rounded-[20px] object-cover w-[302px] h-[192px]"
          />
          <h1 className="text-[20px] font-[800] text-white">შინ ზრუნვა</h1>
          <p className="text-[16px] font-[500] text-white">
            გაიცანით “ციცინათელების ქვეყნის” გუნდი
          </p>
          <button className="bg-white px-4 py-2 rounded-[26.5px] font-semibold hover:bg-gray-200 transition duration-300">
            გაიგე მეტი
          </button>
        </div>
      </div>
    </div>
  );
}
