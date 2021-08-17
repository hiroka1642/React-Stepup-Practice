import { memo } from "react";
import styled from "styled-components";
import { PrymaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/input";

export const SearchInput = memo(() => {
  console.log("SearchInput");
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrymaryButton>検索</PrymaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
