import Image from "next/image";

export default function Hospis() {
    return (
        <div className="pt-8">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-[120px] p-6 sm:p-10 mx-auto items-center">
                <div className="flex flex-col gap-4 text-center sm:text-left">
                    <p className="text-[#FF4668] font-[900] text-[28px] sm:text-[32px] leading-[38px] sm:leading-[43.52px]">
                        რა არის ბავშვთა ჰოსპისი?
                    </p>
                    <p className="font-[500] leading-[22px] sm:leading-[24.48px] text-[16px] sm:text-[18px]">
                        "ციცინათელების ქვეყანა" ოჯახური გარემოს შექმნით, ზრუნავს <br className="hidden sm:block"/>
                        მძიმე, ქრონიკული, უკურნებელი და/ან სიცოცხლისთვის<br className="hidden sm:block"/>
                        საფრთხის შემცველი დაავადების მქონე, 0-18 წლამდე ბავშვების<br className="hidden sm:block"/>
                        მდგომარეობის და ტანჯვის შემსუბუქებაზე, კეთილდღეობაზე და <br className="hidden sm:block"/>
                        ცხოვრების ხარისხის გაუმჯობესებაზე. ჩვენ ვზრუნავთ, როგორც<br className="hidden sm:block"/>
                        ბავშვებზე, ასევე მათი ოჯახის წევრებზე.
                    </p>
                    <button className="bg-[#FF8649] text-white text-[16px] font-[700] rounded-[26.5px] w-[160px] sm:w-[181px] h-[40px] sm:h-[44px] hover:bg-[#e86f33] transition duration-300 mx-auto sm:mx-0">
                        კონტაქტი
                    </button>
                </div>
                <div>
                    <Image 
                        src="/house.png" 
                        alt="Logo" 
                        width={549} 
                        height={292} 
                        className="rounded-[20px] shadow-lg object-cover w-full max-w-[549px] h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
