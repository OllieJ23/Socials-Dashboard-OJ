import { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal/Modal';
import { motion, AnimatePresence } from 'framer-motion';
import ModalContent from './Modal/ModalContent';

const SocialContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--lgray-blue);
  padding: 2rem;
  border-radius: 0 0 2% 2%;
  max-width: 40rem;
  min-width: 24rem;
  box-shadow: var(--shadow-md);

  cursor: pointer;

  &:hover {
    background-color: var(--box-hover);
  }

  @media (max-width: 1050px) {
    max-width: 20rem;
    min-width: 12rem;
  }

  @media (max-width: 710px) {
    max-width: 20rem;
    min-width: 18rem;
  }

  @media (max-width: 550px) {
    max-width: 40rem;
    min-width: 40rem;
  }
`;

const SocialTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Logo = styled.img``;

const SocialUserName = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
`;

const TotalCount = styled.span`
  margin-top: 1rem;
  font-size: 4.4rem;
  font-weight: 800;
  color: var(--veryDark-blue-text);

  @media (max-width: 1050px) {
    font-size: 2.2rem;
  }

  @media (max-width: 550px) {
    font-size: 4.4rem;
  }
`;

const TodayContainer = styled(SocialTitleContainer)`
  color: var(--lime-green);
  gap: 0.5rem;
  font-weight: bold;
  margin-top: 2rem;
  font-size: 1.2rem;
`;

const InstaBorder = {
  borderWidth: '4px',
  borderStyle: 'solid',
  borderImage: `linear-gradient(90deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%)) 100% 50 0 50`,
};

function SocialBox({
  username,
  socialLogo,
  totalCount,
  todayCount,
  type,
  countType,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <SocialContainer
        style={type ? { borderTop: `4px solid var(--${type})` } : InstaBorder}
        onClick={openModal}
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.9 }}
      >
        <SocialTitleContainer>
          <Logo src={`/icon-${socialLogo}.svg`} />
          <SocialUserName>{username}</SocialUserName>
        </SocialTitleContainer>
        <TotalCount>{totalCount}</TotalCount>
        {type === 'youtube' ? (
          <span style={{ letterSpacing: '0.4rem', fontSize: '1rem' }}>
            SUBSCRIBERS
          </span>
        ) : (
          <span style={{ letterSpacing: '0.4rem', fontSize: '1rem' }}>
            FOLLOWERS
          </span>
        )}
        <TodayContainer>
          <img
            src={countType !== 'negative' ? '/icon-up.svg' : 'icon-down.svg'}
            alt="icon of Social Media Logo"
          />
          <span
            style={
              countType === 'negative'
                ? { color: 'var(--bright-red)' }
                : { color: 'var(--lime-green)' }
            }
          >
            {todayCount} Today
          </span>
        </TodayContainer>
      </SocialContainer>
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={closeModal} platform={type}>
            <ModalContent type={socialLogo} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default SocialBox;
