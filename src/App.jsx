import MainDashboardLayout from './MainDashboardLayout';
import MiniDashboardLayout from './MiniDashboardLayout';
import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';
import { DarkModeProvider } from './DarkModeContext';

const FixedBG = styled.div`
  background-color: var(--pale-blue-top);
  width: 100%;
  height: 55%;
  position: fixed;
  top: 0;
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Center the element */
  z-index: -1;
  box-shadow: var(--shadow-md);
`;

function App() {
  return (
    <DarkModeProvider>
      <FixedBG />
      <GlobalStyles />
      <Header />
      <MainDashboardLayout />
      <MiniDashboardLayout />
    </DarkModeProvider>
  );
}

export default App;
