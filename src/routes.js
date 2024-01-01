import AccountPage from "./pages/accountPage/AccountPage";
import DetailsPage from "./pages/detailsPage/DetailsPage";
import NewGraph from "./pages/newGraph/NewGraph";
import PricingPlans from "./pages/pricingPlans/PricingPlans";
import Profile from "./pages/profile/Profile";

const routes = [
  { path: '/', element: <Profile /> },
  { path: '/account', element: <AccountPage /> },
  { path: '/new-graph', element: <NewGraph /> },
  { path: '/pricing', element: <PricingPlans /> },
  { path: '/graph/:id', element: <DetailsPage /> },

];

export default routes;