import styled from "styled-components";
export const BlogBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 180px;
  padding-left: calc(50% - 620px);
  padding-right: calc(50% - 620px);
`;
export const BlogTitleBox = styled.div`
  background-image: url("./images/blogBackground.svg");
  background-position: center;
  background-repeat: no-repeat;
  //background-size: contain;
  text-align: center;
  margin-bottom: 20px;
  //margin-top: 60px;
  @media (max-width: 1024px) {
    background-size: 300px;
  }
  @media (max-width: 576px) {
    background-size: 210px;
  }
`;
export const BlogTitle = styled.h1`
  padding-top: 75px;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
  @media (max-width: 1024px) { 
    padding-top: 60px;
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
  }
  @media (max-width: 576px) {
    padding-top: 40px;
  }
`;
export const BlogText = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  text-transform: uppercase;
  margin-bottom: 80px;

  @media (max-width: 1024px) { 
    font-size: 16px;
    line-height: 120%;
    margin-bottom: 60px;
  }
  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 120%;
    margin-bottom: 40px;
  }
`;

export const BlogFilterMenu = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 10px;
  max-width: 1000px;
  margin: 10px 10px 40px 10px;
  padding-left: 30px;

  @media (max-width: 576px) {
    padding-left: 5px;
    margin-bottom: 20px;
  }
`;
export const BlogFilterButton = styled.button`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.black};
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  white-space: nowrap;

  &:hover {
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.purple}; // Update border color
  background-image: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
  }

  &:focus, &:active {
    color: white;
    -webkit-text-fill-color: white; 
    background: ${({ theme }) => theme.colors.gradient};
  }
  
  @media (max-width: 1024px) { 
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const BlogItemsBox = styled.div`
  padding-left: calc(50% - 581px);
  padding-right: calc(50% - 601px);
  //margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 40px;
  justify-content: center;  
`;


export const BlogButton = styled.div`
padding-top: 80px;
align-self: center;
`;
