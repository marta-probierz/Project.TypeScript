import React from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "styles/Global";

import {
  AboutUsPage,
  AddNewProjectPage,
  AddNewTeamProjectPage,
  AddTeamPage,
  AllTeamProjectsPage,
  ContactPage,
  EditOpinionPage,
  EmailVerificationPage,
  HomePage,
  LoginPage,
  MentorNotificationsPage,
  MentorProfilePage,
  MyTeamPage,
  NotFoundPage,
  OpinionsPage,
  AddNewOpinionPage,
  SendNewPasswordPage,
  SetNewPasswordPage,
  SignUpPage,
  UserNotificationsPage,
  UserProfilePage,
  UserProjectPage,
  ChangeOldPassword,
  MyTeamProjectsPage,
} from "pages";
import { paths } from "config/paths";
import { PrivateRoute, PrivateRouteProps } from "config/PrivateRoute";
import { PublicRoute, PublicRouteProps } from "config/PublicRoute";
import { isUserLogged } from "services/auth.service";

function App() {
  const defaultPrivateRouteProps: Omit<PrivateRouteProps, "outlet"> = {
    isAuthenticated: isUserLogged(),
    authenticationPath: paths.login,
  };

  const defaultPublicRouteProps: Omit<PublicRouteProps, "outlet"> = {
    isAuthenticated: isUserLogged(),
    authenticationPath: paths.myProfile,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path={paths.home} element={<PublicRoute {...defaultPublicRouteProps} outlet={<HomePage />} />} />

        <Route path={paths.aboutUs} element={<AboutUsPage />} />
        <Route path={paths.contact} element={<ContactPage />} />

        <Route
          path={paths.emailVerification}
          element={<PublicRoute {...defaultPublicRouteProps} outlet={<EmailVerificationPage />} />}
        />
        <Route path={paths.login} element={<PublicRoute {...defaultPublicRouteProps} outlet={<LoginPage />} />} />
        <Route path={paths.signUp} element={<PublicRoute {...defaultPublicRouteProps} outlet={<SignUpPage />} />} />
        <Route
          path={paths.sendNewPassword}
          element={<PublicRoute {...defaultPublicRouteProps} outlet={<SendNewPasswordPage />} />}
        />

        <Route
          path={paths.setPassword}
          element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<SetNewPasswordPage />} />}
        />
        <Route
          path={paths.changePassword}
          element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<ChangeOldPassword />} />}
        />
        <Route
          path={paths.myProfile}
          element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<UserProfilePage />} />}
        />
        <Route
          path={paths.mentorProfile}
          element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<MentorProfilePage />} />}
        />
        <Route
          path={paths.myProjects}
          element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<UserProjectPage />} />}
        />
        <Route
          path={paths.addProject}
          element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<AddNewProjectPage />} />}
        />
        <Route
          path={paths.teamProjects}
          element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<AllTeamProjectsPage />} />}
        />
        <Route
          path={paths.addTeamProject}
          element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<AddNewTeamProjectPage />} />}
        />

        <Route
          path={paths.addOpinion}
          element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<AddNewOpinionPage />} />}
        />

        <Route
          path={paths.editOpinion}
          element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<EditOpinionPage />} />}
        />

        <Route
          path={paths.myOpinions}
          element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<OpinionsPage />} />}
        />
        <Route
          path={paths.myNotifications}
          element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<UserNotificationsPage />} />}
        />
        <Route
          path={paths.mentorNotification}
          element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<MentorNotificationsPage />} />}
        />
        <Route path={paths.addTeam} element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<AddTeamPage />} />} />
        <Route path={paths.myTeam} element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<MyTeamPage />} />} />
        <Route
          path={paths.myTeamProjects}
          element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<MyTeamProjectsPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;