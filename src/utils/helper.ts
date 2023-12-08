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

export function genarateSlug(name: string, postfix: string = ""): string {
    const slug = name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/Đ/g, "D")
        .replace(/đ/g, "d")
        .replaceAll(" ", "-")
        .toLowerCase();
    if (postfix === "") return slug;
    return slug + "-" + postfix;
}

export function checkType(value: any): string {
    const type: string = Object.prototype.toString.call(value).slice(8, -1);
    return type.toLowerCase();
}

export function classNames(...anything: any[]) {
    const classSet = new Set();
    const classList = Array.from(anything);
    classList.forEach((className) => {
        if (checkType(className) === "array") {
            classSet.add(classNames(...(className as [])));
        } else if (checkType(className) === "string") {
            classSet.add(className);
        } else if (checkType(className) === "object") {
            Object.keys(className).forEach((keyClass) => {
                const conditionalClassName = className[keyClass];
                if (checkType(conditionalClassName) !== "boolean") return;
                if (conditionalClassName) {
                    classSet.add(keyClass);
                } else {
                    classSet.delete(keyClass);
                }
            });
        }
    });
    return Array.from(classSet).join(" ");
}

export function getLineChartOptions(themeMode: string) {
    const options = {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color:
                        themeMode === "dark"
                            ? "rgb(255, 255, 255, 0.5)"
                            : "rgba(0, 0, 0, 0.5)",
                    font: {
                        size: 10,
                    },
                },
                grid: {
                    display: false,
                    drawTicks: false,
                },
                min: 0,
                border: {
                    color:
                        themeMode === "dark"
                            ? "rgb(255, 255, 255, 0.5)"
                            : "rgba(0, 0, 0, 0.5)",
                },
            },
            y: {
                ticks: {
                    color:
                        themeMode === "dark"
                            ? "rgb(255, 255, 255, 0.5)"
                            : "rgba(0, 0, 0, 0.5)",
                    font: {
                        size: 12,
                    },
                },
                grid: {
                    color:
                        themeMode === "dark"
                            ? "rgb(255, 255, 255, 0.5)"
                            : "rgba(0, 0, 0, 0.5)",
                    drawTicks: false,
                    lineWidth: 0.5,
                },
                min: 0,
                border: {
                    color:
                        themeMode === "dark"
                            ? "rgb(255, 255, 255, 0.5)"
                            : "rgba(0, 0, 0, 0.5)",
                },
            },
        },
    };
    return options;
}
