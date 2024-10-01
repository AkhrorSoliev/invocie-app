import React from "react";

function Navbar() {
  return (
    <div className="mt-[104px] flex w-full items-center px-6">
      <div className="mr-auto">
        <h1 className="text-h2 font-bold tracking-h2 text-deepBlackBlue">
          Invoices
        </h1>
        <p className="text-xs tracking-body1 text-mutedGrayBlue">7 invoices</p>
      </div>

      <div>
        <div className="flex items-center gap-3">
          <p className="text-h3 font-bold tracking-h4">Filter</p>
          <img
            src="./assets/icon-arrow-down.svg"
            alt=""
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="">
        <button className="leading-0 flex items-center gap-2 rounded-3xl bg-vibrantPurple p-[6px] text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
            <img src="./assets/icon-plus.svg" alt="" />
          </span>
          <span>New</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
