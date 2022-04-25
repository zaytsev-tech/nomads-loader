import { FC } from "react";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";

type SpinnerProps = {
  loading: boolean;
};

export const Spinner: FC<SpinnerProps> = ({ loading }) => {
  return (
    <SpinnerContainer>
      <StyledClipLoader
        speedMultiplier={1}
        color="#20d356"
        loading={loading}
        size={100}
      />
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  display: flex;
`;

const StyledClipLoader = styled(ClipLoader)``;
