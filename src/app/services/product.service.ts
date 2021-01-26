import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URI : string = "http://localhost:8080";

  constructor(private http : HttpClient) { }
/**
 *
 * Consume el API Gateway y con el resultado hace el paginado de 10 en 10, para luego responder al suscriptor
 * @return {*} 
 * @memberof ProductService
 */
getProducts(){
    return new Observable(observer => {
      this.http.get(`${this.URI}/getItems`)
        .subscribe( (data:any) => {
          let paginationData = [];
          let itemList = [];

          //Paginamos de 10 en 10
          for (let i = 0; i <= data.length; i++ ){
            if (itemList.length<10){
              itemList.push(data[i]);
            }else{
              paginationData.push(itemList);
              itemList = [];
              itemList.push(data[i]);
            }
          }

          //Respondemos un array paginado
          observer.next(paginationData);
        }, err =>{

          //Retorna un error al suscriptor
          observer.error(err);
        })

    })
    
  }
}
