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
                bg-variant="dark"
                style="margin-top:30px; border-radius:2em; padding-top: 10px; align-items:center;"
            >
                <!-- Current week -->
                <em>Week {{plant.CurrentWeek}}</em>
        
            </b-card>

            <!-- Edit Button -->
            <b-button pill slot="footer" style="right:0px;" variant="dark" v-b-modal="plant.id">Edit</b-button>
        </b-card>
    </div>
</template>

<script>
    import { format } from "url";

    export default {
        name: "plantsCards",
        props: ["plants"],
        components: {},
        data() {
            return {
                plist: this.plants,
                range: {}
            }
        },
        mounted() {},
        methods: {
            // cast numbers to string
            CastIdToString(obj) {
                return String(obj)
            },
            calcDate(plant) {
                let d = new Date()
                let temp = {
                    start: plant.GermDate,
                    end: this.DateConvert(d)
                };
                this.range = temp;
            },
            DateConvert(date) {
                var yyyy = date.getFullYear().toString();
                var mm = (date.getMonth() + 1).toString();
                var dd = date.getDate().toString();

                var mmChars = mm.split("");
                var ddChars = dd.split("");

                return (
                    yyyy +
                    "-" +
                    (mmChars[1] ? mm : "0" + mmChars[0]) +
                    "-" +
                    (ddChars[1] ? dd : "0" + ddChars[0])
                );
            }
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