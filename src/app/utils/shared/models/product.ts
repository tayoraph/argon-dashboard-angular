import { shippingAddressModel } from "./shipping.addres";

export interface product {
  productID: number;
  productName: string;
  productPricings: productPricing[];
  imageURL: string;
  selectedProductPricing : productPricing,
  quantity : number,
  description: string,
  totalProductAmount? : number
}


export interface productPricing {
  price: number;
  size: string;
}

export interface createNewProduct{
    productName: string;
    imageUrl: string;
    bodyData: [bodyData]
    pricingSize:[productPricing]
  
}

export interface bodyData{
  skinIssue: string;
  bodyPart: string;
  skinColor: string;
}

export interface category{
  id: string;
  description: string;
  imageUrl: string;
}


export interface  directDeliveryModel{
  productSize : string;
  shippingAddress : shippingAddressModel;
  amount : number,
  product: product,
  productCost? : number,
  productId?: number

}
