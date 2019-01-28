import {combineMutation, mutation} from 'typescript-fsa-vuex'
import AuthApplicationService from '@/serviceLocator/AuthApplicationService'
import {successUserLogin} from '@/store/middleware/auth/action'
import {
  userRegistration,
  toStandby,
  failureRegistration,
  ErrorCode,
} from './action'
import store from '@/store/root'
import router from '@/router'

export enum ScreenState {
  STANDBY,
  SENDING,
  SEND_FAILED,
}

type State = {
  screenState: ScreenState,
  errorCode: ErrorCode|'',
}

const initialState = (): State => ({
  screenState: ScreenState.STANDBY,
  errorCode: '',
})

const mutations = combineMutation<State>(
  mutation(userRegistration, (state, action) => {
    state.screenState = ScreenState.SENDING

    AuthApplicationService.getInstance().registration(action.payload)
      .then((authInfo) => {
        store.commit(successUserLogin({authInfo}))
        router.push('/')
      })
      .catch((e: { code: ErrorCode }) => store.commit(failureRegistration(e)))
  }),
  mutation(toStandby, (state) => {
    state.screenState = ScreenState.STANDBY
  }),
  mutation(failureRegistration, (state, action) => {
    state.errorCode = action.payload.code
    state.screenState = ScreenState.SEND_FAILED
  }),
)

export default {
  state: initialState,
  mutations,
}
