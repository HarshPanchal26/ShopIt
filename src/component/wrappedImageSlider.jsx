import React from 'react';

const UpdaetdComponent = (Original,image)=>{
    class NewComponant extends React.Component{
       
        constructor(props) {
            super(props);
            console.log("Constructor here");
            this.state = {
                index: 0
            }
        }
        
        componentDidMount() {
            // console.log("Component did Mount here")
            this.interval=setInterval(() => {
            var count = this.state.index;
            count =  count<image.length-1 ? count + 1 : 0
                this.setState({
                index : count
            })
        
        },6000);
        }
        render(){
            return(
            <Original name="harsh" srcc={image[this.state.index].path}></Original>
            )
        }
    }
    return NewComponant
}

export default UpdaetdComponent;



