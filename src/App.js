import React, { Component } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Header/Header'
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Contact from './Contact/Contact';
import Layout from './Layout/Layout';

const router = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      {
        path: "/", element: <Header />
      },
      {
        path: "header", element: <Header />
      },
      {
        path: "portfolio", element: <Portfolio />
      },
      {
        path: "about", element: <About />
      },
      {
        path: "contact", element: <Contact />
      }
    ]
  }
])

export default class App extends Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    )
  }
}

