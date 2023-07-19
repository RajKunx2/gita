import Image from "next/image";
import Main from "../../assets/hero.png";
import Scroll from "../../assets/scroll.gif";

export default function Home() {
  return (
    <div className="custom-cursor">
      <div className="bg-[#1C3676] h-screen w-screen flex flex-col-reverse md:flex-row">
        <div className="flex basis-1/2 h-fit align-middle justify-center my-auto">
          <Image alt="" src={Scroll} height={336} width={596} className="relative" />
        </div>
        <div className="flex basis-1/2 justify-center align-middle">
          <Image alt="" src={Main} height={600} width={480} />
        </div>
      </div>
    </div>
  );
}
