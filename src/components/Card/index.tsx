import { ProductType } from "../../services/Products";
import * as S from "./styles";
import CartPlus from "../../assets/CartPlus.svg";
import { useCartStore, ProductState } from "../../store";

interface ProductCardProps {
  id?: number;
  product: ProductType;
  quantity?: number;
}

export default function Card({ product }: ProductCardProps) {
  const formattedPrice = product.price?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const useStorage = useCartStore();

  function getQuantityById(
    cart: ProductState[],
    id: number
  ): number | undefined {
    return cart.find((item) => item.id === id)?.quantity;
  }

  const quantity = getQuantityById(useStorage.cart, product.id);

  return (
    <S.Container>
      <S.Content>
        <img src={product.image} alt="img" width={147} height={188} />
        <S.Title>{product.title}</S.Title>
        <S.Price>{formattedPrice}</S.Price>
        <S.StyledButton
          active={!quantity ? false : true}
          onClick={() => {
            useStorage.addItem(product);
          }}
        >
          <S.StyledIcon>
            <S.StyledIconImg src={CartPlus} alt="img" width={15} /> {quantity}
          </S.StyledIcon>
          <S.ButtonText>Adicionar ao Carrinho</S.ButtonText>
        </S.StyledButton>
      </S.Content>
    </S.Container>
  );
}
