<template>
<div style="background-image:url('src/renderer/assets/BG.png');">
  <div class="container">
    <h4 style="text-align:center; color:#ffffff; padding-top:10px; margin-bottom:10px;">{{ currtime }}</h4>
    <hr>
        
    
    
    <plantsCard v-bind:plants="MyPlantsDB" />
  </div>
</div>

</template>

<script>

// three.js
import * as THREE from 'three'
// moment.js
import moment from 'moment';
import { setInterval } from 'timers';
import plantsCard from './reusable/PlantsCards';
import db from 'electron-db';
import path from 'path';

// path to database file
const location = path.join(__dirname, '')

export default {
  components:{
    plantsCard
  },
  data(){
    return{
      currtime: moment().format('MMMM Do YYYY, h:mm:ss a'),
      MyPlantsDB:[
        // {name: "OG kush", dominant: "Indica", CurrentTime: "Week 7"},
        // {name: "Blueberry", dominant: "Indica", CurrentTime: "Week 8"},
        // {name: "Jack Herer", dominant: "Sativa", CurrentTime: "Week 7"},
        // {name: "Blue Cheese", dominant: "Indica", CurrentTime: "Week 8"},
        // {name: "Blue Berry", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cheese", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cream", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cream1", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cream2", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cream3", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cream4", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cream5", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cream6", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cream7", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cream8", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cream9", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cream10", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cream11", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cream12", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cream13", dominant: "Indica", CurrentTime: "Week 9"},
        // {name: "Blue Berry Cream14", dominant: "Indica", CurrentTime: "Week 9"},

      ]
    }
  },
  mounted() {

    // turn on the clock
    setInterval(function(){
      this.currtime = moment().format('MMMM Do YYYY, h:mm:ss a')
    }.bind(this), 1000)




    
    if (db.valid("plantsDB", location)) {
      // Get all plants from database
      db.getAll("plantsDB", location, (succ, data) => {
        this.MyPlantsDB = data
        console.log(data);
        
      })
    }else{
      // Creating the table
      db.createTable("plantsDB", location, (succ, msg) =>{
          // bool succ = tells if call is successful
          // string msg = debugging message
          console.log("DB Creation Success: " + succ)
          console.log("DB Message: " + msg)
      })
    }

    // // if this DB exist at this specific location
    // if (db.valid("plantsDB", location)) {
    
    //   // create new plant object
    //   let obj = new Object()
    //   obj.Pname = "OG kush"
    //   obj.dominant = "Hybraid"
    //   obj.CurrWeek = "Week 7"
      
    //   // insert it into table (plantsDB)
    //   db.insertTableContent("plantsDB", location, obj, (succ, msg) => {
    //       console.log("Insertion Success: " + succ)
    //       console.log("Insertion Message: " + msg)
    //   })
    // }
 
  }
}

</script>

<style>










</style>