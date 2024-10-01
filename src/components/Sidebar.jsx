function Sidebar() {
  return (
    <div className="fixed flex h-[72px] w-full bg-midnightBlue md:h-[80px] lg:bottom-0 lg:left-0 lg:top-0 lg:h-full lg:w-auto lg:flex-col">
      <div className="mr-auto lg:mb-auto lg:mr-auto">
        <img
          src="./assets/logo.svg"
          alt="site-logo"
          className="abosolute left-0 top-0 h-[72px] w-[72px] md:h-[80px] md:w-[80px] lg:h-[103px] lg:w-[103px]"
        />
      </div>

      <div className="flex items-center border-r border-[#494E6E] pr-6 lg:justify-center lg:border-b lg:p-0 lg:pb-8">
        <button className="flex">
          <img
            src="./assets/icon-sun.svg"
            alt="sun icon"
            className="mx-auto h-5 w-5"
          />
        </button>
      </div>
      <div className="flex items-center px-6 py-5 lg:p-0 lg:py-6">
        <img
          src="./assets/image-avatar.jpg"
          alt=""
          className="mx-auto h-[32px] w-[32px] rounded-full lg:h-[40px] lg:w-[40px]"
        />
      </div>
    </div>
  );
}

export default Sidebar;
