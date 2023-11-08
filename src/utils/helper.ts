export function formatNumber(
    value: number,
    locale?: string,
    style?: string,
): string {
    const numberFormat = new Intl.NumberFormat(locale, {
        style,
    });
    const formatValue = numberFormat.format(value);

    return formatValue;
}

export function genarateSlug(name: string, postfix: string): string {
    const slug = name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/Đ/g, "D")
        .replace(/đ/g, "d")
        .replaceAll(" ", "-")
        .toLowerCase();
    return slug + "-" + postfix;
}
