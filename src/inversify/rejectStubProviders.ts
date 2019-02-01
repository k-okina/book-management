import {
  IAuthApplicationService,
} from '@/boundary/authApplicationService/IAuthApplicationService'
import {
  IUserApplicationService,
} from '@/boundary/userApplicationService/IUserApplicationService'
import { ILogger } from '@/drivers/ILogger'
import { BlankLogger } from '@/drivers/logger/BlankLogger'
import { IUserStream } from '@/query/user/IUserStream'
import {
  AuthApplicationService,
} from '@/stub/domain/app/authApplicationService/RejectService'
import {
  UserApplicationService,
} from '@/stub/domain/app/userApplicationService/RejectService'
import {
  UserStream,
} from '@/stub/query/UserStream/RejectStream'
import { Container } from 'inversify'

export function stubProviders(container: Container): void {
  // core
  container.bind(ILogger).to(BlankLogger).inSingletonScope()

  // query
  container.bind(IUserStream).to(UserStream).inSingletonScope()

  // application
  container.bind(IUserApplicationService).to(UserApplicationService).inSingletonScope()
  container.bind(IAuthApplicationService).to(AuthApplicationService).inSingletonScope()
}
