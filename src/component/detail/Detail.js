import React from 'react';

class Detail extends React.Component {
    constructor (){
        super()
        this.state = {
            inputValue:'',
        }
       
    }
   oninputChange = (e) => {
  
       this.setState({
           inputValue: e.target.value
       })
       
   }
   getinputValue = (e) => {
        e.preventDefault()
        console.log(this.state.inputValue)
   }

    
    render(){
        console.log(this.state.inputValue)
        return(
            <div>
                <form onSubmit={this.getinputValue}>
                    <input type='text' onChange={this.oninputChange}/>
                    <button>click</button>
                </form>
            </div>
        )
    }
}

export default Detail;