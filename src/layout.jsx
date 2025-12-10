import { lazy } from "react"
const AHome = lazy(()=> import('./pages/admin/Aindex'))
const Add = lazy(()=> import('./pages/admin/Add_Product'))
const ShowProduct = lazy(()=> import('./pages/admin/ShowProduct'))
const Error = lazy(()=> import("./pages/Error"))

const Routing = [
    {
        path : "/ahome",
        element : AHome
    },
    {
        path : "/addProduct",
        element : Add
    },
    {
        path : "/showProduct",
        element : ShowProduct
    },
    {
        path : "*",
        element : Error
    },
]

export default Routing