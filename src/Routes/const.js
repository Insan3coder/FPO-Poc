// import React from "react";
// import { Redirect } from "react-router-dom";

// Public Pages
import Home from 'pages/Home';
import AboutUs from 'pages/AboutUs';
import Commodities from 'pages/Commodities';
import Products from 'pages/Products';
import Documents from 'pages/Documents';
import Directors from 'pages/Directors';
import Events from 'pages/Events';
import Gallery from 'pages/Gallery';
import ContactUs from 'pages/ContactUs';

// Auth Protected Pages
// N/A

export const NAV_ITEMS = [
	{ path: '/home', name: 'Home' },
	{ path: '/aboutus', name: 'About Us' },
	{ path: '/commodities', name: 'Commodities' },
	{ path: '/products', name: 'Products' },
	{ path: '/documents', name: 'Documents' },
	{ path: '/directors', name: 'Directors' },
	{ path: '/events', name: 'Events' },
	{ path: '/gallery', name: 'Gallery' },
	{ path: '/contactus', name: 'Contact Us' },
];

export const publicRoutes = [
	{ path: '/home', component: Home, name: 'Home' },
	{ path: '/aboutus', component: AboutUs, name: 'About Us' },
	{ path: '/commodities', component: Commodities, name: 'Commodities' },
	{ path: '/products', component: Products, name: 'Products' },
	{ path: '/documents', component: Documents, name: 'Documents' },
	{ path: '/directors', component: Directors, name: 'Directors' },
	{ path: '/events', component: Events, name: 'Events' },
	{ path: '/gallery', component: Gallery, name: 'Gallery' },
	{ path: '/contactus', component: ContactUs, name: 'Contact Us' },
];

export const authProtectedRoutes = [];
