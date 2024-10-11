import { Button } from "@nextui-org/react";
import { colors } from "../../constants/Colors";
import { IProductCardProps } from "../../interfaces/ProductCard.Interface";
import { HeadphoneIcon } from "../../assets/tsx_icons/HeadphoneIcon";
import { PlusIcon } from "../../assets/tsx_icons/PlusIcon";
import { MinusIcon } from "../../assets/tsx_icons/MinusIcon";
import { DeleteIcon } from "../../assets/tsx_icons/DeleteIcon";
import useLoading from "../../hooks/useLoading";
import ProductService from "../../services/products/Products.Service";
import Toaster from "../../hooks/useToast";



export function ProductCard ({ id, name, price, amount, returnFunction }: IProductCardProps) {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const { showErrorToast, showSuccessToast } = Toaster();
  const productAPI = new ProductService();

  const handlePlusButton = async () => {
    { !isLoading &&
    startLoading();
    try {
      const { status }: { status: number } = await productAPI.increaseProduct(String(id));
      if ((status===200)) {
        showSuccessToast(`Se aumentó la cantidad de ${name} en el carrito.`);
      } else {
        showErrorToast(`Ocurrió un error al aumentar la cantidad.`);
      }
    } catch (error: any) {
      showErrorToast(`Ocurrió un error al aumentar la cantidad.`);
      console.log(error);
    } finally {
      stopLoading();
      returnFunction();
    }
    }
  }

  const handleMinusButton = async () => {
    if (amount && (amount-1)==0) {
      handleDeleteButton();
      return;
    }
    { !isLoading &&
      startLoading();
      try {
        const { status }: { status: number } = await productAPI.decreaseProduct(String(id));
        if ((status===200)) {
          showSuccessToast(`Se disminuyó la cantidad de ${name} en el carrito.`);
        } else {
          showErrorToast(`Ocurrió un error al disminuir la cantidad.`);
        }
      } catch (error: any) {
        showErrorToast(`Ocurrió un error al disminuir la cantidad.`);
        console.log(error);
      } finally {
        stopLoading();
        returnFunction();
      }
    }
  }

  const handleDeleteButton = async () => {
    { !isLoading &&
      startLoading();
      try {
        const { status }: { status: number } = await productAPI.deleteProduct(String(id));
        if ((status===200)) {
          showSuccessToast(`Se eliminó ${name} del carrito.`);
        } else {
          showErrorToast(`Ocurrió un error al eliminar el producto.`);
        }
      } catch (error: any) {
        showErrorToast(`Ocurrió un error al eliminar el producto.`);
        console.log(error);
      } finally {
        stopLoading();
        returnFunction();
      }
    }
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