<template>
  <div class="container" style="margin-top:10px;">
    <h4 style="text-align:center;">{{ currtime }}</h4>
    <plantsCard v-bind:plants="plants" />
    
    
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
      plants:[
        {name: "OG kush", dominant: "Indica", fTime: "8 weeks"},
        {name: "Blueberry", dominant: "Indica", fTime: "7 weeks"},
        {name: "Jack Herer", dominant: "Sativa", fTime: "7 weeks"},
        {name: "Blue Cheese", dominant: "Indica", fTime: "7 weeks"}
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