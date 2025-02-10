import Image from "next/image";

export default function Donation() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 pt-20">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-[32px] font-[900] text-[#FF4668]">დონაცია</h1>
          <p className="font-[500] text-[18px] leading-[24.48px]">
            ჩვენი მიზანია პალიატიური მზრუნველობის საჭიროების მქონე<br />
            ბავშვთა ცხოვრების ხარისხის გაუმჯობესება, როგორც მათ <br />
            სხეულზე, გონებასა და სულიერ მდგომარეობაზე აქტიური და <br />
            ყოველმხრივი ზრუნვის, ისე მათი ოჯახის წევრების თანადგომისა <br />
            და დახმარების გზით.
          </p>
          <p>
            ჰოსპისის ასაშენებლად მობილიზდა:{" "}
            <span className="font-[800] text-[#FF4668]">$337000</span>
          </p>
          <p>
            წლიური ფუნქციონირებისთვის საჭიროა:{" "}
            <span className="font-[800] text-[#FF4668]">$185000</span>
          </p>
        </div>

        <div className="bog bg-[#FFF5F0] rounded-[20px] p-7">
          <Image
            src="/bog.png"
            alt="bank"
            width={280}
            height={55}
            className="object-cover h-[55px]"
          />
          <h1 className="text-[18px] font-[700] text-[#200308] mt-5">
            ანგარიშის ნომერი:
          </h1>
          <p>
            GE31BG0000000368074900 <br />
            <span className="text-[#FF8649] font-[700]">GEL/USD/EUR</span>
          </p>
          <p className="text-[18px] mt-3">ააიპ “ბავშვთა ჰოსპისი”</p>
        </div>
      </div>
      <div className="bg-[#FFEEE6] rounded-[20px] flex flex-col items-center gap-4 w-full max-w-[562px] p-5 mx-auto">
        <h1 className="text-[26px] font-[800] leading-[35px] ">დონაცია</h1>
        <div className="flex bg-white rounded-[20px] items-center justify-between gap-3 h-[60px] w-full max-w-[439px]">
          <button className="bg-[#FF4668] w-1/2 h-[56px] rounded-[20px] text-white text-[18px] font-[800]">ერთჯერადი</button> 
          <button className="w-1/2 h-[56px] rounded-[20px] text-[18px] font-[600]">თვიურად</button>
        </div>
        <div className="flex gap-2 w-[439px] justify-center items-center">
            <button className="bg-white rounded-[20px] border text-[18px] font-[600] px-5 py-2 hover:bg-slate-300 transition duration-300">15 ₾</button>
            <button className="bg-white rounded-[20px] border text-[18px] font-[600] px-5 py-2 hover:bg-slate-300 transition duration-300">25 ₾</button>
            <button className="bg-white rounded-[20px] border text-[18px] font-[600] px-5 py-2 hover:bg-slate-300 transition duration-300">30 ₾</button>
            <button className="bg-white rounded-[20px] border text-[18px] font-[600] px-5 py-2 hover:bg-slate-300 transition duration-300">50 ₾</button>
            <button className="bg-white rounded-[20px] border text-[18px] font-[600] px-5 py-2 hover:bg-slate-300 transition duration-300">60 ₾</button>
        </div>
        <div className="input flex flex-col gap-2 w-full max-w-[438px]">
          <div className="flex gap-3 flex-col">
            <h1 className="text-[16px] font-[700]">სასურველი თანხის მითითება:</h1>
            <div className="w-full h-[48px] rounded-[20px] bg-white items-center flex pl-6 gap-4 text-xl font-semibold"> ₾  
              <span className=" text-[#FF4668] text-2xl font-[900]"> 100</span>
            </div>
          </div>
          <div className="flex gap-3 flex-col">
            <h1 className="text-[16px] font-[700]">მიუთითეთ თქვენი სახელი და გვარი:</h1>
            <div className="w-full h-[48px] rounded-[20px] bg-white items-center flex pl-6 gap-4 text-[14px] font-[400]"> 
              მიუთითეთ თქვენი სახელი და გვარი
            </div>
          </div>
          <div className="flex gap-3 flex-col">
            <h1 className="text-[16px] font-[700]">დამცავი კოდი: <span className="text-[#FF4668] text-[16] font-[700]">JJ231</span></h1>
            <div className="w-full h-[48px] rounded-[20px] bg-white items-center flex pl-6 gap-4 text-[14px] font-[400]"> 
              ჩაწერეთ დამცავი კოდი
            </div>
          </div>
        </div>
        <div className="pt-4 w-full max-w-[438px]">
          <button className="bg-[#FF4668] text-white font-[800] text-[16px] w-full h-[44px] rounded-[20px] hover:bg-[#de3554] transition duration-300">
            გადარიცხვა
          </button>
        </div>
      </div>
    </div>
  );
}
