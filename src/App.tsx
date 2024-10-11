import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Layout } from "./components/Layout";
import HomePage from './pages/HomePage';

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="*" element={<HomePage/>} />
            </Routes>
          </Layout>
        </Router>
      </Provider>
    </AuthProvider>
  );
}

export default App;
