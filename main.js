new class {
    constructor() {
        this.main()
    }
    getUrlData() {
        return window.location.href.split("/url-seo/")[1].split('/').reduce((a, v) => {
            if (v) a.push(v)
            return a
        }, [])
    }
    main() {
        console.log(this.getUrlData())
    }
}