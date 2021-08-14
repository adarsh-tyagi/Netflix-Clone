import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import HomeScreen from "./screens//HomeScreen";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from './screens/ProfileScreen'
import Footer from "./Footer"
import MoviesScreen from "./screens/MoviesScreen"
import ShowsScreen from "./screens/ShowsScreen"
import ErrorPage from "./ErrorPage"

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/movies">
              <MoviesScreen />
            </Route>
            <Route path="/shows">
              <ShowsScreen />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        )}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
