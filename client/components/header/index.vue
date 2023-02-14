<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- <ColorModePicker /> -->
  <!-- <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }"> -->
  <div>
    <Disclosure as="header" class=" shadow dark:bg-slate-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="-ml-2 mr-2 flex items-center md:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton
                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div class="flex flex-shrink-0 items-center">
              <!-- <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> -->
              <NuxtLink :to="localePath('/')+`/`">
                <LazyHeaderLogo />
              </NuxtLink>
            </div>
            <div class="hidden md:ml-6 md:flex md:space-x-8">
              <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <!-- <a href="#"
              class="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-500  dark:text-gray-100">Dashboard</a> -->
              <a href="#"
                class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Dashboard</a>
              <a href="#"
                class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Team</a>
              <a href="#"
                class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Projects</a>
              <a href="#"
                class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Calendar</a>
              <!-- <NuxtLink :to="localePath('blog')+'/'" class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">{{$t('blog')}}</NuxtLink> -->
              <NuxtLink :to="localePath('contact')+'/'"
                class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                {{$t('contact')}}</NuxtLink>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton
                    class="flex rounded-full bg-white text-gray-400 mr-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 border-2 p-1">
                    <span class="sr-only">Open user menu</span>
                    <component :is="themescoloricons[colorMode.preference]" class="h-6 w-6 inline-flex" />
                    <!-- <component :is="SunIcon" class="h-6 w-6 inline-flex"/> -->

                    <!-- <SunIcon class="h-6 w-6 inline-flex" aria-hidden="true" /> -->
                    <!-- <SparklesIcon class="h-6 w-6 inline-flex" aria-hidden="true" /> -->
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-200"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <ul>
                      <li v-for="color of themescolor" :key="color" :class="{
          preferred: !$colorMode.unknown && color === $colorMode.preference,
          selected: !$colorMode.unknown && color === $colorMode.value
        }">
                        <MenuItem v-slot="{ active }" v-show="color != colorMode.preference">
                        <span :class="[active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700']"
                          @click="clickfun(color)">{{color}}
                          <!-- <SunIcon class="h-6 w-6 inline-flex" aria-hidden="true" /> -->
                          <component :is="themescoloricons[color]" class="h-6 w-6 inline-flex" />
                        </span>
                        </MenuItem>
                      </li>
                    </ul>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
            <div class="flex-shrink-0">
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton
                    class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span class="sr-only">Open user menu</span>
                    <nuxt-icon class="text-3xl rounded-full" :name="`flags/`+locale" filled />
                    <!-- <p>{{ locale }}</p> -->
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-200"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-for="locale in availableLocales" :key="locale.code" v-slot="{ active, close }">
                    <NuxtLink @click="close" :to="switchLocalePath(locale.code)+'/'"
                      :class="[active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700']">
                      {{ locale.name }}
                    </NuxtLink>
                    </MenuItem>
                    <!-- <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                  </MenuItem> -->
                  </MenuItems>
                </transition>
              </Menu>
            </div>
            <div class="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
              <button type="button"
                class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton
                    class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="" />
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-200"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700']">Your
                      Profile</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <a href="#"
                      :class="[active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign
                      out</a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
              <div class="flex-shrink-0 m-2">
                  <LazyModalsLogin />
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- menu small responsive -->
      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 pt-2 pb-3">
          <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
          <DisclosureButton as="a" href="#"
            class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6">
            Dashboard</DisclosureButton>
          <DisclosureButton as="a" href="#"
            class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6">
            Team</DisclosureButton>
          <DisclosureButton as="a" href="#"
            class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6">
            Projects</DisclosureButton>
          <DisclosureButton as="a" href="#"
            class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6">
            Calendar</DisclosureButton>
          <DisclosureButton as="a" href="#"
            class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6">
            Light
            <SunIcon class="h-6 w-6 inline-flex" aria-hidden="true" />
            <SparklesIcon class="h-6 w-6 inline-flex" aria-hidden="true" />
            <LazyHeaderSwitch class="top-1" />
          </DisclosureButton>
        </div>
        <div class="border-t border-gray-200 pt-4 pb-3">
          <div class="flex items-center px-4 sm:px-6">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">Tom Cook</div>
              <div class="text-sm font-medium text-gray-500">tom@example.com</div>
            </div>
            <button type="button"
              class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 space-y-1">
            <DisclosureButton as="a" href="#"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6">
              Your Profile</DisclosureButton>
            <DisclosureButton as="a" href="#"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6">
              Settings</DisclosureButton>
            <DisclosureButton as="a" href="#"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6">
              Sign out</DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <!-- <hr> -->

    <!-- </header> -->
    <div>
    
  </div>
  </div>
</template>

<script setup>
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems
  } from '@headlessui/vue'
  import {
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    SparklesIcon,
    SunIcon,
    ComputerDesktopIcon
  } from '@heroicons/vue/24/outline'
  const themescolor = ['system', 'light', 'dark'];
  // const themescolor = ['light', 'dark'];
  const themescoloricons = {
    'system': ComputerDesktopIcon,
    'light': SunIcon,
    'dark': SparklesIcon
  };
  const {
    locale,
    locales
  } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
  })
  const localePath = useLocalePath()
  const colorMode = useColorMode()
  console.log("colorMode.preference---------", colorMode.preference)
  const clickfun = function (color) {
    colorMode.preference = color
    console.log("colorMode.preference----2222222-----", color)
  }
  // const showlogin = ref(true)
</script>
<style>
  .nuxt-icon svg {
    margin-bottom: unset;
  }

  .router-link-exact-active {
    @apply text-gray-700 font-bold;
    @apply border-indigo-500;
  }

  .dark .router-link-exact-active {
    @apply text-gray-100 font-bold;
    @apply border-indigo-500;
  }

  /* .router-link-exact-active:hover {
  @apply border-gray-300 font-medium;
} */
</style>