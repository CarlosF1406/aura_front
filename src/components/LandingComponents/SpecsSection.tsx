import { Image } from "@nextui-org/react";
import assets_specs from "../../assets/old_images/assets_specs.jpeg"

export function SpecsSection() {

  return (
    <div
      aria-label="Main section"
      className="p-0 m-auto w-full flex flex-row items-center justify-center xs:columns-1 md:columns-2"
      style={{
        height: `calc(100vh - 72px)`
      }}
    >

      <div className="relative w-full h-full">
        <Image
          alt={"assets specs"}
          src={assets_specs}
          style={{
            height: '110vh',
            width: 'auto', // Set width to auto to maintain original aspect ratio
            objectFit: 'cover',
            borderRadius: '0'
          }}
          className="pointer-events-none sm:hidden md:block"
        />
        <p className="absolute top-[calc(45%+100px)] left-0 transform translate-x-4 w-full text-left text-3xl font-bold text-wrap z-10 pr-4">
          HECHO PARA AMANTES DEL SONIDO
        </p>
        <p className="absolute top-[calc(50%+100px)] left-0 transform translate-x-4 w-full text-left text-2xl font-regular text-wrap z-10 pr-40">
          Fabricados con materiales de alta calidad, ofrecen un consumo de energía eficiente y una larga vida útil. Impermeables y de carga rápida: con una clasificación de impermeabilidad IPX6, estos Audífonos son perfectos para usarlos durante la práctica de deportes u otras actividades al aire libre. También vienen con capacidades de carga rápida, lo que te permite volver a tu música o a tus llamadas más rápido.
        </p>
      </div>
      <div
        aria-label="Information"
        className="flex flex-col columns-1 gap-4 justify-center items-center h-full xs:w-screen md:w-1/2 mt-[-50px]"
      >
        <p className="w-7/5 mx-auto text-center text-5xl font-bold text-wrap">
          ESPECIFICACIONES
        </p>
        <p className="w-2/3 text-left text-5xl font-bold">
        <br />
          Gran calidad de sonido.<br /><br />
          Conexión estable.<br /><br />
          Carga rápida.<br /><br />
          Batería de larga duración.<br /><br />
          Livianos.
        </p>
      </div>

    </div>
  )
}