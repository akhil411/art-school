import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./style.css";
import News from './News/News';
import Weather from './Weather/Weather'

function Information(props) {
  return (
    <div>
        <Tabs>
            <TabList>
                <Tab>Announcements</Tab>
                <Tab>News</Tab>
                <Tab>Weather</Tab>
            </TabList>

            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <News />
            </TabPanel>
            <TabPanel>
                <Weather />
            </TabPanel>
        </Tabs>

    </div>
  );
}

export default Information;