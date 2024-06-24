<template>
  <TransitionRoot as="template" :show="showModal">
    <Dialog as="div" class="relative z-[9999]" @close="onCloseModal">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-primary bg-opacity-50 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full mx-auto max-w-6xl justify-center p-4 text-center items-center lg:p-20"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white shadow-xl min-h-[250px] flex justify-center items-center transition-all w-full"
            >
              <div class="bg-white mx-auto p-4">
                <div class="flex justify-center items-center flex-col text-center w-full">
                  <slot name="body" />
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

defineProps<{
  showModal: boolean
}>()
const open = ref(true)

const emit = defineEmits(['close', 'next'])

const onCloseModal = () => {
  open.value = false
  emit('close')
}
</script>
