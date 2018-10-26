<template>
  <form @submit.prevent novalidate id="vacancyForm" class="reply-form form-inline">
    <div class="row form-elem mb-0">
      <div class="col-sm-12 form-elem">
        <div class="default-inp form-elem">
          <i class="fa fa-user"></i>
          <input v-model="vacancy.fullname" type="text" name="vacancy_fullname" placeholder="Full Name" required="required">
        </div>
        <div class="default-inp form-elem">
          <i class="fa fa-envelope"></i>
          <input v-model="vacancy.email" type="email" name="vacancy_email" placeholder="Email Address" required="required">
        </div>
        <div class="default-inp form-elem">
          <input v-model="vacancy.position" type="text" name="vacancy_position" placeholder="Position">
        </div>
        <label for="">Upload a copy of your CV (PDF only)</label>
        <div class="form-elem default-inp">
          <input @change="uploadFile" type="file" name="vacancy_cv">
        </div>
      </div>
    </div>
    <div class="form-elem">
      <button @click="sendApplication" v-if="isValid" type="submit" class="btn btn-success special-home">send message</button>
    </div>
    <h3 v-if="notPDF" class="text-red">Please upload a pdf document.</h3>
    <h3 v-if="vacancyMailStatus" class="text-green">Thank you! Your application has been sent.</h3>
    <h3 v-if="vacancyMailStatus === false" class="text-red">An error has occurred, please try later.</h3>
    <h3 v-if="emailBad" class="text-red">Please enter a valid email address.</h3>

  </form>
</template>

<script>
export default {
  data: () => (
    {
      isValid: false,
      notPDF: false,
      vacancy: {
        fullname: '',
        email: '',
        position: '',
        cv: ''
      },
      emailBad: false
    }
  ),
  computed: {
    vacancyMailStatus() {
      return this.$store.getters.vacancyMailStatus;
    }
  },
  watch: {
    vacancy: {
      handler: function() {
        this.emailBad = false
        if(this.vacancy.fullname === '' || this.vacancy.email === '' || this.vacancy.position === '' || this.vacancy.cv === '') {
          this.isValid = false
        } else {
          this.isValid = true
        }
      },
      deep: true
    }
  },
  methods: {
    uploadFile(e) {
      // Make sure file is PDF
      function isNotPDF(self) {self.notPDF = true}
      if(e.target.files[0].type !== 'application/pdf') return isNotPDF(this)

      //Check File is not Empty
      if (e.target.files[0]) {
        // Select the very first file from list
        var selectedFile = e.target.files[0]

        // FileReader function for read the file.
        var fileReader = new FileReader()
        var base64

        // Onload of file read the file content
        var self = this
        fileReader.onload = function(fileLoadedEvent) {
          base64 = fileLoadedEvent.target.result

          //set the form data as base 64
          self.vacancy.cv = base64.replace('data:application/pdf;base64,', '')
        };
        // Convert data to base64
        fileReader.readAsDataURL(selectedFile)
      }
    },
    sendApplication() {
      if(this.vacancy.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        this.$store.dispatch('sendVacancyApplication', this.vacancy)
      } else {
        this.emailBad = true
      }
    }
  }
}
</script>

<style lang="css">
</style>
