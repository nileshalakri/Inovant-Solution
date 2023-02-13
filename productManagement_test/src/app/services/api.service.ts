import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	// public productData: any[] = [];
	constructor(private http: HttpClient) { }


	/**
	 * This method used to add data to product list
	 * @param data 
	 */
	addData(data: any) {
		this.http.post('http://localhost:2023/api/products', data).subscribe(data => {
			console.log("post prod", data);
			// return data
		});
		// this.productData.push(data);
	}

	/**
	 * This method used to get product list
	 * @returns 
	 */
	getData() {
		// return this.productData;
		return this.http.get('http://localhost:2023/api/products')
		
	}

	/**
	 * This method is used to update product based on index.
	 * @param index 
	 * @param data 
	 */
	// updateData(index: any, data: any) {
	// 	this.productData[index].name = data;
	// }
}
