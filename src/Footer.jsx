import Alert from 'react-bootstrap/Alert'

const Footer = (props) => {
  return (
    <Alert key="light" variant="light">
          {props.texto}
        </Alert>
  )
}

export default Footer