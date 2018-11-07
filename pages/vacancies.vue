<template>
    <div>
      <div class="bg-image page-title mb-1">
        <div class="container-fluid">
          <a href="#">
            <h1>Vacancies</h1>
          </a>
          <div class="pull-right">
            <router-link to="/"><i class="fa fa-home fa-lg"></i></router-link>
          </div>
        </div>
      </div>
      <div class="hgroup text-center wow zoomIn my-1" data-wow-delay="0.3s">
        <h3></h3>
        <h1>Applications are invited for the following positions:</h1>
      </div>
    <div class="art-article">
      <div class="adress-details">
        <div class="vac-list"  style="margin: 10px auto;">
          <span><i class="fa fa-send"></i></span>
          <div><strong><router-link style="color: #333;" to="/assistant-accountant">ASSISTANT ACCOUNTANT Windhoek - CLOSINGDATE: 22 October 2018</router-link></strong><br></div>
        </div>
        <div class="vac-list" style="margin: 10px auto;">
          <span><i class="fa fa-send"></i></span>
          <div><strong><router-link style="color: #333;" to="/messenger">MESSENGER Windhoek - CLOSINGDATE: 19 October 2018 </router-link></strong><br></div>
        </div>
        <div class="vac-list" style="margin: 10px auto;">
          <span><i class="fa fa-send"></i></span>
          <div><strong><router-link style="color: #333;" to="/freight-controller">Freight Controller Jet.X Couriers CLOSINGDATE: 17 October 2018</router-link></strong><br></div>
        </div>
      </div>
    </div>
    </div>
  </template>

  <script>
  export default {
    head() {
      return {
        title: 'FP du Toit | Pro Parcel | Jet.X Couriers | Wesbank Transport | Vacancies and Career Opportunities',
        meta: [
          { name: 'description', content: 'Look at the career opportunities and job vacancies at FP du Toit, Pro Parcel, Jet.X Couriers and Wesbank Transport in Windhoek, Walvis Bay, Tsumeb, Oshakati, Mariental, Keetmanshoop and Karibib in Namibia as well as Johannesburg, Durban and Cape Town in South Africa.'}
        ]
      }
    }
  }
  </script>

  <style>
  .vac-list {
    min-width: 50vw;
    max-width: 455px;
  }
  </style>
