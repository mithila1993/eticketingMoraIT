import React, { Component } from 'react';
import * as firebase from 'firebase';
import '../App.css';
import {
    Link
  } from 'react-router-dom';
  import axios from 'axios';
  import {NotificationContainer, NotificationManager} from 'react-notifications';

class Createproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            showdeatils :0,
            datas: {},
            category:'',
        }
        this.submitProduct = this.submitProduct.bind(this);
        
    }

    submitProduct(e){
        let thiscom = this;
        e.preventDefault();
        var downImage;
        var file = this.refs.inputFile.files[0];
        var storageRef = firebase.storage().ref('products/'+ file.name);
        var uploadState = storageRef.put(file).then(function(snapshot){
            
                console.log(snapshot.downloadURL);
                axios.post('http://localhost:3002/addProductsToShop', {
                id: thiscom.props.match.params.shopid,
                name : thiscom.refs.inputProduct.value,
                description : thiscom.refs.inputDescription.value,
                category : thiscom.state.category,
                amount : thiscom.refs.inputAmount.value,
                price : thiscom.refs.inputPrice.value,
                image : snapshot.downloadURL
                
              })
              .then(function (response) {
                NotificationManager.success('Successfully Product Added');
                console.log("event response",response);
              })
              .catch(function (error) {
                console.log("event error",error);
              });
        });
            
        console.log(uploadState);
    }

    handleCategory(e){
    
        this.setState({category:e.target.value},()=>{
          if(this.state.category !== 'None'){
             console.log(this.state.category);
        }
          
        });   
    }
    

    render() {
        return (
            <div>
                <div>
            <form className="form-horizontal">
                  <fieldset>
                        <legend><h1>Create Product</h1></legend>
                              <div className="form-group">
                              <div className="col-lg-12">

                              <div className="col-lg-12">
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Product Name</label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputEmail" placeholder="Product Name" ref="inputProduct"/>
                                      </div>
                                      </div>


                                      <div className="col-lg-12">
                                      <label htmlFor="inputPassword" className="col-lg-2 control-label">Description</label>
                                      <div className="col-lg-10  textarea ">
                                      <textarea rows="4" cols="50" className="form-control" id="inputEmail" placeholder="Write a description" ref="inputDescription"/>
                                    </div>
                                    </div>



                                      

                                      <div className="col-lg-12">
                                        <label htmlFor="inputEmail" className="col-lg-2 control-label">Category</label>
                              <div className="col-lg-8">
                              <select className="form-control" onChange={this.handleCategory.bind(this)} >
                                    <option value="Other">Other</option>
                                    <option value="Ice Cream">Ice Cream</option>
                                    <option value="Biscuits">Biscuits</option>
                                    </select>
                                    </div>
                                    
                                    

                                    <div className="col-lg-12 numberinput ">
                                         <label htmlFor="inputPassword" className="col-lg-2 control-label">Amount</label>
                                      <div className="col-lg-4 ">
                                      <input type="number" className="form-control" id="inputCategory" placeholder="Amount" ref="inputAmount"/>
                                         </div>
                                        </div>

                                    <div className="col-lg-12 numberinput">
                                         <label htmlFor="inputPassword" className="col-lg-2 control-label">Price Rs.</label>
                                      <div className="col-lg-4">
                                      <input type="number" className="form-control" id="inputCategory" placeholder="Price" ref="inputPrice"/>
                                         </div>
                                    </div>
                                     
                                    <label htmlFor="inputCategory" className="col-lg-2 control-label">Upload image</label>
                                     <div className="col-lg-10">
                                        
                                        <input type="file" className="upload-group" id="file" ref="inputFile"/>
                                        </div>
                                      </div>
                                      </div>
                                      {/* <div className="col-lg-2"></div>
                                      <div className="col-lg-10">
                                      <button type="submit" className="btn btn-default" onClick={this.addShows}>Add Show</button>
                                      </div> */}
                                      {/* {shows} */}
                                      <div className="col-lg-12 submitbuttoncreateevent">
                                      <div className="col-lg-2"></div>
                                      <div className="col-lg-10">
                                      <button type="submit" className="btn btn-default" onClick={this.submitProduct}>Submit</button>
                                      </div>
                                      </div>
                                        
                              </div>
                  </fieldset>
            </form>
            
  </div>
            </div>
        );
    }
}

export default Createproduct;