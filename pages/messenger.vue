<template>
  <div>
    <div class="bg-image page-title">
      <div class="container-fluid">
        <a href="#">
          <h1>Vacancy</h1>
        </a>
        <div class="pull-right">
          <router-link to="/"><i class="fa fa-home fa-lg"></i></router-link>
        </div>
      </div>
    </div>
    <div class="hgroup text-center wow zoomIn" data-wow-delay="0.3s">
      <h2></h2>
      <h1>Messenger (Windhoek)</h1>
    </div>
    <div class="art-article container text-center">
      <p>CLOSINGDATE: 19 October 2018 </p>
      <h5>DUTIES AND RESPONSIBILITIES</h5>
      <h5>Key responsibilities include: </h5>
      <p> Determine destinations by referring to addresses on packages and documents <br /> Ensure that packages or
        messages are delivered in a time efficient manner <br /> Understanding privacy and confidentiality rules when
        handling documentation </p>
      <h5>The suitable applicant will have </h5>
      <p> A valid grade 12 (with at least 23 points) <br /> At least 2-3 years’ applied experience <br /> Valid
        applicable Code B Driver’s License <br /> Police clearance certificate (not older than 1 year) - No criminal
        record <br /> Good oral and written communication <br /> Friendly disposition and an excellent communicator <br />
        Exceptional interpersonal skills <br /> Namibian citizenship <br /> Sober habits </p>
      <p> </p>
      <h1 class="text-left">Apply Online</h1>
      <TheVacancyForm class="mx-auto" />
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
