import React from 'react'
import {Accordion,OptForm} from '../components'
import faqdata from '../fixtures/faqs'
export function FaqsContainer()
{
return(
    <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqdata.map((item)=>(
            <Accordion.Item key={item.id}>
             <Accordion.Header>{item.header}</Accordion.Header>
             <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
        ))}
        <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it Now!</OptForm.Button>
            <OptForm.Text>Ready to Watch? Enter your email to create or restart your membership</OptForm.Text>
        </OptForm>
    </Accordion>
)
}
