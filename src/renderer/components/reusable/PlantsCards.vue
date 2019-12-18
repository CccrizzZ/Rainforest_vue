<template>
  <b-card-group columns >
    <b-card header-tag="header" footer-tag="footer" v-for="plant in plants" v-bind:data="plant" v-bind:key="plant.name">
      
      <!-- Card Title -->
      <h6 slot="header" class="mb-0">{{plant.name}}</h6>
      
      <!-- Card Subtitle -->
      <b-card-text>{{plant.dominant}}</b-card-text>

      <!-- Edit Button -->
      <b-button variant="success" v-b-modal="plant.name">Edit</b-button>
      
      <!-- Modal -->
      <b-modal :id="plant.name" title="Edit Plant">
        <p class="my-1">{{plant.name}}</p>
      </b-modal>

      <!-- Current Week -->
      <em slot="footer">{{plant.CurrentTime}}</em>

    </b-card>
  </b-card-group>
</template>

<script>
  export default {
    name: "plantsCard",
    props: ['plants'],
    data(){
      return{

      }
    }
  }
</script>

<style>


</style>