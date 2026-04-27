"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LOCATIONS } from "@/data/mockLocationMap";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function LocationDropdown() {
  const [selectedLocatoin, setSelectedLocation] = useState("위치 선택");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="bg-black-third text-body-small-bold! hover:bg-black-third active:bg-black-third aria-expanded:bg-black-third h-auto w-50 justify-between rounded-[8px] border-0 px-3.75 py-2"
        >
          {selectedLocatoin}

          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black-third text-white-first w-50">
        <DropdownMenuGroup>
          {LOCATIONS.map((location) => (
            <DropdownMenuItem
              key={location}
              onSelect={() => setSelectedLocation(location)}
              className="text-body-xsmall! hover:bg-white-third!"
            >
              {location}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
