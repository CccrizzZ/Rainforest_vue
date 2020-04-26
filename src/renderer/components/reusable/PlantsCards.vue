<template>
  <b-card-group columns >
    <b-card header-tag="header" footer-tag="footer" v-for="plant in plants" v-bind:data="plant" v-bind:key="plant.name" style="color:#ffffff; background-color:#606060;">
      
      <!-- Card Title -->
      <h6 slot="header" class="mb-0">{{plant.Pname}}</h6>
      
      <!-- Card Subtitle -->
      <b-card-text>{{plant.dominant}}</b-card-text>




      <!-- Current Week -->
      <em>{{plant.CurrWeek}}</em>

      <!-- Edit Button -->
      <b-button pill slot="footer" style="right:5px;" variant="light" v-b-modal="plant.id">Edit</b-button>
    </b-card>
  </b-card-group>
</template>

<script>
  export default {

    name: "plantsCard",
    props: ['plants']
  }
</script>

<style>


</style>