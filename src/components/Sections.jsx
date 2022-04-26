import React from "react";
import { Tabs, Tab, Box, Card, CardContent, Grid } from "@mui/material";
import { TabContext } from "@mui/lab";

function LinkTab(props) {
  return (
    <Tab
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    ></Tab>
  );
}

export default function SectionTabs() {
  const [value, setValue] = React.useState(0);
  var currentSection = 0;
  const sections = [
    { name: "About", content: "This is the content" },
    { name: "Coaching", content: "This is more content" },
    { name: "FAQ", content: "Here is some more content" },
    { name: "Contact", content: "Yet more content" },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);

    var newSection = sections[newValue];
    currentSection = newSection.name;
    console.log(currentSection);
  };

  return (
    <div>
      <TabContext value={sections[value].name}>
        <Box>
          <p>{value}</p>
          <Tabs centered value={value} onChange={handleChange}>
            {sections.map((section, index) => {
              return <LinkTab key={index} label={section.name}></LinkTab>;
            })}
            ;
          </Tabs>
        </Box>
        {/* {sections.map((section, index) => {
          return (
            <TabPanel
              index={sections[currentSection]}
              value={sections[value].name}
              key={index}
            ></TabPanel>
          );
        })} */}
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={0}
        >
          <Grid item>
            <Card>
              <CardContent>{sections[value].content}</CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabContext>
    </div>
  );
}
