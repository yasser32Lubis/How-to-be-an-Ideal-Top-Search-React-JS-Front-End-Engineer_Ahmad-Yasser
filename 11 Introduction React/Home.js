import React from "react";
import logo_alta from "../src/img/logo-ALTA@2x.png"
import foto_profil from "../src/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
import "../src/main.css";

function Home(){
    return(
        <body className="home-background">
            <header>
                <div className="container">
                    <div className="d-flex flex-row align-items-center">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="alterra">
                                <a a href="index.html"><img className="logo-atas" src={logo_alta} alt="logo_alta"/></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="container">
                                <div class="d-flex flex-row align-items-center navig">
                                    <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="#" class="aktif">HOME</a></div>
                                    <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="#">ABOUT</a></div>
                                    <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="#">EXPERIENCE</a></div>
                                    <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="#">CONTACT</a></div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container h-100">
                <div className="d-flex flex-row align-items-center isi-home">
                    <div className="col-lg-4 col-md-12 col-sm-12  col-12 ps-5">
                        <img id="foto-profil" src={foto_profil} alt="foto_profil"/>
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12 pe-5">
                        <div class="main-p">
                            <p class="sapaan">Hi, my name is </p>
                            <p class="nama">Anne Sullivan</p>
                            <p class="hobi">I build things for the web</p>
                            <p class="tombol"><a href="about.html">Get In Touch</a></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </body>  
    )
}


export default Home;