import { Product } from "./data"

const Products = () => {
  return (
    <>
      <section>
        <div className="container py-3">
            <h2 className='text-center text-capitalize my-3 fs-1 fw-bolder' style={{color: "#f3a737"}}>our products</h2>
            <div className="row justify-content-center align-items-center">
                {
                    Product.map(ele => 
                        <div className="col-10 col-sm-5 col-md-4 col-lg-3 mb-3">
                            <div className="card rounded-1">
                                <img src={ele.img} alt="" width='100%' height={250} className="text-center" />
                                <div className="card-body" style={{backgroundColor: "#f3a737"}}>
                                    <h5 className="text-capitalize fw-bold">{ele.name}</h5>
                                    <p className="text-capitalize">desc</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
      </section>
    </>
  )
}

export default Products
