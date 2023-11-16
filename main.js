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
        document.querySelector('h1').innerHTML = this.getUrlData().join(', ')
    }
}