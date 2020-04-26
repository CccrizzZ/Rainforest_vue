<template>
  <b-card-group columns style="padding-top: 10px; padding-bottom:100%;">
    <b-card header-tag="header" footer-tag="footer" v-for="plant in plants" v-bind:data="plant" v-bind:key="plant.name" style="color:#ffffff; background-color:#606060;">
      
      <!-- Card Title -->
      <h6 slot="header" class="mb-0">{{plant.Pname}}</h6>
      
      <!-- Card Subtitle -->
      <b-card-text>{{plant.dominant}}</b-card-text>

            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle="CastIdToString(plant.id)" variant="dark">Accordion 1</b-button>
            </b-card-header>
            <b-collapse v-bind:id="CastIdToString(plant.id)" role="tabpanel"  variant="dark">
              <b-card bg-variant="dark">
                <b-card-text>text</b-card-text>
              </b-card>
            </b-collapse>


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
    props: ['plants'],
    methods: {
      CastIdToString(obj) {
        return String(obj)
      }

    }
    

  }
</script>

<style>


</style>