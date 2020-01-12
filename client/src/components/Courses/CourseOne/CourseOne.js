import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function CourseOne() {


  return (
    <div >
        <Tabs>
            <TabList>
                <Tab>News</Tab>
                <Tab>Weather</Tab>
            </TabList>

            <TabPanel>
            </TabPanel>
            <TabPanel>
            </TabPanel>
        </Tabs>
    </div>
  );
}