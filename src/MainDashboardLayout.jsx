import styled from 'styled-components';
import SocialBox from './SocialBox';
import CountUp from 'react-countup';

const MainDashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 2rem;
  justify-items: center;
  margin-bottom: 4rem;

  @media (max-width: 1050px) {
  }

  @media (max-width: 710px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

function MainDashboardLayout() {
  return (
    <MainDashboardGrid>
      <SocialBox
        type="facebook"
        username="@nathanf"
        totalCount={<CountUp start={0} end={1987} duration={2} />}
        socialLogo="facebook"
        todayCount={12}
      />

      <SocialBox
        type="twitter"
        username="@nathanf"
        totalCount={<CountUp start={0} end={1044} duration={2} delay={0.1} />}
        socialLogo="twitter"
        todayCount={99}
      />
      <SocialBox
        username="@realnathanf"
        totalCount={<CountUp start={0} end={11000} duration={2} delay={0.2} />}
        socialLogo="instagram"
        todayCount={1099}
      />
      <SocialBox
        type="youtube"
        username="Nathan F."
        totalCount={<CountUp start={0} end={8239} duration={2} delay={0.3} />}
        socialLogo="youtube"
        todayCount={144}
        countType="negative"
      />
    </MainDashboardGrid>
  );
}

export default MainDashboardLayout;
