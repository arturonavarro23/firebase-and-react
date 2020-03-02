import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

// custom items
import { Container } from 'components/Common';
import Navigation from 'components/Navigation';
import LandingPage from 'components/Landing';
import SignUpPage from 'components/SignUp';
import SignInPage from 'components/SignIn';
import PasswordForgetPage from 'components/PasswordForget';
import HomePage from 'components/Home';
import AccountPage from 'components/Account';
import AdminPage from 'components/Admin';

const App = () => (
  <ThemeProvider>
    <Router>
      <Navigation />
      <Container>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </Container>
    </Router>
</ThemeProvider>
);

export default App;
