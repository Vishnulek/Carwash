import React from 'react'
import Navbar from './Navbar'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md- col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <label htmlFor="" className="form-label">Phn no:</label>
                <input type="number" name="" id="" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <label htmlFor="" className="form-label">House name</label>
               <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <label htmlFor="" className="form-label">House landmark</label>
               <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <label htmlFor="" className="form-control">Gender</label>
                <input type="radio" name="" id="" className="form-check-input" />
                <label htmlFor="" className="form-check-label">Male</label>
                <input type="radio" name="" id="" className="form-check-input" />
                <label htmlFor="" className="form-check-label">Female</label>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <label htmlFor="" className="form-label">Car manufacture</label>
                <select name="" id="" className="form-control">
                  <option value="select">select</option>
                  <option value="Suzuki">Suzuki</option>
                  <option value="Benz">Benz</option>
                  <option value="BMW">BMW</option>
                  <option value="Jeep">Jeep</option>
                  <option value="Mahindra">Mahindra</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Tata">Tata</option>
                  <option value="Honda">Honda</option>
                </select>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6"> 
                <label htmlFor="" className="form-label">Pincode</label>
                <input type="number" name="" id="" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <label htmlFor="" className="form-label">Expected delivery date</label>
                <input type="date" name="" id="" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <label htmlFor="" className="form-label">Car model</label>
              <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <label htmlFor="" className="form-label">Car colour</label>
<input type="text" className="form-control" />              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <label htmlFor="" className="form-label">Car registeration number</label>
<input type="text" className="form-control" />              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                <label htmlFor="" className="form-label">Amount</label>
                <input type="number" name="" id="" className="form-control" />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx-12">
                <button className="btn btn-success">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
