import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import "./App.css";

////pages

import Home from "./Components/Home/Home";
import CustomerSignup from "./Components/Signup/Customer/CustomerSignup"
import CustonerLogin from "./Components/Signup/Customer/CustonerLogin";
import VenderLogin from "./Components/Signup/Vender/VenderLogin";
import AdminLogin from "./Components/Signup/Admin/AdminLogin";
import VenderSignup from "./Components/Signup/Vender/VenderSignup";
import MainHome from "./Components/Home/MainHome/MainHome";
import VenderItemList from "./Components/Signup/Vender/VenderItemList";
import ArivalsPage from "./Components/Pages/ArivalsPage/ArivalsPage";
import Searchitem from "./Components/Pages/Searchitem/Searchitem";
import SpacialDiscount from "./Components/Pages/SpecialDiscount/SpacialDiscount";
import CustomerList from "./Components/Pages/CustomerList/CustomerList";
import AdminVenderList from "./Components/Pages/AdminVenderList/AdminVenderList"
import AdminRevenueList from "./Components/Pages/AdminRevenueList/AdminRevenueList";
import WsAddnewItemPage from "./Components/Pages/WsAddnewItemPage";
import CustomerShoppingList from "./Components/Pages/CustomerShoppingList";
import CustomerPurchaceOrder from "./Components/Pages/CustomerPurchaceOrder";
import CustomerInvoiceList from "./Components/Pages/CustomerInvoiceList";
import Sidebar from "./Sidebar/Sidebar";
import AdminUserList from "./Components/Pages/Admin/AdminUserList";
import AdminPosList from "./Components/Pages/Admin/AdminPos'List";
import AdminCustomerFinalInvoice from "./Components/Pages/Admin/AdminCustomerFinalInvoice";
import WSVenderList from "./Components/Pages/WSVenderList";
import WSDistributerList from "./Components/Pages/WSDistributerList";
import CustomerFinalInvoice from "./Components/Pages/CustomerFinalInvoice";
import VenderCategoryListPage from "./Components/Pages/VenderCategoryListPage";
import VenderDistributerList from "./Components/Pages/VenderDistributerList";
import VendorAddEdit from "./Components/Pages/VendorAddEdit";
import ForgotUserName from "./Components/Signup/Vender/ForgotUserName";
import ForgotPasswordVender from "./Components/Signup/Vender/ForgotPasswordVender";
import VeryifyUserName from "./Components/Signup/Vender/VeryifyUserName";




//for notification
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import ProtectedRoute from "./Components/utils/ProtectedRoute";

function App() {
  return (
    <>
      <ReactNotification />
      <Switch>
      <Route exact path="/homepage" component={Home} />
      <Route exact path="/customerSignup" component={CustomerSignup} />
        <Route exact path="/custonerLogin" component={CustonerLogin} />
        <Route exact path="/VenderLogin" component={VenderLogin} />
        {/* <Route exact path="/admin" component={AdminLogin} /> */}
        <Route exact path="/vendersignup" component={VenderSignup} />
        <Route exact path="/" component={MainHome} />
        <Route exact path="/venderItemList" component={VenderItemList} />
        <Route exact path="/arivalspage" component={ArivalsPage} />
        <Route exact path="/searchitem" component={Searchitem} />
        <Route exact path="/spacialdiscount" component={SpacialDiscount} />
        <Route exact path="/customerlist" component={CustomerList} />
        {/* <Route exact path="/admin-vender-list" component={AdminVenderList} />
        <Route exact path="/admin-revenue-list" component={AdminRevenueList} /> */}
        <Route exact path="/addnewItemPage" component={WsAddnewItemPage} />
        <Route exact path="/customer-shopping-list" component={CustomerShoppingList} />
        <Route exact path="/customer-purchace-order" component={CustomerPurchaceOrder} />
        <Route exact path="/customer-invoice-list" component={CustomerInvoiceList} />
        <Route exact path="/sidebar" component={Sidebar} />
        {/* <Route exact path="/admin-user-list" component={AdminUserList} />
        <Route exact path="/admin-pos-list" component={AdminPosList} />
        <Route exact path="/final-invoice" component={AdminCustomerFinalInvoice} /> */}
        <Route exact path="/WSVenderList" component={WSVenderList} />
        <Route exact path="/WS-distributer-list" component={WSDistributerList} />
        <Route exact path="/customerFinalInvoice" component={CustomerFinalInvoice} />
        <Route exact path="/VenderCategoryListPage" component={VenderCategoryListPage} />
        <Route exact path="/VenderDistributerList" component={VenderDistributerList} />
        <Route exact path="/add-distributer" component={VendorAddEdit} />
        <Route exact path="/forgot-user-name" component={ForgotUserName} />
        <Route exact path="/forgot-password-vender" component={ForgotPasswordVender} />
        <Route exact path="/VeryifyUserName" component={VeryifyUserName} />
      
      </Switch>
    </>
  );
}

export default App;
