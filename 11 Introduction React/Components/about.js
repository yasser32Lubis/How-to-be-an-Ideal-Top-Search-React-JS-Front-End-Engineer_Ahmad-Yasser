import React from "react";
import "../main.css";
import logo_alta from "../src/img/logo-ALTA@2x.png"

function About(){
    return(
        <body>
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
            
            <div className="container-fluid about-me">
                <h1 class="container pl-2 pt-5 pb-5">
                ABOUT ME.
                </h1>
            </div>
            
            <div className="container">
                
            </div>
        </body>
    )
}