<template>
    <div style="width:100%;">
        <b-card
            id="PCards"
            header-tag="header"
            footer-tag="footer"
            v-for="plant in plants"
            v-bind:data="plant"
            v-bind:key="plant.name"
        >
            <!-- Card Title -->
            <h2 slot="header" class="mb-0">{{plant.Pname}}</h2>

            <b-list-group>
                <!-- Dominant -->
                <b-list-group-item class="d-flex justify-content-between align-items-center" id="litem">
                    Strain Dominant: 
                    <b-badge variant="secondary"  pill>{{plant.dominant}}</b-badge>
                </b-list-group-item>
                <!-- Plant gender -->
                <b-list-group-item class="d-flex justify-content-between align-items-center" id="litem">
                    Plant Seed Type: 
                    <b-badge variant="secondary" pill>{{plant.PlantSeedType}}</b-badge>
                </b-list-group-item>
                <!-- Seed cost -->
                <b-list-group-item class="d-flex justify-content-between align-items-center" id="litem"> 
                    Seed Cost: 
                    <b-badge variant="secondary" pill>${{plant.SeedCost}}</b-badge>
                </b-list-group-item>
                <!-- Amount -->
                <b-list-group-item class="d-flex justify-content-between align-items-center" id="litem">
                    Amount of Plants:
                    <b-badge variant="secondary" pill>{{plant.NumberOfPlants}}</b-badge>
                </b-list-group-item>
                <!-- Germ date -->
                <b-list-group-item class="d-flex justify-content-between align-items-center" id="litem">
                    Germination Date:
                    <b-badge variant="secondary" pill>{{plant.GermDate}}</b-badge>
                </b-list-group-item>
            </b-list-group>

            <b-card
                bg-variant="primary"
                style="margin-top:30px; border-radius:2em; padding-top: 10px; align-items:center;"
            >
                <!-- Current week -->
                <h4>Week {{calcWeek(plant)}} Day {{calcDate(plant)}}</h4>
        
            </b-card>

            <!-- Edit Button -->
            <b-button pill slot="footer" style="right:0px;" variant="dark" v-b-modal='CastIdToString(plant.id)' @click='setPlant(plant)'>Edit</b-button>
            
            <!-- add new plant modal -->
            <b-modal
                :id='CastIdToString(plant.id)'
                ref="my-modal"
                header-bg-variant="primary"
                no-close-on-backdrop
                centered
                scrollable
                hide-footer
                no-close-on-esc
                hide-header-close
                title=" 🎍 New Plant"
            >
                <div>
                    <b-form @submit="submitChanges(plant);$bvModal.hide(CastIdToString(plant.id));">
                        <!-- Plant name -->
                        <b-form-group
                            label="Plant name:"
                            label-for="input-1"
                            description="Enter your plant name here."
                            v-model="plant.Pname"
                        >
                            <b-form-input
                                id="input-1"
                                v-model="plant.Pname"
                                required
                                placeholder="Enter plant name"
                            ></b-form-input>
                        </b-form-group>

                        <!-- Dominant radio -->
                        <b-form-group label="Select plant dominant:">
                            <b-form-radio-group v-model="plant.dominant" name="radio-dominant">
        
                                <b-form-radio
                                    size="lg"
                                    name="Indica-radio"
                                    value="Indica"
                                >Indica</b-form-radio>
                                
                                <b-form-radio
                                    size="lg"
                                    name="Sativa-radio"
                                    value="Sativa"
                                >Sativa</b-form-radio>
                                
                                <b-form-radio
                                    size="lg"
                                    name="Hybrid-radio"
                                    value="Hybrid"
                                >Hybrid</b-form-radio>
                            </b-form-radio-group>
                        </b-form-group>

                        <!-- Seed type radio -->
                        <b-form-group label="Select seed type:">
                            <b-form-radio-group v-model="plant.PlantSeedType" name="radio-seed">
                                <b-form-radio
                                    size="lg"
                                    name="Feminized-radio"
                                    value="Feminized"
                                >Feminized</b-form-radio>

                                <b-form-radio
                                    size="lg"
                                    name="Autoflower-radio"
                                    value="Autoflower"
                                >Autoflower</b-form-radio>

                                <b-form-radio
                                    size="lg"
                                    name="CBD-radio"
                                    value="CBD"
                                >CBD</b-form-radio>
                            </b-form-radio-group>
                        </b-form-group>

                        <!-- Seed price -->
                        <b-form-group
                            label="Enter seed price:"
                            label-for="input-2"
                            description="Enter your seed price here."
                        >
                            <b-form-input
                                type="number"
                                required
                                id="input-2"
                                v-model="plant.SeedCost"
                                placeholder="Enter seed price"
                            ></b-form-input>

                        </b-form-group>

                        <!-- Amount -->
                        <b-form-group
                            label="Enter plant amount:"
                            label-for="input-3"
                            description="Enter your plant amount here."
                        >
                            <b-form-input
                                type="number"
                                required
                                id="input-3"
                                v-model="plant.NumberOfPlants"
                                placeholder="Enter plant amount"
                            ></b-form-input>

                        </b-form-group>

                        <!-- Plant date -->
                        <div>
                            <label for="datepicker-full-width">Set germination date:</label>
                            <b-form-datepicker v-model="plant.GermDate"></b-form-datepicker>
                        </div>

                        <hr />

                        <b-button pill @click="$bvModal.hide(CastIdToString(plant.id)); resetForm()" variant="dark">Cancel</b-button>
                        <b-button pill type="submit" variant="success">Submit</b-button>
                    </b-form>
                </div>
            </b-modal>
        </b-card>
    </div>
</template>

<script>
    import { format } from "url"
    // moment js
    import moment from "moment"
    // electron db
    import db from "electron-db";


    export default {
        name: "plantsCards",
        props: ["plants"],
        components: {},
        data() {
            return {
                
                // new plant form obj
                NewPlantForm: {
                    PlantName: "",
                    PlantDominant: "",
                    PlantGermDate: "",
                    PlantSeedType: "",
                    PlantSeedPrice: null,
                    PlantAmount: null,
                    CurrentWeek: null
                }
            }
        },
        mounted() {},
        methods: {
            resetForm(){
                
                this.$emit("ReloadDB");
                
            },
            setPlant(plant){
                console.log(plant);
                

            },
            // cast numbers to string
            CastIdToString(obj) {
                return String(obj)
            },
            // calculate date difference
            calcDate(plant) {
                let a = moment(plant.GermDate)
                let b = moment()

                let temp = -a.diff(b, 'days', true)
                
                return Math.floor(temp%7)
            },
            // calculate week difference
            calcWeek(plant) {
                let a = moment(plant.GermDate)
                let b = moment()

                let temp = -a.diff(b, 'days', true)
                return Math.floor(temp/7)
            },
            // submit changes to db
            submitChanges(plant){
                console.log(plant)






                this.$emit("ReloadDB");

                this.$bvToast.toast("Edited 1 existing plant", {
                    title: "Plant saved!",
                    toaster: "b-toaster-bottom-left",
                    variant: "success",
                    solid: true,
                    autoHideDelay: 2000
                })
                
            },
        }
    }
</script>

<style>
    #PCards {
        color: #ffffff;
        background-color: #282c34;
        border-radius: 2em;
        margin-bottom: 20px;
    }
    #litem{
        background-color: #383d45;
        font-size: 16px;
    }
</style>