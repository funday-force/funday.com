import React, { Component } from 'react';
import styled from 'styled-components';
import Task from './task';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    margin: 8px;    
    background-color: white;
    border-radius: 2px;
    width: 100%;     
    display: flex;
    flex-direction: column;
    `;

const Title = styled.h3`
    padding: 8px;
    margin: auto;
    `;
const TaskList = styled.div`
    border: 1px solid #f0f0f0;    
    transition: background-color 0.5s ease;
    background-color: ${props => (props.isDraggingOver ? `cornflowerblue` : `white`)};
    flex-grow: 1;
    min-height: 100px;    
`;

export default class Column extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.column.id} index={this.props.index}>
                    {(provided) => (

                        <Container
                        {...provided.draggableProps}
                        innerRef={provided.innerRef}
                        >
                    <Title {...provided.dragHandleProps}>{this.props.column.title} </Title>
                    <Droppable droppableId={this.props.column.id} type="task">
                        {(provided, snapshot) => (
                            <TaskList
                                innerRef={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                                {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                                {provided.placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                </Container>
                    )}
            </Draggable>

        )
    }
}