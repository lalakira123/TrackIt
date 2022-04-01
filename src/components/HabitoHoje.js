import styled from "styled-components";

function HabitoHoje(props) {
    const {id, name, done, currentSequence, highestSequence} = props;
    return (
        <Card>
            <div>
                <Titulo>{name}</Titulo>
                <Recordes>
                    <p>Sequência atual: {currentSequence} dias</p>
                    <p>Seu recorde: {highestSequence} dias</p>
                </Recordes>
            </div>
            <Icone>
                <ion-icon name="checkmark-outline"></ion-icon>
            </Icone>
        </Card>
    );
}

export default HabitoHoje;

const Card = styled.div`
    position: relative;
    width: 340px;
    background-color: #FFFFFF;
    color: #666666;
    margin: 20px auto 0 auto;
    border-radius: 5px;
    padding: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Titulo = styled.p`
    font-size: 20px;
`

const Recordes = styled.div`
    margin-top: 7px;
    font-size: 13px;
`

const Icone = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 69px;
    height: 69px;
    background-color: #EBEBEB;
    color: #FFFFFF;
    font-size: 40px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`