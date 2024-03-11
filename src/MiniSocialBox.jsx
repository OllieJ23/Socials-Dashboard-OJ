import styled from 'styled-components';
import { useDarkMode } from './DarkModeContext';

const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 0.5fr 0.5fr;
  gap: 1rem;
  background-color: var(--lgray-blue);
  padding: 2.2rem;
  border-radius: 5px;
  max-width: 26rem;
  min-width: 24rem;
  max-height: 11rem;
  align-items: start;
  justify-content: space-between; /* horizontal alignment of grid tracks */
  align-content: space-between;
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    background-color: var(--box-hover);
  }

  @media (max-width: 1050px) {
    max-width: 16rem;
    min-width: 16rem;
  }

  @media (max-width: 550px) {
    max-width: 100%;
    min-width: 60%;
  }
`;

const Title = styled.h4`
  font-size: 1.4rem;
  font-weight: bolder;
  justify-self: start;
`;

const Logo = styled.img`
  justify-self: end;
`;

const TodayContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 1.2rem;
  align-self: end;
  margin-bottom: 1rem;

  @media (max-width: 1050px) {
    font-size: 0.8rem;
  }

  @media (max-width: 550px) {
    font-size: 2rem;
  }
`;

const MiniCount = styled.h4`
  font-size: 3rem;
  font-weight: bolder;
  color: var(--veryDark-blue-text);
  align-self: end;

  @media (max-width: 1050px) {
    font-size: 1.6rem;
  }

  @media (max-width: 550px) {
    font-size: 3rem;
  }
`;

function MiniSocialBox({ title, socialLogo, miniCount, percentage, type }) {
  const { isDarkMode } = useDarkMode();

  return (
    <SocialContainer>
      <Title>{title}</Title>
      <Logo
        // style={
        //   socialLogo === 'youtube' && isDarkMode
        //     ? { filter: 'brightness(0) invert(1)', pointerEvents: 'none' }
        //     : {} // Provide an empty object for the false condition
        // }
        src={`/icon-${socialLogo}.svg`}
        alt="Logo of Social Platform"
      />
      <MiniCount>{miniCount}</MiniCount>
      <TodayContainer>
        <img
          src={type != 'negative' ? '/icon-up.svg' : 'icon-down.svg'}
          alt={`icon of ${type} value`}
        />
        <span
          style={
            type === 'positive'
              ? { color: 'var(--lime-green)' }
              : { color: 'var(--bright-red)' }
          }
        >
          {percentage}%
        </span>
      </TodayContainer>
    </SocialContainer>
  );
}

export default MiniSocialBox;
