import {
  Image,
  Link,
  Button,
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/react";
import AuraLogo from "../assets/old_images/logo_icon_small.png"

export function NavBar ({ hidden = false } : { hidden?: boolean }) {
  return (
  <>
    { !hidden &&
      <Navbar className="m-0 p-1 flex-row w-full justify-evenly">
        <NavbarBrand className="">
          <Link href="">
          <Image 
            alt={"Aura Logo"}
            src={AuraLogo}
            className="pointer-events-none"
          />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              INICIO
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              PRODUCTOS
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              EXPERIENCIA
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              ESPECIFICACIONES
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              ACERCA DE
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="sm:flex lg:hidden">
            <Button isIconOnly color="secondary" href="#" variant="flat">
              A
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button isIconOnly color="secondary" href="#" variant="flat">
              B
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button isIconOnly color="secondary" href="#" variant="flat">
              C
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    }
  </>
  )
}