<template>
  <div style="background-image:url('src/renderer/assets/BG.png');">
    <div class="container">
      
      <h4 style="text-align:center; color:#ffffff; padding-top:10px; margin-bottom:10px;">{{ currtime }}</h4>
      <hr>
          
      
      
      <plantsCard v-bind:plants="MyPlantsDB" />
    </div>
  </div>
</template>

<script>

  // three.js
  import * as THREE from 'three'
  // electron-db
  import db from 'electron-db';
  // moment.js
  import moment from 'moment';
  import { setInterval } from 'timers';
  import plantsCard from './reusable/PlantsCards';
  import path from 'path';

  // path to database file
  const location = path.join(__dirname, '')

  export default {
    components:{
      plantsCard
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

      // init();
      // animate();




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
      //   obj.Pname = "OG kush"
      //   obj.dominant = "Hybraid"
      //   obj.CurrWeek = "Week 7"
        
      //   // insert it into table (plantsDB)
      //   db.insertTableContent("plantsDB", location, obj, (succ, msg) => {
      //       console.log("Insertion Success: " + succ)
      //       console.log("Insertion Message: " + msg)
      //   })
      // }
  
    }
  }
  
  // var camera, scene, renderer;
  // var geometry, material, mesh;
  // function init() {
  
  //     camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
  //     camera.position.z = 1;
  
  //     scene = new THREE.Scene();
  
  //     geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
  //     material = new THREE.MeshNormalMaterial();
  
  //     mesh = new THREE.Mesh( geometry, material );
  //     scene.add( mesh );
  
  //     renderer = new THREE.WebGLRenderer( { antialias: true } );
  //     renderer.setSize( window.innerWidth, window.innerHeight );
  //     document.body.appendChild( renderer.domElement );
  
  // }
  
  // function animate() {
  
  //     requestAnimationFrame( animate );
  
  //     mesh.rotation.x += 0.01;
  //     mesh.rotation.y += 0.02;
  
  //     renderer.render( scene, camera );
  
  // }
</script>

<style>










</style>