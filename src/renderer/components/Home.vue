<template>

  <div style="background-image:url('src/renderer/assets/BG.png');">
    <navbars @refresh="refresh"/>
    <div class="container" style="padding-top: 0px;">
      
      <div style="padding-top:10px; margin-bottom:10px;"></div>
      <hr>
      <plantsCards v-bind:plants="MyPlantsDB" />
      

    </div>
  </div>
</template>

<script>

  import navbars from './reusable/Navbar';

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
      plantsCards,
      navbars
    },
    data(){
      return{
        currtime: moment().format('MMMM Do YYYY, h:mm:ss a'),
        MyPlantsDB:[


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
  
    },
    methods:{
      refresh(param){
        if (db.valid("plantsDB", location)) {
          // Get all plants from database
          db.getAll("plantsDB", location, (succ, data) => {
            // Load all datas
            this.MyPlantsDB = data
            console.log("Plants Data Loaded From DB!"); 
          })
        }        
      }
    }
  }
  
</script>

<style>










</style>