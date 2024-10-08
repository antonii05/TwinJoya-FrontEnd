<template>
    <CardComponent>
        <h1>Notas</h1>
    </CardComponent>
</template>

<script setup lang="ts">
import { CardComponent } from '@/components/helpers';
import type { Articulo } from '@/models';

const props = defineProps<{
    articulo: Articulo;
}>();
</script>
