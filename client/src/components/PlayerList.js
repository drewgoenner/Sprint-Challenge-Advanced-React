import React from 'react';
import { Card, Grid } from 'semantic-ui-react';


class PlayerList extends React.Component {

    render() {
        console.log(this.props)
        return (
            <Grid centered columns={3}>
            <Grid.Row padded='vertically' columns={3}>
                {this.props.playersData.map(newPlayer => (
                <div key={newPlayer.id}>
                    {/* <FollowerCard> */}
                        <Card
                            header={newPlayer.name}
                            meta={`Country: ${newPlayer.country}`}
                            description={`Searches: ${newPlayer.searches}`}
                    />
                    {/* </FollowerCard> */}
            </div>

        ))}
            </Grid.Row>
        </Grid>
        )
    }
}

export default PlayerList;