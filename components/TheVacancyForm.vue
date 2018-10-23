<template>
  <form @submit.prevent novalidate id="vacancyForm" class="reply-form form-inline">
    <div class="default-inp form-elem">
      <select  type="text" name="department" id="department">
        <option value="Choose a department">Choose a department</option>
        <option value="FP du Toit">FP du Toit</option>
        <option value="Pro Parcel">Pro Parcel</option>
        <option value="JET.X Couriers">JET.X Couriers</option>
        <option value="Wesbank Transport">Wesbank Transport</option>

      </select>
    </div>
    <div class="row form-elem mb-0">
      <div class="col-sm-6 form-elem">
        <div class="default-inp form-elem">
          <i class="fa fa-user"></i>
          <input type="text" name="user-name" id="user-name" placeholder="Full Name" required="required">
        </div>
        <div class="default-inp form-elem">
          <i class="fa fa-envelope"></i>
          <input type="text" name="user-email" id="user-email" placeholder="Email Address" required="required">
        </div>
      </div>
    </div>
    <div class="default-inp form-elem">
      <input type="text" name="user-subject" id="user-subject" placeholder="Position">
    </div>
    <div class="form-elem default-inp">
      <input type="file" name="" value="">
    </div>
    <div class="form-elem">
      <button type="submit" class="btn btn-success special-home">send message</button>
    </div>
  </form>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
