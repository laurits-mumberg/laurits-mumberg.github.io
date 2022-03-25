app.component('skill-container', {
    data: function () {
        return {
            selectedSkill: null,

            skills1: [{
                name: 'C#',
                image: './assets/images/icons/csharp.svg',
                information: 'infoC#'
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
            }],

            skills2: [{
                name: 'Java',
                image: './assets/images/icons/java.svg',
                information: 'infoC#'
            },
            {
                name: 'PostgreSQL',
                image: './assets/images/icons/postgresql.svg',
                information: 'info'
            },
            {
                name: 'Vanilla frontend',
                image: './assets/images/icons/javascript.svg',
                information: 'info'
            },
            {
                name: 'Vue',
                image: './assets/images/icons/vuedotjs.svg',
                information: 'info'
            },
            {
                name: 'C',
                image: './assets/images/icons/c.svg',
                information: 'info'
            },
            {
                name: 'Lua',
                image: './assets/images/icons/lua.svg',
                information: 'info'
            },
            {
            name: 'GraphQL',
            image: './assets/images/icons/graphql.svg',
            information: 'info'
            }],

            skills3: [{
                name: 'Docker',
                image: './assets/images/icons/docker.svg',
                information: 'infoC#'
            },
            {
                name: 'AutoHotKey',
                image: './assets/images/icons/autohotkey.svg',
                information: 'info'
            },
            {
                name: 'Sample',
                image: './assets/images/icons/autohotkey.svg',
                information: 'info'
            },
            {
                name: 'Sample2',
                image: './assets/images/icons/autohotkey.svg',
                information: 'info'
            }], 
    }},
    template:
    /*html*/
    `
    <div class="skills-container">
        <h3 class='experience-header'>Most experience</h3>
        <skill-box :skillsArr="skills1" @skillSelected="skill => {selectedSkill = skill}"></skill-box>
        <h3 class='experience-header'>Some experience</h3>
        <skill-box :skillsArr="skills2"></skill-box>
        <h3 class='experience-header'>I dabble</h3>
        <skill-box :skillsArr="skills3"></skill-box>
    </div>
    <h2>{{selectedSkill}}<h2>`
})