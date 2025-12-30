"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
// import { usePathname, useRouter } from "next-intl/navigation";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";

export function BtnLocalization() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitchLocale = (nextLocale: "en" | "id") => {
    if (nextLocale === locale) return;
    router.push(pathname, { locale: nextLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Languages className="size-8 lg:size-5" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuRadioGroup value={locale}>
          <DropdownMenuRadioItem
            value="en"
            onClick={() => handleSwitchLocale("en")}
          >
            English
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            value="id"
            onClick={() => handleSwitchLocale("id")}
          >
            Indonesia
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
