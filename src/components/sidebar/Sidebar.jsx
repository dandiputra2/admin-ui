import React from 'react';
import { Link } from "react-router-dom";
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import StoreIcon from '@mui/icons-material/Store';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="top">
      <Link to="/">
        <span className="logo">Store</span>
      </Link>
    </div>
    <hr />
    <div className="center">
      <ul>
        <p className="title">MAIN</p>
        <li>
          <DashboardIcon className='icon'></DashboardIcon>
          <span>Dashboard</span>
        </li>
        <p className="title">LIST</p>
        <Link to="/users">
          <li>
           <PersonOutlineOutlinedIcon className='icon'></PersonOutlineOutlinedIcon>
            <span>Users</span>
          </li>
        </Link>
        <Link to="/products">
          <li>
          <StoreIcon className='icon'></StoreIcon>
            <span>Products</span>
          </li>
        </Link>
        <li>
        <ShoppingCartTwoToneIcon className='icon'></ShoppingCartTwoToneIcon>
          <span>Orders</span>
        </li>

        <Link to="/categories">
          <li>
           <CategoryIcon className='icon'></CategoryIcon>
            <span>Categories</span>
          </li>
        </Link>


        <p className="title">USER</p>
        <li>
        <AccountBoxIcon className='icon'></AccountBoxIcon>
          <span>Profile</span>
        </li>
        <li>
        <LogoutIcon className='icon'></LogoutIcon>
          <span>Logout</span>
        </li>
      </ul>
    </div>
    <div className="bottom">
      <div className="colorOption"></div>
      <div className="colorOption"></div>
    </div>
  </div>
    );
};

export default Sidebar;