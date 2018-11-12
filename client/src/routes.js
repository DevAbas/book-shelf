import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './hoc/Auth/auth';

// COMPONENTS
import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import BookView from './components/Books/';
import Login from './containers/Admin/Login';
import User from './components/Admin/';
import AddBook from './containers/Admin/AddBook';
import EditPost from './containers/Admin/EditPost';
import UserPosts from './components/Admin/UserPosts';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/user" exact component={Auth(User, true)} />
        <Route path="/user/add" exact component={Auth(AddBook, true)} />
        <Route path="/user/edit-post/:id" exact component={Auth(EditPost, true)} />
        <Route path="/user/posts" exact component={Auth(UserPosts, true)} />
        <Route path="/books/:id" exact component={Auth(BookView)} />
      </Switch>
    </Layout>
  )
}
export default Routes;