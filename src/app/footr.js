import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer () {
    return (
        <footer className="bg-[#FFF5F0] py-5">
            <div className="w-full max-w-[1440px] mx-auto px-6 flex flex-row gap-6 items-center">
                <Image src="/logoo.png" alt="Logo" width={166} height={170} />
                <div className="flex flex-row items-center gap-4">
                <div className=" flex flex-col gap-3 text-[18px] font-[600] pl-32 ">
                    <a href="">ჩვენს შესახებ</a>
                    <a href="">დონორები</a>
                    <a href="">პუბლიკაციები</a>
                </div>
                <div className=" flex flex-col gap-3 text-[18px] font-[600] pl-24 ">
                    <a href="">კონტაქტი</a>
                    <a href="">სიახლეები</a>
                    <a href="">გალერეა</a>
                </div>
                <div className=" flex flex-col gap-3 text-[18px] font-[600] pl-24 ">
                    <a href="" className="flex items-center gap-2"><MapPin className="w-6 h-6 text-black"/>სოფელი დიღომი, დ.აღმაშენებლის ქ. #32ა, 0126</a>
                    <a href="" className="flex items-center gap-2"><Mail></Mail>info@childrenshospice.org.ge</a>
                    <a href="" className="flex items-center gap-2"><Phone></Phone>(+995) 570 707 757</a>
                </div>
                </div>
            </div>
        </footer>
    )
}