<template>
  <head><title>Error 404</title></head>
    <div class="container">
      <p class="page_404">OOPS!</p>
      <div class="box_404">
        <p><b>ERROR CODE: 404</b></p>
        <p><b>We can't find the page you are looking for.</b></p>
        <NuxtLink class="link_home" to="/">Return to Home</NuxtLink>
      </div>
    </div>
  </template>
  
  <style>
  
  .container {
    margin-bottom: 50px;
    text-align: center;
    /*
    background-color: white;
    background-image: url('~/assets/img/error_404_gif.gif');
    background-position: center;
    background-repeat: no-repeat;
    color: black;*/
  }

  .page_404 {
    font-size: 160px;
    margin-top: 50px;
    margin-bottom: 0%;
  }
  
  .box_404 {
    margin: 0;
    font-size: 30px;
  }

  /*.link_home {
    color: black;
  }*/

  .link_home:hover {
    text-decoration: underline;
  }
  </style>