import React from 'react'
import { useFormik } from 'formik';
import "./DetailsForm.css"
import state_cities from "./state_cities"
function DetailsForm() {

    const states = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]
    


    const formik = useFormik({
        initialValues: {
          name:'',
          mobile:'',
          state:'',
          city:'',
          resource:'',
          otherResources:'',
          contactPersonName:'',
          contactPersonMobile:'',
          additionalDetails:''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });


    return (
        <div className="detailsform">
            <form onSubmit={formik.handleSubmit} className="detailsform__form">
            <div>
                <label htmlFor="name">Full Name</label>
                <input
                    id="name"
                    name="name"
                    required={true}
                    type="text"
                    maxLength={30}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
            </div>
            <div>
                <label htmlFor="mobile">Mobile Number</label>
                <input
                    id="mobile"
                    name="mobile"
                    required={true}
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.mobile}
                />
            </div>
            <div>
                <label>State</label>
                <select
                    name="state"
                    required={true}
                    value={formik.values.state}
                    onChange={formik.handleChange}
                   
                     >
                    <option value="" label="Select State" />
                    {  states.map(state=>(
                        <option key={state} value={state} label={state}/>
                        ))
                    }
                </select>
            </div>


            <div>
                <label>City/Town </label>
                <select
                    required={true}
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                     >
                    <option value="" label="Select City" />
                    {  state_cities[formik.values.state]?.map(city=>(
                        <option key={city} value={city} label={city}/>
                        ))
                    }
                </select>
            </div>

            <div>
               <label >Type Of Resources/leads</label>
               <select name="resource" value={formik.values.resource}
                onChange={formik.handleChange}
               >
                  <option value="ICU Beds" label="ICU Beds" />
                  <option value="OXYGEN CYLINDERS" label="OXYGEN CYLINDERS" />
                  <option value="PLASMA" label="PLASMA" />
                  <option value="REMEDESIVIR" label="REMEDESIVIR" />
                  <option value="QUARANTINE HOMES" label="QUARANTINE HOMES" />
               </select>
            </div>
            <div>
               <label>Specify, If Any Other Resources</label>
               <textarea
                    id="other_resources"
                    name="otherResources"
                    value={formik.values.otherResources}
                    onChange={formik.handleChange}
                />  
            </div>

            <div>
                <label>Contact Person Name</label>
                <input type="text" 
                required={true}
                id="contactPersonName"
                name="contactPersonName"
                value={formik.values.contactPersonName}
                onChange={formik.handleChange}
                />

            </div>
            <div>
                <label>Contact Person Phone Number</label>
                <input type="tel" 
                required={true}
                id="contactPersonMobile"
                name="contactPersonMobile"
                value={formik.values.contactPersonMobile}
                onChange={formik.handleChange}
                />
            </div>

            <div>
               <label>Specify, Any Additional Details</label>
               <textarea
                    id="other_resources"
                    name="additionalDetails"
                    value={formik.values.additionalDetails}
                    onChange={formik.handleChange}
                />  
            </div>
            
             <div className="detailsform__submitbutton">
                 <button type="submit">Submit</button>
             </div>
            

            </form>
            
        </div>
    )
}

export default DetailsForm
