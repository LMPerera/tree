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
  state = {
    tree: [
      {
        title: "Department A",
        children: [{ title: "Department B", children: [] }]
      },
      {
        title: "Department E",
        children: [
          {
            title: "Department F",
            children: [{ title: "Department G", children: [] }]
          }
        ]
      }
    ]
  };
  render() {
    return (
      <Grid>
        <GridRow>
          <GridColumn width={1} />
          <GridColumn width={14}>
            <Segment raised compact className="A">
              Comapny A
            </Segment>
            <Segment raised compact className="B" style={{ margin: "20px" }}>
              Comapny B
            </Segment>
            <Segment raised compact className="C" style={{ margin: "40px" }}>
              Comapny C
            </Segment>
            <Segment raised compact className="D" style={{ margin: "20px" }}>
              Comapny D
            </Segment>
            <Segment raised compact className="E" style={{ margin: "0px" }}>
              Company E
            </Segment>
            <SteppedLineTo
              from="A"
              to="B"
              fromAnchor="left"
              toAnchor="0 50%"
              orientation="h"
              {...style}
              zIndex={-10}
            />
            <SteppedLineTo
              from="B"
              to="C"
              fromAnchor="left"
              toAnchor="0% 50%"
              orientation="h"
              {...style}
              zIndex={-10}
            />
            <SteppedLineTo
              from="A"
              to="D"
              fromAnchor="left"
              toAnchor="0% 50%"
              orientation="h"
              {...style}
              zIndex={-10}
            />
          </GridColumn>
          <GridColumn width={1} />
        </GridRow>
      </Grid>
    );
  }
}

export default App;
