app.component('skill-box', {
    data: function () {
        return {
          showingSkills: true,
          selectedSkill: null,
          skills: [{
              name: 'C#',
              image: './assets/images/icons/csharp.svg',
              information: 'info'
          },
          {
            name: 'Node.js',
            image: './assets/images/icons/nodedotjs.svg',
            information: 'info'
        },
        {
            name: 'Python',
            image: './assets/images/icons/python.svg',
            information: 'info'
        },
        {
            name: 'Github',
            image: './assets/images/icons/github.svg',
            information: 'info'
        },
        {
            name: 'Unity',
            image: './assets/images/icons/unity.svg',
            information: 'info'
        }]
        }
    },

    methods: {
        selectSkill: function(index) {
            this.showingSkills = false;
            this.selectedSkill = this.skills[index];
        },
        deselectSkill: function() {
            this.showingSkills = true;
            this.selectedSkill = null;
        }
    },


    template:
    /*html*/
    `<div class="skills-container">

        <div v-if="showingSkills" class='skills-boxes'>

            <button v-for='skill, idx in skills' :key="skill.name" v-on:click='selectSkill(idx)' type="button" class='experince-btn'>
                <img :src='skill.image'>
                <h3 class='experience-title'>{{skill.name}}</h3>
            </button>
        </div>
        <div v-if="!showingSkills" v-on:click='deselectSkill()' class="info-box">
        <p>{{selectedSkill.information}}</p>
        <button>
        <h3>back</h3>
        </button>
        </div>
  </div>`
})