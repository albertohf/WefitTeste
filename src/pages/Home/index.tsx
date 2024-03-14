import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { ProductType, getProducts } from "../../services/Products";
import { ClipLoader } from "react-spinners";
import * as S from "./styles";
import GeneralBanner from "../../components/GeneralBanner";
import Card from "../../components/Card";
import ImageSvg from "../../assets/reload.svg";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const reloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((product) => {
        setProducts(product);
        //TODO passando um null para o setProducts simula a falha na requisição;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <>
        {isLoading && (
          <S.ContentLoader>
            <ClipLoader
              color="#808080"
              size={83}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </S.ContentLoader>
        )}
        {!isLoading && !products && (
          <S.Content>
            <GeneralBanner
              title="Parece que não há nada por aqui :("
              image={ImageSvg}
              textButton="Recarregar página"
              buttonClick={reloadPage}
            />
          </S.Content>
        )}
        {!isLoading && products && (
          <S.CardConteiner>
            <S.CardContent>
              {products.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </S.CardContent>
          </S.CardConteiner>
        )}
      </>
    </>
  );
}
