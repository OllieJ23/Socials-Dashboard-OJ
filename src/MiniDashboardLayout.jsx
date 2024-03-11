import styled from 'styled-components';
import MiniSocialBox from './MiniSocialBox';

const MiniDashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  justify-items: center;
  margin-top: 2rem;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 710px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const StyledH2 = styled.h2`
  color: var(--veryDark-blue-text);

  @media (max-width: 710px) {
    text-align: center;
  }
`;

function MiniDashboardLayout() {
  return (
    <>
      <StyledH2>Overview - Today</StyledH2>
      <MiniDashboardGrid>
        <MiniSocialBox
          title="Page Views"
          socialLogo="facebook"
          miniCount={87}
          percentage={3}
          type="positive"
        />
        <MiniSocialBox
          title="Likes"
          socialLogo="facebook"
          miniCount={52}
          percentage={2}
          type="negative"
        />
        <MiniSocialBox
          title="Likes"
          socialLogo="instagram"
          miniCount={5462}
          percentage={2257}
          type="positive"
        />
        <MiniSocialBox
          title="Profile Views"
          socialLogo="instagram"
          miniCount={'52k'}
          percentage={1375}
          type="positive"
        />
        <MiniSocialBox
          title="Retweets"
          socialLogo="twitter"
          miniCount={117}
          percentage={303}
          type="positive"
        />
        <MiniSocialBox
          title="Likes"
          socialLogo="twitter"
          miniCount={507}
          percentage={553}
          type="positive"
        />
        <MiniSocialBox
          title="Likes"
          socialLogo="youtube"
          miniCount={107}
          percentage={19}
          type="negative"
        />
        <MiniSocialBox
          title="Total Views"
          socialLogo="youtube"
          miniCount={1407}
          percentage={12}
          type="negative"
        />
      </MiniDashboardGrid>
    </>
  );
}

export default MiniDashboardLayout;
