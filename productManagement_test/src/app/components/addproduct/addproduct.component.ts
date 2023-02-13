import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-addproduct',
	templateUrl: './addproduct.component.html',
	styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
	public productForm!: FormGroup;
	public images: any = [];
	public imgToSend:any = [];
	constructor(public apiService:ApiService) { }

	ngOnInit(): void {
		this.productForm = new FormGroup({
			name: new FormControl('', Validators.required),
			price: new FormControl('', Validators.required),
			SKU: new FormControl(''),
			description: new FormControl('', Validators.required),
			file: new FormControl(''),
			images: new FormControl(''),
			state: new FormControl(false),
		});

	}

	/**
	 * This method is used to add products in apiService
	 * When connected to database we can have post call here.
	 * @param form 
	 */
	addProduct(form: FormGroup) {
		if(this.productForm.valid) {
			this.apiService.addData(form.value);
		}else {
			alert('Plase enter correct value');
		}
	}


	/**
	 * This method is used add multiple image files.
	 * @param event 
	 */
	onFileChange(event:any) {
		this.imgToSend.push(`assets/${event.target.files[0].name}`);
		this.productForm.patchValue({
			images : this.imgToSend
		})

		if (event.target.files && event.target.files[0]) {
			var filesAmount = event.target.files.length;
			for (let i = 0; i < filesAmount; i++) {
					var reader = new FileReader();
					reader.onload = (event:any) => {
					   this.images.push(event.target.result); 
					//    this.productForm.patchValue({
					// 	  fileSource: this.images
					//    });
					}
					reader.readAsDataURL(event.target.files[i]);
			}
		}
	  }
}
