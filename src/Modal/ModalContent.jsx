import styled from 'styled-components';
import EngagementChart from '../Charts/EngagementChart';
import DemographicChart from '../Charts/DemographicChart';

const StyledGridContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 2fr 2fr 4fr;
  /* background-color: #fff; */
  margin: auto;
  padding: 0 2rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.1fr 1fr 1fr;
    grid-gap: 2px;
    padding: 0 1rem;
  }
`;

const Box = styled.div`
  /* background-color: #444; */
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
`;

const Title = styled.h2`
  font-size: 3.6rem;
  text-transform: capitalize;
  font-weight: 400;
  color: white;
  letter-spacing: 0.2rem;
  text-align: center;

  @media (max-width: 600px) {
    max-width: 72%;
  }
`;

const A = styled(Box)`
  grid-column: 1 / 3;
  grid-row: 1;

  @media (max-width: 1100px) {
    grid-row: 1;
  }
`;

const B = styled(Box)`
  grid-column: 3;
  grid-row: 1 / 3;

  @media (max-width: 1100px) {
    grid-row: 2;
    grid-column: 1;
  }
`;

const C = styled(Box)`
  grid-column: 1 / 3;
  grid-row: 2;
  width: 70rem;

  @media (max-width: 1100px) {
    grid-row: 3;
    grid-column: 1;
  }
`;

const StyledLogo = styled.img`
  position: absolute;
  background-color: aliceblue;
  border-radius: 30%;
  padding: 0.25rem;
  width: 4.8rem;
  max-width: 100%; /* Set a maximum width of 100% */
  margin: auto;
  top: -3%;
  left: -1.5%;
  z-index: 9999;
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;

  @media (max-width: 1100px) {
    top: 2%;
    left: 2%;
  }
`;

function ModalContent({ type }) {
  return (
    <>
      <StyledGridContainer>
        <StyledLogo src={`icon-${type}.svg`} />
        <A>
          <Title>{type} Analytics</Title>
        </A>
        <B>
          <DemographicChart platform={type} />
        </B>
        <C>
          <EngagementChart platform={type} />
        </C>
      </StyledGridContainer>
    </>
  );
}

export default ModalContent;

/* FOR REFERENCE
AUDIENCE DEMOGRAPHICS - AGE, GENDER, LOCATION.
OVERALL ENGAGEMENT RATE (%?) - DONE
HIGHEST PERFORMING CONTENT - HIGHLIGHT VIDEOS, PHOTOS, OR TWEETS
*/
