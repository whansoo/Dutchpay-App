import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateGroup } from './components/CreateGroup';
import { AddMembers } from './components/AddMembers';
import { ExpenseMain } from './components/ExpenseMain';




function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<CreateGroup/>}/>
         <Route path='/members' element={<AddMembers/>}/>
         <Route path='/expense' element={<ExpenseMain/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
