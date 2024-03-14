import Header from "../../components/Header";
import GeneralBanner from "../../components/GeneralBanner";
import * as H from "../Home/styles";
import { useNavigate } from "react-router-dom";
import CheckoutImg from "../../assets/checkout.svg";

export default function Checkout() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <Header />
      <H.Content>
        <GeneralBanner
          title="Compra realizada com sucesso!"
          image={CheckoutImg}
          textButton="Voltar"
          buttonClick={handleClick}
        />
      </H.Content>
    </div>
  );
}
