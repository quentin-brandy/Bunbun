import './App.css';
import Quizz from './component/Quizz/Quizz';
import Acceuil from './component/Acceuil/Accueil';
import Soin from './component/Soin/Soin';
import Carie from './component/Caries/Carie';
import Recette from './component/Recette/Recette';
function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-lightblue ">
        <div class="flex-col w-80 h-[38rem] bg-slate-50   rounded-3xl overflow-hidden">
          <Recette/>
  </div>
    </div>
  )
}

export default App;
