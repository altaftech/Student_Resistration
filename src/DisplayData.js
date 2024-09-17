// import axios from 'axios'
// import React, { Component } from 'react'


// export default class DisplayData extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { mydata: [], itemCount: 0 }
//     }
//     componentDidMount = () => {
//         axios.get('https://akashsir.in/myapi/crud/student-display-api.php')
//             .then(res => this.setState({ mydata: res.data.student_list, itemCount: res.data.student_list.length }))

//     }
//     render() {
//         return (
//             <>
//                 <h2 style={{ textAlign: "center", textDecoration: "underline" }}>Student API</h2>
//                 <div style={{ color: "red", textAlign: "center" }}>({this.state.itemCount} Items)</div>
//                 <table style={{ border: "2px solid black", borderCollapse: "collapse", width: "100%" }}>
//                     <thead>
//                         <tr>
//                             <th style={{ border: "2px solid black", padding: "10px" }}>Id</th>
//                             <th style={{ border: "2px solid black", padding: "10px" }}>Name</th>
//                             <th style={{ border: "2px solid black", padding: "10px" }}>Gender</th>
//                             <th style={{ border: "2px solid black", padding: "10px" }}>Email</th>
//                             <th style={{ border: "2px solid black", padding: "10px" }}>Mobile no.</th>
//                             <th style={{ border: "2px solid black", padding: "10px" }}>Photo</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.mydata.map((value, index) => {
//                                 return (
//                                     <tr key={index}>
//                                         <td style={{ border: "2px solid black", padding: "10px" }}>{value.st_id}</td>
//                                         <td style={{ border: "2px solid black", padding: "10px" }}>{value.st_name}</td>
//                                         <td style={{ border: "2px solid black", padding: "10px" }}>{value.st_gender}</td>
//                                         <td style={{ border: "2px solid black", padding: "10px" }}>{value.st_email}</td>
//                                         <td style={{ border: "2px solid black", padding: "10px" }}>{value.st_mobileno}</td>
//                                         <td style={{ border: "2px solid black", padding: "10px" }}>
//                                             <img src={value.st_photo} alt="todoimage" width={100} />
//                                         </td>
//                                     </tr>
//                                 );
//                             })
//                         }
//                     </tbody>
//                 </table>
//             </>
//         )
//     }
// }


import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function DisplayData() {
    const [mydata, setMydata] = useState([])
    const [itemCount, setItemCount] = useState(0)

    useEffect(() => {
                axios.get('https://akashsir.in/myapi/crud/student-display-api.php')
                .then(res => {
                    setMydata(res.data.student_list);
                    setItemCount(res.data.student_list.length);
                })
                .catch(error => console.error("Error fetching data:", error));  // Optional: handle errors
    }, [])

    return (
        <>
            <h2 style={{ textAlign: "center", textDecoration: "underline" }}>Student API</h2>
            <div style={{ color: "red", textAlign: "center" }}>({itemCount} Items)</div>
            <table style={{ border: "2px solid black", borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th style={{ border: "2px solid black", padding: "10px" }}>Id</th>
                        <th style={{ border: "2px solid black", padding: "10px" }}>Name</th>
                        <th style={{ border: "2px solid black", padding: "10px" }}>Gender</th>
                        <th style={{ border: "2px solid black", padding: "10px" }}>Email</th>
                        <th style={{ border: "2px solid black", padding: "10px" }}>Mobile no.</th>
                        <th style={{ border: "2px solid black", padding: "10px" }}>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mydata.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{ border: "2px solid black", padding: "10px" }}>{value.st_id}</td>
                                    <td style={{ border: "2px solid black", padding: "10px" }}>{value.st_name}</td>
                                    <td style={{ border: "2px solid black", padding: "10px" }}>{value.st_gender}</td>
                                    <td style={{ border: "2px solid black", padding: "10px" }}>{value.st_email}</td>
                                    <td style={{ border: "2px solid black", padding: "10px" }}>{value.st_mobileno}</td>
                                    <td style={{ border: "2px solid black", padding: "10px" }}>
                                        <img src={value.st_photo} alt="todoimage" width={100} />
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
