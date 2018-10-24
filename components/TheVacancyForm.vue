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
          <input v-model="vacancy.email" type="text" name="vacancy_email" placeholder="Email Address" required="required">
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
      <button v-if="isValid" type="submit" class="btn btn-success special-home">send message</button>
    </div>
    <h3 v-if="notPDF" class="text-red">Please upload a pdf document.</h3>
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
      }
    }
  ),
  watch: {
    vacancy: {
      handler: function() {
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
          self.vacancy.cv = base64
        };
        // Convert data to base64
        fileReader.readAsDataURL(selectedFile)
      }
    }
  }
}
</script>

<style lang="css">
</style>
