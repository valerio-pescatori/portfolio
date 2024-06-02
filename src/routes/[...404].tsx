import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="text-center mocha bg-base text-text p-4 min-h-dvh flex flex-col justify-center items-center">
      <h1 class="text-6xl font-thin uppercase">Not Found</h1>
      <p class="mt-4">
        go back <a href="/">home</a> :)
      </p>
    </main>
  );
}
