import { Button, Image } from "@nextui-org/react";
import AuraT12 from "../../assets/old_images/AuraT12.png"

export function HomeSection () { 

  const handlePurchaseButton = () => {
    const scroll = document.querySelector("#products-section")
    scroll?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return(
    <div 
      aria-label="Main section"
      className="p-0 m-auto w-full flex flex-row items-center justify-center xs:columns-1 md:columns-2"
      style={{ 
        height: `calc(100vh - 72px)`
      }}
    >
      <div
        aria-label="Information"
        className="flex flex-col columns-1 gap-4 justify-center items-center h-full xs:w-screen md:w-1/2"
      >
        <p className="w-2/3 text-center text-7xl font-semibold text-wrap">Aura tu sonido, tu mundo.</p>
        <p className="w-2/3 text-center text-3xl font-semibold text-wrap">Diseños elegantes, sonido inigualable.</p>
        <Button color="secondary" size="lg" onClick={handlePurchaseButton}>
          Comprar
        </Button>
      </div>
      <div
        aria-label="Picture"
        className="justify-center items-center h-full hidden md:flex md:w-1/2 pointer-events-none"
        style={{ maxWidth: "50%" }}
      >
        <Image 
            alt={"Aura T12"}
            src={AuraT12}
            style={{ 
              transform: `rotate(45deg)`,
              maxHeight: `60vh`
            }}
            className="pointer-events-none sm:hidden md:block"
          />
      </div>
    </div>
  )
}