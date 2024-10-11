import { Button, Input } from "@nextui-org/react";
import { colors } from "../../constants/Colors";
import useLoading from "../../hooks/useLoading";
import Toaster from "../../hooks/useToast";
import ProductService from "../../services/products/Products.Service";



export function ConfirmPurchaseModal ( { returnFunction } : { returnFunction?: any }) {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const { showErrorToast, showSuccessToast } = Toaster();
  const productAPI = new ProductService();

  const handlePurchaseButton = async () => {
    { !isLoading &&
    startLoading();
    try {
      const { status }: { status: number } = await productAPI.emptyCart();
      if ((status===200)) {
        showSuccessToast(`Gracias por su compra!.`);
      } else {
        showErrorToast(`Ocurrió un error al vaciar el carrito.`);
      }
    } catch (error: any) {
      showErrorToast(`Ocurrió un error al vaciar el carrito.`);
      console.log(error);
    } finally {
      stopLoading();
      returnFunction();
    }
    }
  }

  return (
    <div 
      aria-label="Product showcase"
      className="flex flex-col gap-3 px-3 h-full justify-center items-center bg-white light"
      style={{
        minHeight: "20vh",
        minWidth: `400px`,
        borderRadius: 30,
      }}
    >
      <p className="font-bold text-md" style={{color: colors.gray5}}>Ingresa tu dirección para confirmar la solicitud de compra.</p>
      <Input variant="underlined" label="Dirección de envío" placeholder="Carrera XXX #XXXa-XX..."/>
      <Button color="primary" size="sm" className="w-full" onClick={handlePurchaseButton}>
        Confirmar compra
      </Button>
    </div>

  )
}