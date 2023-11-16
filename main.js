new class {
    constructor() {
        this.main()
    }
    getUrlData() {
        return window.location.href.split("/url-seo/")[1].split('/')

    }
    main() {
        console.log(this.getUrlData())
    }
}