import { IconButton, Avatar } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from '../../styles/modals/UserInfoModal.module.css';
import urlStore from '../../stores/urlStore';

function UserInfoModal() {
  const { API_URL } = urlStore();
  const { userID } = useParams();
  return (
    <div className={styles.box}>
      <div className={styles.avatar}>
        <Avatar sx={{ width: '100px', height: '100px' }} />
      </div>
      <div className={styles.info}>
        <div className={styles.nickname}>닉네임</div>
        <div className={styles.follower}>
          <FavoriteIcon
            sx={{
              color: 'rgba(29, 177, 119, 0.5)',
              width: '1vw',
            }}
          />
          1.2k
        </div>
        <div>
          <IconButton
            type="button"
            variant="contained"
            onClick={() => {
              console.log('팔로우 하는 기능 만들어야함');
              const url = `${API_URL}/subscription/${userID}`;
              axios
                .post(url)
                .then((response) => {
                  console.log('요청 성공:', response.data);
                  // 성공 시 필요한 작업 수행
                })
                .catch((error) => {
                  console.error('요청 실패:', error);
                  // 실패 시 에러 처리
                });
            }}
            style={{
              backgroundColor: 'rgba(29, 177, 119, 0.7)', // 버튼의 배경색을 1db177로 설정
              color: '#ffffff', // 버튼의 글자색을 흰색으로 설정
              fontSize: '15px', // 버튼의 글자 크기를 조절
              padding: '2px 20px', // 버튼의 내부 여백을 조절
              borderRadius: '40px',
            }}
            className={styles.footer}
          >
            팔로잉
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default UserInfoModal;