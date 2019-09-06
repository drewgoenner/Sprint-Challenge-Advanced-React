import React from 'react';
import { Card, Grid } from 'semantic-ui-react';





class PlayerList extends React.Component {

    render() {
        
        return (
            <Grid centered columns={3}>
            <Grid.Row padded='vertically' columns={3}>
                {this.props.playersData.map(newPlayer => (
                <div key={newPlayer.id}>
                        <Card
                            header={newPlayer.name}
                            meta={`Country: ${newPlayer.country}`}
                            description={`Searches: ${newPlayer.searches}`}
                    />
            </div>

        ))}
            </Grid.Row>
        </Grid>
        )
    }
}

export default PlayerList;