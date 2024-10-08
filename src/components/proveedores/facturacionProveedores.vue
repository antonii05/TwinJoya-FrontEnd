<template>
    <CardComponent>
        <h2>Facturación</h2>
    </CardComponent>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import {CardComponent} from '../helpers';
import type { Proveedor } from '@/models';

const props = defineProps<{
    proveedor: Proveedor
}>();
</script>
