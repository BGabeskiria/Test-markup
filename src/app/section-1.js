"use client"
import Image from "next/image";
import { Phone } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";


export default function Section1() {
 const [menu, setMenu] = useState(false)
  const handleClick = () => {
    setMenu(!menu)
  } 
  
  return (
    <div>
      <div className="p-1 shadow-sm rounded-[20px] mb-6 bg-[#ff466808]">
        <header className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-6 py-2">
          <div>
            <Image src="/logoo.png" alt="Logo" width={64} height={65} />
          </div>
          <div className="hidden md:flex text-lg justify-center gap-[30px]">
            <a href="" className="text-[#FF4668] font-semibold">
              მთავარი
            </a>
            <a href="">ჩვენს შესახებ</a>
            <a href="">დონერები</a>
            <a href="">პუბლიკაციები</a>
            <a href="">სიახლეები</a>
            <a href="">გალერეა</a>
          </div>
          <div className="flex gap-4">
            <button 
            className="md:hidden"
            onClick={handleClick}
            >
              {menu && (
        <div className="dropdown-menu  text-4xl flex flex-col gap-24 h-full w-full absolute top-14 right-0 bg-[#FFF5F0] p-12 rounded-lg shadow-lg">
          <p>ჩვენს შესახებ</p>
          <p>დონერები</p>
          <p>პუბლიკაციები</p>
          <p>სიახლეები</p>
          <p>გალერეა</p>
        </div>
      )}
              <Menu className="text-[#FF4668]">
              </Menu>
            </button>
            <button className=" hidden md:block p-3 text-lg rounded-full font-extrabold text-white bg-[#FF4668] hover:bg-[#de3554] transition duration-300">
              დონაცია
            </button>
            <Image 
            src="/georgia.png" 
            alt="Logo" 
            width={51} 
            height={45} 
            className="hidden md:block"
            />
          </div>
        </header>
      </div>
      <div className="bg-[#FFF5F0] flex flex-col md:flex-row gap-10 md:gap-[100px] lg:gap-[200px] rounded-[20px] p-6 md:p-10">
        <div className="flex flex-col gap-5">
          <p className="text-[32px] md:text-[40px] font-extrabold text-[#FF4668]">
            ჩვენი მიზანია
          </p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-[600]">
            ჩვენი მიზანია პალიატიური მზრუნველობის
            <br /> საჭიროების მქონე ბავშვთა ცხვორების
            <br /> ხარისხის გაუმჯობესება
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-[#FF4668] px-6 py-3 text-white rounded-[26.5px] text-[16px] font-[700] hover:bg-[#de3554] transition duration-300">
              დონაცია
            </button>
            <button className="bg-white px-6 py-3 rounded-[26.5px] text-[16px] font-[700] hover:bg-[#e7e7e7] transition duration-300">
              ჩვენს შესახებ
            </button>
          </div>
          <div className="flex flex-col gap-3 pt-4">
            <p className="text-[16px] font-[700]">როგორ ვახორციელებთ ამ სერვისს ?</p>
            <p className="text-[14px] flex items-center">
              <Phone className="mr-2 text-red-500" />
              რეკავთ ცხელ ხაზზე: <span className="font-[700]">+995 570 707 757</span>
            </p>
            <p className="text-[14px] flex items-center">
              <Image src="/check.png" alt="icon" width={26} height={26} className="mr-2" />
              ცხელი ხაზის ოპერატორი იწერს დეტალურ ინფორმაციას და აწვდის გუნდს
            </p>
            <p className="text-[14px] flex items-center">
              <Image src="/check.png" alt="icon" width={26} height={26} className="mr-2" />
              პოსპისის გუნდი განიხილავს ბავშვის მონაცემებს
            </p>
            <p className="text-[14px] flex items-center">
              <Image src="/check.png" alt="icon" width={26} height={26} className="mr-2" />
              გუნდი შინ ზრუნვის მანქანით მიდის ბავშვთან, სინჯავს და უმსუბუქებს
              <br /> ტკივილს და ზრუნავს მასზე.
            </p>
            <p className="text-[14px] flex items-center">
              <Image src="/check.png" alt="icon" width={26} height={26} className="mr-2" />
              ესაუბრება მშობლებს და ცდილობს მათ შეუმსუბუქოს შვილის
              <br /> ავადმყოფობით გამოწვეული მდგომარეობა
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center md:items-start">
          <Image src="/boy.png" alt="icon" width={300} height={300} className="md:w-[380px] md:h-[380px]" />
          <div className="bg-white rounded-2xl p-6 mt-4 md:relative md:top-10 md:h-40 md:w-[500px] md:left-12 md:rounded-b-none">
            <div className="text-[14px] md:text-[16px] font-[600] flex justify-center p-3 pl-8 flex-col gap-2 bg-[#FF4668] rounded-2xl text-white">
              <p>სოფელი დიღომი, დ.აღმაშენებლის ქ. #32ა, 0126</p>
              <p>info@childrenshospice.org.ge</p>
              <p>(+995) 570 707 757</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
