import { useState } from "react";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";
import { ThemeProvider } from "styled-components";
import { BackgroundBody, BtnTheme, ThemeDark, ThemeLight } from "./styles/theme";

import { GrSolaris } from "react-icons/gr";
import { RiMoonLine } from "react-icons/ri";

Modal.setAppElement("#root");

export function App() {
  const [theme, setTheme] = useState(false);

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? ThemeDark : ThemeLight}>
      <TransactionsProvider>
       <BackgroundBody>
        <Header onOpenNewTransitionModal={handleOpenNewTransactionModal} />
        <BtnTheme onClick={toggleTheme}>
          {theme ? (
            <GrSolaris color="yellow" fontSize="20px" />
          ) : (
            <RiMoonLine fontSize="20px" color="#ccc" />
          )}
        </BtnTheme>
        <Dashboard />

        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

        <GlobalStyle />
      </BackgroundBody>
      </TransactionsProvider>
    </ThemeProvider>
  );
}
