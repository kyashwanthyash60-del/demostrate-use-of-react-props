
import React, { Component } from 'react';

class Classprops extends Component {

    render() {

        return (
            <div>

                <h3>
                    Hello {this.props.name} from {this.props.place}
                    welcome to react props
                </h3>

            </div>
        );
    }
}

export default Classprops;
