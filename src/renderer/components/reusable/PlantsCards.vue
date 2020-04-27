<template>
  <b-card-group id="CardGroup">
    <div style="width:100%;">
    <b-card id="PCards" header-tag="header" footer-tag="footer" v-for="plant in plants" v-bind:data="plant" v-bind:key="plant.name" >
      
      <!-- Card Title -->
      <h6 slot="header" class="mb-0">{{plant.Pname}}</h6>
      

      <!-- Dominant -->
      <b-card-text>Strain Dominant: {{plant.dominant}}</b-card-text>
      <!-- Seed Cost -->
      <b-card-text>Seed Cost: ${{plant.SeedCost}}</b-card-text>
      <!-- Dominant -->
      <b-card-text>Amount of Plants: {{plant.NumberOfPlants}}</b-card-text>
      <!-- Germ date -->
      <b-card-text>Germination Date: {{plant.GermDate}}</b-card-text>
      <!-- Current Week -->
      <em>Current Week: {{plant.CurrWeek}}</em>

      <b-card-header id="accord1" header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle="CastIdToString(plant.id)" variant="primary">Progress</b-button>
      </b-card-header>
      
      <b-collapse v-bind:id="CastIdToString(plant.id)" role="tabpanel"  variant="dark">
        <b-card bg-variant="dark">
          <b-card-text>Progress</b-card-text>
        </b-card>
      </b-collapse>

      <!-- Edit Button -->
      <b-button pill slot="footer" style="right:0px;" variant="dark" v-b-modal="plant.id">Edit</b-button>
    </b-card>
    </div>
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
  #CardGroup{
    padding-top: 10px; 
    padding-bottom:100%;
  }
  
  #PCards{
    color:#ffffff; 
    background-color:#606060; 
    border-radius:2em; 
    margin-bottom: 20px;
  }


</style>