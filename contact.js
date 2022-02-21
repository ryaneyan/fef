const firebaseConfig = {
  apiKey: "AIzaSyC49gv1Z1_F4YPw2TuPJaLzqUGrjOvS2jg",
  authDomain: "caoimhe-4146a.firebaseapp.com",
  databaseURL: "https://caoimhe-4146a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "caoimhe-4146a",
  storageBucket: "caoimhe-4146a.appspot.com",
  messagingSenderId: "254180031711",
  appId: "1:254180031711:web:1b41b2e2dda9d4b09efd6a"
};

 

firebase.initializeApp(firebaseConfig); 

 

const myDBCxn = firebase.database().ref("/contacts"); 

 

const btn2 = document.getElementById("submit"); 

btn2.addEventListener("click", insertRecord); 

 

function insertRecord() { 

  alert("SUBMIT clicked!!!"); 

  

  const fN = document.getElementById("fname"); 

  const fNvalue = fN.value; 

  fN.value = ""; 

  fN.focus(); 

 

  const sN = document.getElementById("lname"); 

  const sNValue = sN.value; 

  sN.value = ""; 

  sN.focus(); 

 

  const emailField = document.getElementById("email"); 

  const emailFieldValue = emailField.value; 

 

  emailField.value = ""; 

  emailField.focus(); 

   const enquiry = document.getElementById("subject"); 

   const enquiryValue = enquiry.value; 

    enquiry.value = ""; 

    enquiry.focus(); 

  const data = myDBCxn.push(); 

  data.set({email: emailFieldValue, fName: fNvalue, sName: sNValue, enquiry: enquiryValue,}); 

} 

 