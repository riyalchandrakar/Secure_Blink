<template>
  <section class="bg-white relative">
    <!-- Contact Area -->
    <div
      class="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-[#f9fbff] relative z-20"
    >
      <!-- Left Illustration -->
      <div class="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <img :src="GroupIcon" alt="Illustration" class="max-w-md w-full" />
      </div>

      <!-- Right Form -->
      <div class="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-lg max-w-lg">
        <h2 class="text-xl font-semibold text-gray-800 mb-6">Send Us message</h2>

        <form
          action="https://formsubmit.co/db37dfc00e0bee0196d4cf8c778a4ce9"
          method="POST"
          class="space-y-4"
        >
         <input type="hidden" name="_captcha" value="false" />
         <input type="hidden" name="_next" value="https://secure-blink-theta.vercel.app/" />


          <input
            name="email"
            type="email"
            placeholder="Your Email*"
            required
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
          />
          <input
            name="name"
            type="text"
            placeholder="Your Name*"
            required
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number*"
            required
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
          ></textarea>

          <button
            type="submit"
            class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Get Started →
          </button>
        </form>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-[#0072ff] text-white py-12 px-6 md:px-16">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <!-- Logo & Socials -->
        <div>
          <p class="mb-4 leading-relaxed">
            Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <div class="flex space-x-4 mt-4">
            <a
              href="#"
              class="border border-white rounded-full p-2 hover:bg-white hover:text-[#0072ff] transition"
            >
              <img :src="FacebookIcon" alt="Facebook" class="w-4 h-4" />
            </a>
            <a
              href="#"
              class="border border-white rounded-full p-2 hover:bg-white hover:text-[#0072ff] transition"
            >
              <img :src="TwitterIcon" alt="Twitter" class="w-4 h-4" />
            </a>
            <a
              href="#"
              class="border border-white rounded-full p-2 hover:bg-white hover:text-[#0072ff] transition"
            >
              <img :src="InstagramIcon" alt="Instagram" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Our Services -->
        <div>
          <h4 class="font-semibold mb-4">Our Services</h4>
          <ul class="space-y-2">
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>Cloud Technologies</li>
            <li>UI/UX Designs</li>
          </ul>
        </div>

        <!-- Our Links -->
        <div>
          <h4 class="font-semibold mb-4">Our Links</h4>
          <ul class="space-y-2">
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Imprint</li>
            <li>Legal</li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-semibold mb-4">Contact Us</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start space-x-2">
              <!-- Location Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c1.656 0 3-1.343 3-3S13.656 5 12 5s-3 1.343-3 3 1.344 3 3 3z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 22s8-4.5 8-12A8 8 0 0 0 4 10c0 7.5 8 12 8 12z"
                />
              </svg>
              <span>Al. Dummyroad 124/23 floor 123 Banswara Street, 02-577 India.</span>
            </li>

            <li class="flex items-center space-x-2">
              <!-- Phone Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5l2 3a2 2 0 0 1-.4 2.4l-1 1.2a16 16 0 0 0 6.4 6.4l1.2-1a2 2 0 0 1 2.4-.4l3 2a2 2 0 0 1 1 1.7v3a2 2 0 0 1-2 2C8.477 24 0 15.523 0 5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 1z"
                />
              </svg>
              <span>00 1800 245 453</span>
            </li>

            <li class="flex items-center space-x-2">
              <!-- Mail Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12l-4-4-4 4m0 0l4 4 4-4m-4 4v1m0-10v1"
                />
              </svg>
              <span>hello@tinky.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
import GroupIcon from '@/assets/icons/Group-35686.svg'

import FacebookIcon from '@/assets/icons/Group 34322.svg'
import InstagramIcon from '@/assets/icons/instagram.svg'
import TwitterIcon from '@/assets/icons/Group 34323.svg'

export default {
  name: 'ContactSection',
  data() {
    return {
      GroupIcon,
      FacebookIcon,
      InstagramIcon,
      TwitterIcon,
    }
  },
}
</script>
