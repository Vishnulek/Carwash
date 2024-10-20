import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const [carServicingData,changeCarServiceData]=useState(
        [
            {
                "slNo":1,"name":"Mathew","mobile":9745267749,"carManufacturer":"Maruti Suzuki","carModel":"Alto","carColour":"SilkySilver","carRegisterationNumber":"Kl28b252","workDescription":"Ensure cleanliness of customer vehicle"
            },
            {
                "slNo":2,"name":"Jacob","mobile":9207948067,"carManufacturer":"Maruti Suzuki","carModel":"Swift","carColour":"Solid fire red","carRegisterationNumber":"Kl12a732","workDescription":"Maintain the carwash facility"
            },
            {
                "slNo":3,"name":"Manu","mobile":8547717067,"carManufacturer":"Maruti Suzuki","carModel":"Baleno","carColour":"Arctic White","carRegisterationNumber":"Kl37c987","workDescription":"Ensure cleanliness of customer vehicle"
            },
            {
                "slNo":4,"name":"Menon","mobile":9876543210,"carManufacturer":"Maruti Suzuki","carModel":"Wagonar","carColour":"Midnight Black","carRegisterationNumber":"Kl45b675","workDescription":"Ensure cleanliness of customer vehicle"
            },
            {
                "slNo":5,"name":"Mersal","mobile":7654300765,"carManufacturer":"Maruti Suzuki","carModel":"Ertiga","carColour":"Splendid silver","carRegisterationNumber":"Tn37b232","workDescription":"Ensure cleanliness of customer vehicle"
            },
            {
                "slNo":6,"name":"Dev","mobile":8765400098,"carManufacturer":"Maruti Suzuki","carModel":"Vitarra Breeza","carColour":"Sizzling Red","carRegisterationNumber":"Tn28b252","workDescription":"Ensure cleanliness of customer vehicle"
            },
            {
                "slNo":7,"name":"Mark","mobile":94448735,"carManufacturer":"Maruti Suzuki","carModel":"Ciaz","carColour":"Nexa blue","carRegisterationNumber":"Tn78a465","workDescription":"Ensure cleanliness of customer vehicle"
            },
            {
                "slNo":8,"name":"Devi","mobile":8887654321,"carManufacturer":"Maruti Suzuki","carModel":"S-Persso","carColour":"MetallicSilkySilver","carRegisterationNumber":"KA28b252","workDescription":"Ensure cleanliness of customer vehicle"
            }
        ]
    )
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Sl.No</th>
      <th scope="col">Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Car manufacturer</th>
      <th scope="col">Car model</th>
      <th scope="col">Car colour</th>
      <th scope="col">Car registeration no</th>
      <th scope="col">Work description</th>
    </tr>
  </thead>
  <tbody>
    {carServicingData.map(
        (value,index)=>{
return <tr>
<th scope="row">{value.slNo}</th>
<td>{value.name}</td>
<td>{value.mobile}</td>
<td>{value.carManufacturer}</td>
<td>{value.carModel}</td>
<td>{value.carColour}</td>
<td>{value.carRegisterationNumber}</td>
<td>{value.workDescription}</td>


</tr>
        }
    )}
   
  </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Viewall
