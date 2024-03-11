import styled from 'styled-components';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import ColorSettings from '../Data/ChartColorData';
import { YoutubeEngagementData } from '../Data/YoutubeData';
import { TwitterEngagementData } from '../Data/TwitterData';
import { FacebookEngagementData } from '../Data/FacebookData';
import { InstagramEngagementData } from '../Data/InstagramData';
import { useDarkMode } from '../DarkModeContext';

const StyledEngagementChart = styled.div`
  grid-column: 1 / -1;
  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--dgray-blue-text);
  }
  padding: 3rem;
  border-radius: 1.2rem;
  opacity: 0.95;
  background-color: var(--lgray-blue);
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
  font-size: 2.2rem;
  font-weight: 500;
  text-align: center;
  margin-left: 4rem;
  font-style: italic;
  color: ${(props) => (props.$isDarkMode ? '#f8f8f8' : 'hsl(230, 17%, 14%)')};
  text-transform: capitalize;
  margin-bottom: 2rem;
`;

function EngagementChart({ platform }) {
  const { isDarkMode } = useDarkMode();
  const colors = ColorSettings();

  return (
    <StyledEngagementChart>
      <StyledChartTitle $isDarkMode={isDarkMode}>
        Engagement Rate Over Time
      </StyledChartTitle>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart
          data={
            (platform === 'youtube' && YoutubeEngagementData) ||
            (platform === 'twitter' && TwitterEngagementData) ||
            (platform === 'facebook' && FacebookEngagementData) ||
            (platform === 'instagram' && InstagramEngagementData)
          }
        >
          <XAxis
            dataKey="label"
            tick={{
              fill: colors.text,
              fontStyle: 'italic',
              fontSize: '1.6rem',
              angle: -12, // Rotate the tick labels for better readability
              dy: 10, // Offset to adjust the vertical position of the labels
            }}
            tickLine={{ stroke: colors.text }}
            interval={2}
          />
          <YAxis
            unit="%"
            tick={{
              fill: colors.text,
              fontStyle: 'italic',
              fontSize: '1.6rem',
            }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="0" strokeWidth={0.2} />
          <Tooltip
            contentStyle={{
              backgroundColor: colors.background,
              borderRadius: 12,
              border: 'none',
              fontStyle: 'italic',
              fontSize: '1.6rem',
              opacity: 0.9,
            }}
          />
          <Area
            dataKey="engagementRate"
            type="monotone"
            stroke={colors.primary.stroke}
            fill={colors.primary.fill}
            strokeWidth={4}
            name="Engagement Rate"
            unit="%"
          />
          <Area
            dataKey="followerGrowthRate"
            type="monotone"
            stroke={colors.secondary.stroke}
            fill={colors.secondary.fill}
            strokeWidth={3}
            name="Follower Growth Rate"
            unit="%"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledEngagementChart>
  );
}

export default EngagementChart;
