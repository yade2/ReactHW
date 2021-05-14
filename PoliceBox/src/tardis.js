import React from 'react'
class Tardis extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          tardis: {
              name: 'Time and relative Dimension in Space',
              caps: false,
          },
          tardis2: {
            name: 'Time and relative Dimension in Space',
            caps: true,
        }
      }
      this.changeIt = this.changeIt.bind(this)
    }
    changeIt = (text) =>{
        if (this.state.tardis.caps) {
          this.setState({
            tardis: {
              name: text.toLowerCase(),
              caps: false
            }
          })
        } else {
          this.setState({
            tardis: {
              name: text.toUpperCase(),
              caps: true
            }
          })
        }
    }
    changeIt2 = (text) =>{
        if (this.state.tardis2.caps) {
          this.setState({
            tardis2: {
              name: text.toLowerCase(),
              caps: false
            }
          })
        } else {
          this.setState({
            tardis2: {
              name: text.toUpperCase(),
              caps: true
            }
          })
        }
    }
    render(){
        return(
            <div id = 'container'>
                <div className='divOne'>
                    <div className='divTwo'>
                        <div className='divThree'>
                        <h3 onClick={()=> this.changeIt(this.state.tardis.name)} >{this.state.tardis.name}</h3>
                        <h3 onClick={()=> this.changeIt2(this.state.tardis2.name)} >{this.state.tardis2.name}</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tardis;