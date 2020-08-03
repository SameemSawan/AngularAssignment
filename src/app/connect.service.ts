import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CONNECTService {

  constructor(private _http:HttpClient) { }

  createItem(user){
    return this._http.post("http://localhost:3000/posts", user);
  }
  getallitem(){
    return this._http.get("http://localhost:3000/posts");
  }
  updateItem(user){
    return this._http.put("http://localhost:3000/posts/" + user.id,user)
  }
  deleteItem(user){
    return this._http.delete("http://localhost:3000/posts/" + user.id)
  }
}
