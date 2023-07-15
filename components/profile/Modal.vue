<template>
    <div v-if="isProfileModalOpen" @click="isProfileModalOpen=false" class="absolute top-0 left-0 bg-[#00000020] flex justify-center align-middle">
        <div @click.stop class="w-[617px] h-[641px] rounded-1.25 bg-white flex flex-col align-middle justify-center text-[#0B5570]">
            <i @click="isProfileModalOpen=false" class="absolute top-[24px] right-[24px] h-[24px] w-[24px]">X</i>
            <div class="flex flex-col align-middle justify-center">
                <img :src="profile.image" class="rounded-full"/>
                <h4 class="text-[#CE7D00]">{{ profile.name }}</h4>
                <div>
                    <i class="fa-solid fa-location-dot"></i>
                    <span>{{ profile.location }}</span>
                </div>
            </div>
            <span>{{ profile.introduction }}</span>
            <div class="details">
                <div v-for="item in stats" :key="item.title">
                    <i :class="item.image"></i>
                    <h5>{{ item.title }}</h5>
                    <span>{{ item.details.join(', ') }}</span>
                </div>
                <div v-for="item in links" :key="item.title">
                    <i :class="item.image"></i>
                    <h5>{{ item.title }}</h5>
                    <span><a v-for="link in item.links" :href="link.link">{{ link.title }}</a></span>
                </div>
            </div>
            <button class="rounded-0.5">SEE FULL PROFILE</button>
        </div>
    </div>
</template>

<script lang="ts">
import { profile } from 'console';

    export default {
        
    }
</script>

<style scoped></style>