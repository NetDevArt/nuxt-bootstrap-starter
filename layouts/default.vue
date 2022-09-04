<template>
    <div>
        <NavTop />
        <slot />
    </div>
</template>

<script setup lang="ts"></script>

<script>
import NavTop from '../components/NavTop';

export default {
    components: { NavTop },
};
</script>
<style scoped></style>
