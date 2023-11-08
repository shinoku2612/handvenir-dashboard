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
