import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col md:items-center gap-2 justify-between p-4">
        <Link href="/" className="font-bold">RAFIANIMELIST</Link>
       <InputSearch/>
      </div>
    </header>
  );
};
export default Navbar;
