<template>
  <div>
    <div class="bg-image page-title">
      <div class="container-fluid">
        <a href="#">
          <h1>vacancy</h1>
        </a>
        <div class="pull-right">
          <router-link to="/"><i class="fa fa-home fa-lg"></i></router-link>
        </div>
      </div>
    </div>
    <div class="hgroup text-center wow zoomIn" data-wow-delay="0.3s">
      <h2></h2>
      <h1 class="mt-2">ASSISTANT ACCOUNTANT (Windhoek)</h1>
    </div>
  <div class="art-article container">
    <div class="mx-auto text-center">
      <p>CLOSINGDATE: 22 October 2018</p>
      <h4>DUTIES AND RESPONSIBILITIES</h4>
      <h5>Key responsibilities include:</h5>
      <p> Maintain cash book and bank reconciliation<br /> Maintain asset register<br /> General ledger accounts reconciliation<br /> Administer departmental budget<br /> Assist Group Accountant with month-end</p>
      <h5>The suitable applicant will have</h5>
      <p> A 3-Year tertiary education qualification coupled with 3-5 years applied experience<br /> High level of conceptual, analytical and interpretive skills<br /> Good oral and written communication<br /> Able to work in an autonomous and independent role<br /> Ability to multitask and work under and meet tight deadline pressures<br /> Accuracy when capturing, costing and invoicing of accounts<br /> Namibian citizenship.</p>
      <p> </p>
      <h1>Apply Online</h1>
     <TheVacancyForm class="mx-auto"/>
    </div>

    </div>
  </div>
</template>

<script>
import TheVacancyForm from '@/components/TheVacancyForm'
export default {
  components: {
    TheVacancyForm
  }
}
</script>

<style lang="css">
</style>
