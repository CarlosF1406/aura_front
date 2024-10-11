import { useEffect, useState } from "react";
import { colors } from "../../constants/Colors";
import { TCart } from "../../types/Product.Type";
import useLoading from "../../hooks/useLoading";
import { LoadingIcon } from "../../assets/tsx_icons/LoadingIcon";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { ProductCard } from "./ProductCard";
import ProductService from "../../services/products/Products.Service";
import { ConfirmPurchaseModal } from "./ConfirmPurchaseModal";
import { useAppSelector } from "../../hooks/useRedux";



export function ShoppingCart ( ) {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [productCollection, setProductCollection] = useState<TCart[]>([]);
  const [subTotal, setSubTotal] = useState<Number>(0);
  const productAPI = new ProductService();
  const user = useAppSelector(state => state.user.user);

  useEffect(()=>{
    user && loadProducts();
  }, []);

  const loadProducts = async () => {
    startLoading();
    try {
      const { data, status }: { data: any, status: number } = await productAPI.getCart();
      if ((status===200)) {
        setProductCollection(data);
        console.log(`Se cargaron los productos del carrito.`);
        calculateSubTotal();
      } else {
        console.log(`No se pudo cargar el carrito.`);
      }
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
        { !(productCollection.length > 0) ?
        <>
          <p className="font-bold text-lg" style={{color: colors.gray5}}>¡No hay nada en el carrito!</p>
          { !user && 
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
            className="flex flex-col px-1 gap-1 columns-1 w-full h-full"
          >
            <p className="w-full text-right font-bold">Total a pagar: ${`${subTotal}`} COP</p>
            <Popover backdrop="opaque" showArrow autoFocus placement="bottom" className="dark">
              <PopoverTrigger>
                <Button className="w-full" color="secondary" size="sm" onClick={handlePurchaseButton}>
                  Realizar la solicitud
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-1">
                <ConfirmPurchaseModal returnFunction={loadProducts}/>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        }
      </>
      }
    </div>

  )
}