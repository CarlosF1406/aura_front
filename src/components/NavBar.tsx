import {
  Image,
  Button,
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { BurgerButton } from "../assets/tsx_icons/BurgerButton";
import { ShoppingCartIcon } from "../assets/tsx_icons/ShoppingCartIcon";
import { UserAccountIcon } from "../assets/tsx_icons/UserAccountIcon";
import AuraLogo from "../assets/old_images/logo_icon_small.png";
import { colors } from "../constants/Colors";
import { AuthContainer } from "./UserComponents/AuthContainer";
import { ShoppingCart } from "./ProductComponents/ShoppingCart";
import { useAppSelector } from "../hooks/useRedux";



export function NavBar ({ hidden = false } : { hidden?: boolean }) {
  const user = useAppSelector(state => state.user.user);


  const handleHomeButton = async () => {
    await localStorage.setItem("@token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDhhN2ExN2ZkNmYwODQwMjIyNzAxYiIsImlhdCI6MTcyODYyMDUyMCwiZXhwIjoxNzI4NzA2OTIwfQ.fimecPSeghDHvx9f-RBv-IfyAqqMLeSViJ-PyIz7e18");
    const scroll = document.querySelector("#home-section")
    scroll?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleProductsButton = () => {
    localStorage.removeItem("@token")
    const scroll = document.querySelector("#products-section")
    scroll?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleExperienceButton = () => {
    const scroll = document.querySelector("#experience-section")
    scroll?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleSpecsButton = () => {
    const scroll = document.querySelector("#specs-section")
    scroll?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleLogoutButton = () => {
    console.log(`Logout`);
  }


  return (
  <>
    { !hidden &&
      <Navbar className="m-0 p-1 flex-row w-full justify-evenly">
        <NavbarBrand className="" onClick={handleHomeButton} style={{cursor:"pointer"}}>
          <Image 
            alt={"Aura Logo"}
            src={AuraLogo}
            className="pointer-events-none"
          />
        </NavbarBrand>
        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          <NavbarItem onClick={handleProductsButton} style={{ cursor:"pointer", userSelect:"none" }}>
            <p> PRODUCTOS </p>
          </NavbarItem>
          <NavbarItem onClick={handleExperienceButton} style={{ cursor:"pointer", userSelect:"none" }}>
            <p> EXPERIENCIA </p>
          </NavbarItem>
          <NavbarItem onClick={handleSpecsButton} style={{ cursor:"pointer", userSelect:"none" }}>
            <p> ESPECIFICACIONES </p>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="sm:flex lg:hidden">
            <Dropdown backdrop="opaque" placement="bottom-end">
              <DropdownTrigger>
                <Button isIconOnly style={{backgroundColor:colors.primary}} variant="flat">
                  <BurgerButton fill={colors.secondary}/>
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="User Menu" variant="flat" className="dark bg-neutral-300">
                <DropdownItem key="home" onClick={handleHomeButton}>
                  <p style={{textAlign:"center"}}>Inicio</p>
                </DropdownItem>
                <DropdownItem key="products" onClick={handleProductsButton}>
                  <p style={{textAlign:"center"}}>Productos</p>
                </DropdownItem>
                <DropdownItem key="experience" onClick={handleExperienceButton}>
                  <p style={{textAlign:"center"}}>Experiencia</p>
                </DropdownItem>
                <DropdownItem key="specs" onClick={handleSpecsButton}>
                  <p style={{textAlign:"center"}}>Especificaciones</p>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Popover backdrop="opaque" showArrow autoFocus placement="bottom-end" className="dark">
              <PopoverTrigger>
                <Button isIconOnly style={{backgroundColor:colors.primary}} variant="flat">
                  <ShoppingCartIcon fill={colors.secondary}/>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-1">
                <ShoppingCart/>
              </PopoverContent>
            </Popover>
          </NavbarItem>
          { user ? 
            <NavbarItem>
              <Dropdown backdrop="opaque" placement="bottom-end">
                <DropdownTrigger>
                  <Button isIconOnly style={{backgroundColor:colors.primary}} variant="flat">
                    <UserAccountIcon fill={colors.secondary}/>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="User Menu" variant="flat" className="dark bg-neutral-300 ">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Sesión iniciada como</p>
                    <p className="font-semibold">morochus@amogus.com</p>
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger" onClick={handleLogoutButton}>
                    <p>Cerrar sesión</p>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem> :
            <NavbarItem>
              <Popover showArrow autoFocus backdrop="opaque" placement="bottom-end" className="dark">
                <PopoverTrigger>
                  <Button isIconOnly style={{backgroundColor:colors.primary}} variant="flat">
                    <UserAccountIcon fill={colors.secondary}/>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-1">
                  <AuthContainer/>
                </PopoverContent>
              </Popover>
            </NavbarItem>
          }
          
        </NavbarContent>
      </Navbar>
    }
  </>
  )
}