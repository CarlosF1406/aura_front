import { useEffect, useState } from "react";
import { colors } from "../../constants/Colors";
import { TCart } from "../../types/Product.Type";
import useLoading from "../../hooks/useLoading";
import { LoadingIcon } from "../../assets/tsx_icons/LoadingIcon";
import { Button } from "@nextui-org/react";
import { ProductCard } from "./ProductCard";



export function ShoppingCart ( ) {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [productCollection, setProductCollection] = useState<TCart[]>([]);
  const [subTotal, setSubTotal] = useState<Number>(0);
  const logged = true;

  useEffect(()=>{
    loadProducts();
  }, []);

  const loadProducts = async () => {
    startLoading();
    try {
      console.log(`Loaded products`);
      calculateSubTotal();
    } catch (error: any) {
      setProductCollection([]);
      console.log(error);
    } finally {
      stopLoading();
    }
  }

  const calculateSubTotal = () => {
    if (productCollection.length>0){
      setSubTotal(productCollection.map(a=> typeof(a.price)==="number" ? a.price : 0).reduce(function(a,b){return a+b;}));
    } else {
      setSubTotal(0);
    }
    console.log(`Loaded SubTotal: $${subTotal} COP`);
  }

  const handlePurchaseButton = () => {

    console.log(`Added product with id`)
  }

  return (
    <div 
      aria-label="Product showcase"
      className="flex flex-col gap-4 px-1 h-full justify-center items-center bg-white"
      style={{
        minHeight: "25vh",
        minWidth: `460px`,
        borderRadius: 15,
      }}
    > 
      { isLoading ? 
      <> 
        <LoadingIcon size={64} fill={colors.gray2}/>
        <p>Cargando...</p>
      </> :
      <>
        { !(productCollection.length > -1) ?
        <>
          <p className="font-bold text-lg" style={{color: colors.gray5}}>¡No hay nada en el carrito!</p>
          { !logged && 
          <p className="font-semibold text-md" style={{color: colors.gray2}}>Inicie sesión para agregar productos al carrito.</p>
          }
        </> : 
        <div
          className="flex flex-col columns-1 p-1 w-full h-full justify-between"
          style={{ 
            minHeight: "24vh",
            borderRadius: 15,
          }}
        >
          <div
            className="flex flex-col gap-1 columns-1 w-full h-full"
          >
            { productCollection.map((_, index) => (
              <ProductCard id={productCollection[index].product} name={productCollection[index].name} price={productCollection[index].price} amount={Number(productCollection[index].amount)} returnFunction={loadProducts}/>
            ))}
          </div>
          <div
            className="flex flex-col gap-1 columns-1 w-full h-full"
          >
            <p className="w-full text-right font-bold">Total a pagar: ${`${subTotal}`} COP</p>
            <Button className="w-full" color="secondary" size="sm" onClick={handlePurchaseButton}>
              Confirmar el pago
            </Button>
          </div>
        </div>
        }
      </>
      }
    </div>

  )
}