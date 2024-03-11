import styled from 'styled-components';
import ToggleSwitch from './ToggleSwitch';
import { HiMoon, HiSun } from 'react-icons/hi2';
import { useDarkMode } from './DarkModeContext';

const HeaderContainer = styled.header`
  background-color: var(--pale-blue-top);
  min-height: 10rem;
  max-height: 20rem;
  min-width: 100vh;
  display: flex;
  justify-content: space-between; /* Add this line */
  align-items: center; /* Add this line */
  padding: 1rem 2rem; /* Adjust padding as needed */
  margin-bottom: 3rem;
  margin-top: 2rem;

  @media (max-width: 710px) {
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0rem;

  @media (max-width: 710px) {
    &::after {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      background-color: var(--dgray-blue-text); /* Choose your line color */
      margin-top: 2rem; /* Adjust the spacing between the container and the line */
    }
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
  color: var(--dgray-blue-text);

  @media (max-width: 710px) {
    flex-direction: row;
    gap: 10rem;
  }
`;

function Header() {
  const { isDarkMode } = useDarkMode();
  return (
    <HeaderContainer>
      <TitleContainer>
        <h1 style={{ color: 'var( --veryDark-blue-text)' }}>
          Social Media Dashboard
        </h1>
        <h4>Total Followers: 23,004</h4>
      </TitleContainer>
      <ToggleContainer>
        {isDarkMode ? (
          <HiMoon style={{ fontSize: '2.2rem', color: 'white' }} />
        ) : (
          <HiSun
            style={{ fontSize: '2.2rem', color: 'var( --dgray-blue-text)' }}
          />
        )}
        <ToggleSwitch />
      </ToggleContainer>
    </HeaderContainer>
  );
}

export default Header;
