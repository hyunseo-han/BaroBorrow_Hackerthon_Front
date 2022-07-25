import './Alert.scss'

const Alert = () => {
  return(
    <div className='Alert'>
      <div className='title'><p className='titlename'>공지사항</p></div>
      <div className='cont1'><li>연합 세션</li></div>
      <div className='cont2'><li>중앙 해커톤</li></div>
      <img className='upload' alt='upload' src='img/upload.png'></img>
      <div className='upload'></div><div className='cont3'><p className='upload1'>업로드</p></div>
    </div>
  );
};

export default Alert;