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
  NavbarMenuItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import AuraLogo from "../assets/old_images/logo_icon_small.png"



export function NavBar ({ hidden = false } : { hidden?: boolean }) {
  const logged = true;


  const handleHomeButton = () => {
    console.log("Go to home section.")
  }

  const handleProductsButton = () => {
    console.log("Go to products section.")
  }

  const handleExperienceButton = () => {
    console.log("Go to experience section.")
  }

  const handleSpecsButton = () => {
    console.log("Go to specifications section.")
  }

  const handleAboutButton = () => {
    console.log("Go to about section.")
  }

  return (
  <>
    { !hidden &&
      <Navbar className="m-0 p-1 flex-row w-full justify-evenly">
        <NavbarBrand className="" onClick={handleHomeButton}>
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
          <NavbarItem onClick={handleAboutButton} style={{ cursor:"pointer", userSelect:"none" }}>
            <p> ACERCA DE </p>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="sm:flex lg:hidden">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button isIconOnly color="secondary" href="#" variant="flat">
                  M
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="User Menu" variant="flat" className="dark bg-neutral-300">
                <DropdownItem key="products" onClick={handleProductsButton}>
                  <p style={{textAlign:"center"}}>Productos</p>
                </DropdownItem>
                <DropdownItem key="experience" onClick={handleExperienceButton}>
                  <p style={{textAlign:"center"}}>Experiencia</p>
                </DropdownItem>
                <DropdownItem key="specs" onClick={handleSpecsButton}>
                  <p style={{textAlign:"center"}}>Especificaciones</p>
                </DropdownItem>
                <DropdownItem key="about" onClick={handleAboutButton}>
                  <p style={{textAlign:"center"}}>Acerca de</p>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Button isIconOnly color="secondary" href="#" variant="flat">
              B
            </Button>
          </NavbarItem>
          { logged ? 
          <NavbarItem>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button isIconOnly color="secondary" href="#" variant="flat">
                  C
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="User Menu" variant="flat" className="dark bg-neutral-300 ">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Sesión iniciada como</p>
                  <p className="font-semibold">morochus@amogus.com</p>
                </DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={()=>{console.log(`logout button pressed`)}}>
                  <p>Cerrar sesión</p>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem> :
          <NavbarItem>
            <Button isIconOnly color="secondary" href="#" variant="flat">
              D
            </Button>
          </NavbarItem>
          }
          
        </NavbarContent>
      </Navbar>
    }
  </>
  )
}