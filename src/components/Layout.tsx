import { ReactNode } from "react";
import { NavBar } from "./NavBar";
import { ToastContainer } from "react-toastify";

export function Layout ({ children } : { children: ReactNode }) {
  return (
    <div aria-label="background" className="bg-black overflow-clip">
      <NavBar/>
      {children}
      <ToastContainer/>
    </div>
  )
}