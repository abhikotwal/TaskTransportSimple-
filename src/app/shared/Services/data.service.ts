import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  studentList : Student[] = [];
  Inventories : Inventories[] = [
    {
      Pcode: 1,
      ProductName: "Nokia 4.2",
      ProductPrice: "5000",
      ProductDescription: "12 MP Camera,4 GM RAM",
      DiscountPercentage: "0",
      DiscountPrice: "0",
      CreatedDate: "",
      CreatedBy: "",
      Categories: "Mobile",
      Subcategory: "Nokia"
    },
    {
      Pcode: 2,
      ProductName: "Samsung",
      ProductPrice: "12000",
      ProductDescription: "40 MP Camera,4 GM RAM",
      DiscountPercentage: "0",
      DiscountPrice: "0",
      CreatedDate: "",
      CreatedBy: "",
      Categories: "Mobile",
      Subcategory: "Samsung"
    },
    {
      Pcode: 3,
      ProductName: "Redmi Note 6",
      ProductPrice: "3000",
      ProductDescription: "40 MP Camera,4 GM RAM",
      DiscountPercentage: "0",
      DiscountPrice: "0",
      CreatedDate: "",
      CreatedBy: "",
      Categories: "Mobile",
      Subcategory: "Redmi"
    },
    {
      Pcode: 4,
      ProductName: "Nokia 6.2",
      ProductPrice: "15000",
      ProductDescription: "40 MP Camera,4 GM RAM",
      DiscountPercentage: "0",
      DiscountPrice: "0",
      CreatedDate: "",
      CreatedBy: "",
      Categories: "Mobile",
      Subcategory: "Nokia"
    },
    {
      Pcode: 5,
      ProductName: "Nokia 5",
      ProductPrice: "8000",
      ProductDescription: "50 MP Camera,4 GM RAM",
      DiscountPercentage: "0",
      DiscountPrice: "0",
      CreatedDate: "",
      CreatedBy: "",
      Categories: "Mobile",
      Subcategory: "Nokia"
    },
    {
      Pcode: 6,
      ProductName: "Samsung f12",
      ProductPrice: "5000",
      ProductDescription: "8 MP Camera3 GM RAM",
      DiscountPercentage: "0",
      DiscountPrice: "0",
      CreatedDate: "",
      CreatedBy: "",
      Categories: "Mobile",
      Subcategory: "Samsung"
    },
    {
      Pcode: 7,
      ProductName: "LG B-39",
      ProductPrice: "23000",
      ProductDescription: "i5 Processor , 1 TB HDD , 4 GB RAM",
      DiscountPercentage: "0",
      DiscountPrice: "0",
      CreatedDate: "",
      CreatedBy: "",
      Categories: "Laptops",
      Subcategory: "LG"
    },
    {
      Pcode: 8,
      ProductName: "Lenevo L-420",
      ProductPrice: "23000",
      ProductDescription: "i5 Processor , 1 TB HDD , 4 GB RAM",
      DiscountPercentage: "0",
      DiscountPrice: "0",
      CreatedDate: "",
      CreatedBy: "",
      Categories: "Laptops",
      Subcategory: "Lenevo"
    },
    {
      Pcode: 9,
      ProductName: "C Type Charger",
      ProductPrice: "600",
      ProductDescription: "Support to ALL Mobiles",
      DiscountPercentage: "0",
      DiscountPrice: "0",
      CreatedDate: "",
      CreatedBy: "",
      Categories: "Mobile Accessories",
      Subcategory: "Charger"
    },
     {
      Pcode: 10,
      ProductName: "Boat Headphones",
      ProductPrice: "1200",
      ProductDescription: "Bass Loud",
      DiscountPercentage: "0",
      DiscountPrice: "0",
      CreatedDate: "",
      CreatedBy: "",
      Categories: "Mobile Accessories",
      Subcategory: "HeadPhones"
    },
    {
      Pcode: 11,
      ProductName: "Boat Headphones",
      ProductPrice: "1200",
      ProductDescription: "Bass Loud",
      DiscountPercentage: "0",
      DiscountPrice: "0",
      CreatedDate: "",
      CreatedBy: "",
      Categories: "Mobile Accessories",
      Subcategory: "HeadPhones"
    },
    {
      Pcode: 12,
      ProductName: "Accer Ultra",
      ProductPrice: "23000",
      ProductDescription: "i5 Processor , 1 TB HDD , 8 GB RAM",
      DiscountPercentage: "0",
      DiscountPrice: "0",
      CreatedDate: "",
      CreatedBy: "",
      Categories: "Laptops",
      Subcategory: "Accer"
    }
  ]
  constructor(private http: HttpClient) {
  }
  getInventory(){

    return this.Inventories.sort(function(a, b) { 
      return b.Pcode - a.Pcode  ||  b.ProductName.localeCompare(a.ProductName);
    });
   
    // this.Inventories;
  }


  getInventorybypage(start,end ){
    

    return this.Inventories.sort(function(a, b) { 
      return b.Pcode - a.Pcode  ||  b.ProductName.localeCompare(a.ProductName);
    });
   
    // this.Inventories;
  }
 
  getmaxInventoryid () {
    var maxdi =Math.max.apply(Math, this.Inventories.map(function(o:any) { return o.Pcode; }))
    return maxdi;
  }
  studentEdit(student : any){
    let present: Boolean = false;
    this.studentList.map((val, index)=>{
      if(val.id == student.id) {this.studentList[index] = student;present=true}
    });
    return present;

  }

  UpdateInventory (Data)
  {
    this.Inventories[Data.Pcode] = Data ;
  }

  deletedata(id) {
    this.Inventories = this.Inventories.filter(item => item.Pcode !== id);
  }

InvRowData :any
  SetInvData (row)
  {
    this.InvRowData = row ;
  }

  GetInvData ()
  {
    return this.InvRowData  ;
  }

}


export class Student {
  size: number = 0
  offset: number = 0
  name: string ="" ;
  id: string ="" ;
  gender: string ="" ;
  address: string ="" ;
}

export class Inventories {
  Pcode: number = 0
  ProductName: string ="" 
  ProductPrice: string ="" 
  ProductDescription: string ="" 
  DiscountPercentage: string ="" 
  DiscountPrice: string ="" 
  CreatedDate: string ="" 
  CreatedBy: string ="" 
  Categories: string ="" 
  Subcategory: string ="" 
}


