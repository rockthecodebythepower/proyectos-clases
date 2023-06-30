import { styled } from "styled-components";

export const CharacterWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 20px;
`;

export const ImgWrp = styled.div`
  border-radius: 100%;
  width: 150px;
  height: 150px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.h3`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 25px;
  white-space: nowrap;
  color: ${({ $status }) =>
    $status === "unknown"
      ? "var(--primary)"
      : $status === "Dead"
      ? "var(--terciary)"
      : "var(--text)"};
`;
