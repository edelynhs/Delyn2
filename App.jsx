import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Accounts from "./pages/Accounts";
import CashFlow from "./pages/CashFlow";
import Investments from "./pages/Investments";
import Goals from "./pages/Goals";
import Recurrings from "./pages/Recurrings";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/cashflow" element={<CashFlow />} />
      <Route path="/investments" element={<Investments />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/recurrings" element={<Recurrings />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
