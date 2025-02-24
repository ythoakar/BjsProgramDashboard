// import React from 'react'
// import './SECCard.css'
// function SECCard() {
//   return (
//     <div>
//       <html>
//         <body>
//           <table>
//           <caption style={{ 
//                 captionSide: "top", 
//                 fontSize: "1.5rem", 
//                 fontWeight: "bold", 
//                 padding: "10px", 
//                 textAlign: "left" 
//             }}>
//               Governing Committee
//                </caption>
//             <tr>
//               <th>Name</th>
//               <th>Mobile No</th>
//               <th>Designation</th>
//             </tr>
//             <tr>
//               <td>Kadhesani</td>
//               <td>98734897342</td>
//               <td>President - Women & Youth</td>
//             </tr>
//             <tr>
//               <td>Kamlesh Kataria</td>
//               <td>9894668183</td>
//               <td>State Vice President - Public relations & Outreach</td>
//             </tr>
//             <tr>
//               <td>Deepak Sancheti</td>
//               <td>9600850077</td>
//               <td>State Vice President - Initiative and Growth</td>
//             </tr>
//             <tr>
//               <td>M. Kamal Kishore Tater</td>
//               <td>9443785763</td>
//               <td>State President</td>
//             </tr>
//             <tr>
//               <td>Ramesh Kumar Patawari</td>
//               <td>9442600853</td>
//               <td>Immediate Past State President</td>
//             </tr>
//             <tr>
//               <td>Dhanraj Tatiya</td>
//               <td>9443044136</td>
//               <td>Former State President</td>
//             </tr>
//             <tr>
//               <td>Gyanchand Anchaliya</td>
//               <td>9443153387</td>
//               <td>Former State President</td>
//             </tr>
//             <tr>
//               <td>Rajendra Dugad</td>
//               <td>9444040679</td>
//               <td>Former State President</td>
//             </tr>
//             <tr>
//               <td>Rajendra Lunker</td>
//               <td>9360025001</td>
//               <td>Former State President</td>
//             </tr>

//             {/* {data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.age}</td>
//                 <td>{item.role}</td>
//               </tr>
//             ))} */}

//           </table>

//         </body>
//       </html>
//     </div>
//   )
// }

// export default SECCard

// TRY 2
// import React from 'react';

// const SECCard = ({ title, data }) => {
//     return (
//         <div style={{ marginBottom: "40px" }}>
//             <h3 style={{ textAlign: "left", marginBottom: "10px" }}>{title}</h3>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Role</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item, index) => (
//                         <tr key={index}>
//                             <td>{item.name}</td>
//                             <td>{item.age}</td>
//                             <td>{item.role}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
// export default SECCard


// TRY 3 --- works
// import React from 'react';
// import './SECCard.css';
// import '@ant-design/v5-patch-for-react-19';

// function SECCard({ title }) {
//     const data = [
//         {
//             "_id": "67764003ef3c5029074fac72",
//             "committee": "State Executive Committee",
//             "state": "670c206abe9c90d099f6f9db",
//             "region": null,
//             "district": null,
//             "fName": "Sharad",
//             "mName": "M",
//             "lName": "Sheth",
//             "gender": "Male",
//             "mobile": "9426733055",
//             "sameWhatsappNumber": "No",
//             "whatsAppNumber": "9979969595",
//             "postion": "General Secretary",
//             "address": "STERLING AGENCIES \r\nNR CHURCH, LIMDA LANE\r\nJAMNAGAR",
//             "pincode": "361001",
//             "altMobile": "9427279717",
//             "emailId": "sharad.jamnagar@gmail.com",
//             "highestQualification": "Post Graduate",
//             "occupation": "Self Employed",
//             "businessDomain": "Traditional business (like Kirana, Clothes, Jewellery)",
//             "businessDomainOther": "",
//             "DOB": "02/28/1960",
//             "maritalStatus": "Married",
//             "weddAnniversary": "01/25/1987",
//             "profile_image": "https://d1p2erj8yg7kgi.cloudfront.net/production/bjscommitte/profile/6776400346768_20230222_232748-removebg-preview.png",
//             "is_deleted": 0,
//             "created_datetime": "02-01-2025 12:58:03",
//             "created_at": "2025-01-02 12:58:03",
//             "updated_at": "2025-01-17 13:19:56",
//             "hoRemark": null,
//             "isVerificationDone": "Yes",
//             "updated_by": "6720778d734f2856e670c224",
//             "updated_datetime": "17-01-2025 13:19:56",
//             "committee_state": {
//                 "_id": "670c206abe9c90d099f6f9db",
//                 "BjsStateName": "Gujarat"
//             },
//             "committee_region": null,
//             "committee_district": null
//         },
//         {
//             "_id": "679f205a85ed1428bd4c3962",
//             "committee": "6772886f6953c2e1d5cddf31",
//             "committeeType": "677272616953c2e1d5cddf14",
//             "state": "670c206abe9c90d099f6f9e5",
//             "region": "670ca1d6be9c90d099f6fa23",
//             "district": "",
//             "fName": "Mahendra",
//             "mName": "Prabhakarrao",
//             "lName": "Tarte",
//             "gender": "Male",
//             "mobile": "9860201008",
//             "sameWhatsappNumber": "Yes",
//             "whatsAppNumber": "9860201008",
//             "postion": "6773d7f66953c2e1d5cddf5c",
//             "postionOthers": "",
//             "address": "ND42,H,9/3 Dnyneshwar Nagar, Main Road Cidco, Nanded",
//             "pincode": "431603",
//             "altMobile": "9890107827",
//             "emailId": "tarte.mahendra@gmail.com",
//             "highestQualification": "Post Graduate",
//             "occupation": "Self Employed",
//             "businessDomain": "Other",
//             "businessDomainOther": "LIC Agent ",
//             "DOB": "09/09/1972",
//             "maritalStatus": "Married",
//             "weddAnniversary": "02/03/2002",
//             "profile_image": "https://d1p2erj8yg7kgi.cloudfront.net/production/bjscommitte/profile/679f2059e5d14_1000078340.png",
//             "is_deleted": 0,
//             "created_datetime": "02-02-2025 13:05:54",
//             "created_at": "2025-02-02 13:05:54",
//             "updated_at": "2025-02-02 13:05:54",
//             "committee_state": {
//                 "_id": "670c206abe9c90d099f6f9e5",
//                 "BjsStateName": "Maharashtra"
//             },
//             "committee_region": {
//                 "_id": "670ca1d6be9c90d099f6fa23",
//                 "RegionName": "Marathwada _B"
//             },
//             "committee_district": null
//         },
//         {
//             "_id": "679f92e62d7c9d087627bc62",
//             "committee": "6772886f6953c2e1d5cddf31",
//             "committeeType": "677272616953c2e1d5cddf14",
//             "state": "670c206abe9c90d099f6f9e5",
//             "region": "670ca1d6be9c90d099f6fa22",
//             "district": "",
//             "fName": "Pankaja",
//             "mName": "Jaykumar",
//             "lName": "Pandit",
//             "gender": "Female",
//             "mobile": "8767083131",
//             "sameWhatsappNumber": "Yes",
//             "whatsAppNumber": "8767083131",
//             "postion": "6773d83e6953c2e1d5cddf5f",
//             "postionOthers": "Regional General Secretary",
//             "address": "Ratnatray plot no.8 , vijapur road , saiful , Solapur",
//             "pincode": "413008",
//             "altMobile": "",
//             "emailId": "pankajapandit.61@gmail.com",
//             "highestQualification": "Graduate",
//             "occupation": "Home Maker",
//             "businessDomain": "",
//             "businessDomainOther": "",
//             "DOB": "05/12/1961",
//             "maritalStatus": "Married",
//             "weddAnniversary": "05/31/1978",
//             "profile_image": "https://d1p2erj8yg7kgi.cloudfront.net/production/bjscommitte/profile/679f92e6be61e_17385110035115353206520093626459.jpg",
//             "is_deleted": 0,
//             "created_datetime": "02-02-2025 21:14:38",
//             "created_at": "2025-02-02 21:14:38",
//             "updated_at": "2025-02-02 21:14:38",
//             "committee_state": {
//                 "_id": "670c206abe9c90d099f6f9e5",
//                 "BjsStateName": "Maharashtra"
//             },
//             "committee_region": {
//                 "_id": "670ca1d6be9c90d099f6fa22",
//                 "RegionName": "Marathwada _A"
//             },
//             "committee_district": null
//         },
//         {
//             "_id": "674d5ffa1d38e65bae4e02a2",
//             "committee": "State Executive Committee",
//             "state": "670c206abe9c90d099f6f9e0",
//             "region": null,
//             "district": null,
//             "fName": "Anita",
//             "mName": null,
//             "lName": "Gandhi",
//             "gender": "Female",
//             "mobile": "9845059847",
//             "sameWhatsappNumber": "Yes",
//             "whatsAppNumber": "9845059847",
//             "postion": "Secretary",
//             "address": "Mannat no 25, 3rd cross Kasturi nagar, Main Magadi road, Opp Prestige west woods apartment, Near Lulu mall, Banglore",
//             "pincode": "560023",
//             "altMobile": "9845059847",
//             "emailId": "anitaanugandhi@yahoo.co.in",
//             "highestQualification": null,
//             "occupation": null,
//             "businessDomain": null,
//             "businessDomainOther": "",
//             "DOB": "15/12/1972",
//             "maritalStatus": "Married",
//             "weddAnniversary": "11/19/1992",
//             "profile_image": "https://d1p2erj8yg7kgi.cloudfront.net/production/bjscommitte/profile/675bd3f4ef729_WhatsApp Image 2024-12-13 at 11.03.50 AM.jpeg",
//             "is_deleted": 0,
//             "created_datetime": "02-12-2024 12:51:29",
//             "created_at": "2024-12-02 12:51:29",
//             "updated_at": "2025-01-18 11:44:54",
//             "hoRemark": null,
//             "isVerificationDone": "Yes",
//             "updated_by": "6720788e6c38eb15fb2fca3d",
//             "updated_datetime": "18-01-2025 11:44:54",
//             "committee_state": {
//                 "_id": "670c206abe9c90d099f6f9e0",
//                 "BjsStateName": "Karnataka"
//             },
//             "committee_region": null,
//             "committee_district": null
//         },
//         {
//             "_id": "674d60c0a1bb47486654d4a2",
//             "committee": "State Executive Committee",
//             "state": "670c206abe9c90d099f6f9e0",
//             "region": null,
//             "district": null,
//             "fName": "Uttamchand",
//             "mName": null,
//             "lName": "Bantia",
//             "gender": "Male",
//             "mobile": "9844092690",
//             "sameWhatsappNumber": "Yes",
//             "whatsAppNumber": "9844092690",
//             "postion": "Member",
//             "address": null,
//             "pincode": "560002",
//             "altMobile": null,
//             "emailId": null,
//             "highestQualification": null,
//             "occupation": null,
//             "businessDomain": null,
//             "businessDomainOther": "",
//             "DOB": null,
//             "maritalStatus": "Married",
//             "weddAnniversary": null,
//             "profile_image": "",
//             "is_deleted": 0,
//             "created_datetime": "02-12-2024 12:54:48",
//             "created_at": "2024-12-02 12:54:48",
//             "updated_at": "2025-01-17 16:57:15",
//             "hoRemark": null,
//             "isVerificationDone": "Yes",
//             "updated_by": "6720788e6c38eb15fb2fca3d",
//             "updated_datetime": "17-01-2025 16:57:15",
//             "committee_state": {
//                 "_id": "670c206abe9c90d099f6f9e0",
//                 "BjsStateName": "Karnataka"
//             },
//             "committee_region": null,
//             "committee_district": null
//         },
//         {
//             "_id": "674d8112aca04e73c50597f2",
//             "committee": "6772881a6953c2e1d5cddf30",
//             "state": "670c206abe9c90d099f6f9e0",
//             "region": null,
//             "district": null,
//             "fName": "Dinesh",
//             "mName": null,
//             "lName": "Palrecha",
//             "gender": "Male",
//             "mobile": "9448126217",
//             "sameWhatsappNumber": "Yes",
//             "whatsAppNumber": "9448126217",
//             "postion": "677280406953c2e1d5cddf24",
//             "address": "Dinesh M Jain (Ramesh Electricals) #02, 29thward, 2nd Cross, M.J.Nagar, Dam Road, Near citi,  Hospital, Hospet, Dist: Bellary",
//             "pincode": "583203",
//             "altMobile": null,
//             "emailId": "dineshjain@rameshelectricals.com",
//             "highestQualification": "Graduate",
//             "occupation": "Self Employed",
//             "businessDomain": null,
//             "businessDomainOther": "",
//             "DOB": "1973-01-29",
//             "maritalStatus": "Married",
//             "weddAnniversary": "1996-01-30",
//             "profile_image": "https://d1p2erj8yg7kgi.cloudfront.net/production/bjscommitte/profile/675be3dc0471c_Dinesh Palrecha.jpeg",
//             "is_deleted": 0,
//             "created_datetime": "02-12-2024 15:12:42",
//             "created_at": "2024-12-02 15:12:42",
//             "updated_at": "2025-02-05 10:18:12",
//             "hoRemark": null,
//             "isVerificationDone": "Yes",
//             "updated_by": "6720788e6c38eb15fb2fca3d",
//             "updated_datetime": "05-02-2025 10:18:12",
//             "committeeType": "677271da6953c2e1d5cddf12",
//             "committee_state": {
//                 "_id": "670c206abe9c90d099f6f9e0",
//                 "BjsStateName": "Karnataka"
//             },
//             "committee_region": null,
//             "committee_district": null
//         },
//         {
//             "_id": "674d81fe4c2e7e13b1088642",
//             "committee": "State Executive Committee",
//             "state": "670c206abe9c90d099f6f9e0",
//             "region": null,
//             "district": null,
//             "fName": "Goutam",
//             "mName": null,
//             "lName": "Bafna",
//             "gender": "Male",
//             "mobile": "9844054592",
//             "sameWhatsappNumber": "Yes",
//             "whatsAppNumber": "9844054592",
//             "postion": "Member",
//             "address": "Mutha Wagmal Bhuraji, HO - 2nd Floor, WB Plaza, New Cotton Market, Hubli 580029, Dharwad",
//             "pincode": "580029",
//             "altMobile": null,
//             "emailId": "Goutam.bafna@mwbgroups.com",
//             "highestQualification": "Graduate",
//             "occupation": "Self Employed",
//             "businessDomain": "Professional",
//             "businessDomainOther": "",
//             "DOB": "01/01/1971",
//             "maritalStatus": "Married",
//             "weddAnniversary": "02/07/1991",
//             "profile_image": "https://d1p2erj8yg7kgi.cloudfront.net/production/bjscommitte/profile/67613ea1e2c91_11 copy.JPG",
//             "is_deleted": 0,
//             "created_datetime": "02-12-2024 15:16:38",
//             "created_at": "2024-12-02 15:16:38",
//             "updated_at": "2025-01-17 15:33:55",
//             "hoRemark": "Ex-President",
//             "isVerificationDone": "Yes",
//             "updated_by": "6720788e6c38eb15fb2fca3d",
//             "updated_datetime": "17-01-2025 15:33:55",
//             "committee_state": {
//                 "_id": "670c206abe9c90d099f6f9e0",
//                 "BjsStateName": "Karnataka"
//             },
//             "committee_region": null,
//             "committee_district": null
//         },
//         {
//             "_id": "67a09cc0bed1ed10e3004132",
//             "committee": "6772881a6953c2e1d5cddf30",
//             "committeeType": "677272616953c2e1d5cddf14",
//             "state": "6710f645089f4ac1695e1888",
//             "region": "",
//             "district": "",
//             "fName": "Sourabh",
//             "mName": "Kumar",
//             "lName": "Jain",
//             "gender": "Male",
//             "mobile": "8989471002",
//             "sameWhatsappNumber": "Yes",
//             "whatsAppNumber": "8989471002",
//             "postion": "6773c6216953c2e1d5cddf3e",
//             "postionOthers": "",
//             "address": "Department of CSE, Gyan Ganga institute of technology and sciences jabalpur ",
//             "pincode": "482003",
//             "altMobile": "8839629718",
//             "emailId": "sourabh52@gmail.com",
//             "highestQualification": "Post Graduate",
//             "occupation": "Service",
//             "businessDomain": "",
//             "businessDomainOther": "",
//             "DOB": "31/05/1984",
//             "maritalStatus": "Married",
//             "weddAnniversary": "02/15/2013",
//             "profile_image": "https://d1p2erj8yg7kgi.cloudfront.net/production/bjscommitte/profile/67a09cc05ced2_17385789193981896703671321450272.jpg",
//             "is_deleted": 0,
//             "created_datetime": "03-02-2025 16:08:56",
//             "created_at": "2025-02-03 16:08:56",
//             "updated_at": "2025-02-03 16:08:56",
//             "committee_state": {
//                 "_id": "6710f645089f4ac1695e1888",
//                 "BjsStateName": "Madhya Pradesh - East"
//             },
//             "committee_region": null,
//             "committee_district": null
//         },
//     ]
//     // JSON becuase pankaj will create an env.
//     return (
//         <div style={{ maxHeight: "100vh", overflowY: "scroll", maxWidth: "400px", scrollbarWidth: "none", msOverflowStyle: "none" }}>
//             <table>
//                 <thead>
//                     <tr>
//                         <th colSpan="3">{title}</th>
//                     </tr>
//                     <tr>
//                         <th>Name</th>
//                         <th>Mobile No</th>
//                         <th>Occupation</th> {/*must replace this with Designation.*/}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item, index) => (
//                         <tr key={index}>
//                             <td>{item.fName + " " + item.mName + " " + item.lName}</td>
//                             <td>{item.mobile}</td>
//                             <td>{item.occupation}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default SECCard;

// TRY 4
// import React from 'react'
// import {Table} from 'antd'

// function SECCard() {
//     const columns = [
//         {
//             label: "Name",
//             key: "fname",
//             dataIndex: "fname"
//         },
//         {
//             label: "Phone No.",
//             key: "mobile",
//             dataIndex: "Mobile"
//         },
//         {
//             label: "Name",
//             key: "fname",
//             dataIndex: "fname"
//         },

//     ];
//   return (
//     <div>
//         <Table columns={columns}/>
//     </div>
//   )
// }

// export default SECCard


// try 5
import React, { useState, useEffect } from 'react';
import "./StateExeCommitteeCard.css"
import { Table, Spin } from 'antd';

const SECCard = ({ title }) => {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/misOfficeBearerUserList`);
                const data = await response.json();
                setDataSource(data);
                setLoading(false)
            } catch (error) {
                setError(error)
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const columns = [
        {
            title: 'Name',
            key: 'name',
            render: (_, record) => `${record.fName || ''} ${record.mName || ''} ${record.lName || ''}`.trim(),
        },
        {
            title: 'Occupation',
            dataIndex: 'occupation',
            key: 'occupation',
        },
        {
            title: 'Contact',
            dataIndex: 'mobile',
            key: 'mobile',
        },
    ];

    return <>
        <div className="table-container">
        <h2>{title}</h2>
            {loading ? <Spin /> : <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{y:500, x:100}} bordered/>}
            {error && <div>Error: {error.message}</div>}
        </div>
    </>
};

export default SECCard;