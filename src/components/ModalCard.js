import React, { Component } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'

class ModalCard extends Component {

    constructor() {
        super();
        this.state = {
            showHide: false
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    render() {
        return (
            <div className="container">
                <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                    Agregar Nueva Tarjeta
                </Button>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                        <Modal.Title>Nueva Tarjeta</Modal.Title>
                    </Modal.Header>
                    <Form>
                        <Form.Group as={Row} controlId="">
                            <Form.Label column sm={5}>
                                Titulo
    </Form.Label>
                            <Col sm={5}>
                                <Form.Control type="text" placeholder="Titulo" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="">
                            <Form.Label column sm={5}>
                                Responsable
    </Form.Label>
                            <Col sm={5}>
                                <Form.Control type="text" placeholder="Responsable" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="">
                            <Form.Label column sm={5}>
                                Descripción
    </Form.Label>
                            <Col sm={5}>
                                <Form.Control type="text" placeholder="Descripción" />
                            </Col>
                        </Form.Group>
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={2}>
                                    Prioridad
      </Form.Label>
                                <Col sm={5}>
                                    <Form.Check
                                        type="radio"
                                        label="low"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="medium"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="high"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
                        <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                            Guardar
                    </Button>


                    </Form>
                </Modal>

            </div>
        )
    }

}

export default ModalCard;