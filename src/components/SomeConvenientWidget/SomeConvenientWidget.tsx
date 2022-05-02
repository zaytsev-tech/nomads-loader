import { FC, useState } from "react";
import styled from "styled-components";
import i18n from "../../utils/i18n";
import { LoadingTranslator } from "../../utils/loadingTranslator";
import { Spinner } from "../UIComponents/Spinner";

const messages: Record<string, string> = {
  "Loading.First": "Виджет грузится",
  "Loading.Second": "Виджет ещё грузится",
  "Loading.Third": "Загрузка идёт дольше чем обычно. Пожалуйста, подождите",
  "Error.Timeout": "Ошибка при загрузке. Пожалуйста -- обновите окно",
  "Success.LoadingFinished": "Виджет загружен!",
};

export const SomeConvenientWidget: FC = () => {
  /* 
   Если translate = undefined, то используется экземпляр класса LoadingTranslator.
   С помощью метода i18n можно воспроизвести перевод по типу i18next.
   Если translate = i18n("en" | "fr"), то тогда
   уже перевод начнет работу с помощью либы i18next. 
   */
  const translate: any = undefined; //i18n("fr");

  const translator = new LoadingTranslator("france");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [textLoader, setTextLoader] = useState<string>(
    translate ? translate("Loading.First") : translator.i18n("Loading.First")
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
            : translator.i18n(Object.keys(messages)[currentTextPosition])
        );
    }, 1500);

  setTimeout(() => {
    loading &&
      !dataLoaded &&
      setTextLoader(
        translate
          ? translate("Error.Timeout")
          : translator.i18n("Error.Timeout")
      );
    setError(true);
  }, 6500);

  const loadedData = () => {
    dataLoaded = true;
    setTextLoader(
      translate
        ? translate("Success.LoadingFinished")
        : translator.i18n("Success.LoadingFinished")
    );
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <WidgetContainer>
      {loading ? (
        <LoadingContainer>
          <Spinner loading={loading} textLoader={textLoader} />
          {!error && (
            <StyledButton onClick={loadedData}>Загрузить данные</StyledButton>
          )}
        </LoadingContainer>
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

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  max-width: 150px;
  margin: 20vh auto 0 auto;
`;
