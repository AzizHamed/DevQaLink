import Sign from './Authentication/Login/Sign/Sign';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ForgotPassword from './Authentication/Login/ForgotPassword';
import { Provider } from 'react-redux';
import { store } from './Utility/Redux/store';
import FaceRecognitionSignup from './Authentication/Login/Sign/FaceRecognitionSignup';
import TopTabs from './Components/TopTabs';
import ServerView from './Resources/ServerView';
import VersionBuildPage from './Resources/VersionBuildPage';
import PoolSelection from './Resources/PoolSelection';
import ClusterView from './Resources/ClusterView';
import Home from './Components/Home';
import Jobs from './Scheduler/Jobs/Jobs';
import ReportsPage from './Reports/ReportsPage';
import RunningJobTable from './Execution/Running/RunningJobTable';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainApp />
      </Router>
    </Provider>
  );
}

function MainApp() {
  const location = useLocation();

  // Define routes where you don't want to display TopTabs
  const hideTopTabsRoutes = ['/', '/forgot-password', '/faceRecognition'];

  return (
    <>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path='/faceRecognition' element={<FaceRecognitionSignup />} />
      </Routes>

      {/* Conditionally render TopTabs */}
      {!hideTopTabsRoutes.includes(location.pathname) && <TopTabs />}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/running" element={<RunningJobTable />} />
        <Route path="Versions" element={<VersionBuildPage />} />
        <Route path="/PoolSelection" element={<PoolSelection />} />
        <Route path="/clusters/:poolId" element={<ClusterView />} />
        <Route path="/servers/:poolId/:clusterId" element={<ServerView />} />
        <Route path="/dashboard" element={<ReportsPage />} />
      </Routes>
    </>
  );
}

export default App;
