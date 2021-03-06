import {
  IBook,
} from '@/boundary/bookApplicationService/InOutType'

export abstract class IBookRepository {
  public abstract create(params: IBook): Promise<void>
  public abstract update(book: IBook): Promise<void>
  public abstract delete(id: Identifier): Promise<void>
}
