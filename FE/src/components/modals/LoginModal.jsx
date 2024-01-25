import { Button, Modal, Box } from '@mui/material';
import styles from '../../styles/start/StartView.module.css';
import imgLogo from '../../assets/images/logo.png';
import kakaoLogo from '../../assets/images/login/kakao.png';
import userStore from '../../stores/userStore';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid rgba(29, 177, 119, 0.7)',
  boxShadow: 20,
  p: 4,
  borderRadius: '10px',
};

function LoginModal() {
  const { loginModalOpen, setLoginModalOpen } = userStore();

  const handleClose = () => setLoginModalOpen(false);

  return (
    <Modal
      open={loginModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.loginBox} sx={style}>
        <div className={styles.loginText}>LOGIN</div>
        <img
          src={imgLogo}
          alt="mainLogo"
          className={styles.loginLogo}
        />
        <div className={styles.loginMinitext}>
          장소를 소장하다, 나의 맛집 기록
        </div>
        <Button
          sx={{
            width: '300px',
            height: '50px',
            margin: '10px',
            boxShadow: '1px 1px 2px 0px gray',
            backgroundColor: 'rgba(250, 227, 0, 0.5)',
            color: 'black',
            ':hover': {
              backgroundColor: 'rgba(250, 227, 0, 0.7)',
              // color: 'rgba(250, 227, 0, 0.8)',
            },
          }}
        >
          <img
            src={kakaoLogo}
            alt="kakaoLogo"
            className={styles.kakaoLogo}
          />
          카카오 계정으로 로그인하기
        </Button>
      </Box>
    </Modal>
  );
}

export default LoginModal;