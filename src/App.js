import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.min.css";
import KommunicateChat from './chat';
import { useSelector, useDispatch } from "react-redux";
//const Header = lazy(() => import("./components/Header"));
//const TopMenu = lazy(() => import("./components/TopMenu"));
const HomeView = lazy(() => import("./views/Home"));
const Login = lazy(() => import("./components/account/SignUpForm"));
const SignUpView = lazy(() => import("./views/account/SignUp"));
const ForgotPasswordView = lazy(() => import("./views/account/ForgotPassword"));
const OrdersView = lazy(() => import("./views/account/Orders"));
const WishlistView = lazy(() => import("./views/account/Wishlist"));
const NotificationView = lazy(() => import("./views/account/Notification"));
const MyProfileView = lazy(() => import("./views/account/MyProfile"));
const ProductListView = lazy(() => import("./views/product/List"));
const ProductListViewMen = lazy(() => import("./views/product/List"));
const ProductListViewWomen = lazy(() => import("./views/product/ListWomen"));
const ProductDetailView = lazy(() => import("./views/product/Detail"));
const StarZoneView = lazy(() => import("./views/product/StarZone"));
const CartView = lazy(() => import("./views/cart/Cart"));
const CheckoutView = lazy(() => import("./views/cart/Checkout"));
const DocumentationView = lazy(() => import("./views/Documentation"));
const NotFoundView = lazy(() => import("./views/pages/404"));
const InternalServerErrorView = lazy(() => import("./views/pages/500"));
const ContactUsView = lazy(() => import("./views/pages/ContactUs"));
const SupportView = lazy(() => import("./views/pages/Support"));
const BlogView = lazy(() => import("./views/blog/Blog"));
const BlogDetailView = lazy(() => import("./views/blog/Detail"));

function App() {
  const Admin = useSelector((state) => state.user);
  return (

    <BrowserRouter>
      <div>
      </div>
      <React.Fragment>
        <Header />
        <TopMenu />
        <Suspense
          fallback={
            <div className="text-white text-center mt-3">Loading...</div>
          }
        >
          <KommunicateChat />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route extact path="/category-men" component={ProductListViewMen} />
            <Route extact path="/category-women" component={ProductListViewWomen} />
            <Route exact path="/category" component={ProductListView} />
            <Route exact path="/product/detail/men" component={ProductDetailView} />
            <Route exact path="/star/zone" component={StarZoneView} />
            <Route exact path="/cart" component={CartView} />
            <Route exact path="/checkout" component={CheckoutView} />
          </Switch>
        
            <div>
              <Switch>

                <Route exact path="/account/profile" component={MyProfileView} />
                <Route exact path="/account/orders" component={OrdersView} />
                <Route exact path="/account/wishlist" component={WishlistView} />
                <Route
                  exact
                  path="/account/notification"
                  component={NotificationView}
                />

                <Route exact path="/documentation" component={DocumentationView} />
                <Route exact path="/contact-us" component={ContactUsView} />
                <Route exact path="/support" component={SupportView} />
                <Route exact path="/blog" component={BlogView} />
                <Route exact path="/blog/detail" component={BlogDetailView} />
                <Route exact path="/500" component={InternalServerErrorView} />
                <Route component={NotFoundView} />

              </Switch>
            </div>
        
        </Suspense>
        <Footer />
      </React.Fragment>
    </BrowserRouter >
  );
}

export default App;
