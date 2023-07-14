import { LoadMoreBtn } from "./Styled.Button";
export const Button = ({ onClick }) => (
  <>
    <LoadMoreBtn type="button" onClick={onClick}>Load more</LoadMoreBtn>
  </>
);