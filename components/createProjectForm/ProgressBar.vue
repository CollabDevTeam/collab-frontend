<template>
  <section class="step-wizard">
    <ul class="step-wizard-list">
      <li class="step-wizard-item">
        <span class="progress-count">1</span>
        <span class="progress-label">Tell us about your project</span>
      </li>
      <li>
        <span class="progress-count">2</span>
        <span class="progress-label">Describe and give some more details</span>
      </li>
      <li>
        <span class="progress-count">3</span>
        <span class="progress-label">Compose a team</span>
      </li>
      <li>
        <span class="progress-count">4</span>
        <span class="progress-label">Review and Publish</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  defineProps<{
    completesSections: string[];
  }>();
</script>

<style scoped></style>
