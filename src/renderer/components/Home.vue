<template>

    <div id="homebg" style="background-image:url('src/renderer/assets/BG.png');">
        <navbars v-on:refresh = "refresh"/>
        <div class="container" style="padding-top: 0px;">
            
            <div style="padding-top:10px; margin-bottom:10px;"></div>
            <hr>
            <plantsGrid ref="Pgrid"/>

        </div>
    </div>
</template>

<script>


    import {Color, Titlebar} from 'custom-electron-titlebar'
    // path to database file
    import path from 'path'
    const location = path.join(__dirname, '')
    import  navbars  from './reusable/Navbar'
    // moment.js
    import moment from 'moment'
    // electron db
    import db from 'electron-db'
    import { setInterval } from 'timers'
    import plantsGrid  from './reusable/PlantsGrid'
    import { log } from 'util'

    

    new Titlebar({
        titleHorizontalAlignment: 'center',
        backgroundColor: Color.fromHex('#333333')
    }).updateTitle("Rainforest")

    


    export default {

        components:{
            plantsGrid,
            navbars
        },
        data(){
            return{
                currtime: moment().format('MMMM Do YYYY, h:mm:ss a'),
            
            }
        },
        mounted() {
            // turn on the clock
            setInterval(function(){
                this.currtime = moment().format('MMMM Do YYYY, h:mm:ss a')
            }.bind(this), 1000)
        
        
        
        },
        methods:{
            refresh(){
                if (db.valid("plantsDB", location)) {
                    // Get all plants from database
                    db.getAll("plantsDB", location, (succ, data) => {
                        // Load all datas
                        this.$refs.Pgrid.MyPlantsDB = data
                        console.log("Plants Data Loaded From DB!"); 
                    })
                    
                }
            }
        }
    }
    
  
</script>

<style>
#homebg {
    height: 100%
}









</style>