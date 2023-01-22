<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900"
  >
    <div
      class="container relative flex flex-wrap items-center justify-between mx-auto"
    >
      <a href="https://flowbite.com/" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-6 mr-3 sm:h-9"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >Admin</span
        >
      </a>
      <div class="relative flex items-center md:order-2">
        <button
          @click="toggleNav"
          type="button"
          class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="w-8 h-8 rounded-full"
            src="/docs/images/people/profile-picture-3.jpg"
            alt="user photo"
          />
        </button>
        <!-- Dropdown menu -->
        <div
          :class="{ hidden: !showMenu, flex: showMenu }"
          class="right-0 top-8 absolute flex flex-col z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white"
              >Bonnie Green</span
            >
            <span
              class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"
              >name@flowbite.com</span
            >
          </div>
          <ul class="py-1" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >My Profile</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Logout</a
              >
            </li>
          </ul>
        </div>
        <button
          @click="toggleDropNav"
          data-collapse-toggle="mobile-menu-2"
          type="button"
          class="items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div>

        <form class="flex items-center">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
    </div>
    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
</form>


      </div>

      <div
        :class="{ hidden: !showNav, flex: showNav }"
        class="absolute md:static top-8 right-0 left-0 flex flex-col items-end justify-between w-full md:flex md:w-auto md:order-1"
        id="mobile-menu-2"
      >
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <button
            @click="toggleTheme"
              class="block py-2 pl-3  text-2xl pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
              >
              <themes />
              </button
            >
          </li>
          <li>
            <a href="#"
            class="block py-2 pl-3 text-2xl pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:background-blue-700 md:p-0  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            
            >
              <Notifications />
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 text-2xl pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
              <flag />
              </a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2  text-2xl pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
              <Earnings />
              
              </a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 text-2xl pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
              <Emails />
              
              </a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Notifications from "./icons/Notifications.vue";
import flag from "./icons/flag.vue"
import themes from "./icons/themes.vue"
import Earnings from "./icons/Earnings.vue"
import Emails from "./icons/Emails.vue"

import { ref } from "@vue/reactivity";

export default {
  name: "App",
  components: { Notifications, flag, themes, Earnings, Emails },
  props: ['toggleTheme'],
  setup() {
    const showNav = ref(false);
    const showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    const toggleDropNav = () => (showNav.value = !showNav.value);
    return { showMenu, toggleNav, toggleDropNav, showNav };
  },
};
</script>
