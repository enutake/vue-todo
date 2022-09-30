<script setup lang="ts">
    const props = defineProps({
        'value': {
            type: Boolean
        }
    });

</script>

<template>
    <q-dialog :value='value' persistent>
        <q-card>
            <q-card-section class="row items-center">
            <q-avatar icon="priority_high" color="red" text-color="white" />
            <span class="q-ml-sm">を削除してもいいですか？</span>
            </q-card-section>

            <q-card-actions align="right">
            <q-btn flat label="キャンセル" color="gray" v-close-popup />
            <q-btn flat label="削除する" color="red" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>