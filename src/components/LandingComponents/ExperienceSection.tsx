import { Image } from "@nextui-org/react";
//import AuraT12 from "../../assets/old_images/AuraT12.png"
import assets_experience from "../../assets/old_images/assets_experience.png"

export function ExperienceSection() {

  return (
    <div
      aria-label="Main section"
      className="p-0 m-auto w-full flex flex-row items-center justify-center xs:columns-1 md:columns-2"
      style={{
        height: `calc(100vh - 72px)`
      }}
    >
      <div
        aria-label="Information"
        className="flex flex-col columns-1 gap-4 justify-center items-center h-full xs:w-screen md:w-1/2 z-10"
      >
        <p className="w-2/3 text-left text-6xl md:text-8xl font-bold text-wrap">EN AURA PERSONAS Y TECNOLOGÍA</p>
        <p className="w-2/3 text-center text-3xl font-bold text-wrap">Nos unimos para hacer de el sonido una experiencia inolvidable</p>
      </div>
      <div
        aria-label="Picture"
        className="justify-center items-center h-full hidden md:flex md:w-1/2 pointer-events-none z-0"
        style={{ maxWidth: "65%", transform: "scale(1.3)" }}
      >
        <Image
          alt={"assets experience"}
          src={assets_experience}
          style={{
            maxHeight: `78vh`,
          }}
          className="pointer-events-none sm:hidden md:block"
        />
      </div>
    </div>
  )
}