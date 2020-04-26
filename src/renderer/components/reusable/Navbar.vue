<template>
  <div>
    <b-navbar variant="dark" type="dark" class="navbar1" >

      <b-navbar-brand tag="h1">
        Rainforest
      </b-navbar-brand>

      <b-button pill v-b-toggle.collapse-time variant="primary" style="margin-right: 10px;" class="ml-auto">Show Time</b-button>
      <b-button pill v-b-modal.modal-xl variant="success" >Add New Plant</b-button>

      <b-modal id="modal-xl" >Hello Extra Large Modal!</b-modal>
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
      }
    },
    methods: {
      
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