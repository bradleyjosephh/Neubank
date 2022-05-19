import React from 'react'

const Admin = () => {

    let adminProp = {proptax: 0.012, propinsure: 1500, baserate: 0.05, qualifypercent: .33}




    return (
        <>
            <h1>Admin Form</h1>
        <div><h3> Property Tax:{adminProp.proptax * 100}%</h3>
        </div>
        <div><h3> Property Insurance:{adminProp.propinsure}</h3></div>
        <div><h3> Interest Rate:{adminProp.baserate * 100}%</h3></div>
        <div><h3> Qualifying Percent:{adminProp.qualifypercent * 100}%</h3></div>

        </>
    );
}

export default Admin