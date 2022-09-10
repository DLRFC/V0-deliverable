import Link from "next/link";

function NavBar() {
  return (
    <div className="pt-[70px] pb-[40px] mb-[70px] flex items-end justify-between bg-brand-teal">
      <div>
        <Link href="/">
          <h1 className="text-5xl text-brand-orange pl-[100px] cursor-pointer">
            Deliverable
          </h1>
        </Link>
        <hr className="border-3 border-brand-green mb-[5px]"></hr>
        <hr className="border-3 border-brand-green"></hr>
      </div>

      <div className="flex items-end justify-between text-brand-green">
        <Link href="/projects">
          <h2 className="mr-[20px] hover:text-brand-gray cursor-pointer">
            Active Projects
          </h2>
        </Link>
        <Link href="/builders">
          <h2 className="mr-[20px] ml-[20px] hover:text-brand-gray cursor-pointer">
            Builders
          </h2>
        </Link>
        <Link href="investors">
          <h2 className="mr-[40px] ml-[20px] hover:text-brand-gray cursor-pointer">
            Investors
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
