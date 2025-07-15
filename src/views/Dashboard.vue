<template>
  <div class="min-h-screen bg-[#FCFCFC] text-[#11193C] font-['Inter']">
    <div class="flex">
      <!-- Sidebar -->
      <div class="w-[130px] bg-white min-h-screen shadow-lg flex flex-col justify-between py-6">
        <!-- Top Icons -->
        <!-- Top Sidebar Icons -->
        <div class="flex flex-col gap-4 w-full px-4">
          <SidebarIcon
            icon="metrics.svg"
            label="Dashboard"
            active
            class="h-[100px] w-full px-4 rounded-lg"
          />
          <SidebarIcon
            icon="analytics.svg"
            label="Analytics"
            class="h-[100px] w-full px-4 rounded-lg"
          />
          <SidebarIcon
            icon="currency-exchange-2.svg"
            label="Trading"
            class="h-[100px] w-full px-4 rounded-lg"
          />
          <SidebarIcon
            icon="sound-wave.svg"
            label="Notifications"
            class="h-[100px] w-full px-4 rounded-lg"
          />
        </div>

        <!-- Logout Icon -->
        <div class="w-full px-4">
          <SidebarIcon icon="logout.svg" label="Logout" class="h-[100px] w-full px-4 rounded-lg" />
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 p-8">
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
          <!-- Left: Title and Welcome -->
          <div>
            <h1 class="text-[51px] leading-[51px] font-semibold text-[#11193C]">Dashboard</h1>
            <p class="text-sm text-[#8990AD] mt-1">Welcome back, Andrew</p>
          </div>

          <!-- Right: Add Button + Avatar + Name -->
          <div class="flex items-center gap-4">
            <button
              class="bg-[#2464FC] text-white px-5 py-3 rounded-md text-sm font-medium shadow-md hover:shadow-lg transition"
            >
              + Add Unit
            </button>

            <div class="flex items-center gap-2">
              <img
                src="@/assets/icons/johanna.jpg"
                class="w-10 h-10 rounded-full shadow-sm object-cover"
              />
              <span class="text-sm text-[#8990AD] font-medium">Andrew Johnstons</span>
            </div>
          </div>
        </div>

        <!-- Stats Row -->
        <div class="grid grid-cols-4 mb-6 divide-x divide-[#E6EAF3] px-4 py-2 bg-white rounded-lg">
          <div class="pr-6">
            <StatBox title="BALANCE" value="$5900.00" />
          </div>
          <div class="px-6">
            <StatBox title="PROFITS" value="$950.00" trend="+56%" positive />
          </div>
          <div class="px-6">
            <StatBox title="LOSSES" value="$450.00" trend="-56%" />
          </div>
          <div class="pl-6">
            <p class="text-xs font-semibold text-[#8990AD] uppercase mb-2 tracking-wide">
              CURRENCIES
            </p>
            <div class="flex items-center justify-end gap-3">
              <div
                v-for="icon in [btcIcon, dollarIcon, euroIcon, yenIcon]"
                :key="icon"
                class="p-2 rounded-full bg-[#F1F5FF]"
              >
                <img :src="icon" class="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        <!-- Country Cards Container -->
        <div class="bg-white rounded-[4px] shadow-[0_3px_26px_rgba(0,0,0,0.09)] px-6 py-5 mb-6">
          <div class="grid grid-cols-6 gap-4">
            <CountryCard country="Italy" :count="475" trend="up" />
            <CountryCard country="United States" :count="431" trend="up" />
            <CountryCard country="Canada" :count="174" trend="down" />
            <CountryCard country="Spain" :count="475" trend="up" />
            <CountryCard country="Japan" :count="134" trend="up" />
            <CountryCard country="South Africa" :count="471" trend="down" />
          </div>
        </div>

        <!-- Team Members and Comparison -->
        <div class="grid grid-cols-2 gap-12">
          <!-- Team Members Column -->
          <div class="flex flex-col justify-between h-full">
            <!-- Heading and View All (outside the card) -->
            <div class="flex justify-between items-center mb-4 px-1">
              <h2 class="text-[30px] font-medium leading-[36px] text-[#11193C]">Team Members</h2>
              <a href="#" class="text-[#2464FC] text-sm font-semibold">View All</a>
            </div>

            <!-- Card -->
            <div class="bg-white rounded-[4px] shadow-[0_3px_26px_rgba(0,0,0,0.09)] p-4 w-full">
              <div class="space-y-3">
                <TeamMember name="Andrew Johnston" role="Top Trader" :avatar="andrewAvatar" />
                <TeamMember name="Anna Atkinsons" role="Manager" :avatar="annaAvatar" />
                <TeamMember name="Mark Atkinsons" role="Top Trader" :avatar="markAvatar" />
                <TeamMember name="Johanna Tairons" role="Manager" :avatar="johannaAvatar" />
              </div>
            </div>
          </div>

          <!-- Comparison Column -->
          <div class="flex flex-col justify-between h-full">
            <!-- Header (outside the card) -->
            <div class="flex justify-between items-center mb-4 w-full">
              <h2 class="text-[30px] leading-[36px] font-medium text-[#11193C]">Comparison</h2>
              <a href="#" class="text-[#2464FC] text-sm font-semibold">View All</a>
            </div>

            <!-- Card with more shadow -->
            <div
              class="bg-white rounded-[4px] shadow-[0_3px_26px_rgba(0,0,0,0.09)] p-1 w-full h-[326px]"
            >
              <div class="space-y-10 px-8 py-6">
                <ComparisonBar country="United States" percent="93" :flag="usFlag" />
                <ComparisonBar country="Italy" percent="75" :flag="italyFlag" />
                <ComparisonBar country="Spain" percent="13" :flag="spainFlag" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// src/views/Dashboard.vue
import SidebarIcon from '@/components/SidebarIcon.vue'
import StatBox from '@/components/StatBox.vue'
import CountryCard from '@/components/CountryCard.vue'
import TeamMember from '@/components/TeamMember.vue'
import ComparisonBar from '@/components/ComparisonBar.vue'
import btcIcon from '@/assets/icons/bitcoin-2.svg'
import dollarIcon from '@/assets/icons/currency-dollar.svg'
import euroIcon from '@/assets/icons/currency-euro.svg'
import yenIcon from '@/assets/icons/currency-yen.svg'
import usFlag from '@/assets/icons/usa.svg'
import italyFlag from '@/assets/icons/italy.svg'
import spainFlag from '@/assets/icons/spain.svg'
import andrewAvatar from '@/assets/icons/andrew.jpg'
import annaAvatar from '@/assets/icons/anna.jpg'
import markAvatar from '@/assets/icons/mark.jpg'
import johannaAvatar from '@/assets/icons/johanna.jpg'
</script>
