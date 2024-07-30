import { ApolloProvider } from "@apollo/client"
import { RecoilRoot } from "recoil"
import client from "./graphql/client"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import PrivateRoute from "./components/PrivateRoute"
import NotFoundPage from "./pages/NotFoundPage"
import TopBar from "./components/TopBar"
import PublicRoute from "./components/PublicRoute"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

/**
 * Главный компонент приложения.
 * Настраивает основные провайдеры (Recoil, Apollo, React Router) и определяет структуру маршрутизации.
 * 
 * @returns {JSX.Element} Корневой элемент приложения
 */
function App(): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <TopBar />
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="/notfound" element={<NotFoundPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="*" element={<Navigate to="/notfound" />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </ApolloProvider>
    </RecoilRoot>
  )
}

export default App
