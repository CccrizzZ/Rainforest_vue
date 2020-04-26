<template>
  <div style="background-image:url('src/renderer/assets/BG.png');">
    <div class="container">
      
      <div style="padding-top:10px; margin-bottom:10px;"></div>
      <hr>
      <plantsCards v-bind:plants="MyPlantsDB" />
      

    </div>
  </div>
</template>

<script>


  // electron-db
  import db from 'electron-db';
  // moment.js
  import moment from 'moment';
  import { setInterval } from 'timers';
  import plantsCards from './reusable/PlantsCards';
  import path from 'path';

  // path to database file
  const location = path.join(__dirname, '')

  export default {

    components:{
      plantsCards
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




      // If db valid load data, else create db
      if (db.valid("plantsDB", location)) {
        // Get all plants from database
        db.getAll("plantsDB", location, (succ, data) => {
          // Load all datas
          this.MyPlantsDB = data
          console.log("Plants Data Loaded From DB!");
          
          console.log(data);
          

          
        })
      }else{
        // Creating the table
        db.createTable("plantsDB", location, (succ, msg) =>{
            // bool succ = tells if call is successful
            // string msg = debugging message
            console.log("DB Creation Success!  " + succ)
            console.log("DB Message: " + msg)
        })
      }

      // // if this DB exist at this specific location
      // if (db.valid("plantsDB", location)) {
      //   // create new plant object
      //   let obj = new Object()
      //   obj.Pname = ""
      //   obj.dominant = ""
      //   obj.CurrWeek = ""
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