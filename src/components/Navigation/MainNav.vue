<script lang="ts">
import ProfileImage from '@/components/Navigation/ProfileImage.vue'
import TheSubnav from '@/components/Navigation/TheSubnav.vue'
import ActionButton from '@/components/shared/ActionButton.vue'

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
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav
  },
  data() {
    return {
      company: 'Career Match',
      url: 'https://careers.google.com',
      menuItems,
      isLoggedIn: false,
      activeMenuItem: 'home'
    }
  },
  methods: {
    handleSignIn() {
      this.isLoggedIn = true
    },
    handleMenuItemClick(menuItem: string) {
      const formattedMenuItem = menuItem.toLowerCase().replace(/\s/g, '-')
      this.activeMenuItem = formattedMenuItem
    }
  },
  computed: {
    isJobMenuActive() {
      return this.activeMenuItem === 'jobs'
    },
    headerHeightClass() {
      return {
        'h-32': this.isLoggedIn,
        'h-16': !this.isLoggedIn
      }
    }
  }
}
</script>

<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-100 px-8 mx-auto">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none gap-12">
            <li v-for="menuItem in menuItems" :key="menuItem.label" class="h-full">
              <!-- <a
                :href="menuItem.url"
                
                class="flex h-full items-center py-2.5"
                >{{ menuItem.label }}</a
              > -->
              <span
                class="flex h-full items-center py-2.5 cursor-pointer"
                @click="handleMenuItemClick(menuItem.label)"
                >{{ menuItem.label }}</span
              >
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else @click="handleSignIn" name="Sign In" />
        </div>
      </div>
      <the-subnav v-if="isLoggedIn" :is-job-menu-active="isJobMenuActive" />
    </div>
  </header>
</template>
