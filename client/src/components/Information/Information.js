import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./style.css";
import News from './News/News';
import Weather from './Weather/Weather'

function Information(props) {
  return (
    <div className="information-content">
        <Tabs>
            <TabList>
                <Tab>News</Tab>
                <Tab>Weather</Tab>
            </TabList>

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