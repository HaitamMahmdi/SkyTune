<script setup>
import { usePlansStore } from "../stores/PlansStore";
const plansStore = usePlansStore();
</script>
<template>
  <div
    class="container flex flex-wrap my-40 gap-x-10 justify-center items-center"
  >
    <div
      class="max-w-[26.25rem] flex flex-col h-[62.5rem] border rounded-4xl border-main max-lg:mx-2.5 min-sm:px-9 px-2.5 mb-7 pt-16"
      v-for="plan in plansStore.plans"
      :key="plan.name"
    >
      <div class="min-h-44 mb-6">
        <h2 class="text-center text-4xl leading-14 uppercase">
          {{ plan.name }} <br />
          {{ plan.price }}
        </h2>
      </div>
      <div class="flex flex-col justify-between grow">
        <div>
          <div
            v-for="(feature, index) in plan.features"
            :key="feature"
            :class="[index === plan.features.length - 1 ? 'border-b' : '']"
            class="max-w-80 text-[18px] border-t flex items-center border-main py-5"
          >
            <img
              class="mr-1.5"
              src="/public/assets/icons/DoubleRight.svg"
              alt=""
            />
            <p>{{ feature }}</p>
          </div>
        </div>
        <ButtonCom class="w-56 mb-16 py-5 block mx-auto">
          <template v-slot:contant><p>Subsecraibe</p></template>
        </ButtonCom>
      </div>
    </div>
  </div>
</template>
