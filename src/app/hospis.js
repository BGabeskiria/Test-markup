import Image from "next/image";

export default function Hospis () {
    return (
        <div className="pt-8">
            <div className="flex flex-row gap-[120px] p-10 mx-auto">
                <div className="flex flex-col gap-2">
                    <p className="text-[#FF4668] font-[900] text-[32px] leading-[43.52px]">რა არის ბავშვთა ჰოსპისი?</p>
                    <p className="font-[500] leading-[24.48px] text-[18px]">
                    "ციცინათელების ქვეყანა" ოჯახური გარემოს შექმნით, ზრუნავს <br/>მძიმე, ქრონიკული, უკურნებელი და/ან სიცოცხლისთვის<br/> საფრთხის შემცველი დაავადების მქონე, 0-18 წლამდე ბავშვების<br/> მდგომარეობის და ტანჯვის შემსუბუქებაზე, კეთილდღეობაზე და <br/>ცხოვრების ხარისხის გაუმჯობესებაზე. ჩვენ ვზრუნავთ, როგორც<br/> ბავშვებზე, ასევე მათი ოჯახის წევრებზე.
                    </p>
                    <button className="bg-[#FF8649] text-white text-[16px] font-[700] rounded-[26.5px] w-[181px] h-[44px] hover:bg-[#e86f33] transition duration-300">კონტაქტი</button>
                </div>
                <div>
                    <Image 
                    src="/house.png" 
                    alt="Logo" 
                    width={549} 
                    height={292} 
                    className="rounded-[20px] shadow-lg object-cover h-[292px]"/>
                </div>
            </div>
        </div>
    )
}