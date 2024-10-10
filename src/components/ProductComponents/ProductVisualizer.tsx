import { Button, Image } from "@nextui-org/react";
import { colors } from "../../constants/Colors";
import { IProductVisualizerProps } from "../../interfaces/ProductVisualizer.Interface";



export function ProductVisualizer ({ id, name, price, picture }: IProductVisualizerProps) {

  const handlePurchaseButton = () => {
    console.log(`Added product with id ${id}`)
  }

  return (
    <div 
      aria-label="Product showcase"
      className="flex flex-col gap-6 p-3 h-full justify-center items-center bg-white"
      style={{
        minHeight: "20vh",
        minWidth: `25vw`,
        borderRadius: 30,
      }}
    >
      <p className="font-bold text-xl" style={{color: colors.gray5}}>{name}</p>
      <p className="font-semibold text-lg" style={{color: colors.gray2}}>${price} COP</p>
      <Image 
          alt={"Product image"}
          src={picture}
          style={{ 
            maxHeight: `30vh`
          }}
          className="pointer-events-none"
        />
        <Button color="secondary" size="lg" onClick={handlePurchaseButton}>
          Añadir al carrito
        </Button>
    </div>

  )
}