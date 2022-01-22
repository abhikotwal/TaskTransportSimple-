import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/Services/data.service';
@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {
  Inventoryform!: FormGroup;
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private fb: FormBuilder, private DataServices: DataService, private router: Router) { }
  Mode: any;
  ngOnInit(): void {

debugger
    var Data = this.DataServices.GetInvData()
    
    if (Data.Pcode) {
      this.Mode = 'Edit'
      this.buildform(Data)

      this.BindSubCat(Data.Subcategory)
    }
    else {
      this.Mode = 'Add'
      this.buildform('')
    }

  }

  submitted = false;
  buildform(Data) {
    this.Inventoryform = this.fb.group(
      {
        // username: ["", Validators.required],
        // password: ["", Validators.required],
        // version: ["v2"]


        Pcode: [Data.Pcode],
        ProductName: [Data.ProductName, Validators.required],
        ProductPrice: [Data.ProductPrice, Validators.required],
        ProductDescription: [Data.ProductDescription, Validators.required],
        DiscountPercentage: [Data.DiscountPercentage == '' ? Data.Pcode : 0, Validators.required],
        DiscountPrice: [Data.DiscountPrice, Validators.required],
        CreatedDate: [Data.CreatedDate],
        CreatedBy: [Data.CreatedBy],
        Categories: [Data.Categories, Validators.required],
        Subcategory: [Data.Subcategory, Validators.required],


      }

    );
  }

  Update()
  {
    debugger
    if (this.Inventoryform.invalid) {

      alert('All fields are mandatory')
      return;
    }
    this.DataServices.UpdateInventory(this.Inventoryform.value)
    this.Inventoryform.reset();
    alert('Data Updateded Sucessfully')
    this.Mode = 'Add'
      this.buildform('')
  }

  onenterPrice(va) {


    if (this.Inventoryform.value.ProductPrice) {
      let dicprice = (this.Inventoryform.value.ProductPrice * this.Inventoryform.value.DiscountPercentage) / 100
      this.Inventoryform.controls['DiscountPrice'].setValue((this.Inventoryform.value.ProductPrice - dicprice).toFixed(0));
    }
  }

  get f() { return this.Inventoryform.controls; }

  onSubmit() {
    debugger


    if (this.Inventoryform.invalid) {

      alert('All fields are mandatory')
      return;
    }


    let maxid = this.DataServices.getmaxInventoryid();

    this.Inventoryform.controls['Pcode'].setValue(maxid + 1);
    this.Inventoryform.controls['CreatedBy'].setValue('Admin');
    this.Inventoryform.controls['CreatedDate'].setValue(new Date().toString());

    this.DataServices.Inventories.push(this.Inventoryform.value);
    let newid = this.DataServices.getmaxInventoryid()
    if (newid == maxid + 1) {
      this.Inventoryform.reset();
      alert('Data Save Sucessfully')
    }
  }

  ViewData() {
    this.router.navigate(['page/Common/List']);
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  onSearchChange(value) {

    if (!this.Inventoryform.value.DiscountPercentage) {
      this.Inventoryform.controls['DiscountPrice'].setValue("");
      return
    }

    if (this.Inventoryform.value.ProductPrice) {
      let dicprice = (this.Inventoryform.value.ProductPrice * this.Inventoryform.value.DiscountPercentage) / 100
      this.Inventoryform.controls['DiscountPrice'].setValue((this.Inventoryform.value.ProductPrice - dicprice).toFixed(0));
    }
  }


  SbCat: any;


  mobilesubcat = [
    { Key: "Nokia", value: "Nokia" },
    { Key: "Samsung", value: "Samsung" },
    { Key: "Redmi", value: "Redmi" }
  ]

  Laptopsubcat = [
    { Key: "Accer", value: "Accer" },
    { Key: "Lenevo", value: "Lenevo" },
    { Key: "LG", value: "LG" }
  ]


  Accesoriessubcat = [
    { Key: "HeadPhones", value: "HeadPhones" },
    { Key: "Speaker", value: "Speaker" },
    { Key: "Charger", value: "Charger" }
  ]
  onChange(Value: any) {
    debugger

    let value = Value.target.value

    this.SbCat = []
    if (value == 'Mobile') {
      this.SbCat = this.mobilesubcat;

    }
    if (value == 'Laptops') {
      this.SbCat = this.Laptopsubcat;
    }
    if (value == 'Mobile Accessories') {
      this.SbCat = this.Accesoriessubcat;
    }
  }


  BindSubCat(value: any) {
    debugger



    this.SbCat = []
    if (value == 'Mobile') {
      this.SbCat = this.mobilesubcat;

    }
    if (value == 'Laptops') {
      this.SbCat = this.Laptopsubcat;
    }
    if (value == 'Mobile Accessories') {
      this.SbCat = this.Accesoriessubcat;
    }
  }
}
