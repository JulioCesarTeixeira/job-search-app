<script lang="ts">
import ActionButton from '@/components/ActionButton.vue'
import ProfileImage from '@/components/ProfileImage.vue'

type MenuItem = {
  label: string
  url: string
}
const menuItems: MenuItem[] = [
  { label: 'Teams', url: '' },
  { label: 'Locations', url: '' },
  { label: 'Day in the life', url: '' },
  { label: 'How we hire', url: '' },
  { label: 'Students', url: '' },
  { label: 'Jobs', url: '' }
]

export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Career Match',
      url: 'https://careers.google.com',
      menuItems,
      isLoggedIn: false
    }
  },
  methods: {
    async handleSignIn() {
      setTimeout(() => {
        this.isLoggedIn = true
      }, 1000)
    }
  },

  components: {
    ActionButton,
    ProfileImage
  }
}
</script>

<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-100 px-8 mx-auto">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none gap-12">
            <li v-for="menuItem in menuItems" :key="menuItem.label" class="h-full">
              <a :href="menuItem.url" class="flex h-full items-center py-2.5">{{
                menuItem.label
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else @click="handleSignIn" />
        </div>
      </div>
    </div>
  </header>
</template>
