import Image from "next/image";
import CustomCursor from "@/components/CustomCursor";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className={`${spaceGrotesk.className} text-8xl`} >
        MAHADE DEV
      </h1>
    </div>
  );
}
