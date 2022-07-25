import './Todo.scss';

const Todo = () => {
  return(
    <div className='Todo'>
      <div className='Todo-title'><p className='text'>할 일</p></div>
      <img className='upload-Todo' alt='upload-Todo' src='img/upload-Todo.png'></img>
      <img className='emoji1' alt='emoji1' src='img/emoji1.png'></img>
      <div className='content'><p className='p-todo'><li>화요일 세션 과제</li></p></div>
      <img className='upload-Todo1' alt='upload-Todo' src='img/upload-Todo.png'></img>
      <img className='emoji3' alt='emoji1' src='img/emoji1.png'></img>
      <img className='emoji2' alt='emoji2' src='img/emoji2.png'></img>
      <div className='content-1'><p className='p-todo1'><li>여대톤 준비</li></p></div>
    </div>
  );
};

export default Todo;