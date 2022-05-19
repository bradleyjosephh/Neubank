import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';


function EditAdmin() {
  const [proptax, setProptax] = useState(1.2);
  const [propinsure, setPropinsure] = useState(1500);
  const [baserate, setBaserate] = useState(5);
  const [qualifypercent, setQualifypercent] = useState(33);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
      <>
    <form onSubmit={handleSubmit}>
        <div>
      <label>Property Tax
        <input 
          type="text" 
          value={proptax}
          onChange={(e) => setProptax(e.target.value)}
        />%
      </label>
      </div>
      <div>
      <label> Property Insurance
        <input 
          type="text" 
          value={propinsure}
          onChange={(e) => setPropinsure(e.target.value)}
        />
      </label>
      </div>
      <div>
      <label> Interest Rate
        <input 
          type="text" 
          value={baserate}
          onChange={(e) => setBaserate(e.target.value)}
        />%
      </label>
      </div>
      <div>
      <label> Qualifying Percent
        <input 
          type="text" 
          value={qualifypercent}
          onChange={(e) => setQualifypercent(e.target.value)}
        />%
      </label>
      </div>
      <input type="submit" />
    </form>
    <div>
{proptax}
</div>
<div>
{propinsure}
</div>
<div>
{baserate}
</div>
<div>
{qualifypercent}
</div>




        </>
    );
}



export default EditAdmin