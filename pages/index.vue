<template>
  <div class="grid lg:grid-cols-2">
    <div class="min-h-screen flex justify-end flex-col items-center px-4">
      <div>
        <h1 class="text-3xl text-gray-700 mb-6 font-bold">Log in</h1>
        <FormComponent />
      </div>
      <footer class="pb-6 pt-20 text-center text-gray-500">
        Terms of Service
        <span class="text-3xl transform -translate-y-1 inline-block mx-1"
          >.</span
        >
        Privacy Policy
      </footer>
    </div>
    <div
      class="
        min-h-screen
        flex
        items-center
        justify-center
        text-white text-3xl
        bg-gradient-to-bl
        from-sky-600
        to-sky-300
        font-bold
        relative
        overflow-hidden
      "
    >
      <div
        class="
          absolute
          rounded-full
          w-80
          h-80
          -top-28
          -right-28
          shadow-xl
          border border-white border-opacity-20
        "
      ></div>
      <div
        class="
          absolute
          rounded-full
          w-52
          h-52
          -top-16
          -right-16
          shadow-xl
          border border-white border-opacity-25
        "
      ></div>
      <div
        class="
          absolute
          rounded-full
          w-36
          h-36
          -top-16
          -right-16
          shadow-xl
          border border-white border-opacity-50
        "
      ></div>
      Test Login
      <div
        class="
          absolute
          rounded-full
          w-96
          h-96
          -bottom-28
          -left-28
          shadow-2xl
          border border-white border-opacity-10
        "
      ></div>
      <div
        class="
          absolute
          rounded-full
          w-80
          h-80
          -bottom-32
          -left-32
          shadow-2xl
          border border-white border-opacity-20
        "
      ></div>
      <div
        class="
          absolute
          rounded-full
          w-36
          h-36
          -bottom-16
          -left-16
          shadow-2xl
          border border-white border-opacity-25
        "
      ></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
