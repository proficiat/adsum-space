import styled from 'styled-components'

export const Container = styled.div``

export const NewIdeaButton = styled.button`
  background: lightgrey;
  color: white;
  border: none;
  font-size: 22px;
  cursor: pointer;
  margin: 0 10px;
  padding: 10px;
`

export const IdeaCard = styled.div`
  height: 220px;
  width: 220px;
  margin: 8px;
  background: white;
  float: left;
  text-align: left;
  background-color: #fbf6ec;

  > div > span {
    visibility: hidden;
  }

  &:hover {
    > div > span {
      visibility: visible;
    }
  }
`

export const IdeaHeader = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 100%;
  background: #574c4f;
  color: white;
`

export const IdeaBody = styled.div`
  padding: 22px;
`

export const DeleteButton = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #b4fcc5;
`
