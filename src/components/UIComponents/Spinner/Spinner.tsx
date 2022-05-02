import { FC } from "react";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";

type SpinnerProps = {
  loading: boolean;
  textLoader: string;
};

export const Spinner: FC<SpinnerProps> = ({ loading, textLoader }) => {
  return (
    <SpinnerContainer>
      <StyledClipLoader
        speedMultiplier={1}
        color="#20d356"
        loading={loading}
        size={100}
      />
      <Text>{textLoader}</Text>
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  margin-top: 10px;
  color: #000000;
`;

const StyledClipLoader = styled(ClipLoader)``;
