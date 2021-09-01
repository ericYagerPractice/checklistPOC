import React, {useState} from 'react'
import { Header } from 'semantic-ui-react'
import {  Grid, Input, Segment } from 'semantic-ui-react'
import '../static/css/CreateChecklist.css'

export default function CreateChecklist(){
    const [title, setTitle] = useState(null)
    return(
        <>
            <Segment class="createChecklistSegment">
                <Grid columns={2} 
                    divided
                >
                    <Grid.Column width={4}>
                        <Header as='h1'>Create new</Header>
                        <Input 
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


