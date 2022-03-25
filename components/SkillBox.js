app.component('skill-box', {
    created() {
        console.log(this.skillsArr) 
      },

    data: function () {
        return {
          showingSkills: true,
          selectedSkill: null,
        }
    },

    props: ['skillsArr'],

    methods: {
        selectSkill: function(index) {
            this.$emit('skillSelected', this.skillsArr[index])
            this.showingSkills = false;
            this.selectedSkill = this.skillsArr[index];
        },
        deselectSkill: function() {
            this.showingSkills = true;
            this.selectedSkill = null;
        }
    },


    template:
    /*html*/
    `
        <div v-if="showingSkills" class='skills-boxes'>

            <button v-for='skill, idx in this.skillsArr' :key="skill.name" v-on:click='selectSkill(idx)' type="button" class='experince-btn'>
                <img :src='skill.image'>
                <h3 class='experience-title'>{{skill.name}}</h3>
            </button>
        </div>
        <div v-if="!showingSkills" v-on:click='deselectSkill()' class="info-box">
        <p>{{selectedSkill.information}}</p>
        <button>
        <h3>back</h3>
        </button>
        </div>`
})