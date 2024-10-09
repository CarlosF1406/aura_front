import { ReactNode } from "react";
import { NavBar } from "./navBar";

export function Layout ({ children } : { children: ReactNode }) {
  return (
    <div aria-label="background" className="w-screen h-screen bg-black">
      <NavBar/>
      {children}
    </div>
  )
}