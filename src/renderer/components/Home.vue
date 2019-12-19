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
import db from 'electron-db';
import path from 'path';
const location = path.join(__dirname, '')

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
        {name: "Blue Berry Cream1", dominant: "Indica", CurrentTime: "Week 9"},
        {name: "Blue Berry Cream2", dominant: "Indica", CurrentTime: "Week 9"},
        {name: "Blue Berry Cream3", dominant: "Indica", CurrentTime: "Week 9"},
        {name: "Blue Berry Cream4", dominant: "Indica", CurrentTime: "Week 9"},
        {name: "Blue Berry Cream5", dominant: "Indica", CurrentTime: "Week 9"},
        {name: "Blue Berry Cream6", dominant: "Indica", CurrentTime: "Week 9"},
        {name: "Blue Berry Cream7", dominant: "Indica", CurrentTime: "Week 9"},
        {name: "Blue Berry Cream8", dominant: "Indica", CurrentTime: "Week 9"},
        {name: "Blue Berry Cream9", dominant: "Indica", CurrentTime: "Week 9"},
        {name: "Blue Berry Cream10", dominant: "Indica", CurrentTime: "Week 9"},
        {name: "Blue Berry Cream11", dominant: "Indica", CurrentTime: "Week 9"},
        {name: "Blue Berry Cream12", dominant: "Indica", CurrentTime: "Week 9"},
        {name: "Blue Berry Cream13", dominant: "Indica", CurrentTime: "Week 9"},
        {name: "Blue Berry Cream14", dominant: "Indica", CurrentTime: "Week 9"},

      ]
    }
  },
  mounted() {
    setInterval(function(){
      this.currtime = moment().format('MMMM Do YYYY, h:mm:ss a')
    }.bind(this), 1000)

    
    if (!db.valid('plantsDB')) {
      db.createTable("plantsDB", location, (succ, msg) =>{
          // bool succ = tells if call is successful
          console.log("Success: " + succ)
          console.log("Message: " + msg)
      })
    }else{
      let obj = new Object()
      obj.Pname = "OG kush"
      obj.dominant = "Hybraid"
      obj.CurrWeek = "Week 7"

      db.insertTableContent("plantsDB", obj, (succ, msg) => {
          console.log("Success: " + succ)
          console.log("Message: " + msg)
      })
    }

  }
}

</script>

<style>

</style>