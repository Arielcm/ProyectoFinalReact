import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const NovedadItem = (props) => {
    const { key, title, subtitle, imagen, body } = props;
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey={key}>
                <Accordion.Header>{title} - {subtitle}</Accordion.Header>                
                <Accordion.Body>
                <img src={imagen} />
                <div dangerouslySetInnerHTML={{ __html: body }} />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
    );
}
export default NovedadItem;