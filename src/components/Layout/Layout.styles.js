import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid;
  display: flex;
  justify-content: center;
  width: 390px;
  margin: auto auto 0;
  min-height: 100vh;
  padding: 0 20px;
`;
const Layout = styled.nav`
 background-color: white;
 max-width: 20rem;
 border-top-width: 1px;
 position: fixed;
 bottom: 0;
 width: 100%;
 padding-left: 2.5rem/* 40px */;
 padding-right: 2.5rem;
 padding-bottom: 1.25rem;
 padding-top: 0.75rem/* 12px */;
 display: flex;
 justify-content: space-between;
 font-size: 0.75rem/* 12px */;
line-height: 1rem/* 16px */;

`

const L = {
  Container,
  Layout,
};
export default L;