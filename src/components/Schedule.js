import './Schedule.scss'

const Schedule = () => {
  return(
    <div className='Schedule'>
      <div className='schedule-title'>일정</div>
      <img className='sche' alt='sche' src='img/sche.png'></img>
      <div className='conts1'><li>22.07.26</li></div>
      <div className='conts2'><li>22.08.20</li></div>
      <div className='conts3'><li>22.09.02</li></div>
      <p className='p-1'>DRF 연합 세션</p>
      <p className='p-2'>백엔드 트랙 세션</p>
      <p className='p-3'>아이디어톤 제출</p>
      <p className='p-4'>최이화</p>
      <p className='p-5'>박동덕</p>
      <p className='p-6'>이덕성</p>
      <p className='p-7'>기한</p>
      <p className='p-8'>내용</p>
      <p className='p-9'>담당</p>
      <img className='shce1' alt='shce1' src='img/shce1.png'></img>
      <img className='date' alt='date' src='img/date.png'></img>
      <img className='date1' alt='date' src='img/date.png'></img>
      <img className='up-sche' alt='up-sche' src='img/up-sche.png'></img>
      <p className='upl-sche'>업로드</p>
      <p className='date-s'>기한</p>
      <p className='posi-s'>담당</p>
      <img className='poly1' alt='poly' src='img/poly.png'></img>
      <img className='poly2' alt='poly' src='img/poly.png'></img>
    </div>
  );
};

export default Schedule;