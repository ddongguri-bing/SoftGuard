import Image from "next/image";

import Logo from "@/assets/logo.svg";
import HeaderDate from "./HeaderDate";
import LocationDropdown from "./LocationDropdown";

export default function Header() {
  return (
    <div className="flex gap-25 py-7.5 pl-12.5">
      <Image src={Logo} width={111} height={25} alt="Soft Guard 로고" />
      <div className="flex items-center gap-7.5">
        <LocationDropdown />
        <HeaderDate />
      </div>
    </div>
  );
}
