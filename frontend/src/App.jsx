import { Navigate, Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";
import LoadingSpinner from "./components/LoadingSpinner";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import React, { useEffect, useState } from "react"; // Added useState
import "./index.css";

// Layouts
import MainLayout from "./components/MainLayout.jsx"; // Layout for internal pages

// Authentication Pages
import HomePage from "./pages/homepage.jsx";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import DashboardPage from "./pages/DashboardPage"; // Assuming Dashboard is now the protected home

// Core Content Pages
import Learn from "./pages/learn.jsx";
import About from "./pages/about.jsx";
import Test from "./pages/Test.jsx";
import Practice from "./pages/Practice.jsx";
import Userprofile from "./pages/Userprofile.jsx";

// Documentation Pages
import LearnCss from "./pages/docs/LearnCss";
import Learnhtml from "./pages/docs/Learnhtml";
import LearnJs from "./pages/docs/LearnJs";

// Documentation Category Pages
import DSA from "./pages/docs/DSA.jsx";
import WebDev from "./pages/docs/WebDev";
import Cyber from "./pages/docs/Cyber";
import AIML from "./pages/docs/AIML";
import Aptitude from "./pages/docs/Aptitude";

// Specific DSA Topic Pages
import Arrays from "./pages/docs/DSA/Arrays.jsx";
import Strings from "./pages/docs/DSA/Strings.jsx";
import LinkedLists from "./pages/docs/DSA/LinkedLists.jsx";
import StacksQueues from "./pages/docs/DSA/StacksQueues.jsx";
import Trees from "./pages/docs/DSA/Trees.jsx";
import Graphs from "./pages/docs/DSA/Graphs.jsx";
import HashTables from "./pages/docs/DSA/HashTables.jsx";
import Searching from "./pages/docs/DSA/Searching.jsx";
import Sorting from "./pages/docs/DSA/Sorting.jsx";
import Recursion from "./pages/docs/DSA/Recursion.jsx";
import DynamicProgramming from "./pages/docs/DSA/DynamicProgramming.jsx";

// ------------------- Helper Components -------------------

// Protects routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // NOTE: Assuming your HomePage component is now a protected 'Dashboard'
  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

// Redirects authenticated and verified users away from auth pages
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    // Redirect to the main protected content area
    return <Navigate to="/" replace />;
  }

  return children;
};

// ------------------- Main App Component -------------------

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();
  const [xp, setXp] = useState(0); // Kept state from the content App.jsx

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div
      className="min-h-screen bg-gradient-to-br
      bg-black flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating Shapes for the background of auth pages */}
      <FloatingShape
        color="bg-black"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-black"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-black"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />

      <Routes>
        {/* ======================= AUTH ROUTES (Unprotected/Redirected) ======================= */}

        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />

        {/* ======================= PROTECTED ROUTES (Content Pages) ======================= */}

        {/* MainLayout provides the shared navigation/shell for all internal pages */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          {/* Default protected route (The "Home" page after login) */}
          <Route path="/" element={<HomePage xp={xp} setXp={setXp} />} />
          <Route
            path="/home"
            element={<HomePage xp={xp} setXp={setXp} />}
          />{" "}
          {/* Alias if needed */}
          {/* Core Pages */}
          <Route path="/learn" element={<Learn />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test xp={xp} setXp={setXp} />} />
          <Route path="/userprofile" element={<Userprofile />} />
          {/* Documentation Category Routes */}
          <Route path="/learn/dsa" element={<DSA />} />
          <Route path="/learn/webdev" element={<WebDev />} />
          <Route path="/learn/cyber" element={<Cyber />} />
          <Route path="/learn/aiml" element={<AIML />} />
          <Route path="/learn/aptitude" element={<Aptitude />} />
          <Route path="/LearnCss" element={<LearnCss />} />
          <Route path="/Learnhtml" element={<Learnhtml />} />
          <Route path="/LearnJs" element={<LearnJs />} />
          {/* Specific DSA Topic Routes */}
          <Route path="/learn/dsa/arrays" element={<Arrays />} />
          <Route path="/learn/dsa/strings" element={<Strings />} />
          <Route path="/learn/dsa/linked-lists" element={<LinkedLists />} />
          <Route path="/learn/dsa/stacks-queues" element={<StacksQueues />} />
          <Route path="/learn/dsa/trees" element={<Trees />} />
          <Route path="/learn/dsa/graphs" element={<Graphs />} />
          <Route path="/learn/dsa/hash-tables" element={<HashTables />} />
          <Route path="/learn/dsa/searching" element={<Searching />} />
          <Route path="/learn/dsa/sorting" element={<Sorting />} />
          <Route path="/learn/dsa/recursion" element={<Recursion />} />
          <Route path="/learn/dsa/dp" element={<DynamicProgramming />} />
        </Route>

        {/* Catch all route - redirects to the main protected page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
