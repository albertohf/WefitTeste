import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { useCartStore } from "../../../store";
import { useNavigate } from "react-router-dom";

const StyledCheckoutButton = styled.div`
  width: auto;
  height: 4rem;
  margin: 0 1.6rem 1.6rem;

  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.medium};
  font-weight: ${theme.font.extraBold};
  line-height: 19px;
  background-color: ${theme.colors.primary};
  border-radius: ${theme.border.radius};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  cursor: pointer;

  @media (min-width: ${theme.breakpoints.md}) {
    margin: 0;
    width: 17.3rem;
  }
`;

export default function CheckoutButton() {
  const useStorage = useCartStore();
  const navigate = useNavigate();

  function handleClick() {
    useStorage.clearCart();
    navigate("/checkout");
  }

  return (
    <StyledCheckoutButton onClick={handleClick}>
      Finaliar Pedido
    </StyledCheckoutButton>
  );
}
