import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateGroup } from './components/CreateGroup';
import { AddMembers } from './components/AddMembers';
import { ExpenseMain } from './components/ExpenseMain';
import AppLayout from './components/Layout/AppLayout';




function App() {
  return (
    <BrowserRouter>
    <AppLayout>
      <Routes>
         <Route path='/' element={<CreateGroup/>}/>
         <Route path='/members' element={<AddMembers/>}/>
         <Route path='/expense' element={<ExpenseMain/>}/>
      </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
