<template>
  <Routing>
    <Auth>
      <UnLoggedIn>
        <LoggedIn>
          <RequiredVerifyEmail>
            <PageNotFound>
              <slot />
            </PageNotFound>
          </RequiredVerifyEmail>
        </LoggedIn>
      </UnLoggedIn>
    </Auth>
  </Routing>
</template>

<script lang="ts">
import Auth from '@/components/middleware/auth.vue'
import LoggedIn from '@/components/middleware/guards/loggedIn.vue'
import UnLoggedIn from '@/components/middleware/guards/unLoggedIn.vue'
import PageNotFound from '@/components/middleware/pageNotFound.vue'
import RequiredVerifyEmail from '@/components/middleware/requiredVerifyEmail.vue'
import Routing from '@/components/middleware/router.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Routing,
    Auth,
    LoggedIn,
    UnLoggedIn,
    RequiredVerifyEmail,
    PageNotFound,
  },
})
export default class Main extends Vue {
}
</script>
