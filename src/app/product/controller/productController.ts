import { Request, Response } from "express";
import ProductDao from "../dao/productDao";


class ProductController extends ProductDao {

    public getAllProducts(req: Request, res: Response): void {
        ProductController.getProducts(res);
    }

    public getProductByUser(req: Request, res: Response): void {
        const userId = req.params.idUser;
        const nameProduct = req.params.nameProduct;

        if (userId.length != 0 || nameProduct.length != 0) {
            
            ProductController.getProductsByname(res, userId, nameProduct);
        }else{
            res.status(400).json({mesage:"Send brand and userid"});
        }

    }

}

const productController = new ProductController();
export default productController;