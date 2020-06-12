import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {

        const{item,handleChange, handleSubmit , editItem}=this.props;

        console.log("Items",this.props);
        

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                         <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                Task
                            </div>
                         </div>
                         <input type="text" 
                         className="form-control text-capitalize"
                         placeholder="Add New Task"
                         value={item}
                         onChange={handleChange}
                         />
                    </div>

                    <button type="submit"
                    disabled={item ? false : true}
                     className=   {
                         editItem  ? 
                     "btn btn-block btn-warning mt-3" 
                     : "btn btn-block btn-success mt-3"}>

                        {editItem ?  'Edit Task' : 'Add Task'}
        
                        </button>
                </form>
            </div>
        )
    }
}
