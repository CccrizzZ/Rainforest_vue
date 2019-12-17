<template>
  <div class="container" style="margin-top:10px;">
    <h4 style="text-align:center;">{{ currtime }}</h4>
        
    
    
    <plantsCard v-bind:plants="MyPlantsDB" />
    
    
  </div>


</template>

<script>
import moment from 'moment';
import { setInterval } from 'timers';
import plantsCard from './reusable/PlantsCards';


export default {
  components:{
    plantsCard
  },
  data(){
    return{
      currtime: moment().format('MMMM Do YYYY, h:mm:ss a'),
      MyPlantsDB:[
        {name: "OG kush", dominant: "Indica", CurrentTime: "Week 7"},
        {name: "Blueberry", dominant: "Indica", CurrentTime: "Week 8"},
        {name: "Jack Herer", dominant: "Sativa", CurrentTime: "Week 7"},
        {name: "Blue Cheese", dominant: "Indica", CurrentTime: "Week 8"},
        {name: "Blue Berry", dominant: "Indica", CurrentTime: "Week 9"},
        {name: "Blue Berry Cheese", dominant: "Indica", CurrentTime: "Week 9"},
        {name: "Blue Berry Cream", dominant: "Indica", CurrentTime: "Week 9"},

      ]
    }
  },
  mounted() {
    setInterval(function(){
      this.currtime = moment().format('MMMM Do YYYY, h:mm:ss a')
    }.bind(this), 1000)
  }
}

</script>

<style>

</style>