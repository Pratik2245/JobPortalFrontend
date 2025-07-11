import HomePage from "./HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "@mantine/tiptap/styles.css";
import TalentProfilePage from "./TalentProfilePage";
import PostJobsPage from "./PostJobsPage";
import JobDetails from "./JobDetails";
import ApplyJobPage from "./ApplyJobPage";
import CompanyPage from "./CompanyPage";
import PostedJobPage from "./PostedJobPage";
import JobHistoryPage from "./JobHistoryPage";
import SignUpPage from "./SignUpPage";
import ProfilePage from "./ProfilePage";
import FindTalentPage from "./FindTalentPage";
import { Divider } from "@mantine/core";
import Footer from "../Components/LandingPage/Footer";
import Header from "../Components/Header/Header";
import FindJobs from "./FindJobs";
import { useSelector } from "react-redux";
const AppRoutes = () => {
  const user = useSelector((state: any) => state.user);

  return (
    <BrowserRouter>
      <div className="relative">
        <Header />
        <Divider size="xs" />
        <Routes>
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/find-talent" element={<FindTalentPage />} />
          <Route path="/talent-profile" element={<TalentProfilePage />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/job-history" element={<JobHistoryPage />} />
          <Route
            path="/signup"
            element={!user ? <SignUpPage /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <SignUpPage /> : <Navigate to="/" />}
          />
          <Route path="/posted-jobs" element={<PostedJobPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/apply-job" element={<ApplyJobPage />} />
          <Route path="/post-jobs" element={<PostJobsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
