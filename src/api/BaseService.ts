import axios, { AxiosRequestConfig, ResponseType } from "axios"
import { ServiceConfig } from "./config"

type RequestOptions = {
    credentials?: RequestCredentials
    headers?: Record<string, string>
    method?: "GET"
        | "DELETE"
        | "HEAD"
        | "OPTIONS"
        | "POST"
        | "PUT"
        | "PATCH"
        | "PURGE"
        | "LINK"
        | "UNLINK"
    body?: Record<string, any>
}

export class BaseService {
    private config: ServiceConfig
    private client: any

    constructor(config: ServiceConfig) {
        this.config = config
        this.client = axios.create({ baseURL: this.config.BASE_URL })
        this.client.defaults.headers.common = {
            Accept: "application/json",
            Authorization: `Bearer ${config.accessToken}`,
            ...this.config.headers,
        }
    }

    private async request(path: string, options?: RequestOptions): Promise<any> {
        const { data } = await this.client.request({
            method: options?.method,
            headers: options?.headers,
            withCredentials: options?.credentials === "include",
            url: path,
            data: options?.body,
        })
        return data
    }

    protected async postWithParams(
        path: string,
        options?: RequestOptions,
        requestQuery?: AxiosRequestConfig,
    ): Promise<any> {
        const { data } = await this.client.post(path, options?.body, requestQuery)

        return data
    }

    protected async putWithParams(
        path: string,
        options?: RequestOptions,
        requestQuery?: AxiosRequestConfig,
    ): Promise<any> {
        const { data } = await this.client.put(path, options?.body, requestQuery)

        return data
    }

    protected async getWithParams(
        path: string,
        requestQuery?: AxiosRequestConfig,
    ): Promise<any> {
        const { data } = await this.client.get(path, requestQuery)

        return data
    }

    protected get<T = any>(path: string, options?: RequestOptions): Promise<T> {
        return this.request(path, { ...options, method: "GET" })
    }

    protected post<T = any>(path: string, options?: RequestOptions): Promise<T> {
        return this.request(path, { ...options, method: "POST" })
    }

    protected delete<T = any>(path: string, options?: RequestOptions): Promise<T> {
        return this.request(path, { ...options, method: "DELETE" })
    }

    protected put<T = any>(path: string, options?: RequestOptions): Promise<T> {
        return this.request(path, { ...options, method: "PUT" })
    }
}
