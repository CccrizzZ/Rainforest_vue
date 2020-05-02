<template>
  <b-card-group id="CardGroup">
    <div style="width:100%;">
    <b-card id="PCards" header-tag="header" footer-tag="footer" v-for="plant in plants" v-bind:data="plant" v-bind:key="plant.name" >
      
      <!-- Card Title -->
      <h6 slot="header" class="mb-0">{{plant.Pname}}</h6>
      

      <!-- Dominant -->
      <b-card-text>Strain Dominant: {{plant.dominant}}</b-card-text>
      <!-- Plant gender -->
      <b-card-text>Plant Seed Type: {{plant.PlantSeedType}}</b-card-text>
      <!-- Seed cost -->
      <b-card-text>Seed Cost: ${{plant.SeedCost}}</b-card-text>
      <!-- Dominant -->
      <b-card-text>Amount of Plants: {{plant.NumberOfPlants}}</b-card-text>
      <!-- Germ date -->
      <b-card-text>Germination Date: {{plant.GermDate}}</b-card-text>
      <!-- Current week -->
      <em>Current Week: {{plant.CurrentWeek}}</em>

      <b-card bg-variant="dark" style="margin-top:30px; border-radius:2em">
        <div id="red"></div>
      </b-card>

      <!-- Edit Button -->
      <b-button pill slot="footer" style="right:0px;" variant="dark" v-b-modal="plant.id" >Edit</b-button>
    </b-card>
    </div>
  </b-card-group>
</template>

<script>
  import { Chart } from 'frappe-charts';

  export default {
    name: "plantsCard",
    props: ['plants'],
    data() {
      return {
        plantID: '',
        chartData : {
            dataPoints: {
                "1426744959": 20,
                "1463673055": 113,
                "1476892421": 57,
            },
            start: null, // a JS date object
            end: null
        }

      }
    },
    mounted() {
        setTimeout(() => {
          let chart = new Chart("#red", {
            type: 'heatmap',
            data: this.chartData,
          })
        }, 200);
    },
    methods: {
      CreateHeatMap(id){
        

      },
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