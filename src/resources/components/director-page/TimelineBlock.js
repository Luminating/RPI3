import React from "react";
import {Timeline, TimelineItem} from "vertical-timeline-component-for-react";

function TimelineBlock(props) {
    return (
        <Timeline lineColor={'#ddd'}>
            <TimelineItem
                key="001"
                dateText={props.biography.biography[0].date}
                style={{color: '#e86971'}}
            >
                <h3>{props.biography.biography[0].description}</h3>
            </TimelineItem>
            <TimelineItem
                key="002"
                dateText={props.biography.biography[1].date}
                style={{color: '#e86971'}}
            >
                <h3>{props.biography.biography[1].description}</h3>
            </TimelineItem>
            <TimelineItem
                key="003"
                dateText={props.biography.biography[2].date}
                style={{color: '#e86971'}}
            >
                <h3>{props.biography.biography[2].description}</h3>
            </TimelineItem>
            <TimelineItem
                key="004"
                dateText={props.biography.biography[3].date}
                style={{color: '#e86971'}}
            >
                <h3>{props.biography.biography[3].description}</h3>
            </TimelineItem>
        </Timeline>
    );
}

export default TimelineBlock;