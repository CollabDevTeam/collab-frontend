<template>
    <div v-if="isProfileModalOpen" @click="isProfileModalOpen=false" class="absolute z-50 top-0 left-0 bg-[#00000020] flex justify-center align-middle">
        <div @click.stop class="w-[617px] h-[641px] rounded-1.25 bg-white flex flex-col align-middle justify-center text-[#0B5570]">
            <i @click="isProfileModalOpen=false" class="absolute top-[24px] right-[24px] h-[24px] w-[24px]">X</i>
            <div class="flex flex-col align-middle justify-center">
                <img :src="profile.image" class="rounded-full"/>
                <h4 class="text-[#CE7D00]">{{ profile.name }}</h4>
                <div>
                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                    <span>{{ profile.location }}</span>
                </div>
            </div>
            <span>{{ profile.introduction }}</span>
            <div class="details">
                <div v-for="item in profile.stats" :key="item.title">
                    <font-awesome-icon :icon="item.icon" />
                    <h5 class="mr-[5px] ml-[5px]">{{ item.title }}:</h5>
                    <span>{{ item.details.join(', ') }}</span>
                </div>
                <div v-for="item in profile.links" :key="item.title">
                    <font-awesome-icon :icon="item.icon" />
                    <h5 class="mr-[5px] ml-[5px]">{{ item.title }}</h5>
                    <span><a v-for="link in item.links" target="_blank" :href="link.href">{{ link.title }}</a></span>
                </div>
            </div>
            <button class="rounded-0.5">SEE FULL PROFILE</button>
        </div>
    </div>
</template>

<script setup lang="ts">
let isProfileModalOpen = false
const profile = {
    image: "https://www.flaticon.com/free-icon/profile_3135715",
    name: "joe schmoe",
    location: "jerusalem, israel",
    introduction:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium odit cupiditate maiores temporibus explicabo perspiciatis consequuntur minima accusamus incidunt quia eaque iusto, autem laudantium perferendis iure voluptatibus aliquid hic aperiam!",
    stats:[
        {
            title:"Role",
            icon:"['fas', 'tag']",
            details: ["Front-End Developer", "Project’s creator"]
        },
        {
            title:"Skills and Tools",
            icon:"['fas', 'gear']",
            details: ["HTML/CSS", "JavaScript", "Figma", "Notion"]
        },
        {
            title:"Background",
            icon:"['fas', 'tag']",
            details: ["HTML/CSS", "JavaScript", "Figma", "Notion"]
        },
        {
            title:"Languages",
            icon:"['far', 'globe']",
            details: ["English", "Spanish"]
        },
    ],
    links:[
        {
            title:"Links",
            icon:"['fas', 'link']",
            links: [
                {
                    title: "Git",
                    href: "https://github.com/"
                },
                {
                    title:"LinkedIn",
                    href:"https://www.linkedin.com/"
                }
            ]
        },
        {
            title:"Previous Collab",
            icon:"['far', 'circle-dot']",
            links: [
                {
                    title: "Foody",
                    href: ""
                },
                {
                    title:"Pleyo",
                    href:""
                }
            ]
        },
    ]
}
</script>

<style scoped></style>