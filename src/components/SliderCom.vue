<script setup>
import { ref } from "vue";

const slider = ref(null);
let isDragging = false;
let startX = 0;
let startScrollLeft = 0;
let lastX = 0;
let lastTime = 0;
let speed = 0;

function dragStart(e) {
  isDragging = true;
  startX = e.pageX;
  startScrollLeft = slider.value.scrollLeft;
  lastX = startX;
  lastTime = performance.now();
}

function dragMove(e) {
  if (!isDragging) return;
  slider.value.classList.remove("cursor-grab");
  slider.value.classList.add("cursor-grabbing");
  const currentX = e.pageX;
  const now = performance.now();

  // Move slider
  slider.value.scrollLeft = startScrollLeft - (currentX - startX);

  // Instant speed
  const distance = currentX - lastX;
  const time = now - lastTime;
  speed = distance / time; // pixels per ms

  lastX = currentX;
  lastTime = now;
}

function dragStop() {
  isDragging = false;
  slider.value.classList.remove("cursor-grabbing");
  slider.value.classList.add("cursor-grab");

  startMomentum();
}

function startMomentum() {
  slider.value.scrollLeft -= speed * 20; // scale for smooth motion
  speed *= 0.95; // friction
  if (Math.abs(speed) > 0.01) {
    requestAnimationFrame(startMomentum);
  }
}
</script>

<template>
  <div
    ref="slider"
    @mousedown="dragStart"
    @mousemove="dragMove"
    @mouseup="dragStop"
    @touchstart="touchstart"
    @touchmove="dragMove"
    @touchend="dragStop"
    @mouseleave="isDragging = false"
    style="scrollbar-width: none"
    class="grid grid-flow-col auto-cols-[320px] gap-4 overflow-x-auto select-none !scroll-smooth"
  >
    <slot name="card"></slot>
  </div>
</template>
