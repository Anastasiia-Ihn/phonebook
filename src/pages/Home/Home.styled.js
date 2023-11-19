import styled from 'styled-components';
import background from '../../images/hero.jpg';

export const HeroDiv = styled.div`
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 112px 0;

  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${background});
`;

export const MainTitle = styled.h1`
  color: #ffffff;
  font-size: 48px;
  line-height: 1.11;
  text-align: center;
  letter-spacing: 0.02em;
  max-width: 496px;
  margin: auto;
`;
