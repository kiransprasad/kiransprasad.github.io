import Image from "next/image";

export default function NavbarElem({num, title, selected} : {num:number, title:string, selected:number}) {

  return (
    <div className={"flex flex-row h-[5dvh] " + (selected==num ? "text-green-200" : "text-white")}>
        <div className="w-1/5 m-auto">
            <h2>{num}</h2>
        </div>
        <div className="w-4/5 m-auto">
            <h3>{title}</h3>
        </div>
    </div>
  );
}
