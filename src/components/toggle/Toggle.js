import React from 'react';
class Toggle extends React.Component {

        constructor(props) {
            console.log(' ****** Toggle Constructor method invoked *****');
            super(props);
            
            this.state = { 
                 isToggleOn : true 
            };

            this.toggle = this.toggle.bind(this)

        }

        toggle() {
            //modify the state of the component 
            this.setState( preState => ({
                isToggleOn : !preState.isToggleOn
            }));   
        }

        

        render() {
            console.log(' ****** Toggle Render method invoked *****');
            return (
                <>
                    <div>Toggle Component</div>
                    <button onClick = { this.toggle }>
                        { this.state.isToggleOn ? 'ON' : 'OFF'}
                    </button>
                </>
            );
        
        }
}

export default Toggle;
