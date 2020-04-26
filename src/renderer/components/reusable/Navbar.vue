<template>
  <div>
    <b-navbar variant="dark" type="dark" class="navbar1" >

      <b-navbar-brand tag="h1">
        Rainforest
      </b-navbar-brand>

      <b-button pill v-b-toggle.collapse-time variant="primary" style="margin-right: 10px;" class="ml-auto" id="ShowTime">Show Time</b-button>
      <b-tooltip target="ShowTime" triggers="hover">
        Toggle <b>current time</b> bar 
      </b-tooltip>
      <b-button pill v-b-modal.modal-xl variant="success" id="AddNewPlant">Add New Plant</b-button>
      <b-tooltip target="AddNewPlant" triggers="hover">
        Add a <b>new plant</b> to the tray
      </b-tooltip>
      <b-modal id="modal-xl" no-close-on-backdrop centered scrollable no-close-on-esc title="New Plant" ok-title="Add" ok-variant="success" cancel-variant="dark" @ok="makeToast('warning')">
         <div>
          <b-form @submit="onSubmit">
            <b-form-group
              id="input-group-1"
              label="Plant name:"
              label-for="input-1"
              description="Enter your plant name here."
            >
              <b-form-input
                id="input-1"
                v-model="NewPlantForm.PlantName"
                required
                placeholder="Enter plant name"
              ></b-form-input>
            </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
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
  // moment.js
  import moment from 'moment';

  export default {
    name: "navbars",
    data(){
      return{
        currtime: moment().format('MMMM Do YYYY, h:mm:ss a'),

        NewPlantForm: {
          PlantName:'',
          PlantString:''
        }
      }
    },
    methods: {
      makeToast(variant = null) {
        this.$bvToast.toast('1 New plant added', {
          title: 'New plant created',
          toaster: 'b-toaster-bottom-left',
          variant: variant,
          solid: true,
          autoHideDelay: 2000,
        })
      },
      onSubmit(evt){
        evt.preventDefault()
        console.log(this.NewPlantForm.PlantName);
        
      },
      onReset(){

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


</style>