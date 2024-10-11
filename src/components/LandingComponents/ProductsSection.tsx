import AuraOWSO8 from "../../assets/old_images/AuraOWSO8.png"
import AuraT12 from "../../assets/old_images/AuraT12.png"
import AuraOWS10 from "../../assets/old_images/AuraOWS10.png"
import { colors } from "../../constants/Colors";
import { ProductVisualizer } from "../ProductComponents/ProductVisualizer";

export function ProductsSection () { 
  const URL_T12 = import.meta.env.VITE_PRODUCT_ID_T12;
  const URL_OWSO8 = import.meta.env.VITE_PRODUCT_ID_OWSO8;
  const URL_OWS10 = import.meta.env.VITE_PRODUCT_ID_OWS10;

  return(
    <div 
      aria-label="Products section"
      className="p-0 m-auto w-full flex flex-col items-center justify-start"
      style={{ 
        height: `calc(100vh - 72px)`,
        minWidth: "99vw",
        backgroundColor: colors.gray0
      }}
    >
      <div
        aria-label="Perfect purchases"
        className="flex flex-col columns-1 py-4 gap-4 justify-start items-center w-full bg-white"
      >
        <p className="w-full text-center text-4xl font-bold text-nowrap" style={{ color: colors.gray5}}>Compras perfectas</p>
        <div
          aria-label="Why perfect"
          className="flex flex-row columns-3 gap-8 items-start justify-between"
          style={{ 
            minWidth: "75vw"}}
        >
          <div
            aria-label="Reason 1"
            className="flex flex-col gap-4 items-center w-4/12"
          >
            <p className="w-full text-center text-xl font-semibold text-wrap" style={{ color: colors.gray2}}>PAGO CONTRA ENTREGA</p>
            <p className="w-full text-center text-lg text-wrap" style={{ color: colors.gray5}}>Tranquilidad y confiabilidad</p>
          </div>
          
          <div
            aria-label="Reason 2"
            className="flex flex-col gap-4 items-center w-4/12"
          >
            <p className="w-full text-center text-xl font-semibold text-wrap" style={{ color: colors.gray2}}>TUS AURA SEGUROS</p>
            <p className="w-full text-center text-lg text-wrap" style={{ color: colors.gray5}}>Tus Aura estarán protegidos en todo momento</p>
          </div>
          
          <div
            aria-label="Reason 3"
            className="flex flex-col gap-4 items-center w-4/12"
          >
            <p className="w-full text-center text-xl font-semibold text-wrap" style={{ color: colors.gray2}}>DEVOLUCIONES SENCILLAS</p>
            <p className="w-full text-center text-lg text-wrap" style={{ color: colors.gray5}}>Devuelve los artículos que cumplan los requisitos en un plazo de 14 días recibidos.</p>
          </div>
        </div>
      </div>
      <div
        aria-label="Product section"
        className="flex flex-col columns-1 py-4 gap-3 justify-start items-center h-full w-full bg-black"
      >
        <p className="w-full text-center text-2xl font-bold text-nowrap">Productos populares</p>
        <div
          aria-label="Products"
          className="flex flex-row columns-3 gap-8 justify-center items-center h-full"
        >
          <ProductVisualizer id={URL_OWSO8} name={`Aura OWS O8`} price={`60.000`} picture={AuraOWSO8}/>
          <ProductVisualizer id={URL_T12} name={`Aura T12`} price={`90.000`} picture={AuraT12}/>
          <ProductVisualizer id={URL_OWS10} name={`Aura OWS 10`} price={`80.000`} picture={AuraOWS10}/>
        </div>
      </div>
      
    </div>
  )
}