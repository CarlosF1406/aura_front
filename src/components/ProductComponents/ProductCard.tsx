import { Button } from "@nextui-org/react";
import { colors } from "../../constants/Colors";
import { IProductCardProps } from "../../interfaces/ProductCard.Interface";
import { HeadphoneIcon } from "../../assets/tsx_icons/HeadphoneIcon";
import { PlusIcon } from "../../assets/tsx_icons/PlusIcon";
import { MinusIcon } from "../../assets/tsx_icons/MinusIcon";
import { DeleteIcon } from "../../assets/tsx_icons/DeleteIcon";



export function ProductCard ({ id, name, price, amount, returnFunction }: IProductCardProps) {

  const handlePlusButton = () => {
    console.log(`Plus product with id ${id}`)
    returnFunction();
  }

  const handleMinusButton = () => {
    if (amount && (amount-1)==0) {
      handleDeleteButton();
      return;
    }
    console.log(`Minus product with id ${id}`)
    returnFunction();
  }

  const handleDeleteButton = () => {
    console.log(`Delete product with id ${id}`)
    returnFunction();
  }

  return (
    <div 
      aria-label="Product card"
      className="flex flex-row gap-4 p-2 h-full justify-between items-center"
      style={{
        minWidth: `400px`,
        borderRadius: 15,
      }}
    >
        <HeadphoneIcon size={48} fill={colors.primary}/>
        <p className="font-bold text-md" style={{color: colors.gray5}}>{name}</p>
        <p className="font-semibold text-md" style={{color: colors.gray2}}>${price} COP</p>
        <p className="font-semibold text-md" style={{color: colors.gray2}}>Cantidad: {amount}</p>
        <div
          aria-label="Product buttons"
          className="flex flex-row gap-1 justify-end items-center bg-white"
        >
          <Button isIconOnly color="secondary" size="sm" onClick={handlePlusButton}>
            <PlusIcon/>
          </Button>
          <Button isIconOnly color="secondary" size="sm" onClick={handleMinusButton}>
            <MinusIcon/>
          </Button>
          <Button isIconOnly color="secondary" size="sm" onClick={handleDeleteButton}>
            <DeleteIcon/>
          </Button>
        </div>
    </div>

  )
}