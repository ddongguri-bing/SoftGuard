import Image from "next/image";

import DivideLineImage from "@/assets/divide-line.svg";

export default function DivideLine() {
  return (
    <div>
      <Image src={DivideLineImage} width={1} height={100} alt="구분선" />
    </div>
  );
}
