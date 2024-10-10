import { useEffect, useState } from "react";
import { colors } from "../../constants/Colors";
import { TCart } from "../../types/Product.Type";
import useLoading from "../../hooks/useLoading";



export function ShoppingCart ( ) {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [productCollection, setProductCollection] = useState<TCart[]>([]);
  const logged = true;

  useEffect(()=>{
    loadProducts();
  }, []);

  const loadProducts = async () => {
    startLoading();
    try {

    } catch (error: any) {
      setProductCollection([]);
      console.log(error);
    } finally {
      stopLoading();
    }
  }

  const handlePurchaseButton = () => {
    console.log(`Added product with id`)
  }

  return (
    <div 
      aria-label="Product showcase"
      className="flex flex-col gap-4 p-3 h-full justify-center items-center bg-white"
      style={{
        minHeight: "25vh",
        minWidth: `460px`,
        borderRadius: 15,
      }}
    >
      { !(productCollection.length > 0) ?
      <>
        <p className="font-bold text-lg" style={{color: colors.gray5}}>¡No hay nada en el carrito!</p>
        { !logged && 
        <p className="font-semibold text-md" style={{color: colors.gray2}}>Inicie sesión para agregar productos al carrito.</p>
        }
      </> : 
      <>

      </>
      }
    </div>

  )
}