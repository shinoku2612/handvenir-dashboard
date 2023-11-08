interface RetryOption {
    url: string;
    times: number;
    delay?: number;
}
export async function retryRequest(
    { url, times, delay = 500 }: RetryOption,
    init?: RequestInit,
): Promise<Response> {
    const response = await fetch(url, init);
    if (response.ok || times === 0) return response;

    await new Promise((resolve) => setTimeout(resolve, delay));

    return retryRequest({ url, times: times - 1, delay });
}
