import { FC, useState } from "react";
import styled from "styled-components";
import { Spinner } from "../Spinner";

export const SomeConvenientWidget: FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <WidgetContainer>
      {loading ? (
        <LoadingContainer>
          <Spinner loading={loading} />
          <Text>Hello</Text>
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

const Text = styled.span`
  margin-top: 10px;
  color: #000000;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
