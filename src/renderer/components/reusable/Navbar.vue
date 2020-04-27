<template>
  <div>
    <b-navbar variant="dark" type="dark" class="navbar1" >

      <b-navbar-brand tag="h1">
        Rainforest
      </b-navbar-brand>

      <!-- tooltip & button for show time -->
      <b-button pill v-b-toggle.collapse-time variant="primary" style="margin-right: 10px;" class="ml-auto" id="ShowTime">Show Time</b-button>
      <b-tooltip target="ShowTime" triggers="hover">
        Toggle <b>current time</b> bar 
      </b-tooltip>

      <!-- tooltip & button for add new plant -->
      <b-button pill v-b-modal.modal-xl-addplant variant="success" id="AddNewPlant">Add New Plant</b-button>
      <b-tooltip target="AddNewPlant" triggers="hover">
        Add a <b>new plant</b> to the tray
      </b-tooltip>

      <!-- add new plant modal -->
      <b-modal id="modal-xl-addplant" ref="modal-xl-addplant" no-close-on-backdrop centered scrollable hide-footer no-close-on-esc title=" 🎍 New Plant">
        <div>
          <b-form @submit="onSubmit(); RefreshCards(); makeToast('warning')" @reset="onReset()">

            <!-- Plant name -->
            <b-form-group label="Plant name:" label-for="input-1"  description="Enter your plant name here.">
              <b-form-input  id="input-1" v-model="NewPlantForm.PlantName" required placeholder="Enter plant name" ></b-form-input>
            </b-form-group>

            <!-- Dominant radio -->
            <b-form-group label="Select plant dominant:">
              <b-form-radio-group name="radio-inline">
                <b-form-radio  size="lg" v-model="NewPlantForm.PlantDominant" name="Indica-radio" value="Indica">Indica</b-form-radio>
                <b-form-radio size="lg" v-model="NewPlantForm.PlantDominant" name="Sativa-radio" value="Sativa">Sativa</b-form-radio>
                <b-form-radio size="lg" v-model="NewPlantForm.PlantDominant" name="Hybrid-radio" value="Hybrid">Hybrid</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          
            <!-- Seed price -->
            <b-form-group label="Enter seed price:" label-for="input-2"  description="Enter your seed price here.">
              <b-form-input  type="number" required id="input-2" v-model="NewPlantForm.PlantSeedPrice" placeholder="Enter seed price" ></b-form-input>
            </b-form-group>

            <!-- Amount -->
            <b-form-group label="Enter plant amount:" label-for="input-3"  description="Enter your plant amount here.">
              <b-form-input  type="number" required id="input-3" v-model="NewPlantForm.PlantAmount" placeholder="Enter plant amount" ></b-form-input>
            </b-form-group>

            <!-- Plant date -->
            <div>
              <label for="datepicker-full-width">Set germination date:</label>
              <b-form-datepicker v-model="NewPlantForm.PlantGermDate"></b-form-datepicker>
            </div>


            <hr/>

            <b-button pill type="reset" variant="dark">Reset</b-button>
            <b-button pill type="submit" variant="success" >Submit</b-button>
          </b-form>
        </div>

      </b-modal>
    </b-navbar>

    <b-collapse id="collapse-time"  class="text-center">
      <b-card bg-variant="primary" text-variant="white" class="text-center" style="font-size: 20px;">{{currtime}}</b-card>
    </b-collapse>
  </div>
</template>

<script>

  // electron-db
  import db from 'electron-db';
  // moment.js
  import moment from 'moment';
  import path from 'path';
  import { log } from 'util';

  // path to database file
  const location = path.join(__dirname, '../')

  export default {
    name: "navbars",
    data(){
      return{
        // moment.js time
        currtime: moment().format('MMMM Do YYYY, h:mm:ss a'),

        // plant form obj
        NewPlantForm: {
          PlantName: '',
          PlantDominant: '',
          PlantGermDate: '',
          PlantGender:'',
          PlantSeedPrice: null,
          PlantAmount: null
        }
      }
    },
    methods: {
      // Toast for successful insertion
      makeToast(variant = null) {
        this.$bvToast.toast('1 New plant added', {
          title: 'New plant created',
          toaster: 'b-toaster-bottom-left',
          variant: variant,
          solid: true,
          autoHideDelay: 2000,
        })
      },
      // On form submit
      onSubmit(){
        console.log(this.NewPlantForm.PlantName);
      
        if (db.valid("plantsDB", location)) {
          console.log(1000);
          
          // create new plant object
          let obj = new Object()
          obj.Pname = this.NewPlantForm.PlantName
          obj.dominant = this.NewPlantForm.PlantDominant
          obj.SeedCost = this.NewPlantForm.PlantSeedPrice
          obj.GermDate = this.NewPlantForm.PlantGermDate
          obj.NumberOfPlants = this.NewPlantForm.PlantAmount

          // insert it into table (plantsDB)
          db.insertTableContent("plantsDB", location, obj, (succ, msg) => {
              console.log("Insertion Success: " + succ)
              console.log("Insertion Message: " + msg)
          })
        }





        // clean up input
        this.NewPlantForm.PlantName = ''
        this.NewPlantForm.PlantDominant = ''
        this.NewPlantForm.PlantGermDate = null
        this.NewPlantForm.PlantGender = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })

        // hide add plant modal
        this.$refs["modal-xl-addplant"].hide()
        
      },
      // On from reset
      onReset(){
        this.NewPlantForm.PlantName = ''
        this.NewPlantForm.PlantDominant = ''
        this.NewPlantForm.PlantGermDate = null
        this.NewPlantForm.PlantGender = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      RefreshCards(){
        // tell parent component to reload from db
        this.$emit("refresh")
      }
    },
    mounted(){
      // turn on the clock
      setInterval(function(){
        this.currtime = moment().format('MMMM Do YYYY, h:mm:ss a')
      }.bind(this), 1000)


    }
    
  }
</script>

<style>
#modal-xl-addplant___BV_modal_content_{
  border-radius: 2em;
}

</style>