import Backdrop from './Backdrop';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { HiOutlineXMark } from 'react-icons/hi2';
import { useDarkMode } from '../DarkModeContext';

const StyledModal = styled(motion.div)`
  width: clamp(70%, 900px, 90%);
  height: min(70%, 700px);
  background: ${(props) => {
    if (props.platform === 'youtube') {
      return 'linear-gradient(0deg, #bf0329 0%, #c61d3f 100%)';
    } else if (props.platform === 'twitter') {
      return 'linear-gradient(135deg, #1DA1F2 0%, #1878d2 100%)';
    } else if (props.platform === 'facebook') {
      return 'linear-gradient(225deg, #1877f2 10%, #4e69a2 100%)';
    } else {
      // Default background style
      return 'linear-gradient(-45deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%)) 20%';
    }
  }};
  margin: auto;
  padding: 0 2rem;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;

  @media (max-width: 1100px) {
    height: min(90%, 700px);
    overflow-y: auto;
  }

  @media (max-width: 550px) {
    overflow-y: auto;
  }
`;

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const StyledCloseIcon = styled(HiOutlineXMark)`
  color: var(--veryDark-blue-text);
  cursor: pointer;
  font-size: 3rem;
  transition: all 0.2s ease;
  right: 0;
  position: absolute;
  margin: 1rem;
  &:hover {
    color: var(--bright-red);
  }

  &:active {
    transform: scale(0.8);
  }
`;

function Modal({ handleClose, children, platform }) {
  const { isDarkMode } = useDarkMode();
  return (
    <Backdrop onClick={handleClose}>
      <StyledModal
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        isDarkMode={isDarkMode}
        platform={platform}
      >
        {children}
        <StyledCloseIcon onClick={handleClose} />
      </StyledModal>
    </Backdrop>
  );
}

export default Modal;
