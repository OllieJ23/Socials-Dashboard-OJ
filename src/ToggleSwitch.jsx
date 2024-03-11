import styled from 'styled-components';
import { useDarkMode } from './DarkModeContext';

const SwitchContainer = styled.label`
  display: inline-block;
  position: relative;
  width: 5rem;
  height: 2.4rem;
  transition: all 0.2s ease-in;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background: linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%));
  }

  &:checked + span:before {
    transform: translateX(2.5rem);
  }
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--toggle);
  transition: all 0.2s ease-in;
  border-radius: 24px;

  &:before {
    content: '';
    position: absolute;
    height: 1.8rem;
    width: 1.8rem;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.2s ease-in;
    border-radius: 50%;
  }

  ${SwitchInput}:checked + & {
    background-color: var(--lgray-blue);
    &:before {
      background-color: var(--lgray-blue);
    }
  }
`;

const ToggleSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <SwitchContainer>
      <SwitchInput
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <SwitchSlider />
    </SwitchContainer>
  );
};

export default ToggleSwitch;
