import Image from "next/image";

export default function NavbarFiller({num, selected} : {num:number, selected:number}) {

  return (
    <div className={"flex flex-row " + (selected < -num ? "h-[5dvh]" : "h-0")}>
    </div>
  );
}
