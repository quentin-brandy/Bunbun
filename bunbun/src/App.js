import './App.css';
import Quizz from './component/Quizz';

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-darkblue ">
        <div class="flex-col w-80 h-[38rem] bg-slate-50 bg-bg  rounded-3xl ">
          <Quizz/>
  </div>
    </div>
  )
}

export default App;
