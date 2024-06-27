import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

function MobNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer"/>
      </SheetTrigger>
      <SheetContent>
        <div  className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo/>
            <Nav containerStyles='flex flex-col gap-y-6 items-center' linkStyles='text-2xl'/>
          </div>
          <Socials containerStyles='flex gap-x-6 items-center justify-center' iconStyles='text-2xl'/>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobNav