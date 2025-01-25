import React from "react"
import Head from "next/head"

export default function HeadData() {
    return (
      <head>
        <meta content="" name="description" />
        <meta content="" name="keywords" />
        <time datetime="2016-10-25" suppressHydrationWarning />

        {/* Fonts */} 
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

        {/* Vendor CSS Files */} 
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        {/* Main CSS File */} 
        <link href="assets/css/main.css" rel="stylesheet" />

        {/* Vendor JS Files */}
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" async />
        <script src="assets/vendor/php-email-form/validate.js" async />
        <script src="assets/vendor/aos/aos.js" async />
        <script src="assets/vendor/glightbox/js/glightbox.min.js" async />
        <script src="assets/vendor/purecounter/purecounter_vanilla.js" async/>
        <script src="assets/vendor/swiper/swiper-bundle.min.js" async />
        <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" async />
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" async />
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.56/build/spline-viewer.js" async />
    
        {/* Main JS File */}
        <script src="assets/js/main.js" async />
      </head>
    )
}