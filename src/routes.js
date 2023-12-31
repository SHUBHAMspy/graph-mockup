import AccountPage from "./pages/accountPage/AccountPage";
import NewGraph from "./pages/newGraph/NewGraph";
import PricingPlans from "./pages/pricingPlans/PricingPlans";
import Profile from "./pages/profile/Profile";

const routes = [
  { path: '/', element: <Profile /> },
  { path: '/account', element: <AccountPage /> },
  { path: '/new-graph', element: <NewGraph /> },
  { path: '/pricing', element: <PricingPlans /> },

];

export default routes;