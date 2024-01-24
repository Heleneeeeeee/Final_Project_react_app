// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../../component/guest/Header";
// import { UseVerifyIfUserIsLogged } from "../../utils/security-utils";

// const RequestUpdatePage = () => {
//   UseVerifyIfUserIsLogged();

//   const {id } = useParams();
//   const [message, setMessage] = useState(null);
//   const [rental, setRental] = useState(null);
//   const [holidaysVoucher, setHolidaysVoucher] = useState(null);
//   const [leisure, setLeisure] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const holidaysVoucherResponse = await fetch(`http://localhost:3005/api/holidays/${id}`);
//       const holidaysVoucherResponseData = await holidaysVoucherResponse.json();
//       setHolidaysVoucher(holidaysVoucherResponseData.data);
//     })();
//   }, [id]);

 

//   const handleUpdateHolidaysVoucher = async (event) => {
//     event.preventDefault();


//     const paymentMethod = event.target.paymentMethod.value;
//     const amount = event.target.amount.value;

//     const holidaysVoucherUpdateData = {
      
//       paymentMethod: paymentMethod,
//       amount: amount,
//     };

//     const holidaysVoucherUpdateDataJson = JSON.stringify(holidaysVoucherUpdateData);

//     const token = localStorage.getItem("jwt");

    
//     const updateHolidaysVoucherResponse = await fetch(
//       `http://localhost:3005/api/holidays/${id}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + token,
//         },
//         body: holidaysVoucherUpdateDataJson,
//       });

//       if (updateHolidaysVoucherResponse.status === 201) {
//         setMessage("Mise à jour OK");
//       } else {
//         setMessage("Erreur");
//       }
//   };

//   useEffect(() => {
//     (async () => {
//       const rentalResponse = await fetch(`http://localhost:3005/api/rentals/${id}`);
//       const rentalResponseData = await rentalResponse.json();
//       setRental(rentalResponseData.data);
//     })();
//   }, [id]);

//   const handleUpdateRental = async (event) => {
//     event.preventDefault();

//     const name = event.target.name.value;
//     const paymentMethod = event.target.paymentMethod.value;
//     const amount = event.target.amount.value;

//     const rentalUpdateData = {
//       name:name,
//       paymentMethod: paymentMethod,
//       amount: amount,
//     };

//     const rentalUpdateDataJson = JSON.stringify(rentalUpdateData);

//     const token = localStorage.getItem("jwt");

//     const updateRentalResponse = await fetch(`http://localhost:3005/api/rentals/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + token,
//       },
//       body: rentalUpdateDataJson,
//     });

//     if (updateRentalResponse.status === 201) {
//       setMessage("Mise à jour OK");
//     } else {
//       setMessage("Erreur");
//     }
// };

// useEffect(() => {
//   (async () => {
//     const leisureResponse = await fetch(`http://localhost:3005/api/leisures/${id}`);
//     const leisureResponseData = await leisureResponse.json();
//     setLeisure(leisureResponseData.data);
//   })();
// }, [id]);

//   const handleUpdateLeisure = async (event) => {
//     event.preventDefault();

//     const activity = event.target.activity.value;
//     const beneficiary = event.target.beneficiary.value;
//     const name = event.target.name.value;

//     const formData = new FormData();
//     formData.append("activity", activity);
//     formData.append("beneficiary", beneficiary);
//     formData.append("name", name);
//     formData.append("checkNumber", 0);

//     formData.append("file", event.target.image.files[0]);

//     const token = localStorage.getItem("jwt");

//     const updateLeisureResponse = await fetch(`http://localhost:3005/api/leisures/${id}`, {
//       method: "PUT",
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//       body: formData,
//     });
//   };

//   return (
//     <>
//       <Header />
//       <div>
//         {message && <p>{message}</p>}
        
//         {holidaysVoucher && (
//           <form onSubmit={handleUpdateHolidaysVoucher}>
//             <div>
//               <label>
//                 Mode de paiement
//                 <input type="text" name="paymentMethod" defaultValue={holidaysVoucher.paymentMethod} />
//               </label>
//             </div>
//             <div>
//               <label>
//                 Montant
//                 <input type="number" name="amount" defaultValue={holidaysVoucher.amount} />
//               </label>
//             </div>
//             <input type="submit" />
//           </form>
//         )}
        
//         {rental && (
//           <form onSubmit={handleUpdateRental}>
//             <div>
//               <label>
//                 Mode de paiement
//                 <input type="number" name="paymentMethod" defaultValue={rental.paymentMethod} />
//               </label>
//             </div>
//             <div>
//               <label>
//                 Montant
//                 <input type="number" name="amount" defaultValue={rental.amount} />
//               </label>
//             </div>
//             <input type="submit" />
//           </form>
//         )}
  
//         {leisure && (
//           <form onSubmit={handleUpdateLeisure}>
//             <div>
//               <label>
//                 Activité
//                 <input type="text" name="activity" defaultValue={leisure.activity} />
//               </label>
//             </div>
//             <div>
//               <label>
//                 Bénéficiaire
//                 <input type="text" name="beneficiary" defaultValue={leisure.beneficiary} />
//               </label>
//             </div>
//             <input type="submit" />
//           </form>
//         )}
//       </div>
//     </>
//   );
// }

// export default RequestUpdatePage;
