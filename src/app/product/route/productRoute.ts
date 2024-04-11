import { Router } from "express";
import productController from "../controller/productController";


class ProductRoute {
    public routerProduct: Router;

    constructor() {
        this.routerProduct = Router();
        this.loadRoutes();
    }

    private loadRoutes(): void {
        this.routerProduct.get("/products", productController.getAllProducts);
        this.routerProduct.get("/price/:idUser/:nameProduct", productController.getProductByUser);
    }
}

const productRoute = new ProductRoute();
export default productRoute.routerProduct;