import { component$, Slot } from "@builder.io/qwik";
// import { routeLoader$ } from "@builder.io/qwik-city";

// import Header from "~/components/header/header";
// import Footer from "~/components/starter/footer/footer";

// export const onRequest: RequestHandler = async ({
//   cookie,
//   request,
//   redirect,
//   platform,
// }) => {
//   if (import.meta.env.DEV) {
//     if (!cookie.get("user_id") && !cookie.get("token")) {
//       throw redirect(302, `/login/?redirect=${request.url}`);
//     }
//   } else {
//     const user_id = cookie.get("user_id")?.value || "";
//     if (user_id === "") {
//       throw redirect(302, `/login/?redirect=${request.url}`);
//     }
//     if (user_id !== GUEST) {
//       const token: string = (await platform.env.FISHY_KV.get(user_id)) || "";
//       if (!token || cookie.get("token")?.value !== token) {
//         throw redirect(302, `/login/?redirect=${request.url}`);
//       }
//     }
//   }
// };

// export const useUserObject = routeLoader$<MetaUserDetails>(({ cookie }) => {
//   return {
//     image: cookie.get("image")?.value,
//     admin: Boolean(cookie.get("admin")?.value),
//     email: cookie.get("email")?.value,
//     firstName: cookie.get("firstName")?.value,
//     lastName: cookie.get("lastName")?.value,
//   };
// });

export default component$(() => {
  return (
    <div class="min-h-screen bg-gray-900 from-gray-900/80 to-gray-900/80">
      <main class="pt-10 min-h-full">
        <div class="h-full">
          <Slot />
        </div>
      </main>
    </div>
  );
});
