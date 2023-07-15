<template>
    <div v-if="isProfileModalOpen" @click="isProfileModalOpen=false" class="fixed w-[100%] h-[100%] z-50 top-0 left-0 bg-[#00000045] flex justify-center items-center">
        <div @click.stop class=" relative w-[617px] p-[20px] rounded-lg bg-white flex flex-col items-center justify-center text-[#0B5570]">
            <i @click="isProfileModalOpen=false" class="absolute cursor-pointer top-[24px] right-[24px] h-[24px] w-[24px]">X</i>
            <div class="flex flex-col items-center justify-center w-fit mb-5">
                <img :src="profile.image" class="rounded-full"/>
                <h3 class="text-[#CE7D00]">{{ profile.name }}</h3>
                <div>
                    <i class="fa-solid fa-location-dot"></i>
                    <span>{{ profile.location }}</span>
                </div>
            </div>
            <span class="mb-5">{{ profile.introduction }}</span>
            <div class="mb-5 w-[100%]">
                <div v-for="item in profile.stats" :key="item.title" class="flex w-fit whitespace-pre">
                    <i :class="item.icon"></i>
                    <h5 class="mr-[5px] ml-[5px]">{{ item.title }}:</h5>
                    <span>{{ item.details.join(', ') }}</span>
                </div>
                <div v-for="item in profile.links" :key="item.title" class="flex w-fit whitespace-pre">
                    <i :class="item.icon"></i>
                    <h5 class="mr-[5px] ml-[5px]">{{ item.title }}:</h5>
                    <template v-for="(link, index) in item.links">
                        <template v-if="index > 0">, </template>
                        <a target="_blank" :href="link.href" class="underline">{{ link.title }}</a>
                    </template>
                </div>
            </div>
            <button class="rounded-lg border border-[#0B5570] p-2">SEE FULL PROFILE</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let isProfileModalOpen = ref(true)
const profile = {
    image: "/icons/users.svg",
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