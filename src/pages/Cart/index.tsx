import Header from "../../components/Header";
import GeneralBanner from "../../components/GeneralBanner";
import { useCartStore, ProductState } from "../../store";
import EmptyCart from "../../assets/emptyCart.svg";
import * as S from "./styles";
import * as H from "../Home/styles";
import CheckoutButton from "./components/checkoutButton";
import CartCard from "../../components/CartCard";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const useStorage = useCartStore();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  const totalPrice: number = useStorage.cart.reduce(
    (acc: number, currentItem: ProductState) => {
      return acc + currentItem.price * currentItem.quantity;
    },
    0
  );

  return (
    <div>
      <Header />
      <>
        {useStorage.cart.length <= 0 && (
          <H.Content>
            <GeneralBanner
              title="Seu carrinho está vazio :("
              image={EmptyCart}
              textButton="Voltar"
              buttonClick={handleClick}
            />
          </H.Content>
        )}
        {useStorage.cart.length > 0 && (
          <S.ContainerController>
            <S.ContentController>
              <S.HeadTable>
                <S.TableItem>Produto</S.TableItem>
                <S.TableItem>QTD</S.TableItem>
                <S.TableItem>Subtotal</S.TableItem>
              </S.HeadTable>
              {useStorage.cart.map((item: ProductState) => (
                <CartCard key={item.id} product={item} />
              ))}
              <S.ContentCheckout>
                <S.Checkout>
                  <S.TotalTitle>Total</S.TotalTitle>
                  <S.TotalPrice>
                    {totalPrice.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </S.TotalPrice>
                </S.Checkout>
                <CheckoutButton />
              </S.ContentCheckout>
            </S.ContentController>
          </S.ContainerController>
        )}
      </>
    </div>
  );
}
