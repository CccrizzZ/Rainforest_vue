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

            <!-- Dominant -->
            <b-card-text>Strain Dominant: {{plant.dominant}}</b-card-text>
            <!-- Plant gender -->
            <b-card-text>Plant Seed Type: {{plant.PlantSeedType}}</b-card-text>
            <!-- Seed cost -->
            <b-card-text>Seed Cost: ${{plant.SeedCost}}</b-card-text>
            <!-- Dominant -->
            <b-card-text>Amount of Plants: {{plant.NumberOfPlants}}</b-card-text>
            <!-- Germ date -->
            <b-card-text>Germination Date: {{plant.GermDate}}</b-card-text>

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
</style>