<template>
    <b-card-group id="CardGroup">
        <plantsCards v-bind:plants="MyPlantsDB" />
    </b-card-group>
</template>

<script>

    import plantsCards from './PlantsCards'
    // electron-db
    import db from 'electron-db'
    // path to database file
    import path from 'path'
    const location = path.join(__dirname, '../')

    export default {
        name: "plantsGrid",
        components: {
            plantsCards
        },
        data() {
            return{
                MyPlantsDB:[

                ]
            }
        },
        mounted() {
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
        },
        methods:{

        }
    }
</script>

<style>
    #CardGroup{
        padding-top: 10px; 
        padding-bottom:100%;
    }
  
</style>