import React, {useState} from 'react'
import { Header, Dropdown } from 'semantic-ui-react'
import {  Grid, Input, Segment } from 'semantic-ui-react'
import '../static/css/CreateChecklist.css'

export default function CreateSchedule(){
    const [title, setTitle] = useState(null)
    const options = [
        {
            key: 'Daily Schedule',
            text: 'Daily Schedule',
            value: 'Daily Schedule',
        },
        {
            key: 'Checklist',
            text: 'Checklist',
            value: 'Checklist',
        }
    ]

    return(
        <>
            <Segment class="createChecklistSegment">
                <Grid columns={2} 
                    divided
                >
                    <Grid.Column width={4}>
                        <Header as='h1'>Create new</Header>
                        <Input 
                            label="Item Title"
                            placeholder='Title' 
                            onChange={event=>setTitle(event.target.value)}
                        />

                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as='h1'>View</Header>
                        <Header as='h2'>{title}</Header>
                    </Grid.Column> 
                </Grid>
                
            </Segment>
            
        </>
    )
}


