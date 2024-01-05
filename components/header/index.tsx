import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  return (
    <header className="container  py-5 xl:py-6 flex items-center justify-between">
      <Link href={"/"}>
        <Image
          src={"/images/Logo.svg"}
          alt="go-active"
          width={112}
          height={24}
        />
      </Link>
      <button aria-label="nav-menu">
        <HiOutlineMenu className=" w-6 h-6 text-white" />
      </button>
    </header>
  );
};

export default Header;
