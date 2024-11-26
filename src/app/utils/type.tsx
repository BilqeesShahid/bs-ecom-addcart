import { StaticImageData } from "next/image";


export type Product={
  id:number;
  title:string;
  image?: string[] | StaticImageData | undefined;
  slug:string;
  price:number;
  discount?:number|any;
  category:string;
  description:string;
  size: string[];
  color:string[];
  Quantity:number;
  
}


export type Cart={
  id:number;
  title:string;
  image?: string | StaticImageData | undefined|any;
  slug:string;
  price:number;
  discount?:number|any;
  category:string;
  size: string;
  Quantity:number;
  uuid:number|string|undefined
  color:string;
}