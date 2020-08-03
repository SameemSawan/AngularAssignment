import { Component, OnInit } from '@angular/core';
import { CONNECTService } from '../connect.service';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent implements OnInit {

  allUser: Object;
  isEdit=false;
  userObj={
    name:'',
    Category:'',
    Quantity:''
  }


  constructor(private ConnectService : CONNECTService){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getlatestitem();
}


  addUser(formObj){
    console.log(formObj);
    this.ConnectService.createItem(formObj).subscribe((Response)=>{
      this.getlatestitem();
    })
    }

    getlatestitem(){
        this.ConnectService.getallitem().subscribe((Response)=>{
          this.allUser = Response
        })
      }

      editItem(user){
        this.isEdit=true;
        this.userObj=user;
        
      }
      deleteItem(user){
        this.ConnectService.deleteItem(user).subscribe(()=>{

          this.getlatestitem();
        })
      }

      updateItem(){
        this.isEdit = !this.isEdit;
        this.ConnectService.updateItem(this.userObj).subscribe(()=>{
          this.getlatestitem();
        })
        }
      }