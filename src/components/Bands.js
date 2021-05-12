import React from 'react';
import Band from './Band'

class Bands extends React.Component {


    render() {
        return (
            <div>
                <ul>
                {this.props.bands.map(band => <Band key={band.id} band={band} deleteBand={this.props.deleteBand}  />)}
                </ul>
            </div>
        )
    }
}

export default Bands