package grails.inspinia.ui

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "/dashboard"(view:"/dashboard/index")
        "/administrator"(view:"/administrator/index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
