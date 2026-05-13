"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LOCATIONS } from "@/data/locationMap";
import { useScenarioVideoStore } from "@/store/scenarioVideoStore";
import { ChevronDown } from "lucide-react";

export default function LocationDropdown() {
  const selectLocation = useScenarioVideoStore((s) => s.selectLocation);
  const selectedLocation = useScenarioVideoStore((s) => s.selectedLocation);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="bg-black-third text-body-small-bold! hover:bg-black-third active:bg-black-third aria-expanded:bg-black-third h-auto w-60 justify-between rounded-[8px] border-0 px-3.75 py-2"
        >
          {selectedLocation}

          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black-third text-white-first">
        <DropdownMenuGroup>
          {LOCATIONS.map((location) => (
            <DropdownMenuItem
              key={location}
              onSelect={() => selectLocation(location)}
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
