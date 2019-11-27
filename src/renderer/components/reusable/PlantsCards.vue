<template>
  <div id="plants">
    <b-card-group deck >
      <b-card header-tag="header" footer-tag="footer" v-for="plant in plants" v-bind:data="plant" v-bind:key="plant.name">
        <h6 slot="header" class="mb-0">{{plant.name}}</h6>
        <b-card-text>{{plant.dominant}}</b-card-text>
        <b-button href="#" variant="success">Edit</b-button>
        <em slot="footer">{{plant.fTime}}</em>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  export default {
    name: "plantsCard",
    props: ['plants']
  }
</script>

<style>


</style>