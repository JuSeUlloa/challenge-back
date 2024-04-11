import { Response } from "express";
import ProductSchema from "../../../schemas/productSchema";

class ProductDao {


    protected static async getProducts(res: Response): Promise<any> {
        ProductSchema.find().then((products) => {
            res.status(200).json(products);
        }).catch((err) => {
            res.status(400).json({ mesage: "Failed to get products" });
        })
    }

    protected static async getProductsByname(res: Response, userid: string, nameProduct: string): Promise<any> {

        ProductSchema.find({ name: nameProduct }, { specialPrices: 1, brand: 1, basePrice: 1 }).then((products) => {
            let arregloProductosUsuario: any = [];
            products.map((product) => {
                if (product.specialPrices) {
                    let id = Object.keys(product.specialPrices).find((id) => id == userid);
                    if (id) {
                        arregloProductosUsuario.push(product.specialPrices[id]);
                    }
                } else {
                    arregloProductosUsuario.push(product);
                }
            })
            res.status(200).json(arregloProductosUsuario);
        }).catch((err) => {
            console.log(err);

            res.status(400).json({ mesage: "Failed to get products" });
        })
    }

}
export default ProductDao;