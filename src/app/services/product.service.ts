import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URI : string = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  getProducts(){
    return new Observable(observer => {
      this.http.get(`${this.URI}/getItems`)
        .subscribe( (data:any) => {
          let paginationData = [];
          let itemList = [];
          for (let i = 0; i <= data.length; i++ ){
            if (itemList.length<10){
              itemList.push(data[i]);
            }else{
              paginationData.push(itemList);
              itemList = [];
              itemList.push(data[i]);
            }
          }

          observer.next(paginationData);
        }, err =>{
          observer.error(err);
        })

    })
    
  }
}
