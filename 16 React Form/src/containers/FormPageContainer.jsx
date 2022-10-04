import React, { useState } from "react";
import FormPage from "../components/FormPage";


const FormPageContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    nohp: "",
    name: "",
    comment: "",
    pendidikan: "",
    kelasKoding: []
  });
  const [isNoHpError, setNoHpError] = useState(false);
  const [isNameError, setNameError] = useState(false);
  const [isEmailError, setEmailError] = useState(false);

  const handleChangeFormData = (ev) => {
    if (ev.target.name === "kelasKoding") {
      setFormData({
        ...formData,
        [ev.target.name]: [...formData.kelasKoding, ev.target.value]
      })
      return;
    }
    if (ev.target.name === "email"){
      if(ev.target.value === 0){
        setEmailError(true)
      }else{
        setEmailError(false)
      }
    }
    if (ev.target.name === "nohp") {
     if (ev.target.value.length > 9 & (ev.target.value.length < 14)){
        setNoHpError(false)
     } else {
       setNoHpError(true)
     }
    }
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value
    })
  }

  const handleSubmit = (ev) => {
    const form  = ev.currentTarget;
    if (form.checkValidity() === false) {
      ev.preventDefault();
      ev.stopPropagation();
      
    }
    // if (form.checkValidity() === true) {
    //   ev.preventDefault();
    //   ev.stopPropagation();
      
    //   alert("Data pendaftar tidak sesuai")
    //   ev.preventDefault();
    // }

    //alert(name + "\n" + email + "\n" + password + "\n" + gender)
    alert("Data pendaftar" + " " + formData.name + " " + "Berhasil diterima")
      ev.preventDefault();
  }
  return(
    <FormPage email={formData.email}
              name={formData.name}
              password={formData.password}
              comment={formData.comment}
              kelasKoding={formData.kelasKoding}
              isNameError={isNameError}
              isNoHpError={isNoHpError}
              isEmailError={isEmailError}
              handleSubmit={handleSubmit}
              handleChange={handleChangeFormData}/>
  )
}

export default FormPageContainer;
