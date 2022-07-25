import Link from "next/link";
import React from "react";

export default function LogoPill() {
  return (
    <Link href="/">
      <a className="text-white text-2xl font-poppins font-extrabold inline-block mr-2 tracking-widest bg-gradient-to-r from-blue-700 to to-indigo-400 rounded-t-3xl rounded-b-3xl py-2 px-4">
        <span>Himanshu</span>
      </a>
    </Link>
  );
}
