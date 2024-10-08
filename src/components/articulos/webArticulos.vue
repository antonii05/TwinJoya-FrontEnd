<template>
    <CardComponent>
        <h1>Web</h1>
    </CardComponent>
</template>

<script setup lang="ts">
import { CardComponent } from '@/components/helpers';
import type { Articulo } from '@/models';

const props = defineProps<{
    articulo: Articulo;
}>();
</script>
