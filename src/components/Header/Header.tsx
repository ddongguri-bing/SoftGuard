"use client";

import Logo from "@/assets/logo.svg";

import BackArrow from "@/assets/arrow-back.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import HeaderDate from "./HeaderDate";
import HeadWheather from "./HeadWheather";
import LocationDropdown from "./LocationDropdown";

export default function Header() {
  const router = useRouter();

  const pathname = usePathname();
  const isEventStream = pathname.startsWith("/eventStream");

  if (isEventStream) {
    return (
      <header className="flex py-7.5">
        <button
          type="button"
          onClick={() => router.replace("/")}
          aria-label="뒤로가기"
          className="inline-flex items-center"
        >
          <Image src={BackArrow} width={30} height={30} alt="뒤로가기" />
        </button>
      </header>
    );
  }

  return (
    <header className="flex gap-25 py-7.5">
      <Image
        src={Logo}
        width={111}
        height={25}
        alt="Soft Guard 로고"
        loading="eager"
        className="h-auto w-auto"
      />
      <div className="flex items-center gap-7.5">
        <LocationDropdown />
        <HeaderDate />
        <HeadWheather />
      </div>
    </header>
  );
}
