import axios from 'axios'
import { isAwaitExpression } from 'typescript'

interface HasId {
  id?: number
}

interface daodao {
  aaa: string
}

// const rootUrl: string = 'http://localhost:3005/'

export abstract class Model<T extends HasId> {
  constructor(protected data: T) {}
  abstract rootUrl: string

  endPoint(): string {
    return `${this.rootUrl}users`
  }

  save(): void {
    if (this.data.id) {
      axios.put(`${this.endPoint()}/${this.data.id}`, this.data)
    } else {
      axios.post(this.endPoint(), this.data)
    }
  }

  async find(id: number) {
    const user = await axios.get(`${this.endPoint()}/${id}`)
    // console.log(user)
    return user.data
  }
}
