import React, {Component, Fragment} from 'react';
import TableCell from '../TableCell/TableCell';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';

class Game extends Component {

    constructor(props) {
        super(props);

        this.state = {
            /*cells: [
                {name: '1'},
                {name: '2'},
                {name: '3'},
                {name: '4'},
                {name: '5'},
                {name: '6'}
            ],*/
            cells: new Array(100,).fill('', 0, 100),
            pageTitle: 'Игра',
            currentCell: null,
            playerPoint: 0,
            computerPoint: 0,
            playerName: '',
            changeTime: 2000,
            showModal: false,
            isOpen: false
        };
    }

    /*Функция рандомного выбора ячейки компьютером*/
    getRandom = () => {
        let random;
        let idInterval = setInterval(() => {
            random = Math.floor(Math.random()*this.state.cells.length);
            this.setState({
                currentCell: random
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
    onChangeName(name) {
        if (this.state.currentCell === name) {
            this.setState(prevState => {
                return {
                    playerPoint: prevState.playerPoint + 1
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    computerPoint: prevState.computerPoint + 1
                }
            })
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
        this.setState({ isOpen: true });
    };

    handleCancel = () => {
        console.log('Cancel function!');
        this.setState({ isOpen: false });
    };


    render() {

        const { pageTitle, playerPoint, computerPoint } = this.state;

        /*console.log(this.state);*/

        const divStyle = {textAlign: 'center'};

        return (
            <div style={divStyle}>

                {/*Заголовок*/}
                <h1>{pageTitle}</h1>


                {/*Строка-счет*/}
                <h2>Счет</h2>
                <table style={{margin: 'auto'}}>
                    <thead>
                        <tr>
                            <th>Игрок / </th>
                            <th>Компьютер</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{playerPoint}</td>
                            <td>{computerPoint}</td>
                        </tr>
                    </tbody>
                </table>


                {/*Инпут для ввода времени в mc*/}
                <input type="text" onChange={this.handleInput} placeholder="2000" />


                {/*Кнопка "Начать"*/}
                <button onClick={this.getRandom}>Начать</button>


                {/*Ячейки таблицы*/}
                <div>
                    { this.state.cells.map((car, index) => {

                        return (
                            <TableCell
                                key={index}
                                name={index + 1}
                                isCurrent={index === this.state.currentCell}
                                onChangeName={this.onChangeName.bind(this, index)}
                            />
                        )
                    }) }
                </div>


                <Fragment>
                   {/* <Button onClick={this.openModal}>Show modal</Button>*/}
                    <Modal
                        title="Игра окончена"
                        isOpen={this.state.isOpen}
                        onCancel={this.handleCancel}
                    >
                        <p>{this.state.playerName}</p>
                    </Modal>
                </Fragment>

            </div>
        );
    }
}

export default Game;