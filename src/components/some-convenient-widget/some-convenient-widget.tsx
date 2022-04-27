import { FC, useState } from "react";
import styled from "styled-components";
import i18n from "../../utils/i18n";
import { Spinner } from "../spinner";

const messages: Record<string, string> = {
  "Loading.First": "Виджет грузится",
  "Loading.Second": "Виджет ещё грузится",
  "Loading.Third": "Загрузка идёт дольше чем обычно. Пожалуйста, подождите",
  "Error.Timeout": "Ошибка при загрузке. Пожалуйста -- обновите окно",
  "Success.LoadingFinished": "Виджет загружен!",
};

export const SomeConvenientWidget: FC = () => {
  /* 
   Если translate = undefined, то используем то, что якобы пришло изначально,
   то есть объект messages. Если translate = i18n("en" | "fr"), то тогда
   уже перевод начнет работу. 
   */
  const translate: any = undefined; //i18n("fr");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [textLoader, setTextLoader] = useState<string>(
    translate ? translate("Loading.First") : messages["Loading.First"]
  );
  const [currentTextPosition, setCurrentTextPosition] = useState(0);

  let dataLoaded = false;

  if (Object.keys(messages)[currentTextPosition].includes("Loading"))
    setTimeout(() => {
      setCurrentTextPosition(currentTextPosition + 1);
      !dataLoaded &&
        setTextLoader(
          translate
            ? translate(Object.keys(messages)[currentTextPosition])
            : Object.values(messages)[currentTextPosition]
        );
    }, 1500);

  setTimeout(() => {
    loading &&
      !dataLoaded &&
      setTextLoader(
        translate ? translate("Error.Timeout") : messages["Error.Timeout"]
      );
    setError(true);
  }, 6500);

  const loadedData = () => {
    dataLoaded = true;
    setTextLoader(
      translate
        ? translate("Success.LoadingFinished")
        : messages["Success.LoadingFinished"]
    );
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <WidgetContainer>
      {loading ? (
        <>
          <LoadingContainer>
            <Spinner loading={loading} />
            <Text>{textLoader}</Text>
            {!error && (
              <StyledButton onClick={loadedData}>Загрузить данные</StyledButton>
            )}
          </LoadingContainer>
        </>
      ) : (
        <p>Some content</p>
      )}
    </WidgetContainer>
  );
};

const WidgetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.span`
  margin-top: 10px;
  color: #000000;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  max-width: 150px;
  margin: 20vh auto 0 auto;
`;
