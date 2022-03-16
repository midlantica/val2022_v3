import { createRouter, createWebHistory } from "vue-router"
import Home from "./views/Home.vue"
import ArtistStatement from "./views/ArtistStatement.vue"
import Portfolio from "./views/Portfolio.vue"
import Shop from "./views/Shop.vue"
import Licensing from "./views/Licensing.vue"
import Wholesale from "./views/Wholesale.vue"
import contact from "./views/Contact.vue"
import thankyou from "./views/thankyou.vue"
import NotFound from "./views/NotFound.vue"
import gallery from "./views/gallery.vue"
import VueBodyClass from "vue-body-class"

const routes = [
  {
    path: "/gallery",
    name: "gallery",
    component: gallery,
    meta: {
      bodyClass: "gallery",
      title: "Valentina Design | Valentina Art - Inspired and Inspirational",
      metaTags: [
        // {
        //   name: "description",
        //   content: "The gallery page of our example app.",
        // }
      ],
    },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      bodyClass: "home",
      title: "Valentina Design | Valentina Art - Inspired and Inspirational",
      metaTags: [
        // {
        //   name: "description",
        //   content: "The home page of our example app.",
        // }
      ],
    },
  },
  {
    path: "/ArtistStatement",
    name: "ArtistStatement",
    component: ArtistStatement,
    meta: {
      bodyClass: "artists-statement",
      title: "Valentina Design | Artist's Statement",
      metaTags: [
        // {
        //   name: "description",
        //   content: "The home page of our example app.",
        // }
      ],
    },
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: Portfolio,
    meta: {
      bodyClass: "portfolio",
      title: "Valentina Design | Portfolio",
      metaTags: [
        // {
        //   name: "description",
        //   content: "The home page of our example app.",
        // }
      ],
    },
  },
  {
    path: "/Shop",
    name: "Shop",
    component: Shop,
    meta: {
      bodyClass: "shop",
      title: "Valentina Design | Shop",
      metaTags: [
        // {
        //   name: "description",
        //   content: "The home page of our example app.",
        // }
      ],
    },
  },
  {
    path: "/Licensing",
    name: "Licensing",
    component: Licensing,
    meta: {
      bodyClass: "licensing",
      title: "Valentina Design | Licensing",
      metaTags: [
        // {
        //   name: "description",
        //   content: "The home page of our example app.",
        // }
      ],
    },
  },
  {
    path: "/Wholesale",
    name: "Wholesale",
    component: Wholesale,
    meta: {
      bodyClass: "wholesale",
      title: "Valentina Design | Wholesale",
      metaTags: [
        // {
        //   name: "description",
        //   content: "The home page of our example app.",
        // }
      ],
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
    meta: {
      bodyClass: "contact",
      title: "Valentina Design | Valentina Art - Inspired and Inspirational",
      metaTags: [
        // {
        //   name: "description",
        //   content: "The home page of our example app.",
        // }
      ],
    },
  },
  {
    path: "/thankyou",
    name: "thankyou",
    component: thankyou,
    meta: {
      title: "Valentina Design | Email confirmation",
      metaTags: [
        // {
        //   name: "description",
        //   content: "The home page of our example app.",
        // }
      ],
    },
  },
  // will match everything and put it under `$route.params.pathMatch`
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "Valentina Design | Not Found",
      metaTags: [
        // {
        //   name: "description",
        //   content: "The home page of our example app.",
        // }
      ],
    },
  },
  // will match anything starting with `/user-` and put it under `$route.params.afterUser`
  // { path: '/user-:afterUser(.*)', component: UserGeneric },
]

const vueBodyClass = new VueBodyClass(routes)

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(),
  // eslint-disable-next-line no-undef
  base: import.meta.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((el) =>
    el.parentNode.removeChild(el)
  )

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta")

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key])
      })

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "")

      return tag
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag))

  vueBodyClass.guard(to, from, next())
  // next()
})
export default router
