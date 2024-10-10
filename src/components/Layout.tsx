import { ReactNode } from "react";
import { NavBar } from "./NavBar";

export function Layout ({ children } : { children: ReactNode }) {
  return (
    <div aria-label="background" className="bg-black overflow-clip">
      <NavBar/>
      {children}
    </div>
  )
}