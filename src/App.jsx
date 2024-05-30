import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import ExpenseProvider from './contexts/ExpenseContext';
import './App.css';

function App() {
    return (
        <>
            <ExpenseProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/detail/:id" element={<Detail />} />
                    </Routes>
                </BrowserRouter>
            </ExpenseProvider>
        </>
    );
}

export default App;
