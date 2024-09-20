
import Sign from './Authentication/Login/Sign/Sign';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login/Sign/Login';

import ForgotPassword from './Authentication/Login/ForgotPassword';
import {Provider} from 'react-redux';
import { store } from './Utility/Redux/store';
import { useEffect } from 'react';
import FaceRecognitionSignup from './Authentication/Login/Sign/FaceRecognitionSignup';
import Home from './pages/Home';
import MyWork from './pages/MyWork';
import Dashboards from './pages/Dashboards';
import Help from './pages/Help';
import Requests from './pages/Requests';
import Jobs from './pages/Jobs/Jobs'; // Points to the Jobs component
import Running from './pages/Running/RunningJobTable'; // Running jobs page
import Completed from './pages/Completed'; // Completed jobs page
import Portfolios from './pages/Portfolios';
import Programs from './pages/Programs';
import TopTabs from './Components/TopTabs';
import ServerView from './Components/ServerView';
// import './Mainpage.css';
import VersionBuildPage from './VersionBuildPage';
import PoolSelection from './Components/PoolSelection';
import ClusterView from './Components/ClusterView';
import DashboardLayout from './Components/menu';
import ReportsPage from './Components/ReportsPage';

function App() {

  return (
    <Provider store={store}>

    <Router>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path='/faceRecognition' element={<FaceRecognitionSignup/>}/>
         
      </Routes>
      <TopTabs/>

      <Routes>
<                       Route path="/home" element={<Home />} />
                        <Route path="/my-work" element={<MyWork />} />
                        <Route path="/dashboards" element={<Dashboards />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/requests" element={<Requests />} />
                        <Route path="/jobs" element={<Jobs />} /> {/* Route for Jobs */}
                        <Route path="/jobs/running" element={<Running />} /> {/* Route for Running Jobs */}
                        <Route path="/jobs/completed" element={<Completed />} /> {/* Route for Completed Jobs */}
                        <Route path="/portfolios" element={<Portfolios />} />
                        <Route path="/programs" element={<Programs />} />
                        <Route path='Versions' element={<VersionBuildPage />} />
                <Route path="/PoolSelection" element={<PoolSelection />} />
                <Route path="/clusters/:poolId" element={<ClusterView />} />
                <Route path="/servers/:poolId/:clusterId" element={<ServerView />} />
                <Route path="/dashboard" element={<ReportsPage />} />
                
      </Routes>


    </Router>

    </Provider>
  );
}

export default App;