function NavBar() {
  return (
    <div className="pt-[50px] pb-[25px] mb-[70px] flex items-end justify-between bg-brand-teal text-brand-green">
      <h1 className="text-3xl text-brand-orange pl-[30px]">
        <span className=" text-4xl text-brand-green">&rarr;</span> Deliverable
      </h1>
      <div className="flex items-end justify-between px-6">
        <h2 className="mr-[30px] hover:text-brand-gray">Active Projects</h2>
        <h2 className="mr-[30px] ml-[30px] hover:text-brand-gray">Builders</h2>
        <h2 className="mr-[30px] ml-[30px] hover:text-brand-gray">Investors</h2>
      </div>
    </div>
  );
}

export default NavBar;
