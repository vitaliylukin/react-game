import React, {Component, Fragment} from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import TopPanel from "./components/TopPanel/TopPanel";
import TableCell from "./components/TableCell/TableCell";
import Modal from "./components/Modal/Modal";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cells: new Array(100,).fill('', 0, 100),
            playerPoint: 0,
            computerPoint: 0,
            playerName: '',
            changeTime: 2000,
            isOpen: false,
            currentCell: null,
            prevCurrentCell: null,
            userCell: null,
            prevUserCell: null,
            errorCell: null,
            prevErrorCell: null,
            winner: false
        };
    }

    /*Функция рандомного выбора ячейки компьютером*/
    getRandom = () => {

       /* this.setState({
            playerPoint: 0,
            computerPoint: 0,
            playerName: '',
            isOpen: false,
            currentCell: null,
            userCell: null,
            errorCell: null,
            prevErrorCell: null,
            winner: false
        });*/

        console.log(this.state);

        let random;

        let idInterval = setInterval(() => {
            random = Math.floor(Math.random()*this.state.cells.length);
            this.setState({
                currentCell: random
            });
            if (!this.state.winner) {
                this.setState(prevState => {
                    return {
                        prevErrorCell: prevState.errorCell,
                        winner: false,
                        computerPoint: prevState.computerPoint + 1
                    }
                });
            }
            this.setState({
                errorCell: random
            });
            if (this.state.playerPoint > 9) {
                this.setState({
                    playerName: 'Игрок'
                });
                this.openModal();
                clearInterval(idInterval);
            } else if (this.state.computerPoint > 9) {
                this.setState({
                    playerName: 'Компьютер'
                });
                this.openModal();
                clearInterval(idInterval);
            }
            /*console.log(random);*/
        }, this.state.changeTime);
    };

    /*Функция выбора ячейки пользователем*/
    onChangeButton(name) {
        if (this.state.currentCell === name) {
            this.setState(prevState => {
                return {
                    userCell: name,
                    winner: true,
                    playerPoint: prevState.playerPoint + 1
                }
            })
        } else if (this.state.currentCell !== name) {
            this.setState(prevState => {
                return {
                    errorCell: name,
                    winner: true,
                    computerPoint: prevState.computerPoint + 1
                }
            });
            let idTimeout = setTimeout(() => {
                this.setState(prevState => {
                    return {
                        prevErrorCell: prevState.errorCell,
                        errorCell: null
                    }
                });

            }, this.state.changeTime);
            clearTimeout(idTimeout);
        }
    };

    /*Функция изменения времени в инпуте*/
    handleInput = (event) => {
        this.setState({
            changeTime: event.target.value
        })
    };

    /*Функция открытия модального окна*/
    openModal = () => {
        this.setState({
            isOpen: true
        });
    };

    handleCancel = () => {
        this.setState({
            playerPoint: 0,
            computerPoint: 0,
            playerName: '',
            isOpen: false,
            currentCell: null,
            userCell: null,
            errorCell: null,
            prevErrorCell: null,
            winner: false
        });
    };

    render() {

        console.log(this.state.errorCell, this.state.prevErrorCell, this.state.currentCell);

        return (
            <Layout>

                {/*Компонент TopPanel*/}
                <TopPanel
                    playerPoint={this.state.playerPoint}
                    computerPoint={this.state.computerPoint}
                    changeTime={this.handleInput}
                    startGame={this.getRandom}
                />

                {/*Ячейки таблицы*/}
                <div style={{
                    maxWidth: '700px',
                    margin: '0 auto'
                }}>
                    { this.state.cells.map((car, index) => {

                        return (
                            <TableCell
                                key={index}
                                name={index + 1}

                                {/*this.state.arr.include(index)*/}

                                isCurrent={index === this.state.currentCell}

                                isUser={index === this.state.userCell}
                                isError={index === this.state.errorCell || index === this.state.prevErrorCell}
                                onChangeButton={this.onChangeButton.bind(this, index)}
                            />
                        )
                    }) }
                </div>

                {/*Модальное окно*/}
                <Fragment>
                    <Modal
                        title="Игра окончена"
                        isOpen={this.state.isOpen}
                        onCancel={this.handleCancel}
                    >
                        <p>Выиграл: {this.state.playerName}</p>
                    </Modal>
                </Fragment>
            </Layout>
        );
    }
}

export default App;
