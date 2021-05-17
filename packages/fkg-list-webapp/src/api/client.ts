import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export class Client {
  client: AxiosInstance

  constructor(client: AxiosInstance) {
    this.client = client
  }

  async request<Data>(config: AxiosRequestConfig): Promise<Data> {
    const response = await this.client.request<Data>(config)
    return response.data
  }
}

const httpClient = axios.create({
  baseURL: process.env.PUBLIC_URL,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const client = new Client(httpClient)
