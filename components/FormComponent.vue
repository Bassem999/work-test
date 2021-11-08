<template>
  <form action="" class="flex flex-col space-y-3">
    <label for="email" class="text-sm text-gray-600">Email Address</label>
    <input
      id="email"
      type="emial"
      class="
        outline-none
        py-1.5
        px-3
        border-gray-300
        focus:border-gray-500
        border
        duration-150
      "
    />
    <label for="pass" class="text-sm text-gray-600">Password</label>
    <input
      id="pass"
      type="password"
      class="
        outline-none
        py-1.5
        px-3
        border-gray-300
        focus:border-gray-500
        border
        duration-150
      "
    />
    <input
      type="submit"
      class="
        py-2.5
        bg-gray-200
        rounded
        text-gray-600 text-sm
        cursor-pointer
        hover:bg-gray-300
        duration-300
      "
      value="Log In"
    />
    <div class="text-sm space-x-32 text-gray-600">
      <span>
        <a href="#" class="hover:text-gray-800 duration-300"
          >Create an account</a
        >
      </span>
      <span>
        <a href="#" class="hover:text-gray-800 duration-300"
          >Forgot your password</a
        >
      </span>
    </div>
  </form>
</template>
