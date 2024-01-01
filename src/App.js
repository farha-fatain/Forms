import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  
  const[formData, setformData] = useState({
    CompanyLegalName : "",
    CompanyBrandName : "",
    Country: "country",
    DefaultCurrency: 'india',
    DefaultCountryCode: '91',
    DefaultTimeZone: 'india',
    State: 'state',
    City: 'city',
    Address1 : "",
    Address2 : "",
    ZipCode : ""
  });

  const[records, setRecords] = useState([]);

  const handleInput = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setformData({...formData, [name] : value})
    



  }

    const handleSelect = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setformData({...formData, [name] : value})
  }
   const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...formData}
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setformData({
      CompanyLegalName:"", CompanyBrandName:"",
      Country: 'country',
      DefaultCurrency: 'india',
      DefaultCountryCode: '91',
      DefaultTimeZone: 'india',
      State: 'state',
      City: 'city',
      Address1:"",
      Address2:"", 
      ZipCode:""
  })

   }
  return (
    <div className="container">
      <h2>Organizational Information</h2>
      <p>Manage your company information to use the platform</p>
      <form action="#" onSubmit={handleSubmit}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Industry Type</span>
            <input type="text" value="Real Estate" readOnly disabled />
          </div>

          <div className="input-box">
            <span className="details">Company Legal Name</span>
            <input type="text" placeholder="eg XYZ LLC" 
            name = "CompanyLegalName"
            value={formData.CompanyLegalName}
            onChange = {handleInput}
            required />
          </div>

          <div className="input-box">
            <span className="details">Company Brand Name</span>
            <input type="text" placeholder="eg Apple"
            name = "CompanyBrandName"
            value={formData.CompanyBrandName}
            onChange = {handleInput}
             required />
          </div>

          <div className="input-box">
            <span className="details">Country</span>
            <select id="country" 
            name="Country"
            value={formData.Country}
            onChange={handleSelect}
            >
              <option value="country">Select Country</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
            </select>
          </div>

          <div class="input-box">
                                    <span class = "details">Default Currency</span>
                                    <select id="default-currency"
                                    name="DefaultCurrency"
                                    value={formData.DefaultCurrency}
                                    onChange={handleSelect}>
                                        <option value ="india">INDIA(R)</option>
                                        <option value ="usa">Dollars</option>
                                        <option value ="germany">Euros</option>
                                        <option value ="russia">Ruble</option>
                                    </select>
                                </div>

                                  <div class="input-box">
                                        <span class = "details">Default Country Code</span>
                                        <select id="default-countrycode"
                                        name="DefaultCountryCode"
                                        value={formData.DefaultCountryCode}
                                        onChange={handleSelect}>
                                            <option value ="91">+91</option>
                                            <option value ="99">99</option>
                                            <option value ="60">60</option>
                                            <option value ="1">+1</option>
                                        </select>
                                    </div>

                                    
                                        <div class="input-box">
                                            <span class = "details">Default Time Zone</span>
                                            <select id="default-time-zone"
                                            name="DefaultTimeZone"
                                            value={formData.DefaultTimeZone}
                                            onChange={handleSelect}>
                                                <option value ="india">UTC +5:30</option>
                                                <option value ="australia">UTC +9:30</option>
                                                <option value ="afganisthan">UTC +4:30</option>
                                                <option value ="myanmar">UTC +6:30</option>
                                            </select>
                                        </div>

                                        
                                            <div class="input-box">
                                                <span class = "details">State</span>
                                                <select id="state"
                                                name="State"
                                                value={formData.State}
                                                onChange={handleSelect}>
                                                    <option value ="state">Select State</option>
                                                    <option value ="jharkhand">Jharkhand</option>
                                                    <option value ="bengal">West Bengal</option>
                                                    <option value ="kerela">Kerela</option>
                                                </select>
                                            </div>

                                            
                                                <div class="input-box">
                                                    <span class = "details">City</span>
                                                    <select id="city"
                                                    name="City"
                                                    value={formData.City}
                                                    onChange={handleSelect}>
                                                        <option value ="city">Select City</option>
                                                        <option value ="new delhi">New Delhi</option>
                                                        <option value ="pune">Pune</option>
                                                        <option value ="bangalore">Bangalore</option>
                                                    </select>
                                                </div>

                                                
                                                    <div class="input-box">
                                                        <span class = "details">Address 1</span>
                                                        <input type = "text" placeholder="eg B111"
                                                        name = "Address1"
                                                        value={formData.Address1}
                                                        onChange = {handleInput}
                                                        required />
                                                    </div>

                                                    
                                                        <div class="input-box">
                                                            <span class = "details">Address 2</span>
                                                            <input type = "text" placeholder="hsahgchj" 
                                                            name = "Address2"
                                                            value={formData.Address2}
                                                            onChange = {handleInput}
                                                            required />
                                                        </div>

                                                        
                                                            <div class="input-box">
                                                                <span class = "details">Zip Code</span>
                                                                <input type = "text" placeholder="eg B111"
                                                                name = "ZipCode" 
                                                                value={formData.ZipCode}
                                                                onChange = {handleInput}
                                                                required />
                                                            </div>



          <div className="button">
            <button id="save">Save</button>
            <button id="cancel">Cancel</button>
          </div>
        </div>
      </form>
      <div>
  {records.map((cElement, index) => (
    <div key={index}>
      <p>{cElement.CompanyLegalName}</p>
      <p>{cElement.CompanyBrandName}</p>
      <p>{cElement.Address1}</p>
      <p>{cElement.Address2}</p>
      <p>{cElement.ZipCode}</p>
    </div>
  ))}
</div>

    </div>
  );
}

export default App;
