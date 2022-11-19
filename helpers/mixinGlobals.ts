declare global {
    interface String {
        title(): string
        asTime(): string
    }
}

String.prototype.title = function () {
    let str = this.toString()
    try {
        const sliced = str.slice(1);

        return (
            str.charAt(0).toUpperCase() + (sliced.toUpperCase() === sliced ? sliced.toLowerCase() : sliced)
        )
    }
    catch { return str }
}

String.prototype.asTime = function () {
    let str = this.toString()
    try {
        const t = new Date(str)
        return t.toLocaleTimeString("en-IN", { "hour": "numeric", "minute": "numeric" }).toString() + " - " +
            t.toLocaleDateString("en-IN", {
                "year": "numeric",
                "month": "short",
                "day": "numeric",
            })
    }
    catch { return str }
}

export { }