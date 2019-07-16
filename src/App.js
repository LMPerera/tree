import React, { Component } from "react";
import { SteppedLineTo } from "react-lineto";
import { Segment, Grid, GridColumn, GridRow } from "semantic-ui-react";

const style = {
  delay: true,
  borderColor: "#ddd",
  borderStyle: "solid",
  borderWidth: 3
};

class App extends Component {
  render() {
    return (
      <Grid>
        <GridRow>
          <GridColumn width={1} />
          <GridColumn width={14}>
            <Segment raised compact className="A">
              Pellentesque habitant morbi tristique senectus.
            </Segment>
            <Segment raised compact className="B" style={{ margin: "10px" }}>
              Pellentesque habitant morbi tristique senectus.
            </Segment>
            <Segment raised compact className="C" style={{ margin: "20px" }}>
              Pellentesque habitant morbi tristique senectus.
            </Segment>
            <SteppedLineTo
              from="A"
              to="B"
              {...style}
              fromAnchor="left"
              toAnchor="left"
            />
            <SteppedLineTo
              from="A"
              to="C"
              {...style}
              fromAnchor="left"
              toAnchor="left"
            />
          </GridColumn>
          <GridColumn width={1} />
        </GridRow>
      </Grid>
    );
  }
}

export default App;
