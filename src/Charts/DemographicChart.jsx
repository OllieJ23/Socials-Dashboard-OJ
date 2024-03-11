import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { YoutubeDemographicData } from '../Data/YoutubeData';
import styled from 'styled-components';
import ColorSettings from '../Data/ChartColorData';
import { TwitterDemographicData } from '../Data/TwitterData';
import { FacebookDemographicData } from '../Data/FacebookData';
import { InstagramDemographicData } from '../Data/InstagramData';
import { useDarkMode } from '../DarkModeContext';

const StyledDemographicChart = styled.div`
  background-color: var(--lgray-blue);
  height: 62vh;
  padding: 3rem;
  border-radius: 1.2rem;
  font-size: 1.2rem;
  opacity: 0.95;
  box-shadow:
    rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  @media (max-width: 800px) {
    max-width: 75vw;
  }

  @media (max-width: 460px) {
    max-width: 72%;
  }
`;

const StyledChartTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin-left: 4rem;
  color: ${(props) => (props.$isDarkMode ? '#f8f8f8' : 'hsl(230, 17%, 14%)')};
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

function DemographicChart({ platform }) {
  const { isDarkMode } = useDarkMode();
  const colors = ColorSettings();

  return (
    <StyledDemographicChart $platform={platform}>
      <StyledChartTitle $isDarkMode={isDarkMode}>
        Audience Demographics
      </StyledChartTitle>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={
            (platform === 'youtube' && YoutubeDemographicData) ||
            (platform === 'twitter' && TwitterDemographicData) ||
            (platform === 'facebook' && FacebookDemographicData) ||
            (platform === 'instagram' && InstagramDemographicData)
          }
        >
          <CartesianGrid strokeWidth={0.2} />
          <XAxis
            dataKey="ageGroup"
            tick={{
              fill: colors.text,
              fontStyle: 'italic',
              fontSize: '1.4rem',
            }}
            tickLine={{ stroke: colors.text }}
            interval={0}
          />
          <YAxis
            tick={{
              fill: colors.text,
              fontStyle: 'italic',
              fontSize: '1.4rem',
            }}
            tickLine={{ stroke: colors.text }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: colors.background,
              borderRadius: 12,
              border: 'none',
              fontStyle: 'italic',
              fontSize: '1.6rem',
              opacity: 0.95,
            }}
            cursor={false}
          />
          <Legend
            iconSize={10}
            layout="horizontal"
            style={{ fontSize: '12px' }}
          />
          <Bar dataKey="male" fill="var(--twitter)" name="Male" />
          <Bar dataKey="female" fill="#e136e2" name="Female" />
          <Bar dataKey="nonBinary" fill="grey" name="Non-Binary" />
          <Bar
            dataKey="preferNotToSay"
            fill="#a68965"
            name="Prefer Not to Say"
          />
        </BarChart>
      </ResponsiveContainer>
    </StyledDemographicChart>
  );
}

export default DemographicChart;
