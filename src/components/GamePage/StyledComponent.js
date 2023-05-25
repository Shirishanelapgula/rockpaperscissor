import styled from 'styled-components'

export const Container = styled.div`
  background-color: #223a5f;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ScoreCard = styled.div`
  height: 20vh;
  width: 75vw;
  border-radius: 10px;
  border-color: #ffffff;
  border-style: solid;
  border-width: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`

export const Title = styled.li`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Bree Serif';
  font-weight: 400;
`

export const Head = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Bree Serif';
  font-weight: 400;
`

export const ScoreContent = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  padding: 5px;
  background-color: #ffffff;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Num = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: #223a5f;
  font-weight: 500;
  padding-bottom: 10px;
`

export const Para = styled.p`
  font-size: 20px;
  font-family: 'Bree Serif';
  color: #223a5f;
  font-weight: 500;
  padding-top: 10px;
`
export const Content = styled.ul`
  list-style-type: none;
`

export const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 12px;
  padding: 8px;
  align-self: flex-end;
  justify-content: flex-end;
  margin-right: 20px;
`

export const Image = styled.img`
  height: 70vh;
  width: 50vw;
`

export const Pop = styled.div`
  height: 80vh;
  width: 60vw;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  width: 500px;
`
