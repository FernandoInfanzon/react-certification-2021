import styled from 'styled-components';

/* Home */
export const H1 = styled.h1`
  padding-top: 3rem;
  text-align: center;
  color: #8ec045;
`;

/* <Header/> */
// export const Nav = styled.nav`
//   background-color: #8ec045;
// `;

/* <Navegacion /> */
export const Li = styled.li`
  font-size: 0.8em;
  padding: 0px 10px;
`;

/* <Video/> */
export const P = styled.p`
  font-size: 0.5em;
  padding: 0px 30px 10px 30px;
  color: #9c9c9c;
`;

export const Imagen = styled.img`
  max-width: 100%;
  width: 100%;
`;

export const HRVideo = styled.hr`
  background-color: red;
`;

export const Titulo = styled.p`
  font-size: 0.6em;
  font-weight: bold;
`;

export const BigTitulo = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  padding-top: 20px;
  color: #8ec045;
`;

export const H2 = styled.h2`
  font-size: 1em;
  font-weight: bold;
  padding: 20px 30px 0px 30px;
`;

/* <Buscar /> */
export const Button = styled.button`
  color: black;
`;

export const Dropdown = styled.ul`
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 5rem;
  padding: 0.5rem 0;
  margin: -20px;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;

export const ImagenIcon = styled.img`
  max-width: 100%;
  width: 50px;
  height: 30px;
  border-radius: 15px;
`;

/* <Footer /> */
export const FooterP = styled.p`
  color: grey;
  font-size: 1.1em;
`;

export const SmallP = styled.p`
  color: grey;
  font-size: 0.5em;
`;

export const Espacio = styled.div`
  height: 80vh;
`;
