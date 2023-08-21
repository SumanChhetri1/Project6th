import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../../styles/dashboard.css';

function Dashboard() {
  const history = useHistory();
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [returnCount, setReturnCount] = useState(0);
  const [totalOrderItemsPrice, setTotalOrderItemsPrice] = useState(0);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  useEffect(() => {
    document.title = 'Dashboard';

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/admin/dashboard`);
      const {
        status,
        userCount,
        productCount,
        categoryCount,
        orderCount,
        returnCount,
        userInfo,
        totalOrderItemsPrice,
      } = response.data;

      if (status === 200) {
        setUserCount(userCount);
        setProductCount(productCount);
        setCategoryCount(categoryCount);
        setOrderCount(orderCount);
        setReturnCount(returnCount);
        setTotalOrderItemsPrice(totalOrderItemsPrice);
        setUserInfo(userInfo);
      } else {
        console.error('API returned an error:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const navigateToUsersPage = () => {
    history.push('/admin/users');
  };

  const navigateToProductsPage = () => {
    history.push('/admin/view-product');
  };

  const navigateToCategoriesPage = () => {
    history.push('/admin/view-category');
  };

  const navigateToOrdersPage = () => {
    history.push('/admin/orders');
  };

  const navigateToReturnsPage = () => {
    history.push('/admin/returns');
  };

  return (
    <div className="dashboard-container">
      <div className="title-container">
      <h1 className="dashboard-title">Dashboard</h1>
        <div className="user-info">
          <div className="user-info-content">
          <div className="user-info-text">
          <p className="user-name">Welcome to Dashboard {userInfo.name} (Admin) !!</p>
          <p className="user-email">Registered with Email: {userInfo.email}</p>
        </div>
        <p className="total-revenue">Our total Revenue: {totalOrderItemsPrice}</p>
          </div>
        </div>

        </div>
      <div className="dashboard-stats">
        <div className="dashboard-stat">
            <button onClick={navigateToUsersPage} className="dashboard-link user-button">
            Total Users: {userCount}
            </button>
        </div>
        <div className="dashboard-stat">
            <button onClick={navigateToProductsPage} className="dashboard-link product-button">
            Total Products: {productCount}
            </button>
        </div>
        <div className="dashboard-stat">
            <button onClick={navigateToCategoriesPage} className="dashboard-link category-button">
            Total Categories: {categoryCount}
            </button>
        </div>
        <div className="dashboard-stat">
            <button onClick={navigateToOrdersPage} className="dashboard-link order-button">
            Total Orders: {orderCount}
            </button>
        </div>
        <div className="dashboard-stat">
            <button onClick={navigateToReturnsPage} className="dashboard-link return-button">
            Total Returns: {returnCount}
            </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
