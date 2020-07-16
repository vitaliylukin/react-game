import React, {Component} from 'react';
import TableCell from "../TableCell/TableCell";

class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            /*cars: [
                {name: '1'},
                {name: '2'},
                {name: '3'},
                {name: '4'},
                {name: '5'},
                {name: '6'}
            ],*/
            cars: new Array(100,).fill('', 0, 100),
            pageTitle: 'Game',
            currentCar: null
        };
    }


    /*Функция изменения инпута*/
    handleInput = (event) => {
        this.setState({
            pageTitle: event.target.value
        })
    };

    /*Функция при клике на кнопку "Начать" и кнопки с цифрами*/
    onChangeTitle = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        })
    };

    /*Функция изменения названия ячейки*/
    onChangeName(index) {
        /*Здесь нужно менять не название, а цвет*/
        const cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({cars});
    };

    /*Функция рандомного выбора ячейки*/
    getRandom = () => {
        const random = Math.floor(Math.random()*this.state.cars.length);
        this.setState({
            currentCar: random
        });
        console.log(random);
    };

    render() {

        console.log(this.state);

        const divStyle = {textAlign: 'center'};

        return (
            <div style={divStyle}>
                {/*Заголовок*/}
                <h1>{this.state.pageTitle}</h1>

                {/*Инпут*/}
                <input type="text" onChange={this.handleInput}/>

                {/*Кнопка "Начать"*/}
                <button onClick={this.getRandom}>Начать</button>


                {/*Ячейки таблицы*/}
                <div>
                    { this.state.cars.map((car, index) => {

                        return (
                            <TableCell
                                key={index}
                                name={index + 1}
                                isCurrent={index === this.state.currentCar}
                                onChangeName={this.onChangeName.bind(this, index)}
                            />
                        )
                    }) }
                </div>

            </div>
        );
    }
}

export default Table;