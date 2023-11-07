import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProductDefaults from './views/ProductDefault';
import SelectBuyHouse from './views/SelectBuyHouse';
import "./sass/styles.scss";
import Payment from './views/Payment';
import ScrollVideos from './views/ScrollVideo';
// import 'bootstrap/scss/_variables.scss';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Loading.....</div>
  </div>
);


function App() {
  return (
    <div className='w-100'>
      <div className="wrapper__mobile">
        <Router>
          <Suspense fallback={loading}>
            <Routes>
              <Route path="*" element={<DefaultLayout />} />
              <Route path="/product-detail" element={<ProductDefaults />} />
              <Route path="/list-buy-house" element={<SelectBuyHouse />} />
              <Route path="/payment" element={<Payment />} />
              {/* <Route path="/scroll-video" element={<ScrollVideos />} /> */}


            </Routes>
          </Suspense>
        </Router>
      </div>
    </div>
  );
}

export default App;
