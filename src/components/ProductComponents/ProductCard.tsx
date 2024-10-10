import { Button, Image } from "@nextui-org/react";
import { colors } from "../../constants/Colors";
import { IProductVisualizerProps } from "../../interfaces/ProductVisualizer.Interface";



export function ProductCard ({ id, name, price, picture }: IProductVisualizerProps) {

  const handlePurchaseButton = () => {
    console.log(`Added product with id ${id}`)
  }

  return (
    <div 
      aria-label="Product showcase"
      className="flex flex-row gap-4 p-3 h-full justify-start items-center bg-white"
      style={{
        minWidth: `400px`,
        borderRadius: 15,
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