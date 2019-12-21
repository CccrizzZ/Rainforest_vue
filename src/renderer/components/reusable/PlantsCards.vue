<template>
  <b-card-group columns >
    <b-card header-tag="header" footer-tag="footer" v-for="plant in plants" v-bind:data="plant" v-bind:key="plant.name" style="color:#ffffff; background-color:#606060;">
      
      <!-- Card Title -->
      <h6 slot="header" class="mb-0">{{plant.name}}</h6>
      
      <!-- Card Subtitle -->
      <b-card-text>{{plant.dominant}}</b-card-text>

      <!-- Edit Button -->
      <b-button variant="light" v-b-modal="plant.name">Edit</b-button>
      
      <!-- Editor Modal -->
      <b-modal ref="EditModal" :id="plant.name" title="Edit Plant" hide-footer>
        <h2 class="my-1">{{plant.name}}</h2>
        <hr>
        <b-button variant="light" @click="hideModal">Cancel</b-button>
        <b-button variant="success" @click="saveModal">Save</b-button>
      </b-modal>

      <!-- Current Week -->
      <em slot="footer">{{plant.CurrentTime}}</em>

    </b-card>
  </b-card-group>
</template>

<script>
  export default {
    methods:{
      hideModal(){
        this.$refs["EditModal"].hide()

      },
      saveModal(){
        this.$refs['EditModal'].hide()
        
      }
    },
    name: "plantsCard",
    props: ['plants'],
  }
</script>

<style>


</style>