<template>
  <section class="step-wizard">
    <ul class="step-wizard-list">
      <li
        class="step-wizard-item"
        :class="returnStylesByActiveStep(1)"
      >
        <span class="progress-count">1</span>
        <span class="progress-label">Tell us about your project</span>
      </li>
      <li
        class="step-wizard-item"
        :class="returnStylesByActiveStep(2)"
      >
        <span class="progress-count">2</span>
        <span class="progress-label">Describe and give some more details</span>
      </li>
      <li
        class="step-wizard-item"
        :class="returnStylesByActiveStep(3)"
      >
        <span class="progress-count">3</span>
        <span class="progress-label">Compose a team</span>
      </li>
      <li
        class="step-wizard-item"
        :class="returnStylesByActiveStep(4)"
      >
        <span class="progress-count">4</span>
        <span class="progress-label">Review and Publish</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  const props = defineProps<{
    currentStep: number;
  }>();

  const returnStylesByActiveStep = (stepNumber: number) => {
    return props.currentStep === stepNumber ? 'current-item' : '';
  };
</script>

<style scoped>
  .step-wizard {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3.5rem 0;
  }

  .step-wizard-list {
    display: flex;
    list-style-type: none;
    position: relative;
    z-index: 10;
    color: #fd9900;
  }
  .step-wizard-item {
    display: flex;
    flex-direction: column;
    position: relative;
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
    gap: 1rem;
  }

  .step-wizard-item + .step-wizard-item:after {
    content: '';
    position: absolute;
    left: 0;
    top: 19px;
    background-image: linear-gradient(
      to right,
      #fd9900 50%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: bottom;
    background-size: 5px 2px;
    background-repeat: repeat-x;
    width: 100%;
    height: 2px;
    transform: translateX(-50%);
    z-index: -10;
  }

  .progress-count {
    height: 40px;
    width: 40px;
    display: flex;
    background: #fafafa;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    color: transparent;
  }

  .progress-count:after {
    content: '';
    height: 40px;
    width: 40px;
    position: absolute;
    background: #fec56e;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: -10;
  }

  .progress-count:before {
    content: '';
    height: 8px;
    width: 20px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%) rotate(-45deg);
    transform-origin: center center;
  }

  .progress-label {
    font-size: 16px;
    line-height: 24px;
  }

  .current-item .progress-count:before,
  .current-item ~ .step-wizard-item .progress-count:before {
    display: none;
  }

  .current-item ~ .step-wizard-item .progress-count:after {
    height: 10px;
    width: 10px;
  }

  .current-item ~ .step-wizard-item .progress-label {
    opacity: 0.5;
  }

  .current-item .progress-count:after {
    background: #fafafa;
    border: 2px solid #fec56e;
  }

  .current-item .progress-count {
    color: #fec56e;
  }

  @media screen and (max-width: 600px) {
    .progress-label {
      font-size: 12px;
      line-height: 16px;
      padding: 0 0.5rem;
    }
  }
</style>
