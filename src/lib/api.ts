import { API_BASE_URL } from "./config";

export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${path}`;
    const res = await fetch(url, {
        ...init,
        credentials: "include",
        headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    });
    if (!res.ok) {
        throw new Error(`HTTP ${res.status} on GET ${url}`);
    }
    return res.json() as Promise<T>;
}
