// "use client"
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Main from "../../assets/hero.png";
// import Scroll from "../../assets/scroll.gif";
// import NewImage from "../../assets/new_scroll.jpg";
// import Typewriter from "typewriter-effect";

// export default function Home() {
//   const [scrollImage, setScrollImage] = useState(Scroll);
//   const [displayText, setDisplayText] = useState("");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setScrollImage(NewImage);
//       setDisplayText("In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.");
//     }, 3430);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <div className="custom-cursor">
//       <div className="bg-[#1C3676] h-screen w-screen flex flex-col-reverse md:flex-row">
//         <div className="flex basis-1/2 h-fit align-middle justify-center my-auto relative">
//           <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//             <div className="text-black font-bold z-20 text-md justify-center text-center max-w-[72%] md:max-w-[60%]">
//               <Typewriter
//                 options={{
//                   strings: [displayText],
//                   autoStart: true,
//                   loop: false,
//                 }}
//               />
//             </div>
//           </div>
//           <Image
//             alt=""
//             src={scrollImage}
//             height={336}
//             width={596}
//             className="relative"
//           />
//         </div>
//         <div className="flex basis-1/2 justify-center align-middle">
//           <Image alt="" src={Main} height={600} width={480} />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Main from "../../assets/hero.png";
import Scroll from "../../assets/scroll.gif";
import NewImage from "../../assets/new_scroll.jpg";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [scrollImage, setScrollImage] = useState(Scroll);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollImage(NewImage);
      setDisplayText("In publishing and graphic design, Lorem.");
    }, 3430);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="custom-cursor">
      <div className="bg-[#1C3676] h-screen w-screen flex flex-col-reverse md:flex-row">
        <div className="flex basis-1/2 h-fit align-middle justify-center my-auto relative">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-black font-bold z-20 text-md justify-center text-center max-w-[72%] md:max-w-[60%]">
              <Typewriter
                options={{
                  strings: [displayText],
                  autoStart: true,
                  loop: true, // Disable looping
                  typeSpeed: 10, // Set typing speed to 10 characters per second
                  deleteSpeed: 0, // Skip deletion
                }}
              />
            </div>
          </div>
          <Image
            alt=""
            src={scrollImage}
            height={336}
            width={596}
            className="relative"
          />
        </div>
        <div className="flex basis-1/2 justify-center align-middle">
          <Image alt="" src={Main} height={600} width={480} />
        </div>
      </div>
    </div>
  );
}
