import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledBackDrop = styled(motion.div)`
  position: absolute;
  top: 0%;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    position: fixed;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 550px) {
    position: fixed;
    height: 100%;
    width: 100%;
  }
`;

function Backdrop({ children, onClick }) {
  return (
    <StyledBackDrop
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </StyledBackDrop>
  );
}

export default Backdrop;
